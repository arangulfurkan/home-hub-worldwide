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
  "hero.title": { tr: "Avrupa'da Emlak Yatırımı ile Kalıcı Oturum Fırsatı", en: "Permanent Residency Through Real Estate Investment in Europe", ar: "فرصة الإقامة الدائمة من خلال الاستثمار العقاري في أوروبا" },
  "hero.subtitle": { tr: "Gayrimenkul ve danışmanlık alanında uzman ekibimizle kalıcı oturum hayaliniz gerçeğe dönüştürüyoruz.", en: "We turn your permanent residency dream into reality with our expert team in real estate and consulting.", ar: "نحول حلم إقامتك الدائمة إلى حقيقة مع فريقنا المتخصص في العقارات والاستشارات." },
  "hero.cta": { tr: "Ücretsiz Danışmanlık", en: "Free Consultation", ar: "استشارة مجانية" },
  "hero.explore": { tr: "Mülkleri Keşfet", en: "Explore Properties", ar: "استكشف العقارات" },

  // Services
  "services.title": { tr: "Hizmetlerimiz", en: "Our Services", ar: "خدماتنا" },
  "services.subtitle": { tr: "Gayrimenkul ve danışmanlık alanında kapsamlı çözümler sunuyoruz.", en: "We offer comprehensive solutions in real estate and consulting.", ar: "نقدم حلولاً شاملة في مجال العقارات والاستشارات." },
  "services.realestate.title": { tr: "Gayrimenkul Satış", en: "Real Estate Sales", ar: "بيع العقارات" },
  "services.realestate.desc": { tr: "En uygun fiyatlarla premium mülkleri sizin için buluyoruz.", en: "We find premium properties for you at the best prices.", ar: "نجد لك عقارات متميزة بأفضل الأسعار." },
  "services.consulting.title": { tr: "Yatırım Danışmanlığı", en: "Investment Consulting", ar: "استشارات الاستثمار" },
  "services.consulting.desc": { tr: "Gayrimenkul yatırımlarınız için stratejik danışmanlık hizmeti.", en: "Strategic consulting for your real estate investments.", ar: "استشارات استراتيجية لاستثماراتك العقارية." },
  "services.management.title": { tr: "Mülk Yönetimi", en: "Property Management", ar: "إدارة الممتلكات" },
  "services.management.desc": { tr: "Mülklerinizin profesyonel yönetimi ve bakımı.", en: "Professional management and maintenance of your properties.", ar: "إدارة وصيانة احترافية لممتلكاتك." },

  // Properties
  "properties.title": { tr: "Öne Çıkan Mülkler", en: "Featured Properties", ar: "العقارات المميزة" },
  "properties.subtitle": { tr: "Seçkin mülklerimizi keşfedin.", en: "Discover our exclusive properties.", ar: "اكتشف عقاراتنا الحصرية." },
  "properties.contact": { tr: "İletişime Geçin", en: "Contact Us", ar: "اتصل بنا" },

  // Visa Consulting
  "visa.title": { tr: "Vize Danışmanlığı", en: "Visa Consulting", ar: "استشارات التأشيرات" },
  "visa.subtitle": { tr: "Tüm vize süreçlerinizde profesyonel destek sunuyoruz.", en: "We provide professional support for all your visa processes.", ar: "نقدم دعمًا احترافيًا لجميع إجراءات التأشيرات الخاصة بك." },
  "visa.tourist.title": { tr: "Turist Vizesi", en: "Tourist Visa", ar: "تأشيرة سياحية" },
  "visa.tourist.desc": { tr: "Seyahat planlarınız için hızlı ve kolay turist vizesi başvuru desteği.", en: "Fast and easy tourist visa application support for your travel plans.", ar: "دعم سريع وسهل لطلبات تأشيرة السياحة لخطط سفرك." },
  "visa.golden.title": { tr: "Altın Vize", en: "Golden Visa", ar: "التأشيرة الذهبية" },
  "visa.golden.desc": { tr: "Yatırım yoluyla altın vize ve oturma izni başvuru süreçlerinde uzman rehberlik.", en: "Expert guidance on golden visa and residence permit through investment programs.", ar: "إرشاد متخصص في برامج التأشيرة الذهبية والإقامة عن طريق الاستثمار." },
  "visa.residence.title": { tr: "İkamet İzni", en: "Residence Permit", ar: "تصريح إقامة" },
  "visa.residence.desc": { tr: "İkamet izni başvurusu ve yenileme işlemlerinde destek.", en: "Support for residence permit applications and renewals.", ar: "دعم في طلبات تصريح الإقامة والتجديد." },
  "visa.student.title": { tr: "Öğrenci Vizesi", en: "Student Visa", ar: "تأشيرة طالب" },
  "visa.student.desc": { tr: "Eğitim vizesi ve kabul süreçlerinde danışmanlık.", en: "Consulting for student visa and admission processes.", ar: "استشارات في إجراءات تأشيرة الطالب والقبول." },
  "visa.feature.trust": { tr: "Güvenilir Süreç", en: "Trusted Process", ar: "عملية موثوقة" },
  "visa.feature.fast": { tr: "Hızlı Sonuç", en: "Fast Results", ar: "نتائج سريعة" },
  "visa.feature.support": { tr: "7/24 Destek", en: "24/7 Support", ar: "دعم على مدار الساعة" },

  // Contact
  "contact.title": { tr: "İletişime Geçin", en: "Get In Touch", ar: "تواصل معنا" },
  "contact.subtitle": { tr: "Sorularınız için bizimle iletişime geçin.", en: "Contact us for any questions.", ar: "اتصل بنا لأي استفسارات." },
  "contact.name": { tr: "Adınız", en: "Your Name", ar: "اسمك" },
  "contact.email": { tr: "E-posta", en: "Email", ar: "البريد الإلكتروني" },
  "contact.phone": { tr: "Telefon", en: "Phone", ar: "الهاتف" },
  "contact.message": { tr: "Mesajınız", en: "Your Message", ar: "رسالتك" },
  "contact.send": { tr: "Mesaj Gönder", en: "Send Message", ar: "إرسال الرسالة" },
  "contact.address": { tr: "Riga, Letonya", en: "Riga, Latvia", ar: "ريغا، لاتفيا" },

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