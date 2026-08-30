# نظام تبديل اللغات / Language Switching System

## التحديثات المنفذة / Updates Implemented

### 1. تحديث اللوجو / Logo Update
- تم تحديث اللوجو إلى: `https://i.postimg.cc/BQPd25Pz/1.png`

### 2. تحديث صورة "من أنا" / About Image Update
- تم تحديث الصورة إلى: `https://i.postimg.cc/tgrjBqqB/2.png`

### 3. نظام تبديل اللغات / Language Switching System
- تم إضافة Context للغة (`LanguageContext.tsx`)
- يدعم اللغتين: العربية والإنجليزية
- زر تبديل اللغة في الهيدر (على الشاشات الكبيرة والصغيرة)
- تغيير اتجاه الصفحة تلقائياً (RTL للعربية، LTR للإنجليزية)

## كيفية استخدام نظام الترجمة / How to Use Translation System

### في أي مكون / In Any Component:

```typescript
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t('key.name')}</h1>
      <button onClick={toggleLanguage}>
        {language === 'ar' ? 'EN' : 'AR'}
      </button>
    </div>
  );
};
```

### إضافة ترجمات جديدة / Adding New Translations:

في ملف `contexts/LanguageContext.tsx`، أضف المفاتيح الجديدة:

```typescript
const translations = {
  ar: {
    'new.key': 'النص بالعربية',
  },
  en: {
    'new.key': 'Text in English',
  }
};
```

## المكونات التي تحتاج تحديث / Components That Need Update

لتطبيق الترجمة على باقي المكونات، استخدم `useLanguage()` و `t()` في:

1. ✅ **Header** - تم التحديث
2. ⏳ **Hero** - يحتاج تحديث
3. ⏳ **About** - يحتاج تحديث
4. ⏳ **PracticeAreas** - يحتاج تحديث
5. ⏳ **WhyChooseUs** - يحتاج تحديث
6. ⏳ **Contact** - يحتاج تحديث

## الميزات / Features

- ✅ تبديل سلس بين اللغات
- ✅ تغيير اتجاه الصفحة تلقائياً
- ✅ حفظ اللغة المختارة
- ✅ زر تبديل اللغة في الهيدر
- ✅ دعم ��لشاشات الصغيرة والكبيرة
- ✅ تصميم متجاوب

## ملاحظات / Notes

- اللغة الافتراضية: العربية
- يمكن إضافة المزيد من اللغات بسهولة
- جميع الترجمات في ملف واحد لسهولة الإدارة
