import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useParams, Link } from 'react-router-dom';

// Import translated article content for FR and IT
import guideForeignersTranslations from '../../data/articles/guide-foreigners.json';
import egyptiansAbroadTranslations from '../../data/articles/egyptians-abroad.json';
import foreignInvestmentTranslations from '../../data/articles/foreign-investment.json';
import rentControlDecisionTranslations from '../../data/articles/rent-control-decision-2025.json';
import christianDivorceCaseTranslations from '../../data/articles/christian-divorce-case-2025.json';
import foreignLawyerSharmTranslations from '../../data/articles/foreign-lawyer-sharm-el-sheikh.json';
import foreignLawyerAlexandriaTranslations from '../../data/articles/foreign-lawyer-alexandria.json';

const BlogPost: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);

  // دالة لتحويل البيانات المنظمة إلى HTML
  const renderStructuredContent = (contentData: any): string => {
    if (typeof contentData === 'string') {
      return contentData;
    }

    if (!contentData || !contentData.content) {
      return '';
    }

    let html = '';
    
    contentData.content.forEach((section: any) => {
      switch (section.type) {
        case 'heading':
          html += `<h2 class="text-2xl md:text-3xl font-bold text-[#c8a876] mb-6 mt-8">${section.text}</h2>`;
          break;
        case 'subheading':
          html += `<h3 class="text-xl md:text-2xl font-semibold text-[#c8a876] mb-4 mt-6">${section.text}</h3>`;
          break;
        case 'paragraph':
          html += `<p class="text-gray-300 leading-relaxed mb-4">${section.text}</p>`;
          break;
        case 'list':
          html += '<ul class="list-disc list-inside mb-6 space-y-2 text-gray-300">';
          section.items.forEach((item: string) => {
            html += `<li class="leading-relaxed">${item}</li>`;
          });
          html += '</ul>';
          break;
        default:
          break;
      }
    });

    return html;
  };

  useEffect(() => {
    // بيانات المقالات (في التطبيق الحقيقي ستأتي من API)
    const articles = {
      'foreign-lawyer-alexandria': {
        title: isRTL ? 'محامي أجانب بالإسكندرية – خدمات قانونية متخصصة | المحامي كريم الديب' : 'Lawyer for Foreigners in Alexandria – Specialized Legal Services | Lawyer Karim El-Dib',
        content: renderStructuredContent(
          (language === 'fr' || language === 'it') 
            ? foreignLawyerAlexandriaTranslations[language]
            : isRTL 
              ? foreignLawyerAlexandriaTranslations.ar
              : foreignLawyerAlexandriaTranslations.en
        ),
        date: isRTL ? '27 نوفمبر 2025' : 'November 27, 2025',
        readTime: isRTL ? '11 دقيقة قراءة' : '11 min read',
        image: '/images/alexandria-lawyer.jpg',
        tags: isRTL ? ['محامي أجانب الإسكندرية', 'Foreign Lawyer Alexandria', 'إقامة الأجانب', 'عقارات للأجانب'] : ['Foreign Lawyer Alexandria', 'Foreigners Residency', 'Property for Foreigners', 'Legal Services'],
        description: isRTL 
          ? 'دليلك الشامل للخدمات القانونية المتخصصة للأجانب في الإسكندرية - إقامة، عقارات، شركات، زواج وطلاق من المحامي كريم الديب'
          : 'Your comprehensive guide to specialized legal services for foreigners in Alexandria - residency, property, companies, marriage and divorce from Lawyer Karim El-Dib'
      },
      'foreign-lawyer-sharm-el-sheikh': {
        title: isRTL ? 'محامي الأجانب في شرم الشيخ – خدمات قانونية متخصصة | المحامي كريم الديب' : 'Foreign Lawyer in Sharm El Sheikh – Specialized Legal Services | Lawyer Karim El-Dib',
        content: renderStructuredContent(
          (language === 'fr' || language === 'it') 
            ? foreignLawyerSharmTranslations[language]
            : isRTL 
              ? foreignLawyerSharmTranslations.ar
              : foreignLawyerSharmTranslations.en
        ),
        date: isRTL ? '27 نوفمبر 2025' : 'November 27, 2025',
        readTime: isRTL ? '12 دقيقة قراءة' : '12 min read',
        image: '/images/sharm-el-sheikh-lawyer.jpg',
        tags: isRTL ? ['محامي أجانب شرم الشيخ', 'Foreign Lawyer Sharm', 'إقامة الأجانب', 'عقارات للأجانب'] : ['Foreign Lawyer Sharm', 'Foreigners Residency', 'Property for Foreigners', 'Legal Services'],
        description: isRTL 
          ? 'دليلك الكامل للحصول على خدمات قانونية متخصصة للأجانب في شرم الشيخ - إقامة، عقارات، شركات، زواج وطلاق من المحامي كريم الديب'
          : 'Your complete guide to specialized legal services for foreigners in Sharm El Sheikh - residency, property, companies, marriage and divorce from Lawyer Karim El-Dib'
      },
      'christian-divorce-case-2025': {
        title: isRTL ? 'سابقة قانونية تاريخية: حكم خُلع لمواطنة مسيحية في مصر | المحامي كريم الديب' : 'Historic Legal Precedent: Khul\' Ruling for Christian Woman in Egypt | Lawyer Karim El-Dib',
        content: renderStructuredContent(
          (language === 'fr' || language === 'it') 
            ? christianDivorceCaseTranslations[language]
            : isRTL 
              ? christianDivorceCaseTranslations.ar
              : christianDivorceCaseTranslations.en
        ),
        date: isRTL ? '12 نوفمبر 2025' : 'November 12, 2025',
        readTime: isRTL ? '10 دقائق قراءة' : '10 min read',
        image: '/images/christian-divorce-case.jpg',
        tags: isRTL 
          ? ['قانون الأحوال الشخصية', 'خُلع للمسيحيين', 'سابقة قانونية', 'حقوق المرأة']
          : ['Personal Status Law', 'Christian Khul\'', 'Legal Precedent', 'Women\'s Rights']
      },
      'rent-control-decision-2025': {
        title: isRTL ? 'قرار جديد بمد عمل لجان حصر الإيجارات القديمة - القرار 2497 لسنة 2025 | المحامي كريم الديب' : 'New Decision Extending Rent Control Survey Committees - Decision 2497 of 2025 | Lawyer Karim El-Dib',
        content: renderStructuredContent(
          (language === 'fr' || language === 'it') 
            ? rentControlDecisionTranslations[language]
            : isRTL 
              ? rentControlDecisionTranslations.ar
              : rentControlDecisionTranslations.en
        ),
        date: isRTL ? '12 نوفمبر 2025' : 'November 12, 2025',
        readTime: isRTL ? '8 دقائق قراءة' : '8 min read',
        image: '/images/rent-decision-1.jpg',
        tags: isRTL 
          ? ['قانون الإيجار القديم', 'لجان الحصر', 'قرار مجلس الوزراء', 'حقوق الملاك والمستأجرين']
          : ['Old Rent Law', 'Survey Committees', 'Cabinet Decision', 'Landlord-Tenant Rights']
      },
      'guide-foreigners-legal-services-egypt-2025': {
        title: isRTL ? 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025 | المحامي كريم الديب' : 'Complete Guide for Foreigners: Legal Services in Egypt 2025 | Lawyer Karim El-Dib',
        content: isRTL 
          ? `
            <div class="mb-8">
              <img src="/images/lawyer-4.jpg" alt="المحامي كريم الديب - محامي الأجانب في مصر" class="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-4" />
              <p class="text-center text-sm text-gray-400 italic">المحامي كريم الديب - متخصص في الخدمات القانونية للأجانب</p>
            </div>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">مقدمة: الخدمات القانونية للأجانب في مصر</h2>
            <p class="mb-6">يشهد الاستثمار الأجنبي في مصر نمواً متزايداً في عام 2025، مما يتطلب من الأجانب فهماً عميقاً للنظام القانوني المصري. المحامي كريم الديب، كمحامي أجانب في مصر متخصص بخبرة تزيد عن 20 عاماً، يقدم هذا الدليل الشامل لمساعدة المستثمرين والمقيمين الأجانب.</p>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">الخدمات القانونية الأساسية للأجانب في مصر</h2>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">1. تأسيس الشركات للأجانب في مصر</h3>
            <p class="mb-4">تأسيس شركات للأجانب في مصر يتطلب فهماً دقيقاً لقانون الشركات المصري الجديد لعام 2025. المحامي كريم الديب يساعدك في:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>اختيار النوع المناسب للشركة</strong>: شركة ذات مسؤولية محدودة، شركة مساهمة، أو فرع شركة أجنبية</li>
              <li><strong>إنجاز جميع الإجراءات القانونية</strong>: من التوثيق إلى التسجيل في الهيئة العامة للاستثمار</li>
              <li><strong>الحصول على التراخيص اللازمة</strong>: تراخيص النشاط والتشغيل حسب طبيعة العمل</li>
              <li><strong>فتح الحسابات المصرفية</strong>: تسهيل إجراءات فتح الحسابات للشركات الأجنبية</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">2. تصاريح الإقامة والعمل للأجانب</h3>
            <p class="mb-4">كمحامي أجانب في مصر متخصص، نقدم خدمات شاملة في استخراج وتجديد تصاريح الإقامة:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>استخراج تصاريح الإقامة</strong>: للمستثمرين والعاملين والطلاب الأجانب</li>
              <li><strong>تجديد تصاريح العمل</strong>: ضمان الامتثال للقوانين المصرية الجديدة</li>
              <li><strong>حل مشاكل الإقامة القانونية</strong>: التعامل مع حالات انتهاء الصلاحية أو المخالفات</li>
              <li><strong>الحصول على الإقامة الدائمة</strong>: للمستثمرين والمقيمين طويل الأمد</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">3. الاستثمار العقاري للأجانب في مصر</h3>
            <p class="mb-4">قوانين تملك الأجانب للعقارات في مصر لها ضوابط محددة، ونحن نساعدك في:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>فهم قوانين التملك</strong>: الضوابط والشروط القانونية للتملك الأجنبي</li>
              <li><strong>إنجاز عمليات الشراء</strong>: من العقد الابتدائي إلى التسجيل النهائي</li>
              <li><strong>حماية استثماراتك العقارية</strong>: ضمان سلامة الإجراءات القانونية</li>
              <li><strong>الاستثمار في المشاريع السياحية</strong>: خاصة في شرم الشيخ والساحل الشمالي</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">لماذا تختار المحامي كريم الديب؟</h2>
            <p class="mb-4">كريم الديب محامي متخصص في خدمة الأجانب في مصر، مع خبرة تزيد عن 20 سنة في:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>القانون المصري والدولي</strong>: فهم عميق لكلا النظامين القانونيين</li>
              <li><strong>خدمة العملاء الأجانب</strong>: أكثر من 3500 عميل من مختلف الجنسيات</li>
              <li><strong>الحلول القانونية المبتكرة</strong>: تطوير استراتيجيات قانونية مخصصة</li>
              <li><strong>التواصل متعدد اللغات</strong>: إجادة العربية والإنجليزية والفرنسية والإيطالية</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">التطورات القانونية الجديدة في مصر 2025</h2>
            <p class="mb-4">شهد عام 2025 تطورات مهمة في القوانين المصرية التي تؤثر على الأجانب:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>تسهيلات جديدة في قانون الاستثمار</li>
              <li>تحديثات على إجراءات تأسيس الشركات</li>
              <li>تطوير الخدمات الإلكترونية الحكومية</li>
              <li>تحسينات في نظام تصاريح الإقامة</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">خاتمة</h2>
            <p class="mb-4">الاستثمار في مصر فرصة ذهبية في عام 2025، والمحامي كريم الديب شريكك القانوني الأمثل لضمان نجاح استثماراتك. مع خبرة واسعة وفهم عميق للقوانين المصرية، نقدم الدعم القانوني الشامل للأجانب في جميع المجالات.</p>

            <div class="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-lg p-4 mt-6">
              <h3 class="font-bold text-[#c8a876] mb-2">للحصول على استشارة قانونية</h3>
              <p class="text-sm">تواصل مع المحامي كريم الديب للحصول على استشارة قانونية متخصصة في الخدمات القانونية للأجانب في مصر.</p>
            </div>
          `
          : `
            <div class="mb-8">
              <img src="/images/lawyer-4.jpg" alt="Lawyer Karim El-Dib - Specialist in Legal Services for Foreigners" class="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-4" />
              <p class="text-center text-sm text-gray-400 italic">Lawyer Karim El-Dib - Specialist in Legal Services for Foreigners</p>
            </div>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Introduction: Legal Services for Foreigners in Egypt</h2>
            <p class="mb-6">Foreign investment in Egypt is experiencing unprecedented growth in 2025, requiring foreigners to have a deep understanding of the Egyptian legal system. Lawyer Karim El-Dib, as a specialized lawyer for foreigners in Egypt with over 20 years of experience, provides this comprehensive guide to help foreign investors and residents navigate the legal landscape.</p>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Essential Legal Services for Foreigners in Egypt</h2>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">1. Company Formation for Foreigners in Egypt</h3>
            <p class="mb-4">Establishing companies for foreigners in Egypt requires precise understanding of the new Egyptian company law of 2025. Lawyer Karim El-Dib helps you with:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Choosing the appropriate company type</strong>: Limited liability company, joint stock company, or foreign branch</li>
              <li><strong>Completing all legal procedures</strong>: From documentation to registration with GAFI</li>
              <li><strong>Obtaining necessary licenses</strong>: Activity and operation licenses according to business nature</li>
              <li><strong>Opening bank accounts</strong>: Facilitating banking procedures for foreign companies</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">2. Residence and Work Permits for Foreigners</h3>
            <p class="mb-4">As a specialized lawyer for foreigners in Egypt, we provide comprehensive services in obtaining and renewing residence permits:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Obtaining residence permits</strong>: For foreign investors, workers, and students</li>
              <li><strong>Renewing work permits</strong>: Ensuring compliance with new Egyptian laws</li>
              <li><strong>Solving legal residency issues</strong>: Handling expired permits or violations</li>
              <li><strong>Obtaining permanent residence</strong>: For long-term investors and residents</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">3. Real Estate Investment for Foreigners in Egypt</h3>
            <p class="mb-4">Laws governing foreign property ownership in Egypt have specific regulations, and we help you with:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Understanding ownership laws</strong>: Legal controls and conditions for foreign ownership</li>
              <li><strong>Completing purchase transactions</strong>: From preliminary contract to final registration</li>
              <li><strong>Protecting your real estate investments</strong>: Ensuring legal procedure safety</li>
              <li><strong>Tourism project investments</strong>: Especially in Sharm El-Sheikh and North Coast</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Why Choose Lawyer Karim El-Dib?</h2>
            <p class="mb-4">Karim El-Dib is a lawyer specialized in serving foreigners in Egypt, with over 20 years of experience in:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Egyptian and international law</strong>: Deep understanding of both legal systems</li>
              <li><strong>Serving foreign clients</strong>: Over 3,500 clients from various nationalities</li>
              <li><strong>Innovative legal solutions</strong>: Developing customized legal strategies</li>
              <li><strong>Multilingual communication</strong>: Fluent in Arabic, English, French, and Italian</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">New Legal Developments in Egypt 2025</h2>
            <p class="mb-4">2025 has witnessed important developments in Egyptian laws affecting foreigners:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>New facilitations in investment law</li>
              <li>Updates to company formation procedures</li>
              <li>Development of government electronic services</li>
              <li>Improvements in residence permit system</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Conclusion</h2>
            <p class="mb-4">Investing in Egypt is a golden opportunity in 2025, and Lawyer Karim El-Dib is your ideal legal partner to ensure the success of your investments. With extensive experience and deep understanding of Egyptian laws, we provide comprehensive legal support for foreigners in all fields.</p>

            <div class="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-lg p-4 mt-6">
              <h3 class="font-bold text-[#c8a876] mb-2">For Legal Consultation</h3>
              <p class="text-sm">Contact Lawyer Karim El-Dib for specialized legal consultation in legal services for foreigners in Egypt.</p>
            </div>
          `,
        date: isRTL ? '15 أكتوبر 2025' : 'October 15, 2025',
        readTime: isRTL ? '12 دقائق قراءة' : '12 min read',
        tags: isRTL 
          ? ['محامي أجانب في مصر', 'كريم الديب محامي', 'استثمار أجنبي مصر', 'تأسيس شركات للأجانب', 'تصاريح إقامة مصر']
          : ['Lawyer for foreigners Egypt', 'Karim El-Dib lawyer', 'Foreign investment Egypt', 'Company formation foreigners', 'Egypt residence permits']
      },
      'egyptians-abroad-legal-rights-protection': {
        title: isRTL ? 'محامي المصريين بالخارج: حماية حقوقك القانونية | كريم الديب' : 'Lawyer for Egyptians Abroad: Protecting Your Legal Rights | Karim El-Dib',
        content: isRTL 
          ? `
            <div class="mb-8">
              <img src="/images/lawyer-5.jpg" alt="خدمات قانونية للمصريين بالخارج - المحامي كريم الديب" class="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-4" />
              <p class="text-center text-sm text-gray-400 italic">المحامي كريم الديب - خدمات قانونية للمصريين بالخارج</p>
            </div>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">حقوق المصريين بالخارج: حماية قانونية شاملة</h2>
            <p class="mb-6">يواجه المصريون المقيمون بالخارج تحديات قانونية متعددة في إدارة شؤونهم في مصر. المحامي كريم الديب، كمحامي متخصص في خدمة المصريين بالخارج، يقدم حلولاً قانونية شاملة لحماية حقوقكم ومصالحكم.</p>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">الخدمات القانونية المتخصصة للمصريين بالخارج</h2>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">1. إدارة الممتلكات والاستثمارات</h3>
            <p class="mb-4">نساعدك في إدارة ممتلكاتك في مصر وأنت في الخارج من خلال:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>إدارة العقارات</strong>: متابعة الإيجارات وأعمال الصيانة والتطوير</li>
              <li><strong>التحصيل القانوني</strong>: استرداد المستحقات والديون المتأخرة</li>
              <li><strong>المتابعة القضائية</strong>: تمثيلك في القضايا المتعلقة بممتلكاتك</li>
              <li><strong>الاستثمارات المالية</strong>: إدارة الاستثمارات والحسابات البنكية</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">2. قضايا الميراث والتركات</h3>
            <p class="mb-4">نقدم خدمات متكاملة في قضايا الميراث للمصريين بالخارج:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>حصر التركة</strong>: حصر وتقييم جميع أصول المتوفى</li>
              <li><strong>توزيع الميراث</strong>: تطبيق أحكام الشريعة والقانون المصري</li>
              <li><strong>حل نزاعات الميراث</strong>: الوساطة والتقاضي في قضايا الميراث</li>
              <li><strong>الحصول على شهادات الوراثة</strong>: استخراج الوثائق الرسمية اللازمة</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">3. الوكالات القانونية والتمثيل</h3>
            <p class="mb-4">إنجاز الوكالات اللازمة لتمثيلك قانونياً في مصر:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>وكالات عامة وخاصة</strong>: حسب نوع المعاملات المطلوبة</li>
              <li><strong>التمثيل في المحاكم</strong>: الحضور نيابة عنك في القضايا</li>
              <li><strong>إنجاز المعاملات الحكومية</strong>: التعامل مع الجهات الرسمية</li>
              <li><strong>توقيع العقود</strong>: إبرام العقود والاتفاقيات نيابة عنك</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">خدمات إضافية للمصريين بالخارج</h2>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>الاستشارات القانونية عن بُعد</strong>: جلسات استشارية عبر الفيديو</li>
              <li><strong>متابعة الاستثمارات</strong>: تقارير دورية عن أوضاع استثماراتك</li>
              <li><strong>الخدمات المصرفية</strong>: فتح وإدارة الحسابات البنكية</li>
              <li><strong>التأمينات الاجتماعية</strong>: متابعة مستحقات التأمينات والمعاشات</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">لماذا المحامي كريم الديب الخيار الأمثل؟</h2>
            <p class="mb-4">مع خبرة تزيد عن 20 عاماً في خدمة المصريين بالخارج:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>فهم عميق لاحتياجات المصريين المقيمين بالخارج</li>
              <li>شبكة واسعة من الثقة مع أكثر من 3500 عميل</li>
              <li>تواصل مستمر ومتابعة دقيقة لجميع القضايا</li>
              <li>خدمات قانونية شاملة تحت سقف واحد</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">خاتمة</h2>
            <p class="mb-4">حماية حقوقك القانونية في مصر وأنت بالخارج أمر في غاية الأهمية. المحامي كريم الديب يقدم لك الدعم القانوني الشامل والمتخصص لضمان حماية مصالحك وتحقيق أهدافك.</p>

            <div class="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-lg p-4 mt-6">
              <h3 class="font-bold text-[#c8a876] mb-2">خدمات قانونية على مدار الساعة</h3>
              <p class="text-sm">نقدم خدمات الاستشارة القانونية والمتابعة عن بُعد لخدمة المصريين في جميع أنحاء العالم.</p>
            </div>
          `
          : `
            <div class="mb-8">
              <img src="/images/lawyer-5.jpg" alt="Legal Services for Egyptians Abroad - Lawyer Karim El-Dib" class="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-4" />
              <p class="text-center text-sm text-gray-400 italic">Lawyer Karim El-Dib - Legal Services for Egyptians Abroad</p>
            </div>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Rights of Egyptians Abroad: Comprehensive Legal Protection</h2>
            <p class="mb-6">Egyptians residing abroad face multiple legal challenges in managing their affairs in Egypt. Lawyer Karim El-Dib, as a specialized lawyer serving Egyptians abroad, provides comprehensive legal solutions to protect your rights and interests.</p>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Specialized Legal Services for Egyptians Abroad</h2>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">1. Property and Investment Management</h3>
            <p class="mb-4">We help you manage your properties in Egypt while you are abroad through:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Property Management</strong>: Following up on rentals, maintenance, and development</li>
              <li><strong>Legal Collection</strong>: Recovering dues and overdue debts</li>
              <li><strong>Judicial Follow-up</strong>: Representing you in cases related to your properties</li>
              <li><strong>Financial Investments</strong>: Managing investments and bank accounts</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">2. Inheritance and Estate Cases</h3>
            <p class="mb-4">We provide integrated services in inheritance cases for Egyptians abroad:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Estate Inventory</strong>: Listing and evaluating all assets of the deceased</li>
              <li><strong>Inheritance Distribution</strong>: Applying Sharia and Egyptian law provisions</li>
              <li><strong>Resolving Inheritance Disputes</strong>: Mediation and litigation in inheritance cases</li>
              <li><strong>Obtaining Inheritance Certificates</strong>: Extracting necessary official documents</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">3. Legal Powers of Attorney and Representation</h3>
            <p class="mb-4">Completing necessary powers of attorney for legal representation in Egypt:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>General and Special Powers</strong>: According to the type of required transactions</li>
              <li><strong>Court Representation</strong>: Attending on your behalf in legal cases</li>
              <li><strong>Government Transaction Completion</strong>: Dealing with official authorities</li>
              <li><strong>Contract Signing</strong>: Concluding contracts and agreements on your behalf</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Additional Services for Egyptians Abroad</h2>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Remote Legal Consultations</strong>: Video consultation sessions</li>
              <li><strong>Investment Follow-up</strong>: Periodic reports on your investment status</li>
              <li><strong>Banking Services</strong>: Opening and managing bank accounts</li>
              <li><strong>Social Insurance</strong>: Following up on insurance and pension entitlements</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Why is Lawyer Karim El-Dib the Optimal Choice?</h2>
            <p class="mb-4">With over 20 years of experience serving Egyptians abroad:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>Deep understanding of the needs of Egyptians residing abroad</li>
              <li>Wide network of trust with over 3,500 clients</li>
              <li>Continuous communication and precise follow-up of all cases</li>
              <li>Comprehensive legal services under one roof</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Conclusion</h2>
            <p class="mb-4">Protecting your legal rights in Egypt while you are abroad is extremely important. Lawyer Karim El-Dib provides you with comprehensive and specialized legal support to ensure the protection of your interests and achievement of your goals.</p>

            <div class="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-lg p-4 mt-6">
              <h3 class="font-bold text-[#c8a876] mb-2">24/7 Legal Services</h3>
              <p class="text-sm">We provide legal consultation and remote follow-up services for Egyptians worldwide.</p>
            </div>
          `,
        date: isRTL ? '10 أكتوبر 2025' : 'October 10, 2025',
        readTime: isRTL ? '10 دقائق قراءة' : '10 min read',
        tags: isRTL 
          ? ['محامي المصريين بالخارج', 'كريم الديب', 'حقوق قانونية مصر', 'خدمات قانونية عن بعد', 'إدارة الممتلكات مصر']
          : ['Lawyer for Egyptians abroad', 'Karim El-Dib', 'Egypt legal rights', 'Remote legal services', 'Egypt property management']
      },
      'foreign-investment-egypt-complete-guide': {
        title: isRTL ? 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل 2025 | كريم الديب' : 'Investment in Egypt: Complete Foreign Investor Guide 2025 | Karim El-Dib',
        content: isRTL 
          ? `
            <div class="mb-8">
              <img src="/images/lawyer-6.jpg" alt="الاستثمار الأجنبي في مصر - المحامي كريم الديب" class="w-full max-w-lg mx-auto rounded-lg shadow-lg mb-4" />
              <p class="text-center text-sm text-gray-400 italic">المحامي كريم الديب - خبير الاستثمار الأجنبي في مصر</p>
            </div>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">الاستثمار في مصر 2025: فرص ذهبية للمستثمرين الأجانب</h2>
            <p class="mb-6">تشهد مصر في عام 2025 نهضة استثمارية حقيقية مع إطلاق مشاريع عملاقة وتسهيلات حكومية جديدة. المحامي كريم الديب، كخبير في قانون الاستثمار المصري، يقدم دليلاً شاملاً للمستثمرين الأجانب الراغبين في الاستفادة من هذه الفرص الذهبية.</p>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">القطاعات الاستثمارية الواعدة في مصر</h2>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">1. العقارات والتطوير العقاري</h3>
            <p class="mb-4">يعتبر القطاع العقاري من أقوى القطاعات الاستثمارية في مصر:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>العاصمة الإدارية الجديدة</strong>: مشاريع سكنية وتجارية بعائد استثماري مرتفع</li>
              <li><strong>مدن ساحلية جديدة</strong>: الساحل الشمالي والعلمين الجديدة</li>
              <li><strong>المجمعات السكنية المتكاملة</strong>: في القاهرة الجديدة والتجمع الخامس</li>
              <li><strong>المشاريع التجارية</strong>: مولات ومراكز تسوق في المناطق الحيوية</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">2. السياحة والضيافة</h3>
            <p class="mb-4">مصر وجهة سياحية عالمية مع فرص استثمارية متميزة:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>شرم الشيخ والغردقة</strong>: منتجعات سياحية وفنادق فاخرة</li>
              <li><strong>الأقصر وأسوان</strong>: سياحة ثقافية وأثرية</li>
              <li><strong>السياحة البيئية</strong>: محميات طبيعية ومشاريع إيكولوجية</li>
              <li><strong>السياحة العلاجية</strong>: مراكز علاج طبيعي ومنتجعات صحية</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-[#c8a876] mb-3">3. التكنولوجيا والابتكار</h3>
            <p class="mb-4">مصر تتجه نحو التحول الرقمي مع فرص واعدة:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>الشركات الناشئة التقنية</strong>: دعم حكومي وبيئة حاضنة</li>
              <li><strong>الذكاء الاصطناعي</strong>: مشاريع تقنية متقدمة</li>
              <li><strong>التجارة الإلكترونية</strong>: نمو سريع في السوق المصري</li>
              <li><strong>الطاقة المتجددة</strong>: مشاريع الطاقة الشمسية ومزارع الرياح</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">القوانين والتسهيلات الجديدة 2025</h2>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>قانون الاستثمار المحدث</strong>: حوافز جديدة للمستثمرين الأجانب</li>
              <li><strong>النافذة الواحدة</strong>: تبسيط إجراءات تأسيس الشركات</li>
              <li><strong>المناطق الاقتصادية الخاصة</strong>: إعفاءات ضريبية وجمركية</li>
              <li><strong>الحماية القانونية</strong>: ضمانات قوية لحماية الاستثمارات الأجنبية</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">الخدمات القانونية للمستثمرين الأجانب</h2>
            <p class="mb-4">المحامي كريم الديب يقدم خدمات قانونية متكاملة:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>دراسة الجدوى القانونية</strong>: تقييم المخاطر والفرص</li>
              <li><strong>تأسيس الكيانات القانونية</strong>: شركات وفروع أجنبية</li>
              <li><strong>الحصول على التراخيص</strong>: جميع أنواع التراخيص المطلوبة</li>
              <li><strong>صياغة العقود</strong>: عقود استثمار وشراكات استراتيجية</li>
              <li><strong>الاستشارات الضريبية</strong>: تحسين الهيكل الضريبي</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">مزايا الاستثمار في مصر</h2>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>موقع جغرافي استراتيجي يربط بين ثلاث قارات</li>
              <li>سوق كبير يضم أكثر من 100 مليون مستهلك</li>
              <li>قوة عاملة ماهرة وبتكلفة تنافسية</li>
              <li>بنية تحتية متطورة ومشاريع قومية عملاقة</li>
              <li>استقرار سياسي واقتصادي</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">لماذا المحامي كريم الديب شريكك الاستثماري؟</h2>
            <p class="mb-4">مع خبرة تزيد عن 20 عاماً في قانون الاستثمار:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li>خبرة واسعة مع كبرى الشركات الاستثمارية</li>
              <li>فهم عميق للقوانين المصرية والدولية</li>
              <li>شبكة علاقات قوية مع الجهات الحكومية</li>
              <li>نجاحات موثقة في مشاريع استثمارية عملاقة</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">خاتمة</h2>
            <p class="mb-4">الاستثمار في مصر عام 2025 يمثل فرصة ذهبية حقيقية. مع الإصلاحات الاقتصادية والمشاريع القومية العملاقة، تقدم مصر بيئة استثمارية جاذبة ومربحة. المحامي كريم الديب شريكك القانوني المثالي لضمان نجاح استثماراتك وحماية مصالحك.</p>

            <div class="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-lg p-4 mt-6">
              <h3 class="font-bold text-[#c8a876] mb-2">ابدأ رحلتك الاستثمارية في مصر</h3>
              <p class="text-sm">احجز استشارة مجانية مع المحامي كريم الديب لمناقشة فرصك الاستثمارية في مصر وتطوير خطة قانونية متكاملة.</p>
            </div>
          `
          : `
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Complete Guide to Foreign Investment in Egypt 2025</h2>
            <p class="mb-4">Egypt has become one of the most attractive investment destinations globally, offering unique opportunities for foreign investors. Lawyer Karim El-Dib provides comprehensive legal services to ensure the success of your investments and compliance with Egyptian laws.</p>

            <div class="mb-6">
              <img src="/images/lawyer-7.jpg" alt="Investment legal consultation in Egypt" class="w-full h-48 object-cover rounded-lg mb-4" />
            </div>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Why Invest in Egypt?</h2>
            <p class="mb-4">Egypt offers numerous competitive advantages that make it an ideal investment destination:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Strategic geographical location:</strong> Gateway between Africa, Asia, and Europe</li>
              <li><strong>Large consumer market:</strong> Over 104 million citizens with growing purchasing power</li>
              <li><strong>Young workforce:</strong> 60% of the population under 30 years old</li>
              <li><strong>Government investment incentives:</strong> Tax exemptions and facilitations</li>
              <li><strong>Infrastructure development:</strong> Major national projects and modern infrastructure</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Most Attractive Investment Sectors</h2>
            
            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">1. Real Estate and Urban Development</h3>
            <p class="mb-4">The real estate sector in Egypt is experiencing significant growth with mega projects:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>New Administrative Capital:</strong> Investment opportunities in government buildings and commercial centers</li>
              <li><strong>New El Alamein City:</strong> Tourism and residential real estate projects</li>
              <li><strong>North Coast developments:</strong> Luxury resorts and tourist villages</li>
              <li><strong>East Port Said:</strong> Industrial and logistics projects</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">2. Renewable Energy</h3>
            <p class="mb-4">Egypt aims to generate 42% of its energy from renewable sources by 2035:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Solar energy projects:</strong> Benban Solar Park and similar projects</li>
              <li><strong>Wind energy:</strong> Projects in the Gulf of Suez and Western Desert</li>
              <li><strong>Green hydrogen:</strong> New promising opportunities</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">3. Technology and Digital Transformation</h3>
            <p class="mb-4">Egypt is rapidly advancing in digital transformation:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Fintech startups:</strong> Growing electronic payment sector</li>
              <li><strong>E-commerce:</strong> Rapid growth in online shopping</li>
              <li><strong>Software development:</strong> Outsourcing and technology services</li>
              <li><strong>Artificial intelligence:</strong> Investment in AI and machine learning</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">4. Manufacturing and Industry</h3>
            <p class="mb-4">Egypt offers excellent opportunities in manufacturing:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Automotive industry:</strong> Local and export-oriented production</li>
              <li><strong>Textiles and garments:</strong> Benefiting from trade agreements</li>
              <li><strong>Food industries:</strong> Processing agricultural products</li>
              <li><strong>Pharmaceuticals:</strong> Regional pharmaceutical manufacturing hub</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Legal Investment Procedures</h2>
            <p class="mb-4">Lawyer Karim El-Dib assists investors in all legal procedures:</p>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">Company Formation Steps</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Choosing company type:</strong> LLC, joint stock, branch office</li>
              <li><strong>Name reservation:</strong> Company name approval procedures</li>
              <li><strong>Capital deposit:</strong> Meeting minimum capital requirements</li>
              <li><strong>Commercial registration:</strong> Registration with relevant authorities</li>
              <li><strong>Tax registration:</strong> VAT and income tax registration</li>
              <li><strong>Investment licenses:</strong> Obtaining necessary operational licenses</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">Available Investment Incentives</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Income tax exemption:</strong> Up to 7 years in some sectors</li>
              <li><strong>Customs exemptions:</strong> On machinery and equipment</li>
              <li><strong>Land allocation facilitations:</strong> At preferential prices</li>
              <li><strong>Fast licensing procedures:</strong> Through one-stop-shop</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Legal Challenges and Solutions</h2>
            <p class="mb-4">Foreign investors may face several legal challenges:</p>
            
            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">Common Challenges</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Understanding local laws:</strong> Complexity of Egyptian legal system</li>
              <li><strong>Bureaucratic procedures:</strong> Multiple approvals and licenses</li>
              <li><strong>Currency regulations:</strong> Foreign exchange rules</li>
              <li><strong>Labor law compliance:</strong> Employee rights and obligations</li>
              <li><strong>Tax compliance:</strong> Understanding Egyptian tax system</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">Legal Solutions</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Comprehensive legal consultation:</strong> Understanding all legal requirements</li>
              <li><strong>Professional representation:</strong> In government procedures</li>
              <li><strong>Legal compliance monitoring:</strong> Ensuring ongoing compliance</li>
              <li><strong>Dispute resolution:</strong> Alternative dispute resolution methods</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Karim El-Dib's Investment Legal Services</h2>
            <p class="mb-4">Comprehensive legal services for foreign investors:</p>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">Pre-Investment Services</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Investment feasibility study:</strong> Legal and economic analysis</li>
              <li><strong>Sector analysis:</strong> Studying legal requirements for each sector</li>
              <li><strong>Risk assessment:</strong> Identifying potential legal risks</li>
              <li><strong>Investment structure planning:</strong> Optimal legal structure design</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">Company Formation Services</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Complete registration procedures:</strong> From start to finish</li>
              <li><strong>License obtaining:</strong> All necessary operational licenses</li>
              <li><strong>Banking procedures:</strong> Opening corporate bank accounts</li>
              <li><strong>Legal compliance setup:</strong> Establishing compliance systems</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#0b1a33] mb-3">Ongoing Legal Support</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Legal compliance monitoring:</strong> Ensuring ongoing compliance</li>
              <li><strong>Contract drafting and review:</strong> Commercial and employment contracts</li>
              <li><strong>Dispute resolution:</strong> Litigation and arbitration</li>
              <li><strong>Legal updates:</strong> Staying current with law changes</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Investment Success Tips</h2>
            <p class="mb-4">Key factors for investment success in Egypt:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Thorough market research:</strong> Understanding local market needs</li>
              <li><strong>Strong legal foundation:</strong> Proper legal structure and compliance</li>
              <li><strong>Local partnerships:</strong> Collaborating with Egyptian partners</li>
              <li><strong>Cultural understanding:</strong> Respecting local business culture</li>
              <li><strong>Patient capital:</strong> Long-term investment perspective</li>
              <li><strong>Government relations:</strong> Building positive relationships with authorities</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Current Investment Opportunities 2025</h2>
            <p class="mb-4">Emerging sectors with high growth potential:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Green economy:</strong> Environmental projects and clean technology</li>
              <li><strong>Healthcare sector:</strong> Medical services and pharmaceutical manufacturing</li>
              <li><strong>Education technology:</strong> Digital learning and educational platforms</li>
              <li><strong>Agricultural technology:</strong> Modern farming and food processing</li>
              <li><strong>Transportation and logistics:</strong> Smart transportation solutions</li>
              <li><strong>Advanced infrastructure:</strong> Smart cities and modern infrastructure</li>
              <li><strong>Political and economic stability:</strong> Supporting investment environment</li>
            </ul>

            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Why Lawyer Karim El-Dib is Your Investment Partner?</h2>
            <p class="mb-4">With over 20 years of experience in investment law:</p>
            <ul class="list-disc list-inside mb-6 space-y-2">
              <li><strong>Extensive experience:</strong> With major investment companies</li>
              <li><strong>Deep understanding:</strong> Of Egyptian and international laws</li>
              <li><strong>Strong network:</strong> Relationships with government entities</li>
              <li><strong>Documented successes:</strong> In mega investment projects</li>
              <li><strong>Multilingual services:</strong> Arabic, English, and French</li>
              <li><strong>24/7 availability:</strong> Continuous support for investors</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-[#c8a876] mb-4">Conclusion</h2>
            <p class="mb-4">Investment in Egypt in 2025 represents a real golden opportunity. With economic reforms and mega national projects, Egypt offers an attractive and profitable investment environment. Lawyer Karim El-Dib is your ideal legal partner to ensure the success of your investments and protect your interests.</p>

            <div class="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-lg p-4 mt-6">
              <h3 class="font-bold text-[#c8a876] mb-2">Start Your Investment Journey in Egypt</h3>
              <p class="text-sm">Book a free consultation with Lawyer Karim El-Dib to discuss your investment opportunities in Egypt and develop a comprehensive legal plan.</p>
            </div>
          `,
        date: isRTL ? '5 أكتوبر 2025' : 'October 5, 2025',
        readTime: isRTL ? '15 دقيقة قراءة' : '15 min read',
        tags: isRTL 
          ? ['الاستثمار في مصر 2025', 'قانون الاستثمار المصري', 'فرص استثمارية مصر', 'كريم الديب محامي استثمار', 'تسهيلات الاستثمار مصر']
          : ['Investment in Egypt 2025', 'Egyptian investment law', 'Egypt investment opportunities', 'Karim El-Dib investment lawyer', 'Egypt investment facilities']
      }
    };

    const currentArticle = articles[slug as keyof typeof articles];
    if (currentArticle) {
      // Apply French/Italian translations if available
      let finalArticle = { ...currentArticle };
      
      if (language === 'fr' || language === 'it') {
        const translations: any = {
          'guide-foreigners-legal-services-egypt-2025': guideForeignersTranslations,
          'egyptians-abroad-legal-rights-protection': egyptiansAbroadTranslations,
          'foreign-investment-egypt-complete-guide': foreignInvestmentTranslations
        };
        
        const translation = translations[slug]?.[language];
        if (translation) {
          finalArticle = {
            ...finalArticle,
            content: translation
          };
        }
      }
      
      setArticle(finalArticle);
      document.title = `${finalArticle.title} | المحامي كريم الديب`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', currentArticle.title);
      }
    }
  }, [slug, isRTL]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#c8a876] mb-4">
            {isRTL ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <Link to="/blog" className="text-[#c8a876] hover:text-white">
            {isRTL ? 'العودة للمقالات' : 'Back to Articles'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العودة للمقالات */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[#c8a876] hover:text-white transition-colors duration-300"
          >
            <i className={`fas fa-arrow-${isRTL ? 'right' : 'left'}`}></i>
            {isRTL ? 'العودة للمقالات' : 'Back to Articles'}
          </Link>
        </div>

        {/* معلومات المقال */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <i className="fas fa-calendar-alt"></i>
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-clock"></i>
              {article.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag: string, index: number) => (
              <span 
                key={index}
                className="bg-[#c8a876] text-[#0b1a33] px-3 py-1 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* محتوى المقال */}
        <article className="bg-[#1a2d4d] rounded-lg p-8 mb-8">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-[#c8a876] 
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-8
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-6
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-300 prose-li:mb-2
              prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* CTA للتواصل */}
        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1a33] mb-4">
            {isRTL ? 'هل تحتاج استشارة قانونية؟' : 'Do You Need Legal Consultation?'}
          </h2>
          <p className="text-lg text-[#0b1a33] mb-6">
            {isRTL 
              ? 'المحامي كريم الديب جاهز لمساعدتك في جميع احتياجاتك القانونية'
              : 'Lawyer Karim El-Dib is ready to help you with all your legal needs'
            }
          </p>
          <Link 
            to="/#contact" 
            className="bg-[#0b1a33] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 inline-block"
          >
            {isRTL ? 'احجز استشارة الآن' : 'Book Consultation Now'}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPost;