"use client";

import { motion } from "framer-motion";
import { Clock, ChefHat, MapPin, Wrench } from "lucide-react";

const benefits = [
  {
    title: "Pronti in 48 ore",
    description: "Non settimane. Non mesi. Il tuo sito è online in due giorni lavorativi.",
    icon: Clock,
  },
  {
    title: "Pensato per la ristorazione",
    description: "Non siamo generalisti. Facciamo solo siti per chi fa da mangiare.",
    icon: ChefHat,
  },
  {
    title: "Bello e facile da trovare",
    description: "Design professionale e ottimizzazione per posizionarti su Google e Maps.",
    icon: MapPin,
  },
  {
    title: "Tu pensi alla cucina, noi al resto",
    description: "Hosting, aggiornamenti, modifiche e manutenzione. Ci pensiamo noi.",
    icon: Wrench,
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-surface-alt relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
            Perché noi
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">
            Sappiamo di cosa hai bisogno.
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Sappiamo che nel tuo lavoro il tempo è tutto. Ecco perché abbiamo creato un servizio senza pensieri, rapido e di alta qualità artigianale.
          </p>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface/50 border border-foreground/5 rounded-2xl p-8 hover:bg-surface hover:shadow-sm transition-all duration-300"
            >
              <benefit.icon className="w-8 h-8 text-primary stroke-[1.5] mb-5" />
              <h3 className="text-xl font-heading font-medium mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
