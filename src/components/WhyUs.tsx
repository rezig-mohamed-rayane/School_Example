import { CheckCircle2, Award, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/LanguageContext";

export default function WhyUs() {
  const { t, isRTL } = useLanguage();
  const features = [
    {
      title: t("why_curriculum_title"),
      description: t("why_curriculum_desc"),
      icon: <Award className="w-12 h-12 text-accent" />,
    },
    {
      title: t("why_teachers_title"),
      description: t("why_teachers_desc"),
      icon: <CheckCircle2 className="w-12 h-12 text-accent" />,
    },
    {
      title: t("why_env_title"),
      description: t("why_env_desc"),
      icon: <Heart className="w-12 h-12 text-accent" />,
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`font-bold text-primary
              ${isRTL
                ? "text-4xl md:text-6xl arabic-heading"
                : "text-4xl md:text-6xl font-latin"
              }`}
          >
            {t("why_title")}
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-6 bg-primary rounded-[2rem] shadow-2xl shadow-primary/20 transition-all group-hover:shadow-accent/30"
              >
                {feature.icon}
              </motion.div>
              <h3
                className={`font-bold text-primary
                  ${isRTL
                    ? "text-3xl arabic-heading"
                    : "text-2xl md:text-3xl font-latin"
                  }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-muted-foreground leading-relaxed max-w-sm
                  ${isRTL
                    ? "text-xl arabic-body"
                    : "text-lg md:text-xl font-latin"
                  }`}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
