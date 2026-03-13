import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold text-primary">
          ATLAS<span className="text-accent">.</span>
          <span className="text-muted-foreground text-xs font-body ms-2">{t("footer.tagline")}</span>
        </div>
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} ATLAS. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
