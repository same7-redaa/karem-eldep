
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { auth } from '../../lib/firebase';

const AdminLayout: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/admin/login');
        } catch (error) {
            console.error('Error signing out', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#0b1a33] text-gray-200 font-sans" dir="rtl">
            <nav className="bg-[#1a2d4d] border-b border-[#c8a876]/20 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/admin" className="text-xl font-bold text-[#c8a876]">لوحة التحكم - كريم الديب</Link>
                    <div className="flex gap-4">
                        <Link to="/" className="text-gray-300 hover:text-white">الموقع الرئيسي</Link>
                        <button onClick={handleLogout} className="text-red-400 hover:text-red-300">تسجيل خروج</button>
                    </div>
                </div>
            </nav>
            <div className="p-6 max-w-7xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
