"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const features = [
  "Sito web professionale responsive",
  "Ottimizzato per Google e Maps",
  "Menu digitale con QR code",
  "Hosting e dominio inclusi",
  "Una modifica al mese inclusa",
  "Pronto in 48 ore",
];

export default function Pricing() {
  return (
    <section id="prezzi" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
            Nessuna sorpresa
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
            Unico piano, tutto incluso.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-background rounded-3xl p-8 md:p-12 w-full max-w-2xl border border-foreground/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-heading font-medium mb-2">Un sito completo per il tuo locale</h3>
            <p className="text-muted mb-8 pb-8 border-b border-foreground/10">Trasparente, chiaro, come il tuo menu.</p>
            
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                  </div>
                  <span className="text-base text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-surface-alt/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="mb-2">
              <span className="text-5xl font-heading font-medium text-foreground">300€</span>
              <span className="text-muted line-through ml-2 text-lg">500€</span>
            </div>
            <p className="text-foreground/70 mb-4">una tantum</p>
            
            <div className="flex items-center gap-4 w-full">
              <div className="h-px flex-1 bg-foreground/10"></div>
              <span className="text-muted text-sm">+</span >
              <div className="h-px flex-1 bg-foreground/10"></div>
            </div>
            
            <div className="mt-4 mb-8">
              <span className="text-3xl font-heading font-medium text-foreground">29€</span>
              <span className="text-muted"> / mese</span>
            </div>
            
            <Link 
              href="#contatti"
              className="w-full px-6 py-4 bg-primary text-white rounded-full hover:bg-primary-hover transition-all font-medium hover:-translate-y-1 hover:shadow-lg shadow-primary/20 duration-300"
            >
              Inizia ora
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
