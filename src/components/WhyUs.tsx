import { CheckCircle2, Award, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function WhyUs() {
  const features = [
    {
      title: "منهج معتمد",
      description: "نتبع مناهج تعليمية رصينة ومعتمدة تضمن التدرج والرسوخ في التعلم.",
      icon: <Award className="w-12 h-12 text-accent" />,
    },
    {
      title: "أساتذة متخصصون",
      description: "نخبة من المشايخ والأساتذة المجازين ذوي الخبرة الطويلة في الحقل القرآني.",
      icon: <CheckCircle2 className="w-12 h-12 text-accent" />,
    },
    {
      title: "أجواء تربوية",
      description: "بيئة محفزة تساعد على الحفظ والتعلم مع رعاية تربوية مستمرة لكل طالب.",
      icon: <Heart className="w-12 h-12 text-accent" />,
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute inset-0 opacity-[0.30] pointer-events-none z-0">
        <img
          src="/images/zakhrafa4.jfif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold arabic-heading text-primary">لماذا نحن؟</h2>
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
              <h3 className="text-3xl font-bold arabic-heading text-primary">{feature.title}</h3>
              <p className="text-xl text-muted-foreground arabic-body leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
