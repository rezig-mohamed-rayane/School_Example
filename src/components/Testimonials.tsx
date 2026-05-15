import React from "react";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number; key?: React.Key }) {
  const { t, isRTL } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="h-full min-h-[300px]"
    >
      <motion.div
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
        }}
        transition={{ duration: 0.3 }}
        className="w-full h-full bg-background p-10 rounded-[2rem] shadow-xl border border-border flex flex-col justify-between cursor-pointer group"
      >
        <div className="relative">
          <Quote className={`w-12 h-12 text-accent/20 absolute -top-4 ${isRTL ? "-right-4" : "-left-4"}`} />
          <p
            className={`italic leading-relaxed text-primary pt-4
              ${isRTL
                ? "text-xl md:text-2xl arabic-body text-right"
                : "text-lg md:text-xl font-latin text-left"
              }`}
          >
            "{testimonial.text}"
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="h-px bg-border/50 w-full" />
          <div className={`flex flex-col ${isRTL ? "items-start text-right" : "items-end text-left"}`}>
            <h3
              className={`font-bold text-accent group-hover:text-primary transition-colors
                ${isRTL
                  ? "text-xl md:text-2xl arabic-heading"
                  : "text-xl md:text-2xl font-latin"
                }`}
            >
              {testimonial.name} - {testimonial.country}
            </h3>
            <p
              className={`text-primary-foreground/60
                ${isRTL
                  ? "text-base arabic-body"
                  : "text-base font-latin"
                }`}
            >
              {t("testi_graduate")}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const { t, isRTL } = useLanguage();
  const testimonials = [
    {
      name: t("testi_1_name"),
      country: t("testi_1_country"),
      text: t("testi_1_text"),
    },
    {
      name: t("testi_2_name"),
      country: t("testi_2_country"),
      text: t("testi_2_text"),
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5 pointer-events-none" />

      {/* Animated Islamic Ornament */}
      <motion.div
        animate={{
          rotate: 360,
          x: [0, 15, 0]
        }}
        transition={{
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -top-30 -left-40 w-[600px] h-[600px] opacity-[0.075] pointer-events-none z-0"
      >
        <img src="/images/islamic-ornament.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className={`font-bold text-primary mb-6
              ${isRTL
                ? "text-4xl md:text-6xl arabic-heading"
                : "text-4xl md:text-6xl font-latin"
              }`}
          >
            {t("testimonials_title")}
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
