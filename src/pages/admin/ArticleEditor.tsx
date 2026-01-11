
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { BlogPost } from '../../types';
import { Save, ArrowRight } from 'lucide-react';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }, { 'align': [] }],
        ['link', 'image', 'video'],
        ['clean'],
    ],
};

const ArticleEditor: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [activeLang, setActiveLang] = useState<'ar' | 'en' | 'fr' | 'it'>('ar');

    const [formData, setFormData] = useState<Partial<BlogPost>>({
        title: '',
        slug: '',
        image: '',
        excerpt: '',
        readTime: '',
        date: new Date().toLocaleDateString('ar-EG'),
        tags: [],
        content: '',
        isPublished: true,
        order: 0,
        // English
        title_en: '',
        excerpt_en: '',
        content_en: '',
        // French
        title_fr: '',
        excerpt_fr: '',
        content_fr: '',
        // Italian
        title_it: '',
        excerpt_it: '',
        content_it: '',
    });

    const [inputTag, setInputTag] = useState('');

    useEffect(() => {
        const fetchArticle = async () => {
            if (id) {
                setLoading(true);
                try {
                    const docRef = doc(db, 'articles', id);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setFormData(prev => ({
                            ...prev,
                            ...data,
                            id: docSnap.id
                        }));
                    }
                } catch (error) {
                    console.error("Error fetching article:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchArticle();
    }, [id]);

    const getLocalizedFieldName = (field: string) => {
        if (activeLang === 'ar') return field;
        return `${field}_${activeLang}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
            return;
        }

        // Shared fields always update directly
        if (['slug', 'image', 'date', 'readTime', 'order'].includes(name)) {
            setFormData({ ...formData, [name]: value });
            return;
        }

        // Localized fields
        const fieldName = getLocalizedFieldName(name);
        setFormData({ ...formData, [fieldName]: value });
    };

    const handleContentChange = (content: string) => {
        const fieldName = getLocalizedFieldName('content');
        setFormData(prev => ({ ...prev, [fieldName]: content }));
    };

    const getCurrentValue = (field: string) => {
        const fieldName = getLocalizedFieldName(field);
        // @ts-ignore
        return formData[fieldName] || '';
    };

    const handleAddTag = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && inputTag.trim()) {
            e.preventDefault();
            setFormData(prev => ({ ...prev, tags: [...(prev.tags || []), inputTag.trim()] }));
            setInputTag('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({ ...prev, tags: prev.tags?.filter(tag => tag !== tagToRemove) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Ensure numeric order
            const dataToSave = {
                ...formData,
                order: Number(formData.order) || 0,
                updatedAt: serverTimestamp()
            };

            if (id) {
                await setDoc(doc(db, 'articles', id), dataToSave, { merge: true });
            } else {
                await addDoc(collection(db, 'articles'), {
                    ...dataToSave,
                    createdAt: serverTimestamp()
                });
            }
            navigate('/admin');
        } catch (error) {
            console.error("Error saving article:", error);
            alert('حدث خطأ أثناء الحفظ');
        } finally {
            setLoading(false);
        }
    };

    const languages = [
        { code: 'ar', label: 'العربية' },
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'it', label: 'Italiano' },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">
                    {id ? 'تعديل المقال' : 'إضافة مقال جديد'}
                </h1>
                <button
                    onClick={() => navigate('/admin')}
                    className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                    <ArrowRight size={20} />
                    إلغاء وعودة
                </button>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#1a2d4d] p-8 rounded-lg border border-[#c8a876]/20 space-y-6">

                {/* Language Tabs */}
                <div className="flex border-b border-gray-700 mb-6">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => setActiveLang(lang.code as any)}
                            className={`px-6 py-3 font-semibold transition-colors ${activeLang === lang.code
                                ? 'text-[#c8a876] border-b-2 border-[#c8a876]'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>

                {/* Localized Fields */}
                <h3 className="text-[#c8a876] text-lg font-semibold mb-2">
                    المحتوى ({languages.find(l => l.code === activeLang)?.label})
                </h3>

                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="block text-gray-300 mb-2">عنوان المقال</label>
                        <input
                            type="text"
                            name="title"
                            value={getCurrentValue('title')}
                            onChange={handleChange}
                            className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none"
                            dir={activeLang === 'ar' ? 'rtl' : 'ltr'}
                            placeholder={`العنوان بـ ${languages.find(l => l.code === activeLang)?.label}`}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2">ملخص قصير</label>
                        <textarea
                            name="excerpt"
                            value={getCurrentValue('excerpt')}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none"
                            dir={activeLang === 'ar' ? 'rtl' : 'ltr'}
                        />
                    </div>
                </div>

                {/* Shared Fields Section */}
                <div className="border-t border-gray-700 pt-6 mt-6">
                    <h3 className="text-white text-lg font-semibold mb-4">بيانات عامة (مشتركة)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-300 mb-2">رابط المقال (Slug)</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug || ''}
                                onChange={handleChange}
                                className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none"
                                placeholder="example-article-link"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">رابط الصورة (URL)</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image || ''}
                                onChange={handleChange}
                                className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none"
                                placeholder="https://example.com/image.jpg"
                                required
                            />
                        </div>
                    </div>
                    {formData.image && (
                        <div className="mt-2 text-center">
                            <img src={formData.image} alt="Preview" className="inline-block h-32 rounded object-cover" />
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div>
                            <label className="block text-gray-300 mb-2">تاريخ النشر</label>
                            <input
                                type="text"
                                name="date"
                                value={formData.date || ''}
                                onChange={handleChange}
                                className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">وقت القراءة</label>
                            <input
                                type="text"
                                name="readTime"
                                value={formData.readTime || ''}
                                onChange={handleChange}
                                className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none"
                                placeholder="مثال: 5 دقائق"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">ترتيب العرض</label>
                            <input
                                type="number"
                                name="order"
                                value={formData.order || 0}
                                onChange={handleChange}
                                className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-300 mb-2">الكلمات الدلالية (Tags)</label>
                        <input
                            type="text"
                            value={inputTag}
                            onChange={(e) => setInputTag(e.target.value)}
                            onKeyDown={handleAddTag}
                            className="w-full bg-[#0b1a33] border border-gray-600 rounded px-4 py-2 text-white focus:border-[#c8a876] outline-none mb-2"
                        />
                        <div className="flex flex-wrap gap-2">
                            {formData.tags?.map((tag, index) => (
                                <span key={index} className="bg-[#c8a876]/20 text-[#c8a876] px-2 py-1 rounded flex items-center gap-2">
                                    {tag}
                                    <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-400">×</button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Content Editor */}
                <div className="mt-6">
                    <label className="block text-gray-300 mb-2">
                        المحتوى التفصيلي ({languages.find(l => l.code === activeLang)?.label})
                    </label>
                    <div className="bg-white text-black rounded editor-container" style={{ direction: activeLang === 'ar' ? 'rtl' : 'ltr' }}>
                        <style>{`
                            .ql-editor img {
                                max-width: 100%;
                                height: auto;
                                display: block;
                                margin: 10px auto;
                            }
                        `}</style>
                        <ReactQuill
                            theme="snow"
                            value={getCurrentValue('content')}
                            onChange={handleContentChange}
                            modules={{
                                ...modules,
                                toolbar: {
                                    container: modules.toolbar,
                                    handlers: {
                                        image: function () {
                                            const tooltip = this.quill.theme.tooltip;
                                            const originalSave = tooltip.save;
                                            const originalHide = tooltip.hide;

                                            tooltip.save = function () {
                                                const range = this.quill.getSelection(true);
                                                const value = this.textbox.value;
                                                if (value) {
                                                    this.quill.insertEmbed(range.index, 'image', value, 'user');
                                                }
                                                tooltip.save = originalSave;
                                                tooltip.hide = originalHide;
                                                tooltip.hide();
                                            };

                                            tooltip.hide = function () {
                                                tooltip.save = originalSave;
                                                tooltip.hide = originalHide;
                                                tooltip.hide();
                                            };

                                            tooltip.edit('image');
                                            tooltip.textbox.placeholder = "أدخل رابط الصورة (URL)";
                                        }
                                    }
                                }
                            }}
                            className="h-96 mb-12"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 border-t border-gray-700 pt-6">
                    <label className="flex items-center gap-2 text-white cursor-pointer select-none">
                        <input
                            type="checkbox"
                            name="isPublished"
                            checked={formData.isPublished}
                            onChange={handleChange}
                            className="w-5 h-5 rounded accent-[#c8a876]"
                        />
                        نشر المقال
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer select-none">
                        <input
                            type="checkbox"
                            name="isFeatured"
                            checked={formData.isFeatured || false}
                            onChange={handleChange}
                            className="w-5 h-5 rounded accent-[#c8a876]"
                        />
                        عرض في الصفحة الرئيسية (مميز)
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c8a876] text-[#0b1a33] font-bold py-3 rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                    <Save size={20} />
                    {loading ? 'جاري الحفظ...' : 'حفظ المقال'}
                </button>
            </form>
        </div>
    );
};

export default ArticleEditor;
