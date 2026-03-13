import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-property.jpg";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-warm-dark/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-warm-dark-foreground mb-6 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-warm-dark-foreground/80 max-w-2xl mx-auto mb-10 font-body">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-colors text-sm tracking-wide">
            {t("hero.cta")}
          </button>
          <button onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-warm-dark-foreground/40 text-warm-dark-foreground font-semibold rounded-md hover:bg-warm-dark-foreground/10 transition-colors text-sm tracking-wide">
            {t("hero.explore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
