"use client";

import { motion } from "framer-motion";
import { PhoneCall, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Ci mandi menu e foto",
    description: "Mandaci il tuo menu e qualche foto del locale su WhatsApp. Basta quello, ci pensiamo noi.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "In 48 ore è pronto",
    description: "Ti mandiamo il link di anteprima. Lo guardi, ci dici se va bene, e siamo online.",
    icon: Code2,
  },
  {
    id: 3,
    title: "I clienti ti trovano",
    description: "Il tuo menu è su Google, il QR code è sui tavoli, le prenotazioni arrivano su WhatsApp.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="come-funziona" className="py-24 bg-surface text-foreground border-t border-foreground/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
            Come funziona
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
            Nessuna complicazione.{" "}
            <span className="italic">Facciamo tutto noi.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative lg:px-8">
          <div className="hidden md:block absolute top-[28%] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent -z-10" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-foreground/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 relative">
                    <Icon className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
                    <span className="absolute -top-3 -right-3 text-xs font-bold text-white bg-primary w-6 h-6 rounded-full flex items-center justify-center">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-sm max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
