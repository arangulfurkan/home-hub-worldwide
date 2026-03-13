import { useI18n } from "@/lib/i18n";
import { Bed, Bath, Maximize } from "lucide-react";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";

const properties = [
  { img: prop1, price: "$450,000", beds: 3, baths: 2, area: 185, location: { tr: "Beşiktaş, İstanbul", en: "Beşiktaş, Istanbul", ar: "بشكتاش، إسطنبول" } },
  { img: prop2, price: "$320,000", beds: 4, baths: 3, area: 240, location: { tr: "Kadıköy, İstanbul", en: "Kadıköy, Istanbul", ar: "قاضي كوي، إسطنبول" } },
  { img: prop3, price: "$680,000", beds: 5, baths: 4, area: 310, location: { tr: "Sarıyer, İstanbul", en: "Sarıyer, Istanbul", ar: "صاري يار، إسطنبول" } },
];

const PropertiesSection = () => {
  const { t, language } = useI18n();

  return (
    <section id="properties" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("properties.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("properties.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <img src={prop.img} alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 start-4 bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-semibold">
                  {prop.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{prop.location[language]}</h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mt-3">
                  <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {prop.beds} {t("properties.beds")}</span>
                  <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {prop.baths} {t("properties.baths")}</span>
                  <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {prop.area} {t("properties.area")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
