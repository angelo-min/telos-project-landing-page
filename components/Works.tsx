"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    name: "La Scogliera",
    benefit: "Menu completo visibile da mobile + prenotazione diretta WhatsApp",
    link: "https://risorante.vercel.app",
    screenshot: "/screenshots/la-scogliera-risorante.png",
  },
  {
    id: 2,
    name: "Da Gennaro",
    benefit: "Orari, indirizzo e menu sempre aggiornati + QR code per i tavoli",
    link: "https://demo-pizzeria-minimal.vercel.app",
    screenshot: "/screenshots/da-gennaro.png",
  },
  {
    id: 3,
    name: "Trattoria del Porto",
    benefit: "Visibile su Google Maps + bottone chiama con un tap",
    link: "https://demo-restaurant-alpha.vercel.app",
    screenshot: "/screenshots/trattoria-porto-mobile.png",
  },
];

export default function Works() {
  return (
    <section id="lavori" className="py-24 bg-surface-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-4 flex flex-col items-center text-center">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
            I nostri lavori
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight mb-6">
            Siti che fanno venire{" "}
            <span className="italic">l&apos;acquolina in bocca.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            Ecco come appare il tuo ristorante quando un cliente ti cerca dal telefono:
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              {/* Browser-frame mockup */}
              <Link
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apri il sito demo di ${work.name}`}
                className="block rounded-2xl overflow-hidden shadow-lg border border-foreground/8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* macOS browser bar */}
                <div
                  className="flex items-center px-4 gap-2 shrink-0"
                  style={{ height: "36px", background: "#e8e3dc", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <div className="w-3 h-3 rounded-full bg-red-400/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/90" />
                  <div className="w-3 h-3 rounded-full bg-green-500/90" />
                  <div
                    className="ml-3 flex-1 rounded-md h-5 flex items-center px-3 text-[11px] text-foreground/40 font-mono truncate"
                    style={{ background: "rgba(0,0,0,0.06)" }}
                  >
                    {work.link.replace("https://", "")}
                  </div>
                </div>

                {/* Screenshot — 16:9 */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-foreground/5">
                  <Image
                    src={work.screenshot}
                    alt={`Anteprima sito ${work.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={90}
                    priority={index === 0}
                  />
                </div>
              </Link>

              {/* Footer */}
              <div className="mt-6 flex flex-col">
                <h3 className="text-xl font-heading font-medium flex items-center gap-1.5 group-hover:text-primary transition-colors duration-300">
                  {work.name}
                  <ArrowUpRight className="w-4 h-4 text-muted/60 shrink-0" />
                </h3>
                <p className="text-muted mt-1.5 text-sm leading-relaxed">{work.benefit}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
