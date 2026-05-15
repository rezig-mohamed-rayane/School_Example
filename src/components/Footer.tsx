import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center rounded-lg font-bold text-xl">ف</div>
              <span className="text-2xl font-bold arabic-heading">معهد الفرقان</span>
            </div>
            <p className="arabic-body text-lg opacity-80 leading-relaxed">
              نحن مؤسسة تعليمية تطمح لخدمة كتاب الله ونشر علومه في الجزائر بأسلوب تربوي متميز.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold arabic-heading text-accent">روابط سريعة</h3>
            <ul className="space-y-4 arabic-body text-lg opacity-90">
              <li><a href="#" className="hover:text-accent transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">عن المعهد</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">البرامج</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">سجل الآن</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold arabic-heading text-accent">تواصل معنا</h3>
            <ul className="space-y-4 arabic-body text-lg opacity-90">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>حي الرياض، الجزائر العاصمة</span>
              </li>
              <li className="flex items-center gap-3" dir="ltr">
                <Phone className="w-5 h-5 text-accent" />
                <span>+213 (0) XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>contact@al-furqan.dz</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold arabic-heading text-accent">تابعنا</h3>
            <div className="flex gap-4">
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

        <div className="pt-8 border-t border-white/10 text-center opacity-60 arabic-body">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} معهد الفرقان القرآني - الجزائر</p>
        </div>
      </div>
    </footer>
  );
}
