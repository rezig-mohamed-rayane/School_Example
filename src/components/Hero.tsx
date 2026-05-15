import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <motion.div
        style={{ rotate }}
        className="absolute inset-0 geometric-pattern opacity-10 pointer-events-none"
      />

      {/* Full Background Zakhrafa */}
      <div className="absolute inset-0 opacity-[0.5] pointer-events-none z-0">
        <img
          src="/images/hero-zakhrafa.jfif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
        <div className="text-center md:text-right space-y-10 w-full">
          {/* Heading - Bold and Large */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight arabic-heading text-primary">
            نُرسّخ حفظ القرآن الكريم <span className="text-accent">جيلاً بعد جيل</span>
          </h1>

          {/* Paragraph - Static */}
          <p className="text-xl md:text-3xl text-muted-foreground arabic-body max-w-2xl leading-relaxed">
            معهد متخصص في تحفيظ القرآن الكريم وعلوم التجويد، نسعى لبناء جيل قرآني متميز يجمع بين الحفظ والتربية والعمل.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 pt-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 text-2xl rounded-2xl shadow-2xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95">
              اكتشف برامجنا
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-10 py-8 text-2xl rounded-2xl transition-transform hover:scale-105 active:scale-95">
              تواصل معنا
            </Button>
          </motion.div>
        </div>

        <motion.div
          style={{ y: y1 }}
          className="relative quran-3d-container hidden md:block -mt-12 md:-mt-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-20, 20, -20],
              rotateY: [-5, 5, -5],
              rotateX: [2, -2, 2]
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="quran-3d preserve-3d"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(93,64,55,0.3)] border-8 border-white/50 backdrop-blur-sm">
              <img
                src="/images/hero-quran.jpg"
                alt="Quran Reading"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* 3D Depth effect layers */}
            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] -translate-z-4 blur-xl opacity-50 pointer-events-none" />
            <div className="absolute inset-0 bg-accent/20 rounded-[2rem] -translate-z-10 blur-2xl opacity-30 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
