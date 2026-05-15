import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">ف</span>
          </div>
          <span className="text-xl font-bold arabic-heading text-primary">معهد الفرقان</span>
        </div>

        <div className="hidden md:flex items-center gap-8 px-6 py-2 bg-muted/30 rounded-full">
          <a href="#" className="font-medium hover:text-accent transition-colors">الرئيسية</a>
          <a href="#about" className="font-medium hover:text-accent transition-colors">عن المعهد</a>
          <a href="#programs" className="font-medium hover:text-accent transition-colors">البرامج</a>
          <a href="#contact" className="font-medium hover:text-accent transition-colors">تواصل معنا</a>
        </div>

        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6 shadow-lg shadow-accent/20">
          سجّل الآن
        </Button>
      </div>
    </nav>
  );
}
