
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';
import { Edit, Trash2, Plus, Eye, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard: React.FC = () => {
    const [articles, setArticles] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchArticles = async () => {
        try {
            const q = query(collection(db, 'articles'), orderBy('order', 'asc'));
            const querySnapshot = await getDocs(q);
            const fetchedArticles: BlogPost[] = [];
            querySnapshot.forEach((doc) => {
                fetchedArticles.push({ id: doc.id, ...doc.data() } as BlogPost);
            });
            setArticles(fetchedArticles);
        } catch (error) {
            console.error("Error fetching articles:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm('هل أنت متأكد من حذف هذا المقال؟')) {
            try {
                await deleteDoc(doc(db, 'articles', id));
                fetchArticles();
            } catch (error) {
                console.error("Error deleting article:", error);
            }
        }
    };

    const moveArticle = async (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === articles.length - 1) return;

        const otherIndex = direction === 'up' ? index - 1 : index + 1;
        const currentArticle = articles[index];
        const otherArticle = articles[otherIndex];

        if (!currentArticle.id || !otherArticle.id) return;

        // Calculate new orders
        let newOrderCurrent = otherArticle.order;
        let newOrderOther = currentArticle.order;

        // If collision or undefined, fallback to index
        if (newOrderCurrent === undefined || newOrderOther === undefined || newOrderCurrent === newOrderOther) {
            newOrderCurrent = otherIndex;
            newOrderOther = index;
        }

        try {
            await updateDoc(doc(db, 'articles', currentArticle.id), { order: newOrderCurrent });
            await updateDoc(doc(db, 'articles', otherArticle.id), { order: newOrderOther });
            fetchArticles();
        } catch (error) {
            console.error("Error reordering:", error);
        }
    };

    if (loading) return <div>جاري التحميل...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">إدارة المقالات</h1>
                <Link
                    to="/admin/new"
                    className="bg-[#c8a876] text-[#0b1a33] px-4 py-2 rounded flex items-center gap-2 font-bold hover:bg-white transition-colors"
                >
                    <Plus size={20} />
                    مقال جديد
                </Link>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg overflow-hidden border border-[#c8a876]/20">
                <table className="w-full text-right">
                    <thead className="bg-[#0b1a33] text-[#c8a876]">
                        <tr>
                            <th className="p-4">الصورة</th>
                            <th className="p-4">العنوان</th>
                            <th className="p-4">التاريخ</th>
                            <th className="p-4">الحالة</th>
                            <th className="p-4">ترتيب</th>
                            <th className="p-4">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article, index) => (
                            <tr key={article.id} className="border-b border-gray-700 hover:bg-[#0b1a33]/50">
                                <td className="p-4">
                                    <img src={article.image} alt={article.title} className="w-16 h-12 object-cover rounded" />
                                </td>
                                <td className="p-4 font-bold text-white max-w-xs truncate">{article.title}</td>
                                <td className="p-4 text-gray-400">{article.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs ${article.isPublished !== false ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {article.isPublished !== false ? 'منشور' : 'مسودة'}
                                    </span>
                                </td>
                                <td className="p-4 flex gap-1">
                                    <button onClick={() => moveArticle(index, 'up')} disabled={index === 0} className="p-1 hover:text-[#c8a876] disabled:opacity-30"><ArrowUp size={16} /></button>
                                    <button onClick={() => moveArticle(index, 'down')} disabled={index === articles.length - 1} className="p-1 hover:text-[#c8a876] disabled:opacity-30"><ArrowDown size={16} /></button>
                                </td>
                                <td className="p-4">
                                    <div className="flex gap-2">
                                        <Link to={`/admin/edit/${article.id}`} className="p-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/40">
                                            <Edit size={16} />
                                        </Link>
                                        <a href={`/blog/${article.slug}`} target="_blank" rel="noreferrer" className="p-2 bg-green-600/20 text-green-400 rounded hover:bg-green-600/40">
                                            <Eye size={16} />
                                        </a>
                                        <button
                                            onClick={() => handleDelete(article.id!)}
                                            className="p-2 bg-red-600/20 text-red-400 rounded hover:bg-red-600/40"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {articles.length === 0 && (
                    <div className="p-8 text-center text-gray-400">لا يوجد مقالات حالياً. ابدأ بإضافة مقال جديد.</div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
