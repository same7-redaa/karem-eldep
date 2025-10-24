import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import AppRouter from './AppRouter';

export default function App(): React.ReactElement {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  );
}