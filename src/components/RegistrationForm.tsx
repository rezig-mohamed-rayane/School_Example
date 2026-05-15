import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RegistrationForm() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-primary p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          
          <div className="text-center text-primary-foreground space-y-4 mb-10 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold arabic-heading">انضم إلينا الآن</h2>
            <p className="text-xl arabic-body opacity-80">سجل بياناتك وسنتواصل معك قريباً لتحديد موعد الاختبار</p>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary-foreground text-lg arabic-body">الاسم الكامل</Label>
              <Input id="name" placeholder="أدخل اسمك الكريم" className="bg-white/10 border-white/20 text-white h-14 rounded-xl placeholder:text-white/40" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary-foreground text-lg arabic-body">رقم الهاتف</Label>
              <Input id="phone" type="tel" placeholder="0XXXXXXXXX" className="bg-white/10 border-white/20 text-white h-14 rounded-xl placeholder:text-white/40" dir="ltr" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="program" className="text-primary-foreground text-lg arabic-body text-right block">البرنامج المطلوب</Label>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-14 rounded-xl">
                  <SelectValue placeholder="اختر البرنامج" />
                </SelectTrigger>
                <SelectContent className="bg-white text-primary">
                  <SelectItem value="hifz">حفظ القرآن الكريم</SelectItem>
                  <SelectItem value="tajweed">التجويد والتلاوة</SelectItem>
                  <SelectItem value="islamic">التربية الإسلامية</SelectItem>
                  <SelectItem value="kids">برنامج الأطفال</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full h-16 bg-accent hover:bg-accent/90 text-accent-foreground text-2xl font-bold rounded-xl shadow-xl shadow-accent/20 transition-transform hover:scale-[1.02]">
              إرسال الطلب
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
