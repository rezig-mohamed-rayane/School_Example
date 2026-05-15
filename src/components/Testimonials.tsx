import React from "react";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number; key?: React.Key }) {
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
          <Quote className="w-12 h-12 text-accent/20 absolute -top-4 -right-4" />
          <p className="text-xl md:text-2xl arabic-body italic leading-relaxed text-primary pt-4">
            "{testimonial.text}"
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="h-px bg-border/50 w-full" />
          <div className="flex flex-col items-start text-right">
            <h3 className="text-xl md:text-2xl font-bold arabic-heading text-accent group-hover:text-primary transition-colors">{testimonial.name}</h3>
            <p className="text-primary-foreground/60 arabic-body">{testimonial.country} | خريج المعهد</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "أحمد بن محمد",
      country: "الجزائر",
      text: "بفضل الله ثم هذا المعهد المبارك، تمكنت من حفظ القرآن الكريم في عامين مع ضبط كامل للتجويد.",
    },
    {
      name: "سارة الجزائرية",
      country: "الجزائر",
      text: "البرنامج الخاص بالأطفال رائع جداً، ابني يحب الذهاب للمعهد وقد تغيرت أخلاقه كثيراً نحو الأفضل.",
    },
  ];

  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-bold arabic-heading text-primary mb-6">شهادات روادنا</h2>
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
