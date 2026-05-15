import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Mic2, Star, Users } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";

function TiltCard({ program, index }: { program: any; index: number; key?: React.Key }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();

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
        <Card className="border-0.5 shadow-xl hover:shadow-[0_20px_50px_rgba(93,64,55,0.2)] transition-shadow bg-background h-full group preserve-3d">
          <CardHeader className="pt-8 pb-4 preserve-3d">
            <motion.div
              style={{ translateZ: "50px" }}
              className="w-16 h-16 border-0.5 border-accent/20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 transition-transform group-hover:scale-110"
            >
              <div className="group-hover:animate-bounce">
                {program.icon}
              </div>
            </motion.div>
            <CardTitle
              style={{ translateZ: "40px" }}
              className="flex justify-center md:justify-start"
            >
              <h3 className={`font-bold text-primary min-h-[4rem] flex items-center
                ${isRTL
                  ? "text-2xl arabic-heading text-center md:text-right md:justify-end"
                  : "text-2xl font-latin text-center md:text-left md:justify-start"
                }`}>
                {program.title}
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="preserve-3d">
            <p
              style={{ translateZ: "30px" }}
              className={`text-muted-foreground leading-relaxed text-center indent-4
                ${isRTL
                  ? "text-lg arabic-body md:text-right"
                  : "text-lg font-latin md:text-left"
                }`}
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
  const { t, isRTL } = useLanguage();
  const programs = [
    {
      title: t("program_hifz_title"),
      description: t("program_hifz_desc"),
      icon: <BookOpen className="w-10 h-10 text-accent" />,
    },
    {
      title: t("program_tajweed_title"),
      description: t("program_tajweed_desc"),
      icon: <Mic2 className="w-10 h-10 text-accent" />,
    },
    {
      title: t("program_islamic_title"),
      description: t("program_islamic_desc"),
      icon: <Star className="w-10 h-10 text-accent" />,
    },
    {
      title: t("program_kids_title"),
      description: t("program_kids_desc"),
      icon: <Users className="w-10 h-10 text-accent" />,
    },
  ];

  return (
    <section id="programs" className="py-32 bg-background relative overflow-hidden">


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <h2
            className={`font-bold text-primary
              ${isRTL
                ? "text-4xl md:text-6xl arabic-heading"
                : "text-4xl md:text-6xl font-latin"
              }`}
          >
            {t("programs_title")}
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
          <p
            className={`text-muted-foreground max-w-3xl mx-auto
              ${isRTL
                ? "text-xl md:text-2xl arabic-body"
                : "text-lg md:text-2xl font-latin"
              }`}
          >
            {t("programs_subtitle")}
          </p>
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
