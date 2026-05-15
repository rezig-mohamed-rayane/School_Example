import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav-scrolled py-2" : "glass-nav py-4"}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">{isRTL ? "ف" : "F"}</span>
          </div>
          <span className={`font-bold text-primary ${isRTL ? "text-xl arabic-heading" : "text-xl font-latin"}`}>
            {t("nav_home") === "Home" || t("nav_home") === "Accueil" ? "Al-Furqan" : "معهد الفرقان"}
          </span>
        </div>

        {/* Nav links */}
        <div className={`hidden md:flex items-center gap-8 px-6 py-2 bg-muted/30 rounded-full ${isRTL ? "text-lg arabic-body" : "text-base font-latin"}`}>
          <a href="#" className="font-medium hover:text-accent transition-colors">{t("nav_home")}</a>
          <a href="#about" className="font-medium hover:text-accent transition-colors">{t("nav_about")}</a>
          <a href="#programs" className="font-medium hover:text-accent transition-colors">{t("nav_programs")}</a>
          <a href="#footer" className="font-medium hover:text-accent transition-colors">{t("nav_contact")}</a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">

          {/* Language picker */}
          <div className="w-32">
            <Select value={language} onValueChange={(val: any) => setLanguage(val)}>
              <SelectTrigger className={`bg-transparent border-none focus:ring-0 gap-2 ${language !== 'ar' ? 'font-latin' : ''}`}>
                <Globe className="w-4 h-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="en" className="font-latin">English</SelectItem>
                <SelectItem value="fr" className="font-latin">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6 shadow-lg shadow-accent/20 ${isRTL ? "text-lg arabic-body" : "text-base font-latin"}`}
          >
            {t("nav_register")}
          </Button>
        </div>
      </div>
    </nav>
  );
}
