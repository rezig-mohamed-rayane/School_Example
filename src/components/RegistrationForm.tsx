import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/lib/LanguageContext";

export default function RegistrationForm() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-primary p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />

          <div className="text-center text-primary-foreground space-y-4 mb-10 relative z-10">
            <h2
              className={`font-bold
                ${isRTL
                  ? "text-3xl md:text-5xl arabic-heading"
                  : "text-3xl md:text-5xl font-latin"
                }`}
            >
              {t("reg_title")}
            </h2>
            <p
              className={`opacity-80
                ${isRTL
                  ? "text-xl arabic-body"
                  : "text-lg md:text-xl font-latin"
                }`}
            >
              {t("reg_subtitle")}
            </p>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className={`text-primary-foreground block
                  ${isRTL
                    ? "text-lg arabic-body text-right"
                    : "text-lg font-latin text-left"
                  }`}
              >
                {t("reg_name")}
              </Label>
              <Input
                id="name"
                placeholder={t("reg_name_placeholder")}
                className={`bg-white/10 border-white/20 text-white h-14 rounded-xl placeholder:text-white/40 text-base
                  ${isRTL ? "text-right" : "text-left font-latin"}`}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className={`text-primary-foreground block
                  ${isRTL
                    ? "text-lg arabic-body text-right"
                    : "text-lg font-latin text-left"
                  }`}
              >
                {t("reg_phone")}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0XXXXXXXXX"
                className={`bg-white/10 border-white/20 text-white h-14 rounded-xl placeholder:text-white/40 text-base font-latin
                  ${isRTL ? "text-right" : "text-left"}`}
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="program"
                className={`text-primary-foreground block
                  ${isRTL
                    ? "text-lg arabic-body text-right"
                    : "text-lg font-latin text-left"
                  }`}
              >
                {t("reg_program")}
              </Label>
              <Select>
                <SelectTrigger
                  className={`bg-white/10 border-white/20 text-white h-14 rounded-xl text-base
                    ${isRTL ? "flex-row-reverse" : "flex-row font-latin"}`}
                >
                  <SelectValue placeholder={t("reg_program_select")} />
                </SelectTrigger>
                <SelectContent className="bg-white text-primary">
                  <SelectItem value="hifz" className={isRTL ? "" : "font-latin"}>{t("program_hifz_title")}</SelectItem>
                  <SelectItem value="tajweed" className={isRTL ? "" : "font-latin"}>{t("program_tajweed_title")}</SelectItem>
                  <SelectItem value="islamic" className={isRTL ? "" : "font-latin"}>{t("program_islamic_title")}</SelectItem>
                  <SelectItem value="kids" className={isRTL ? "" : "font-latin"}>{t("program_kids_title")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className={`w-full h-16 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl shadow-xl shadow-accent/20 transition-transform hover:scale-[1.02]
                ${isRTL
                  ? "text-2xl arabic-body"
                  : "text-xl md:text-2xl font-latin"
                }`}
            >
              {t("reg_submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
