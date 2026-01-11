import type React from 'react';

export interface PracticeArea {
  icon: string;
  title: string;
  description: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  image: string; // الصورة الخارجية
  slug: string; // للروابط
  readTime: string; // وقت القراءة
  tags: string[]; // التاجز للسيو
  metaDescription?: string; // وصف meta للسيو
  content?: string; // محتوى المقال (HTML)
  id?: string; // ID من Firebase
  createdAt?: any; // تاريخ الإنشاء
  order?: number; // للترتيب
  isPublished?: boolean; // حالة النشر
  isFeatured?: boolean; // عرض في الصفحة الرئيسية

  // Multi-language support
  title_en?: string;
  excerpt_en?: string;
  content_en?: string;

  title_fr?: string;
  excerpt_fr?: string;
  content_fr?: string;

  title_it?: string;
  excerpt_it?: string;
  content_it?: string;
}
