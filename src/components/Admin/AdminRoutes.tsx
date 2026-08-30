import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const AdminLayout = lazy(() => import('../../pages/admin/AdminLayout'));
const Dashboard = lazy(() => import('../../pages/admin/Dashboard'));
const ArticleEditor = lazy(() => import('../../pages/admin/ArticleEditor'));
const Login = lazy(() => import('../../pages/admin/Login'));

export const AdminRoot: React.FC = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
};

export const AdminProtected: React.FC = () => {
    return (
        <ProtectedRoute>
            <Suspense fallback={<div className="min-h-screen bg-[#0b1a33]" />}>
                <AdminLayout />
            </Suspense>
        </ProtectedRoute>
    );
};

export { Dashboard, ArticleEditor, Login };
