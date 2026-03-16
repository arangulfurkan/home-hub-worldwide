import { useI18n } from "@/lib/i18n";
import { Plane, Award, Globe, Clock, ShieldCheck, Users } from "lucide-react";

const visaServices = [
  { key: "tourist", icon: Plane },
  { key: "golden", icon: Award },
  { key: "residence", icon: Globe },
  { key: "student", icon: Users },
];

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-warm-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-dark-foreground mb-4">{t("visa.title")}</h2>
          <p className="text-warm-dark-foreground/70 max-w-xl mx-auto">{t("visa.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {visaServices.map(({ key, icon: Icon }) => (
            <div key={key} className="bg-warm-dark-foreground/5 border border-warm-dark-foreground/10 rounded-lg p-8 hover:bg-warm-dark-foreground/10 transition-colors text-center">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-warm-dark-foreground mb-3">{t(`visa.${key}.title`)}</h3>
              <p className="text-warm-dark-foreground/60 text-sm leading-relaxed">{t(`visa.${key}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: ShieldCheck, key: "trust" },
            { icon: Clock, key: "fast" },
            { icon: Users, key: "support" },
          ].map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-accent" />
              <span className="text-warm-dark-foreground/80 text-sm font-medium">{t(`visa.feature.${key}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;