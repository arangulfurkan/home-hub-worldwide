import { useState } from "react";
import { useI18n, Language } from "@/lib/i18n";
import { Menu, X, Globe } from "lucide-react";

const languages: { code: Language; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

const Navbar = () => {
  const { t, language, setLanguage } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = ["home", "services", "properties", "about", "contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("home")} className="font-display text-xl font-bold text-primary tracking-wide">
          ATLAS<span className="text-accent">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {t(`nav.${item}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors p-2 rounded-md">
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute top-full end-0 mt-1 bg-card border border-border rounded-md shadow-lg overflow-hidden min-w-[80px]">
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    className={`block w-full px-4 py-2 text-sm text-start hover:bg-muted transition-colors ${language === lang.code ? "bg-muted font-semibold text-primary" : "text-foreground"}`}>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-foreground">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="block w-full text-start py-3 text-foreground/80 hover:text-primary transition-colors font-medium">
              {t(`nav.${item}`)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
