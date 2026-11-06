// Build-time renderer used by scripts/prerender.mjs.
// Renders a route to static HTML so search engines receive the real page
// content (headings, text, links, JSON-LD) without executing JavaScript.
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { LanguageProvider, getLanguageFromPath } from './contexts/LanguageContext';
import { routes } from './AppRouter';
import { ssrHead } from './components/AdvancedSEO';

const streamToString = async (stream: NodeJS.ReadableStream) => {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) chunks.push(Buffer.from(chunk as Buffer));
  return Buffer.concat(chunks).toString('utf8');
};

export async function render(pathname: string) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`https://www.ke-lawyer.com${pathname}`));
  if (context instanceof Response) {
    throw new Error(`Route ${pathname} returned a redirect/response – not prerenderable`);
  }
  const router = createStaticRouter(handler.dataRoutes, context);
  const lang = getLanguageFromPath(pathname) === 'en' ? 'en' : 'ar';

  ssrHead.current = null;
  const { prelude } = await prerenderToNodeStream(
    <LanguageProvider initialLanguage={lang}>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </LanguageProvider>
  );
  const html = await streamToString(prelude);
  return { html, head: ssrHead.current, lang };
}
