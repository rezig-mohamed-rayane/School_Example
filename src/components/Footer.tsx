import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer id="footer" className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className={`md:col-span-1 space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row" : "flex-row-reverse justify-end"}`}>
              <div className="w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center rounded-lg font-bold text-xl">
                {isRTL ? "ف" : "F"}
              </div>
              <span className={`text-2xl font-bold ${isRTL ? "arabic-heading" : "font-latin"}`}>
                {isRTL ? "معهد الفرقان" : "Al-Furqan"}
              </span>
            </div>
            <p className={`${isRTL ? "arabic-body text-lg" : "font-latin text-lg"} opacity-80 leading-relaxed indent-2`}>
              {t("footer_desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="space-y-2">
              <h3 className={`font-bold text-accent ${isRTL ? "text-xl arabic-heading" : "text-xl font-latin"}`}>
                {t("footer_quick_links")}
              </h3>
              <div className={`w-12 h-1 bg-accent/40 rounded-full ${isRTL ? "ml-auto" : "mr-auto"}`} />
            </div>
            <ul className={`space-y-4 opacity-90 ${isRTL ? "arabic-body text-lg" : "font-latin text-lg"}`}>
              <li><a href="#" className="hover:text-accent transition-colors">{t("nav_home")}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{t("nav_about")}</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">{t("nav_programs")}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{t("nav_register")}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="space-y-2">
              <h3 className={`font-bold text-accent ${isRTL ? "text-xl arabic-heading" : "text-xl font-latin"}`}>
                {t("footer_contact")}
              </h3>
              <div className={`w-12 h-1 bg-accent/40 rounded-full ${isRTL ? "ml-auto" : "mr-auto"}`} />
            </div>
            <ul className={`space-y-4 opacity-90 ${isRTL ? "arabic-body text-lg" : "font-latin text-lg"}`}>
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row" : "flex-row-reverse justify-end"}`}>
                <MapPin className="w-5 h-5 text-accent" />
                <span>{t("footer_location")}</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row" : "flex-row-reverse justify-end"}`}>
                <Phone className="w-5 h-5 text-accent" />
                <span dir="ltr">+213 (0) XX XX XX XX</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? "flex-row" : "flex-row-reverse justify-end"}`}>
                <Mail className="w-5 h-5 text-accent" />
                <span>contact@al-furqan.dz</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
            <div className="space-y-2">
              <h3 className={`font-bold text-accent ${isRTL ? "text-xl arabic-heading" : "text-xl font-latin"}`}>
                {t("footer_follow")}
              </h3>
              <div className={`w-12 h-1 bg-accent/40 rounded-full ${isRTL ? "ml-auto" : "mr-auto"}`} />
            </div>
            <div className="flex gap-4 justify-start">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t border-white/10 text-center opacity-60 ${isRTL ? "arabic-body text-base" : "font-latin text-base"}`}>
          <p>
            {t("footer_rights")} &copy; {new Date().getFullYear()}{" "}
            {isRTL ? "معهد الفرقان القرآني - الجزائر" : "Al-Furqan Quranic Institute - Algeria"}
          </p>
        </div>
      </div>
    </footer>
  );
}
