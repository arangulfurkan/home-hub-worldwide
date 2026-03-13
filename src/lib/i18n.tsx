import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Language = "tr" | "en" | "ar";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Nav
  "nav.home": { tr: "Ana Sayfa", en: "Home", ar: "الرئيسية" },
  "nav.services": { tr: "Hizmetler", en: "Services", ar: "الخدمات" },
  "nav.properties": { tr: "Gayrimenkuller", en: "Properties", ar: "العقارات" },
  "nav.about": { tr: "Hakkımızda", en: "About Us", ar: "من نحن" },
  "nav.contact": { tr: "İletişim", en: "Contact", ar: "اتصل بنا" },

  // Hero
  "hero.title": { tr: "Hayalinizdeki Mülkü Bulun", en: "Find Your Dream Property", ar: "اعثر على عقار أحلامك" },
  "hero.subtitle": { tr: "Gayrimenkul ve danışmanlık alanında uzman ekibimizle hayallerinizi gerçeğe dönüştürüyoruz.", en: "We turn your dreams into reality with our expert team in real estate and consulting.", ar: "نحول أحلامك إلى حقيقة مع فريقنا المتخصص في العقارات والاستشارات." },
  "hero.cta": { tr: "Ücretsiz Danışmanlık", en: "Free Consultation", ar: "استشارة مجانية" },
  "hero.explore": { tr: "Mülkleri Keşfet", en: "Explore Properties", ar: "استكشف العقارات" },

  // Services
  "services.title": { tr: "Hizmetlerimiz", en: "Our Services", ar: "خدماتنا" },
  "services.subtitle": { tr: "Gayrimenkul ve danışmanlık alanında kapsamlı çözümler sunuyoruz.", en: "We offer comprehensive solutions in real estate and consulting.", ar: "نقدم حلولاً شاملة في مجال العقارات والاستشارات." },
  "services.realestate.title": { tr: "Gayrimenkul Satış", en: "Real Estate Sales", ar: "بيع العقارات" },
  "services.realestate.desc": { tr: "En uygun fiyatlarla premium mülkleri sizin için buluyoruz.", en: "We find premium properties for you at the best prices.", ar: "نجد لك عقارات متميزة بأفضل الأسعار." },
  "services.consulting.title": { tr: "Yatırım Danışmanlığı", en: "Investment Consulting", ar: "استشارات الاستثمار" },
  "services.consulting.desc": { tr: "Gayrimenkul yatırımlarınız için stratejik danışmanlık hizmeti.", en: "Strategic consulting for your real estate investments.", ar: "استشارات استراتيجية لاستثماراتك العقارية." },
  "services.legal.title": { tr: "Hukuki Danışmanlık", en: "Legal Consulting", ar: "الاستشارات القانونية" },
  "services.legal.desc": { tr: "Mülk alım-satım sürecinde hukuki destek sağlıyoruz.", en: "We provide legal support during the property buying and selling process.", ar: "نقدم الدعم القانوني خلال عملية شراء وبيع العقارات." },
  "services.management.title": { tr: "Mülk Yönetimi", en: "Property Management", ar: "إدارة الممتلكات" },
  "services.management.desc": { tr: "Mülklerinizin profesyonel yönetimi ve bakımı.", en: "Professional management and maintenance of your properties.", ar: "إدارة وصيانة احترافية لممتلكاتك." },

  // Properties
  "properties.title": { tr: "Öne Çıkan Mülkler", en: "Featured Properties", ar: "العقارات المميزة" },
  "properties.subtitle": { tr: "Seçkin mülklerimizi keşfedin.", en: "Discover our exclusive properties.", ar: "اكتشف عقاراتنا الحصرية." },
  "properties.viewAll": { tr: "Tümünü Gör", en: "View All", ar: "عرض الكل" },
  "properties.beds": { tr: "Yatak", en: "Beds", ar: "غرف" },
  "properties.baths": { tr: "Banyo", en: "Baths", ar: "حمامات" },
  "properties.area": { tr: "m²", en: "m²", ar: "م²" },
  "properties.details": { tr: "Detaylar", en: "Details", ar: "التفاصيل" },

  // About
  "about.title": { tr: "Neden Bizi Tercih Etmelisiniz?", en: "Why Choose Us?", ar: "لماذا تختارنا؟" },
  "about.subtitle": { tr: "20 yılı aşkın deneyimle size en iyi hizmeti sunuyoruz.", en: "We provide the best service with over 20 years of experience.", ar: "نقدم لك أفضل خدمة بخبرة تزيد عن 20 عامًا." },
  "about.stat1.number": { tr: "500+", en: "500+", ar: "+500" },
  "about.stat1.label": { tr: "Mutlu Müşteri", en: "Happy Clients", ar: "عملاء سعداء" },
  "about.stat2.number": { tr: "1200+", en: "1200+", ar: "+1200" },
  "about.stat2.label": { tr: "Satılan Mülk", en: "Properties Sold", ar: "عقارات مباعة" },
  "about.stat3.number": { tr: "20+", en: "20+", ar: "+20" },
  "about.stat3.label": { tr: "Yıllık Deneyim", en: "Years Experience", ar: "سنوات خبرة" },
  "about.stat4.number": { tr: "15", en: "15", ar: "15" },
  "about.stat4.label": { tr: "Uzman Ekip", en: "Expert Team", ar: "فريق متخصص" },

  // Contact
  "contact.title": { tr: "İletişime Geçin", en: "Get In Touch", ar: "تواصل معنا" },
  "contact.subtitle": { tr: "Sorularınız için bizimle iletişime geçin.", en: "Contact us for any questions.", ar: "اتصل بنا لأي استفسارات." },
  "contact.name": { tr: "Adınız", en: "Your Name", ar: "اسمك" },
  "contact.email": { tr: "E-posta", en: "Email", ar: "البريد الإلكتروني" },
  "contact.phone": { tr: "Telefon", en: "Phone", ar: "الهاتف" },
  "contact.message": { tr: "Mesajınız", en: "Your Message", ar: "رسالتك" },
  "contact.send": { tr: "Mesaj Gönder", en: "Send Message", ar: "إرسال الرسالة" },
  "contact.address": { tr: "İstanbul, Türkiye", en: "Istanbul, Turkey", ar: "إسطنبول، تركيا" },

  // Footer
  "footer.rights": { tr: "Tüm hakları saklıdır.", en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.tagline": { tr: "Gayrimenkul & Danışmanlık", en: "Real Estate & Consulting", ar: "العقارات والاستشارات" },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("tr");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string) => {
    return translations[key]?.[language] || key;
  }, [language]);

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};
