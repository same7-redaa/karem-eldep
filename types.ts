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
  image?: string; // الصورة الخارجية
  slug?: string; // للروابط
  readTime?: string; // وقت القراءة
  tags?: string[]; // التاجز للسيو
  metaDescription?: string; // وصف meta للسيو
}
