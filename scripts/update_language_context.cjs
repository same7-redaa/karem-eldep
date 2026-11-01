const fs = require('fs');

let file = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');

// Replace top definition
const topSearch = `export type Language = 'ar' | 'en' | 'fr' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  getTextByLanguage: (texts: { ar: string; en: string; fr: string; it: string }) => string;
}`;

const topReplacement = `export type Language = 'ar' | 'en' | 'fr' | 'it';

export const getLanguageFromPath = (pathname: string): Language | null => {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/it' || pathname.startsWith('/it/')) return 'it';
  if (pathname === '/ar' || pathname.startsWith('/ar/')) return 'ar';
  return null;
};

export const getLocalizedPath = (pathname: string, targetLang: Language): string => {
  // Strip existing language prefix
  const clean = pathname.replace(/^\\/(en|ar|fr|it)(\\/|$)/, '/') || '/';
  if (targetLang === 'ar') {
    return clean;
  }
  return clean === '/' ? \`/\${targetLang}\` : \`/\${targetLang}\${clean}\`;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  switchLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getTextByLanguage: (texts: { ar: string; en: string; fr: string; it: string }) => string;
}`;

// Normalize newlines for matching
file = file.replace(/\r\n/g, '\n');
const normalizedSearch = topSearch.replace(/\r\n/g, '\n');

if (!file.includes(normalizedSearch)) {
  console.error("Top search block not found!");
  process.exit(1);
}
file = file.replace(normalizedSearch, topReplacement);

// Replace LanguageProvider
const providerIndex = file.indexOf('export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {');
if (providerIndex === -1) {
  console.error("LanguageProvider not found!");
  process.exit(1);
}

const newProvider = `export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const detectLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const fromPath = getLanguageFromPath(window.location.pathname);
      if (fromPath) return fromPath;

      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam && ['ar', 'en', 'fr', 'it'].includes(langParam)) {
        return langParam as Language;
      }
    }
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('preferredLanguage') : null;
    if (savedLanguage && ['ar', 'en', 'fr', 'it'].includes(savedLanguage)) {
      return savedLanguage as Language;
    }
    return 'ar';
  };

  const [language, setLanguageState] = useState<Language>(detectLanguage);

  useEffect(() => {
    // Sync on pathname change or popstate
    const syncWithLocation = () => {
      const detected = detectLanguage();
      setLanguageState(prev => prev !== detected ? detected : prev);
    };

    syncWithLocation();
    window.addEventListener('popstate', syncWithLocation);
    return () => window.removeEventListener('popstate', syncWithLocation);
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'ar' ? 'ar' : language;
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const switchLanguage = (targetLang: Language) => {
    if (typeof window !== 'undefined') {
      const targetPath = getLocalizedPath(window.location.pathname, targetLang) + window.location.search;
      setLanguageState(targetLang);
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
        // Dispatch popstate event to let Router know if needed
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } else {
      setLanguageState(targetLang);
    }
  };

  const handleSetLanguage = (lang: Language) => {
    switchLanguage(lang);
  };

  const toggleLanguage = () => {
    const next: Language = language === 'ar' ? 'en' : language === 'en' ? 'fr' : language === 'fr' ? 'it' : 'ar';
    switchLanguage(next);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['ar']?.[key] || key;
  };

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }): string => {
    return texts[language] || texts['ar'] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, switchLanguage, t, getTextByLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
`;

file = file.slice(0, providerIndex) + newProvider;

fs.writeFileSync('src/contexts/LanguageContext.tsx', file, 'utf8');
console.log("LanguageContext.tsx updated successfully!");

