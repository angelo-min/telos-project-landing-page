"use client";

import { motion } from "framer-motion";
import { PhoneCall, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Ci racconti il tuo locale",
    description: "Una chiamata di 15 minuti + le tue foto migliori. Pensiamo a tutto noi.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Creiamo il tuo sito",
    description: "In 48 ore ti mostriamo una prima versione. Lo rivediamo insieme.",
    icon: Code2,
  },
  {
    id: 3,
    title: "Sei online",
    description: "Pubblichiamo il sito, configuriamo Google, e il tuo locale è visibile a tutti.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="come-funziona" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
            Il processo
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
            Come funziona
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[1px] bg-foreground/10 border-t border-dashed border-foreground/30 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-background border border-foreground/10 shadow-sm flex items-center justify-center mb-8 relative">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold font-sans">
                  {step.id}
                </span>
                <step.icon className="w-8 h-8 text-foreground/80 stroke-[1.5]" />
              </div>
              
              <h3 className="text-2xl font-heading font-medium mb-3">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
