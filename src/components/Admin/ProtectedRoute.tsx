
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
    const { currentUser, loading } = useAuth();

    if (loading) return <div className="text-white text-center p-10">جاري التحميل...</div>;

    return currentUser ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
