"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const whatsappUrl =
  "https://wa.me/390000000000?text=Ciao%2C%20ho%20appena%20visto%20i%20vostri%20lavori%20%E2%80%94%20sono%20interessato%20a%20un%20sito%20per%20il%20mio%20locale.";

export default function Contact() {
  return (
    <section
      id="contatti"
      className="py-32 bg-foreground text-surface relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary font-medium tracking-wide uppercase text-sm mb-6 block"
        >
          Hai visto quello di cui siamo capaci
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight mb-6 leading-[1.08]"
        >
          Il passo successivo è{" "}
          <span className="italic text-primary">semplice.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-surface/65 text-lg md:text-xl mb-14 max-w-xl leading-relaxed"
        >
          Rispondici su WhatsApp. Bastano due righe: il nome del tuo locale e
          quando possiamo parlare. Pensiamo a tutto noi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-all hover:scale-[1.03] hover:-translate-y-1 duration-300 shadow-2xl shadow-[#25D366]/25 font-medium text-xl"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
            Rispondici su WhatsApp
          </Link>

          <p className="text-surface/35 text-sm tracking-wide">
            Ti risponderemo entro poche ore.
          </p>
        </motion.div>

        {/* Decorative divider */}
        <div className="mt-20 pt-20 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {[
            { value: "48h", label: "Sito online" },
            { value: "0€", label: "Costo chiamata" },
            { value: "100%", label: "Made in Campania" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-heading font-medium text-white mb-1">
                {stat.value}
              </p>
              <p className="text-surface/45 text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
