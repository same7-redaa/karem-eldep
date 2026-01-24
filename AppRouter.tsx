
import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';
import { AuthProvider } from './src/contexts/AuthContext';

// Pages
import Home from './pages/Home';
import LawyerProfile from './pages/LawyerProfile';
import CivilLaw from './pages/services/CivilLaw';
import CriminalLaw from './pages/services/CriminalLaw';
import CommercialLaw from './pages/services/CommercialLaw';
import FamilyLaw from './pages/services/FamilyLaw';
import CompanyLaw from './pages/services/CompanyLaw';
import ForeignersInEgypt from './pages/services/ForeignersInEgypt';
import EgyptiansAbroad from './pages/services/EgyptiansAbroad';
import ArbitrationMediation from './pages/services/ArbitrationMediation';
import Blog from './pages/blog/Blog';
import BlogPost from './pages/blog/BlogPost';
import SharmElSheikh from './pages/SharmElSheikh';
import Cairo from './pages/cities/Cairo';
import Alexandria from './pages/Alexandria';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

// Admin Pages
import Login from './src/pages/admin/Login';
import AdminLayout from './src/pages/admin/AdminLayout';
import Dashboard from './src/pages/admin/Dashboard';
import ArticleEditor from './src/pages/admin/ArticleEditor';
import ProtectedRoute from './src/components/Admin/ProtectedRoute';

// ScrollToTop component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // تمرير إلى أعلى الصفحة عند تغيير المسار
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout component
const Layout: React.FC = () => {
  return (
    <div className="bg-[#0b1a33] text-gray-200 font-sans" style={{ fontFamily: 'Tajawal, sans-serif' }}>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SocialButtons />
    </div>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: '/admin/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'new', element: <ArticleEditor /> },
          { path: 'edit/:id', element: <ArticleEditor /> }
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default AppRouter;