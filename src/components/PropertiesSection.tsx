import { useI18n } from "@/lib/i18n";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";

const properties = [
  { img: prop1, location: { tr: "Riga Merkez, Letonya", en: "Riga Center, Latvia", ar: "وسط ريغا، لاتفيا" } },
  { img: prop2, location: { tr: "Jūrmala, Letonya", en: "Jūrmala, Latvia", ar: "يورمالا، لاتفيا" } },
  { img: prop3, location: { tr: "Vecriga, Letonya", en: "Old Riga, Latvia", ar: "ريغا القديمة، لاتفيا" } },
];

const PropertiesSection = () => {
  const { t, language } = useI18n();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="properties" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("properties.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("properties.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <div
              key={i}
              onClick={scrollToContact}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={prop.img} alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">{prop.location[language]}</h3>
                <span className="text-accent text-sm font-medium hover:underline">{t("properties.contact")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;