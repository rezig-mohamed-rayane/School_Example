import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Mic2, Star, Users } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function TiltCard({ program, index }: { program: any; index: number; key?: React.Key }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        <Card className="border-none shadow-xl hover:shadow-[0_20px_50px_rgba(201,168,76,0.2)] transition-shadow bg-background h-full group preserve-3d">
          <CardHeader className="pt-8 pb-4 preserve-3d">
            <motion.div
              style={{ translateZ: "50px" }}
              className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 transition-transform group-hover:scale-110"
            >
              <div className="group-hover:animate-bounce">
                {program.icon}
              </div>
            </motion.div>
            <CardTitle
              style={{ translateZ: "40px" }}
              className="text-2xl font-bold arabic-heading text-primary text-center md:text-right"
            >
              {program.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="preserve-3d">
            <p
              style={{ translateZ: "30px" }}
              className="text-muted-foreground arabic-body leading-relaxed text-center md:text-right text-lg"
            >
              {program.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function Programs() {
  const programs = [
    {
      title: "حفظ القرآن الكريم",
      description: "برنامج مكثف للحفظ والمراجعة مع نخبة من القراء، متاح لمختلف الفئات العمرية.",
      icon: <BookOpen className="w-10 h-10 text-accent" />,
    },
    {
      title: "التجويد والتلاوة",
      description: "دروس نظرية وتطبيقية في أحكام التجويد لتحسين الأداء الصوتي وإتقان التلاوة.",
      icon: <Mic2 className="w-10 h-10 text-accent" />,
    },
    {
      title: "التربية الإسلامية",
      description: "تعزيز القيم والأخلاق الإسلامية وتدريس الفقه والسيرة النبوية بأسلوب ميسر.",
      icon: <Star className="w-10 h-10 text-accent" />,
    },
    {
      title: "برنامج الأطفال",
      description: "منهج خاص للأطفال يجمع بين الحفظ واللعب والتربية في بيئة محببة.",
      icon: <Users className="w-10 h-10 text-accent" />,
    },
  ];

  return (
    <section id="programs" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative Zakhrafa */}
      <div className="absolute top-0 left-0 w-full h-64 opacity-10 pointer-events-none overflow-hidden">
        <img 
          src="/images/zakhrafa4.jfif" 
          alt="" 
          className="w-full h-full object-cover transform -rotate-180" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold arabic-heading text-primary">برامجنا التعليمية</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground arabic-body max-w-3xl mx-auto">نقدم مجموعة متنوعة من البرامج المصممة لتناسب احتياجات جميع رواد المعهد.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {programs.map((program, index) => (
            <TiltCard key={index} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
