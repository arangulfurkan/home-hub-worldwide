import { useI18n } from "@/lib/i18n";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("contact.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
              const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
              const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
              const mailtoLink = `mailto:goldenpasseu@gmail.com?subject=İletişim: ${encodeURIComponent(name)}&body=${encodeURIComponent(`Ad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\n\nMesaj:\n${message}`)}`;
              window.open(mailtoLink, "_blank");
            }}>
            <input type="text" name="name" required placeholder={t("contact.name")} className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="email" name="email" required placeholder={t("contact.email")} className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" />
              <input type="tel" name="phone" placeholder={t("contact.phone")} className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm" />
            </div>
            <textarea rows={5} name="message" required placeholder={t("contact.message")} className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm resize-none" />
            <button type="submit" className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm tracking-wide">
              {t("contact.send")}
            </button>
          </form>
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-foreground text-sm">Golden Pass EU Danışmanlık</div>
                <div className="text-muted-foreground text-sm">{t("contact.address")}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <div className="text-muted-foreground text-sm">+371 20810111</div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <div className="text-muted-foreground text-sm">goldenpasseu@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;