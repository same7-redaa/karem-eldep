import React, { useEffect, Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter, Outlet, useLocation, Navigate, RouteObject } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';
import { useLanguage, getLanguageFromPath } from './contexts/LanguageContext';

// Pages
const Home = lazy(() => import('./pages/Home'));
const LawyerProfile = lazy(() => import('./pages/LawyerProfile'));
const CivilLaw = lazy(() => import('./pages/services/CivilLaw'));
const CriminalLaw = lazy(() => import('./pages/services/CriminalLaw'));
const CommercialLaw = lazy(() => import('./pages/services/CommercialLaw'));
const FamilyLaw = lazy(() => import('./pages/services/FamilyLaw'));
const CompanyLaw = lazy(() => import('./pages/services/CompanyLaw'));
const ForeignersInEgypt = lazy(() => import('./pages/services/ForeignersInEgypt'));
const EgyptiansAbroad = lazy(() => import('./pages/services/EgyptiansAbroad'));
const ArbitrationMediation = lazy(() => import('./pages/services/ArbitrationMediation'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const SharmElSheikh = lazy(() => import('./pages/cities/SharmElSheikh'));
const Cairo = lazy(() => import('./pages/cities/Cairo'));
const Alexandria = lazy(() => import('./pages/cities/Alexandria'));
const FAQ = lazy(() => import('./pages/FAQ'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));

// Admin Pages
const AdminRoot = lazy(() => import('./components/Admin/AdminRoutes').then(m => ({ default: m.AdminRoot })));
const AdminProtected = lazy(() => import('./components/Admin/AdminRoutes').then(m => ({ default: m.AdminProtected })));
const Dashboard = lazy(() => import('./components/Admin/AdminRoutes').then(m => ({ default: m.Dashboard })));
const ArticleEditor = lazy(() => import('./components/Admin/AdminRoutes').then(m => ({ default: m.ArticleEditor })));
const Login = lazy(() => import('./components/Admin/AdminRoutes').then(m => ({ default: m.Login })));

// ScrollToTop component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const isFirst = React.useRef(true);

  useEffect(() => {
    const html = document.documentElement;
    // Enable the page fade animation only for navigations after the first load
    if (isFirst.current) isFirst.current = false;
    else html.classList.add('js-navigated');
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    
    window.scrollTo(0, 0);
    
    const timeout = setTimeout(() => {
      html.style.scrollBehavior = originalScrollBehavior;
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

// Layout component
const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const detected = getLanguageFromPath(pathname);
    if (detected && detected !== language) {
      setLanguage(detected);
    } else if (!detected && !pathname.startsWith('/admin')) {
      const params = new URLSearchParams(window.location.search);
      const qLang = params.get('lang');
      if (qLang && ['ar', 'en', 'fr', 'it'].includes(qLang)) {
        if (language !== qLang) setLanguage(qLang as any);
      } else if (language !== 'ar') {
        setLanguage('ar');
      }
    }
  }, [pathname]);

  return (
    <div className="bg-[#0b1a33] text-gray-200 font-sans" style={{ fontFamily: language === 'ar' ? 'Tajawal, sans-serif' : 'sans-serif' }}>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <div key={pathname} className="animate-fade-in-page">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#0b1a33]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d4a15c]"></div>
            </div>
          }>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <SocialButtons />
    </div>
  );
};

// Route configuration (shared by the browser router and the build-time prerenderer)
export const routes: RouteObject[] = [
  {
    path: '/admin',
    element: <Suspense fallback={<div className="min-h-screen bg-[#0b1a33]" />}><AdminRoot /></Suspense>,
    children: [
      {
        path: 'login',
        element: <Suspense fallback={<div className="min-h-screen bg-[#0b1a33]" />}><Login /></Suspense>
      },
      {
        path: '',
        element: <Suspense fallback={<div className="min-h-screen bg-[#0b1a33]" />}><AdminProtected /></Suspense>,
        children: [
          { index: true, element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> },
          { path: 'new', element: <Suspense fallback={<div>Loading...</div>}><ArticleEditor /></Suspense> },
          { path: 'edit/:id', element: <Suspense fallback={<div>Loading...</div>}><ArticleEditor /></Suspense> }
        ]
      }
    ]
  },
  {
    element: <Layout />,
    children: [
      // Primary Arabic Routes
      { path: '/', element: <Home /> },
      { path: '/lawyer-profile', element: <LawyerProfile /> },
      { path: '/civil-law', element: <CivilLaw /> },
      { path: '/criminal-law', element: <CriminalLaw /> },
      { path: '/commercial-law', element: <CommercialLaw /> },
      { path: '/family-law', element: <FamilyLaw /> },
      { path: '/company-law', element: <CompanyLaw /> },
      { path: '/foreigners-in-egypt', element: <ForeignersInEgypt /> },
      { path: '/egyptians-abroad', element: <EgyptiansAbroad /> },
      { path: '/arbitration-mediation', element: <ArbitrationMediation /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:slug', element: <BlogPost /> },
      { path: '/sharm-el-sheikh', element: <SharmElSheikh /> },
      { path: '/cairo', element: <Cairo /> },
      { path: '/alexandria', element: <Alexandria /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/services', element: <Services /> },

      // Dedicated English Routes (Fully crawlable and separated)
      { path: '/en', element: <Home /> },
      { path: '/en/lawyer-profile', element: <LawyerProfile /> },
      { path: '/en/civil-law', element: <CivilLaw /> },
      { path: '/en/criminal-law', element: <CriminalLaw /> },
      { path: '/en/commercial-law', element: <CommercialLaw /> },
      { path: '/en/family-law', element: <FamilyLaw /> },
      { path: '/en/company-law', element: <CompanyLaw /> },
      { path: '/en/foreigners-in-egypt', element: <ForeignersInEgypt /> },
      { path: '/en/egyptians-abroad', element: <EgyptiansAbroad /> },
      { path: '/en/arbitration-mediation', element: <ArbitrationMediation /> },
      { path: '/en/blog', element: <Blog /> },
      { path: '/en/blog/:slug', element: <BlogPost /> },
      { path: '/en/sharm-el-sheikh', element: <SharmElSheikh /> },
      { path: '/en/cairo', element: <Cairo /> },
      { path: '/en/alexandria', element: <Alexandria /> },
      { path: '/en/faq', element: <FAQ /> },
      { path: '/en/about-us', element: <AboutUs /> },
      { path: '/en/services', element: <Services /> },

      // French Routes
      { path: '/fr', element: <Home /> },
      { path: '/fr/lawyer-profile', element: <LawyerProfile /> },
      { path: '/fr/civil-law', element: <CivilLaw /> },
      { path: '/fr/criminal-law', element: <CriminalLaw /> },
      { path: '/fr/commercial-law', element: <CommercialLaw /> },
      { path: '/fr/family-law', element: <FamilyLaw /> },
      { path: '/fr/company-law', element: <CompanyLaw /> },
      { path: '/fr/foreigners-in-egypt', element: <ForeignersInEgypt /> },
      { path: '/fr/egyptians-abroad', element: <EgyptiansAbroad /> },
      { path: '/fr/arbitration-mediation', element: <ArbitrationMediation /> },
      { path: '/fr/blog', element: <Blog /> },
      { path: '/fr/blog/:slug', element: <BlogPost /> },
      { path: '/fr/sharm-el-sheikh', element: <SharmElSheikh /> },
      { path: '/fr/cairo', element: <Cairo /> },
      { path: '/fr/alexandria', element: <Alexandria /> },
      { path: '/fr/faq', element: <FAQ /> },
      { path: '/fr/about-us', element: <AboutUs /> },
      { path: '/fr/services', element: <Services /> },

      // Italian Routes
      { path: '/it', element: <Home /> },
      { path: '/it/lawyer-profile', element: <LawyerProfile /> },
      { path: '/it/civil-law', element: <CivilLaw /> },
      { path: '/it/criminal-law', element: <CriminalLaw /> },
      { path: '/it/commercial-law', element: <CommercialLaw /> },
      { path: '/it/family-law', element: <FamilyLaw /> },
      { path: '/it/company-law', element: <CompanyLaw /> },
      { path: '/it/foreigners-in-egypt', element: <ForeignersInEgypt /> },
      { path: '/it/egyptians-abroad', element: <EgyptiansAbroad /> },
      { path: '/it/arbitration-mediation', element: <ArbitrationMediation /> },
      { path: '/it/blog', element: <Blog /> },
      { path: '/it/blog/:slug', element: <BlogPost /> },
      { path: '/it/sharm-el-sheikh', element: <SharmElSheikh /> },
      { path: '/it/cairo', element: <Cairo /> },
      { path: '/it/alexandria', element: <Alexandria /> },
      { path: '/it/faq', element: <FAQ /> },
      { path: '/it/about-us', element: <AboutUs /> },
      { path: '/it/services', element: <Services /> },

      // Arabic aliases redirecting to clean canonical URLs
      { path: '/ar', element: <Navigate to="/" replace /> },
      { path: '/ar/lawyer-profile', element: <Navigate to="/lawyer-profile" replace /> },
      { path: '/ar/civil-law', element: <Navigate to="/civil-law" replace /> },
      { path: '/ar/criminal-law', element: <Navigate to="/criminal-law" replace /> },
      { path: '/ar/commercial-law', element: <Navigate to="/commercial-law" replace /> },
      { path: '/ar/family-law', element: <Navigate to="/family-law" replace /> },
      { path: '/ar/company-law', element: <Navigate to="/company-law" replace /> },
      { path: '/ar/foreigners-in-egypt', element: <Navigate to="/foreigners-in-egypt" replace /> },
      { path: '/ar/egyptians-abroad', element: <Navigate to="/egyptians-abroad" replace /> },
      { path: '/ar/arbitration-mediation', element: <Navigate to="/arbitration-mediation" replace /> },
      { path: '/ar/blog', element: <Navigate to="/blog" replace /> },
      { path: '/ar/blog/:slug', element: <BlogPost /> },
      { path: '/ar/sharm-el-sheikh', element: <Navigate to="/sharm-el-sheikh" replace /> },
      { path: '/ar/cairo', element: <Navigate to="/cairo" replace /> },
      { path: '/ar/alexandria', element: <Navigate to="/alexandria" replace /> },
      { path: '/ar/faq', element: <Navigate to="/faq" replace /> },
      { path: '/ar/about-us', element: <Navigate to="/about-us" replace /> },
      { path: '/ar/services', element: <Navigate to="/services" replace /> },

      // Service alias redirects
      { path: '/ar/services/civil-law', element: <Navigate to="/civil-law" replace /> },
      { path: '/en/services/civil-law', element: <Navigate to="/en/civil-law" replace /> },
      { path: '/services/civil-law', element: <Navigate to="/civil-law" replace /> },
      { path: '/services/criminal-law', element: <Navigate to="/criminal-law" replace /> },
      { path: '/services/commercial-law', element: <Navigate to="/commercial-law" replace /> },
      { path: '/services/family-law', element: <Navigate to="/family-law" replace /> },
      { path: '/services/company-law', element: <Navigate to="/company-law" replace /> },
      { path: '/services/foreigners-in-egypt', element: <Navigate to="/foreigners-in-egypt" replace /> },
      { path: '/services/egyptians-abroad', element: <Navigate to="/egyptians-abroad" replace /> },
      { path: '/services/arbitration-mediation', element: <Navigate to="/arbitration-mediation" replace /> },

      // Fallback
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
];

let router: ReturnType<typeof createBrowserRouter> | null = null;

const AppRouter: React.FC = () => {
  if (!router) router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRouter;
