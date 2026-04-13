"use client";

import { motion } from "framer-motion";
import { Clock, ChefHat, MapPin, Wrench } from "lucide-react";

const benefits = [
  {
    title: "Basta telefonate per il menu",
    description: "I tuoi clienti vedono menu, orari e prezzi dal telefono. Non devono più chiamarti per chiedere.",
    icon: Clock,
  },
  {
    title: "Prenotazioni senza commissioni",
    description: "Il cliente ti scrive su WhatsApp. Niente TheFork, niente commissioni a coperto, niente sconti obbligati.",
    icon: ChefHat,
  },
  {
    title: "Ti trovano su Google",
    description: "Quando qualcuno cerca dove mangiare nella tua zona, il tuo ristorante esce con menu, foto e bottone per chiamare.",
    icon: MapPin,
  },
  {
    title: "QR code per i tavoli",
    description: "Ti diamo un QR code da stampare. Il cliente lo inquadra e vede il menu dal telefono. Sempre aggiornato.",
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
