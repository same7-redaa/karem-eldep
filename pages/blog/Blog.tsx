import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }) => {
    return texts[language as keyof typeof texts] || texts.en;
  };

  useEffect(() => {
    document.title = "مقالات قانونية | مدونة المحامي كريم الديب | Legal Blog Egypt";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'مقالات قانونية متخصصة من المحامي كريم الديب. نصائح قانونية، أحكام محاكم، قوانين جديدة للمصريين والأجانب في مصر. Legal blog Egypt by Karim El-Dib lawyer.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'مقالات قانونية, مدونة قانونية, نصائح قانونية, أحكام محاكم, قوانين مصر, كريم الديب محامي, المحامي كريم الديب, Legal blog Egypt, Legal articles Egypt');
    }
  }, []);

  const articles = [
    {
      id: 1,
      slug: 'guide-foreigners-legal-services-egypt-2025',
      title: getTextByLanguage({
        ar: 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025 | المحامي كريم الديب',
        en: 'Complete Guide for Foreigners: Legal Services in Egypt 2025 | Lawyer Karim El-Dib',
        fr: 'Guide Complet pour les Étrangers: Services Juridiques en Égypte 2025 | Avocat Karim El-Dib',
        it: 'Guida Completa per Stranieri: Servizi Legali in Egitto 2025 | Avvocato Karim El-Dib'
      }),
      excerpt: getTextByLanguage({
        ar: 'دليل شامل للأجانب الراغبين في الاستثمار أو العيش في مصر مع المحامي كريم الديب. تأسيس الشركات، تصاريح الإقامة، الاستثمار العقاري، وجميع الخدمات القانونية المتخصصة للأجانب.',
        en: 'A comprehensive guide for foreigners wishing to invest or live in Egypt with Lawyer Karim El-Dib. Company formation, residence permits, real estate investment, and all specialized legal services for foreigners.',
        fr: 'Un guide complet pour les étrangers souhaitant investir ou vivre en Égypte avec l\'avocat Karim El-Dib. Formation de sociétés, permis de résidence, investissement immobilier et tous les services juridiques spécialisés pour les étrangers.',
        it: 'Una guida completa per stranieri che desiderano investire o vivere in Egitto con l\'avvocato Karim El-Dib. Costituzione società, permessi di soggiorno, investimenti immobiliari e tutti i servizi legali specializzati per stranieri.'
      }),
      date: getTextByLanguage({
        ar: '15 أكتوبر 2025',
        en: 'October 15, 2025',
        fr: '15 octobre 2025',
        it: '15 ottobre 2025'
      }),
      readTime: getTextByLanguage({
        ar: '12 دقيقة قراءة',
        en: '12 min read',
        fr: '12 min de lecture',
        it: '12 min di lettura'
      }),
      image: '/images/lawyer-1.jpg',
      tags: [
        getTextByLanguage({ ar: 'محامي أجانب في مصر', en: 'Lawyer for foreigners Egypt', fr: 'Avocat pour étrangers Égypte', it: 'Avvocato per stranieri Egitto' }),
        getTextByLanguage({ ar: 'كريم الديب محامي', en: 'Karim El-Dib lawyer', fr: 'Karim El-Dib avocat', it: 'Karim El-Dib avvocato' }),
        getTextByLanguage({ ar: 'استثمار أجنبي مصر', en: 'Foreign investment Egypt', fr: 'Investissement étranger Égypte', it: 'Investimento straniero Egitto' })
      ]
    },
    {
      id: 2,
      slug: 'egyptians-abroad-legal-rights-protection',
      title: getTextByLanguage({
        ar: 'محامي المصريين بالخارج: حماية حقوقك القانونية | كريم الديب',
        en: 'Lawyer for Egyptians Abroad: Protecting Your Legal Rights | Karim El-Dib',
        fr: 'Avocat pour les Égyptiens à l\'Étranger: Protection de Vos Droits Juridiques | Karim El-Dib',
        it: 'Avvocato per Egiziani all\'Estero: Protezione dei Vostri Diritti Legali | Karim El-Dib'
      }),
      excerpt: getTextByLanguage({
        ar: 'خدمات قانونية متخصصة للمصريين المقيمين بالخارج مع المحامي كريم الديب. إدارة الممتلكات، قضايا الميراث، الوكالات القانونية، وحماية الحقوق عن بُعد.',
        en: 'Specialized legal services for Egyptians residing abroad with Lawyer Karim El-Dib. Property management, inheritance cases, legal powers of attorney, and remote rights protection.',
        fr: 'Services juridiques spécialisés pour les Égyptiens résidant à l\'étranger avec l\'avocat Karim El-Dib. Gestion immobilière, affaires de succession, procurations légales et protection des droits à distance.',
        it: 'Servizi legali specializzati per egiziani residenti all\'estero con l\'avvocato Karim El-Dib. Gestione immobiliare, casi di eredità, procure legali e protezione dei diritti a distanza.'
      }),
      date: getTextByLanguage({
        ar: '10 أكتوبر 2025',
        en: 'October 10, 2025',
        fr: '10 octobre 2025',
        it: '10 ottobre 2025'
      }),
      readTime: getTextByLanguage({
        ar: '10 دقائق قراءة',
        en: '10 min read',
        fr: '10 min de lecture',
        it: '10 min di lettura'
      }),
      image: '/images/lawyer-2.jpg',
      tags: [
        getTextByLanguage({ ar: 'محامي المصريين بالخارج', en: 'Lawyer for Egyptians abroad', fr: 'Avocat pour Égyptiens à l\'étranger', it: 'Avvocato per egiziani all\'estero' }),
        getTextByLanguage({ ar: 'كريم الديب', en: 'Karim El-Dib', fr: 'Karim El-Dib', it: 'Karim El-Dib' }),
        getTextByLanguage({ ar: 'حقوق قانونية مصر', en: 'Egypt legal rights', fr: 'Droits juridiques Égypte', it: 'Diritti legali Egitto' })
      ]
    },
    {
      id: 3,
      slug: 'foreign-investment-egypt-complete-guide',
      title: getTextByLanguage({
        ar: 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل 2025 | كريم الديب',
        en: 'Investment in Egypt: Complete Foreign Investor Guide 2025 | Karim El-Dib',
        fr: 'Investissement en Égypte: Guide Complet de l\'Investisseur Étranger 2025 | Karim El-Dib',
        it: 'Investimento in Egitto: Guida Completa per Investitori Stranieri 2025 | Karim El-Dib'
      }),
      excerpt: getTextByLanguage({
        ar: 'دليل شامل للاستثمار الأجنبي في مصر 2025 مع المحامي كريم الديب. القوانين الجديدة، التسهيلات الحكومية، الفرص الاستثمارية الذهبية، والإجراءات القانونية المطلوبة.',
        en: 'A comprehensive guide to foreign investment in Egypt 2025 with Lawyer Karim El-Dib. New laws, government facilities, golden investment opportunities, and required legal procedures.',
        fr: 'Un guide complet de l\'investissement étranger en Égypte 2025 avec l\'avocat Karim El-Dib. Nouvelles lois, facilités gouvernementales, opportunités d\'investissement en or et procédures juridiques requises.',
        it: 'Una guida completa agli investimenti stranieri in Egitto 2025 con l\'avvocato Karim El-Dib. Nuove leggi, agevolazioni governative, opportunità di investimento d\'oro e procedure legali richieste.'
      }),
      date: getTextByLanguage({
        ar: '5 أكتوبر 2025',
        en: 'October 5, 2025',
        fr: '5 octobre 2025',
        it: '5 ottobre 2025'
      }),
      readTime: getTextByLanguage({
        ar: '15 دقيقة قراءة',
        en: '15 min read',
        fr: '15 min de lecture',
        it: '15 min di lettura'
      }),
      image: '/images/lawyer-3.jpg',
      tags: [
        getTextByLanguage({ ar: 'الاستثمار في مصر 2025', en: 'Investment in Egypt 2025', fr: 'Investissement en Égypte 2025', it: 'Investimento in Egitto 2025' }),
        getTextByLanguage({ ar: 'قانون الاستثمار المصري', en: 'Egyptian investment law', fr: 'Loi sur l\'investissement égyptien', it: 'Legge sugli investimenti egiziani' }),
        getTextByLanguage({ ar: 'كريم الديب محامي استثمار', en: 'Karim El-Dib investment lawyer', fr: 'Karim El-Dib avocat investissement', it: 'Karim El-Dib avvocato investimenti' })
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {getTextByLanguage({
              ar: 'المقالات القانونية',
              en: 'Legal Articles',
              fr: 'Articles Juridiques',
              it: 'Articoli Legali'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'مقالات قانونية متخصصة من المحامي كريم الديب لمساعدتك في فهم القوانين المصرية والحصول على نصائح قانونية قيمة.',
              en: 'Specialized legal articles by Lawyer Karim El-Dib to help you understand Egyptian laws and get valuable legal advice.',
              fr: 'Articles juridiques spécialisés de l\'avocat Karim El-Dib pour vous aider à comprendre les lois égyptiennes et obtenir des conseils juridiques précieux.',
              it: 'Articoli legali specializzati dell\'avvocato Karim El-Dib per aiutarti a comprendere le leggi egiziane e ottenere preziosi consigli legali.'
            })}
          </p>
        </div>

        {/* المقالات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group bg-[#1a2d4d] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8a876]/20"
            >
              
              {/* صورة المقال */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.postimg.cc/G3FMRMY4/3.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a33]/80 to-transparent"></div>
              </div>

              {/* محتوى المقال */}
              <div className="p-6">
                
                {/* التاريخ ووقت القراءة */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-2 bg-[#c8a876]/10 px-3 py-1 rounded-full">
                    <i className="fas fa-calendar-alt text-[#c8a876]"></i>
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2 bg-[#c8a876]/10 px-3 py-1 rounded-full">
                    <i className="fas fa-clock text-[#c8a876]"></i>
                    {article.readTime}
                  </span>
                </div>

                {/* عنوان المقال */}
                <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#c8a876] transition-colors duration-300">
                  {article.title}
                </h2>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-5 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#c8a876]/10 border border-[#c8a876]/30 text-[#c8a876] px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#c8a876]/20 transition-colors duration-300"
                    >
                      <i className="fas fa-tag text-xs mr-1"></i>
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="bg-[#c8a876]/10 text-[#c8a876] px-3 py-1 rounded-lg text-xs font-semibold">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* رابط القراءة */}
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 hover:gap-3"
                >
                  {getTextByLanguage({
                    ar: 'اقرأ المزيد',
                    en: 'Read More',
                    fr: 'Lire Plus',
                    it: 'Leggi di Più'
                  })}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA للاشتراك والتواصل */}
        <div className="bg-gradient-to-br from-[#1a2d4d] to-[#0b1a33] border border-[#c8a876]/20 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-[#c8a876]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-newspaper text-4xl text-[#c8a876]"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a876] mb-4">
              {getTextByLanguage({
                ar: 'هل لديك استفسار قانوني؟',
                en: 'Have a Legal Question?',
                fr: 'Avez-vous une Question Juridique?',
                it: 'Hai una Domanda Legale?'
              })}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {getTextByLanguage({
                ar: 'تواصل معنا الآن للحصول على استشارة قانونية متخصصة من المحامي كريم الديب',
                en: 'Contact us now for specialized legal consultation from Lawyer Karim El-Dib',
                fr: 'Contactez-nous maintenant pour une consultation juridique spécialisée de l\'avocat Karim El-Dib',
                it: 'Contattaci ora per una consulenza legale specializzata dall\'avvocato Karim El-Dib'
              })}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/201009955509"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c8a876] text-[#0b1a33] px-8 py-4 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#c8a876]/50"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                {getTextByLanguage({
                  ar: 'تواصل عبر واتساب',
                  en: 'Contact via WhatsApp',
                  fr: 'Contacter via WhatsApp',
                  it: 'Contatta via WhatsApp'
                })}
              </a>
              <a
                href="tel:+201009955509"
                className="inline-flex items-center gap-3 bg-white text-[#0b1a33] px-8 py-4 rounded-xl font-bold hover:bg-[#c8a876] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <i className="fas fa-phone text-xl"></i>
                {getTextByLanguage({
                  ar: 'اتصل الآن',
                  en: 'Call Now',
                  fr: 'Appeler Maintenant',
                  it: 'Chiama Ora'
                })}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;