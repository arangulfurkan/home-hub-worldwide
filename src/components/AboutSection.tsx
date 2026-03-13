import { useI18n } from "@/lib/i18n";

const AboutSection = () => {
  const { t } = useI18n();

  const stats = [
    { num: t("about.stat1.number"), label: t("about.stat1.label") },
    { num: t("about.stat2.number"), label: t("about.stat2.label") },
    { num: t("about.stat3.number"), label: t("about.stat3.label") },
    { num: t("about.stat4.number"), label: t("about.stat4.label") },
  ];

  return (
    <section id="about" className="py-24 bg-warm-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-dark-foreground mb-4">{t("about.title")}</h2>
        <p className="text-warm-dark-foreground/70 max-w-xl mx-auto mb-16">{t("about.subtitle")}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">{s.num}</div>
              <div className="text-warm-dark-foreground/70 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
