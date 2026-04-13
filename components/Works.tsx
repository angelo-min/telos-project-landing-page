"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    name: "La Scogliera",
    type: "Trattoria di pesce sul mare",
    link: "https://risorante.vercel.app",
    screenshot: "/screenshots/la-scogliera-risorante.png",
    accentColor: "#3d7a8a",
    tag: "Cetara, Costa d'Amalfi",
  },
  {
    id: 2,
    name: "Da Gennaro",
    type: "Pizzeria napoletana verace",
    link: "https://demo-pizzeria-minimal.vercel.app",
    screenshot: "/screenshots/da-gennaro.png",
    accentColor: "#1a1200",
    tag: "Napoli, Centro Storico",
  },
  {
    id: 3,
    name: "Villa Caracciolo",
    type: "Ristorante fine dining",
    link: "https://demo-restaurant-alpha.vercel.app",
    screenshot: "/screenshots/la-scogliera-alpha.png",
    accentColor: "#4a3000",
    tag: "Salerno, Lungomare",
  },
];

function WorkCard({ work, index }: { work: (typeof works)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
    >
      {/* Browser chrome + screenshot window */}
      <Link
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full overflow-hidden rounded-2xl shadow-lg border border-foreground/8 relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Apri il sito demo di ${work.name}`}
      >
        {/* Fake browser toolbar */}
        <div
          className="w-full h-9 flex items-center px-4 gap-2 relative z-10 shrink-0"
          style={{ backgroundColor: work.accentColor }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 mx-3 h-5 bg-white/10 rounded-md flex items-center px-2.5">
            <span className="text-white/50 text-[10px] truncate font-sans tracking-wide">
              {work.link.replace("https://", "")}
            </span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
        </div>

        {/* Screenshot area */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-foreground/5">
          <Image
            src={work.screenshot}
            alt={`Anteprima del sito ${work.name}`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={90}
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="bg-white text-foreground rounded-full px-6 py-3 flex items-center gap-2.5 font-medium shadow-xl text-sm">
              Visita il sito
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </Link>

      {/* Card footer */}
      <div className="mt-5 flex flex-col">
        <span className="text-xs font-medium text-primary uppercase tracking-widest mb-1">
          {work.tag}
        </span>
        <h3 className="text-2xl font-heading font-medium group-hover:text-primary transition-colors duration-300">
          {work.name}
        </h3>
        <p className="text-muted mt-1 text-sm">{work.type}</p>
      </div>
    </motion.article>
  );
}

export default function Works() {
  return (
    <section id="lavori" className="py-24 bg-surface-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
              I nostri lavori
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
              Siti che fanno venire{" "}
              <span className="italic">l&apos;acquolina in bocca.</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            Esempi concreti di quello che possiamo realizzare per il tuo locale.
            Clicca sulle anteprime per entrare nei siti reali.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
