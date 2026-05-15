import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";

function Counter({ value, label }: { value: string; label: string; key?: React.Key }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const { isRTL } = useLanguage();

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    `+${Math.round(current)}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return (
    <div ref={ref} className="text-center text-primary-foreground space-y-4">
      <motion.div
        className={`font-bold text-accent perspective-1000
          ${isRTL
            ? "text-5xl md:text-7xl arabic-heading"
            : "text-5xl md:text-7xl font-latin"
          }`}
      >
        <motion.span
          initial={{ rotateX: 90, opacity: 0 }}
          animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block"
        >
          {display}
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`opacity-90
          ${isRTL
            ? "text-2xl arabic-body"
            : "text-xl md:text-2xl font-latin"
          }`}
      >
        {label}
      </motion.div>
    </div>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const stats = [
    { number: "+500", label: t("stats_students") },
    { number: "+20",  label: t("stats_teachers") },
    { number: "+10",  label: t("stats_years") },
  ];

  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none geometric-pattern" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <Counter key={index} value={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
