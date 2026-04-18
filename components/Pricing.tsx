"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Base",
    monthlyPrice: "35",
    setupPrice: "150",
    features: [
      "Sito vetrina",
      "QR code",
      "Aggiornamenti menu entro 48h"
    ],
    recommended: false,
    ctaText: "Scegli Base",
  },
  {
    name: "Consigliato",
    monthlyPrice: "90",
    setupPrice: "100",
    features: [
      "Tutto del piano Base, più:",
      "Prenotazioni online",
      "Aggiornamenti menu illimitati entro 24h"
    ],
    recommended: true,
    ctaText: "Scegli Consigliato",
  },
  {
    name: "Custom",
    monthlyPrice: "su richiesta",
    setupPrice: "su richiesta",
    features: [
      "Soluzioni personalizzate",
      "In base alle tue esigenze",
      "Contattaci per una consulenza gratuita"
    ],
    recommended: false,
    ctaText: "Richiedi quotazione",
  }
];

export default function Pricing() {
  return (
    <section id="prezzi" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
            Piani chiari, nessun imprevisto
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
            Scegli il livello del <span className="italic">servizio.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full items-end">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative rounded-[2rem] p-8 lg:p-10 border transition-all duration-300 flex flex-col h-full",
                plan.recommended 
                  ? "bg-[#faf6f0] text-foreground shadow-2xl border-primary/20 md:-translate-y-4 shadow-primary/5" 
                  : "bg-white text-foreground border-foreground/10 hover:shadow-xl hover:border-foreground/20"
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-4 rounded-full py-1.5 px-5 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center left-1/2 -translate-x-1/2 bg-primary shadow-lg whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 fill-current mr-1.5" />
                  Il più scelto
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-2xl font-heading font-medium mb-4">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  {plan.monthlyPrice === "su richiesta" ? (
                    <span className="text-2xl font-heading font-medium text-primary">
                      Prezzo su richiesta
                    </span>
                  ) : (
                    <>
                      <span className="text-5xl lg:text-6xl font-heading font-medium tracking-tight text-foreground">
                        {plan.monthlyPrice}€
                      </span>
                      <span className="text-sm ml-1.5 mb-2 font-medium tracking-wide text-muted">
                        /mese
                      </span>
                    </>
                  )}
                </div>
                {plan.setupPrice === "gratuito" ? (
                  <div className="text-sm font-medium text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-full">
                    Setup gratuito
                  </div>
                ) : plan.setupPrice === "su richiesta" ? (
                  <div className="text-sm font-medium text-muted">
                    Setup su richiesta
                  </div>
                ) : (
                  <div className="text-sm font-medium text-muted">
                    Setup {plan.setupPrice}€
                  </div>
                )}
              </div>

              <div className="w-full h-px bg-foreground/10 mb-8" />

              <ul className="space-y-4 flex-1 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                      plan.recommended ? "bg-primary/10" : "bg-foreground/5"
                    )}>
                      <Check className={cn("w-3.5 h-3.5 stroke-[3]", plan.recommended ? "text-primary" : "text-muted")} />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground/80 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link 
                href="#contatti"
                className={cn(
                  "w-full px-6 py-4 rounded-full transition-all font-medium flex items-center justify-center gap-2 duration-300",
                  plan.recommended
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-1"
                    : "bg-surface text-foreground hover:bg-foreground/5 border border-foreground/10"
                )}
              >
                {plan.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center text-sm font-medium text-muted"
        >
          Tutti i piani includono hosting, dominio e assistenza. Nessun vincolo, puoi disdire quando vuoi.
        </motion.p>
      </div>
    </section>
  );
}
