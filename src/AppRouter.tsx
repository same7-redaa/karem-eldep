import React, { useEffect, Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';

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

  useEffect(() => {
    // تعطيل التمرير السلس مؤقتاً لتجنب رؤية التمرير للأعلى عند تغيير الصفحة
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    
    window.scrollTo(0, 0);
    
    // استعادة سلوك التمرير الأصلي بعد تغيير موضع الصفحة
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

  return (
    <div className="bg-[#0b1a33] text-gray-200 font-sans" style={{ fontFamily: 'Tajawal, sans-serif' }}>
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

// Router configuration
const router = createBrowserRouter([
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
      // Update the blog post route to ensure it catches all slugs
      { path: '/blog/:slug', element: <BlogPost /> },
      { path: '/sharm-el-sheikh', element: <SharmElSheikh /> },
      { path: '/cairo', element: <Cairo /> },
      { path: '/alexandria', element: <Alexandria /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/services', element: <Services /> },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;