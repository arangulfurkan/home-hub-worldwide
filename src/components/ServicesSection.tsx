import { useI18n } from "@/lib/i18n";
import { Home, TrendingUp, Scale, Settings } from "lucide-react";

const services = [
  { key: "realestate", icon: Home },
  { key: "consulting", icon: TrendingUp },
  { key: "legal", icon: Scale },
  { key: "management", icon: Settings },
];

const ServicesSection = () => {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("services.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ key, icon: Icon }) => (
            <div key={key} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{t(`services.${key}.title`)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(`services.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
