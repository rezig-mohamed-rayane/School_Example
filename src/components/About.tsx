import { motion } from "motion/react";

export default function About() {
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
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] opacity-[0.075] pointer-events-none z-0"
      >
        <img src="/images/islamic-ornament.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold arabic-heading text-primary">عن المعهد</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full" />
          <p className="text-xl text-muted-foreground arabic-body leading-relaxed">
            معهد الفرقان القرآني هو مؤسسة تعليمية رائدة في الجزائر، تهدف إلى خدمة كتاب الله تعالى من خلال توفير بيئة تعليمية متكاملة تجمع بين الأصالة والمعاصرة. نركز على بناء القدوة الصالحة وتحفيظ القرآن الكريم بإتقان مع فهم مقاصده وعلومه.
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
