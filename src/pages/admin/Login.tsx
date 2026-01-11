
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (err: any) {
            setError('فشل تسجيل الدخول: ' + err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0b1a33] p-4" dir="rtl">
            <div className="bg-[#1a2d4d] p-8 rounded-lg shadow-lg max-w-md w-full border border-[#c8a876]/20">
                <h2 className="text-2xl font-bold text-[#c8a876] mb-6 text-center">تسجيل دخول المشرف</h2>
                {error && <div className="bg-red-500/10 text-red-500 p-3 rounded mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2">كلمة المرور</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#c8a876] text-[#0b1a33] font-bold py-2 rounded hover:bg-white transition-colors"
                    >
                        دخول
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
