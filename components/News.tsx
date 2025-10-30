import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const News: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }) => {
    return texts[language as keyof typeof texts] || texts.en;
  };

  const newsArticles = [
    {
      id: 1,
      title: getTextByLanguage({
        ar: 'نصير من لا نصير له: المحامي كريم الديب صاحب القضايا المستحيلة',
        en: 'Supporter of the Unsupported: Lawyer Karim El-Dib, Master of Impossible Cases',
        fr: 'Soutien des Sans Soutien: L\'Avocat Karim El-Dib, Maître des Cas Impossibles',
        it: 'Sostenitore dei Senza Sostegno: L\'Avvocato Karim El-Dib, Maestro dei Casi Impossibili'
      }),
      newspaper: getTextByLanguage({
        ar: 'أخبار الجمهورية',
        en: 'Akhbar El Gomhuria',
        fr: 'Akhbar El Gomhuria',
        it: 'Akhbar El Gomhuria'
      }),
      date: getTextByLanguage({
        ar: '15 مايو 2025',
        en: 'May 15, 2025',
        fr: '15 mai 2025',
        it: '15 maggio 2025'
      }),
      excerpt: getTextByLanguage({
        ar: 'تقرير شامل عن إنجازات المحامي كريم الديب في الدفاع عن القضايا الصعبة والمعقدة التي لا يجرؤ محامون آخرون على التعامل معها.',
        en: 'Comprehensive report on Lawyer Karim El-Dib\'s achievements in defending difficult and complex cases that other lawyers dare not handle.',
        fr: 'Rapport complet sur les réalisations de l\'avocat Karim El-Dib dans la défense de cas difficiles et complexes que d\'autres avocats n\'osent pas gérer.',
        it: 'Rapporto completo sui successi dell\'avvocato Karim El-Dib nella difesa di casi difficili e complessi che altri avvocati non osano gestire.'
      }),
      link: 'https://akhbaralgomhuria.com/%d9%86%d8%b5%d9%8a%d8%b1-%d9%85%d9%86-%d9%84%d8%a7-%d9%86%d8%b5%d9%8a%d8%b1-%d9%84%d8%a9-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d9%85%d9%8a-%d9%83%d8%b1%d9%8a%d9%85-%d8%a7%d9%84%d8%af%d9%8a%d8%a8-%d8%b5/',
      image: '/images/lawyer-4.jpg',
      tags: [
        getTextByLanguage({ ar: 'أخبار المحامين', en: 'Lawyers News', fr: 'Actualités Juridiques', it: 'Notizie Legali' }),
        getTextByLanguage({ ar: 'قضايا صعبة', en: 'Difficult Cases', fr: 'Cas Difficiles', it: 'Casi Difficili' }),
        getTextByLanguage({ ar: 'كريم الديب', en: 'Karim El-Dib', fr: 'Karim El-Dib', it: 'Karim El-Dib' })
      ]
    },
    {
      id: 2,
      title: getTextByLanguage({
        ar: 'المحامي كريم الديب يحقق نصراً قانونياً مدوياً في قضية استثمارية معقدة',
        en: 'Lawyer Karim El-Dib Achieves Resounding Legal Victory in Complex Investment Case',
        fr: 'L\'Avocat Karim El-Dib Remporte une Victoire Juridique Retentissante dans un Cas d\'Investissement Complexe',
        it: 'L\'Avvocato Karim El-Dib Ottiene una Vittoria Legale Clamorosa in un Caso di Investimento Complesso'
      }),
      newspaper: getTextByLanguage({
        ar: 'اليوم السابع',
        en: 'Youm7',
        fr: 'Youm7',
        it: 'Youm7'
      }),
      date: getTextByLanguage({
        ar: '10 مايو 2025',
        en: 'May 10, 2025',
        fr: '10 mai 2025',
        it: '10 maggio 2025'
      }),
      excerpt: getTextByLanguage({
        ar: 'تغطية حصرية لانتصار المحامي كريم الديب في قضية استثمارية دولية معقدة تتعلق بحقوق المستثمرين الأجانب في مصر.',
        en: 'Exclusive coverage of Lawyer Karim El-Dib\'s victory in a complex international investment case related to foreign investors\' rights in Egypt.',
        fr: 'Couverture exclusive de la victoire de l\'avocat Karim El-Dib dans une affaire d\'investissement international complexe liée aux droits des investisseurs étrangers en Égypte.',
        it: 'Copertura esclusiva della vittoria dell\'avvocato Karim El-Dib in un caso di investimento internazionale complesso relativo ai diritti degli investitori stranieri in Egitto.'
      }),
      link: 'https://www.youm7.com/2025/05/blog-post_565.html',
      image: '/images/lawyer-5.jpg',
      tags: [
        getTextByLanguage({ ar: 'انتصارات قانونية', en: 'Legal Victories', fr: 'Victoires Juridiques', it: 'Vittorie Legali' }),
        getTextByLanguage({ ar: 'استثمار دولي', en: 'International Investment', fr: 'Investissement International', it: 'Investimento Internazionale' }),
        getTextByLanguage({ ar: 'أخبار قانونية', en: 'Legal News', fr: 'Actualités Juridiques', it: 'Notizie Legali' })
      ]
    },
    {
      id: 3,
      title: getTextByLanguage({
        ar: 'كريم الديب: رائد الخدمات القانونية للمصريين بالخارج والمستثمرين الأجانب',
        en: 'Karim El-Dib: Pioneer in Legal Services for Egyptians Abroad and Foreign Investors',
        fr: 'Karim El-Dib: Pionnier des Services Juridiques pour les Égyptiens à l\'Étranger et les Investisseurs Étrangers',
        it: 'Karim El-Dib: Pioniere dei Servizi Legali per gli Egiziani all\'Estero e gli Investitori Stranieri'
      }),
      newspaper: getTextByLanguage({
        ar: 'الوطن نيوز',
        en: 'El Watan News',
        fr: 'El Watan News',
        it: 'El Watan News'
      }),
      date: getTextByLanguage({
        ar: '5 مايو 2025',
        en: 'May 5, 2025',
        fr: '5 mai 2025',
        it: '5 maggio 2025'
      }),
      excerpt: getTextByLanguage({
        ar: 'حوار شامل مع المحامي كريم الديب حول تطوير الخدمات القانونية المتخصصة للمصريين في الخارج والمستثمرين الأجانب في مصر.',
        en: 'Comprehensive interview with Lawyer Karim El-Dib about developing specialized legal services for Egyptians abroad and foreign investors in Egypt.',
        fr: 'Entretien complet avec l\'avocat Karim El-Dib sur le développement de services juridiques spécialisés pour les Égyptiens à l\'étranger et les investisseurs étrangers en Égypte.',
        it: 'Intervista completa con l\'avvocato Karim El-Dib sullo sviluppo di servizi legali specializzati per gli egiziani all\'estero e gli investitori stranieri in Egitto.'
      }),
      link: 'https://www.elwaatannews.com/2025/05/blog-post_55.html',
      image: '/images/lawyer-6.jpg',
      tags: [
        getTextByLanguage({ ar: 'خدمات قانونية', en: 'Legal Services', fr: 'Services Juridiques', it: 'Servizi Legali' }),
        getTextByLanguage({ ar: 'مصريون بالخارج', en: 'Egyptians Abroad', fr: 'Égyptiens à l\'Étranger', it: 'Egiziani all\'Estero' }),
        getTextByLanguage({ ar: 'استثمار أجنبي', en: 'Foreign Investment', fr: 'Investissement Étranger', it: 'Investimento Straniero' })
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0b1a33] to-[#1a2d4d]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            <i className="fas fa-newspaper text-[#c8a876] ml-3"></i>
            {getTextByLanguage({
              ar: 'كريم الديب في الأخبار',
              en: 'Karim El-Dib in the News',
              fr: 'Karim El-Dib dans les Nouvelles',
              it: 'Karim El-Dib nelle Notizie'
            })}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'تغطية إعلامية شاملة لإنجازات وانتصارات المحامي كريم الديب في أهم الصحف والمواقع الإخبارية المصرية',
              en: 'Comprehensive media coverage of Lawyer Karim El-Dib\'s achievements and victories in major Egyptian newspapers and news websites',
              fr: 'Couverture médiatique complète des réalisations et victoires de l\'avocat Karim El-Dib dans les principaux journaux et sites d\'actualités égyptiens',
              it: 'Copertura mediatica completa dei successi e delle vittorie dell\'avvocato Karim El-Dib nei principali giornali e siti di notizie egiziani'
            })}
          </p>
        </div>

        {/* مقالات الأخبار */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group hover:border-[#c8a876]/50">
              
              {/* صورة المقال */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/lawyer-7.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* شارة الصحيفة */}
                <div className="absolute top-3 right-3 bg-[#c8a876] text-[#0b1a33] px-3 py-1 rounded-full text-xs font-bold">
                  <i className="fas fa-newspaper ml-1"></i>
                  {article.newspaper}
                </div>
              </div>

              {/* محتوى المقال */}
              <div className="p-6">
                
                {/* التاريخ */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <i className="fas fa-calendar-alt text-[#c8a876]"></i>
                  <span>{article.date}</span>
                </div>

                {/* عنوان المقال */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#c8a876] transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#c8a876]/10 border border-[#c8a876]/30 text-[#c8a876] px-2 py-1 rounded-lg text-xs font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* رابط القراءة */}
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#c8a876] hover:text-white transition-colors duration-300 font-semibold text-sm"
                >
                  {getTextByLanguage({
                    ar: 'قراءة الخبر كاملاً',
                    en: 'Read Full News',
                    fr: 'Lire l\'Article Complet',
                    it: 'Leggi l\'Articolo Completo'
                  })}
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* إحصائيات الإعلام */}
        <div className="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#c8a876] mb-4">
            {getTextByLanguage({
              ar: 'تغطية إعلامية واسعة',
              en: 'Extensive Media Coverage',
              fr: 'Couverture Médiatique Étendue',
              it: 'Copertura Mediatica Estesa'
            })}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">
                {getTextByLanguage({
                  ar: 'تقرير إعلامي',
                  en: 'Media Reports',
                  fr: 'Rapports Médiatiques',
                  it: 'Rapporti Mediatici'
                })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300 text-sm">
                {getTextByLanguage({
                  ar: 'صحيفة ومجلة',
                  en: 'Newspapers & Magazines',
                  fr: 'Journaux et Magazines',
                  it: 'Giornali e Riviste'
                })}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300 text-sm">
                {getTextByLanguage({
                  ar: 'قضية منشورة',
                  en: 'Published Cases',
                  fr: 'Cas Publiés',
                  it: 'Casi Pubblicati'
                })}
              </div>
            </div>
          </div>
          <p className="text-gray-300 mt-4 text-sm">
            {getTextByLanguage({
              ar: 'يحظى المحامي كريم الديب بتغطية إعلامية واسعة لإنجازاته القانونية المتميزة',
              en: 'Lawyer Karim El-Dib receives extensive media coverage for his outstanding legal achievements',
              fr: 'L\'avocat Karim El-Dib bénéficie d\'une large couverture médiatique pour ses remarquables réalisations juridiques',
              it: 'L\'avvocato Karim El-Dib riceve un\'ampia copertura mediatica per i suoi eccezionali risultati legali'
            })}
          </p>
        </div>

      </div>
    </section>
  );
};

export default News;