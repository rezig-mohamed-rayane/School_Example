import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Islamic Ornament */}
      <motion.div
        animate={{
          rotate: -360,
          y: [0, 20, 0]
        }}
        transition={{
          rotate: { duration: 80, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -top-20 -right-40 w-[600px] h-[600px] opacity-[0.075] pointer-events-none z-0"
      >
        <img src="/images/islamic-ornament.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <div className={`container mx-auto px-4 flex flex-col ${isRTL ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 relative z-10`}>
        <div className={`flex-1 space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
          <h2
            className={`font-bold text-primary
              ${isRTL
                ? "text-3xl md:text-5xl arabic-heading"
                : "text-3xl md:text-5xl font-latin"
              }`}
          >
            {t("about_title")}
          </h2>
          <div className={`w-20 h-1.5 bg-accent rounded-full ${isRTL ? "mr-0" : "ml-0"}`} />
          <p
            className={`text-muted-foreground leading-relaxed indent-4
              ${isRTL
                ? "text-2xl arabic-body"
                : "text-xl md:text-2xl font-latin"
              }`}
          >
            {t("about_text")}
          </p>
        </div>

        <div className="flex-1">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-border">
            <img
              src="/images/halqa.jpg"
              alt="Halqa"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
