"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/390000000000?text=Ciao%2C%20ho%20appena%20visto%20i%20vostri%20lavori%20%E2%80%94%20sono%20interessato%20a%20un%20sito%20per%20il%20mio%20locale.";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] pt-28 pb-16 flex items-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* ── Text Column ── */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.05] tracking-tight text-foreground"
          >
            I tuoi clienti cercano dove mangiare.{" "}
            <span className="italic text-primary">Ti trovano?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-muted max-w-lg leading-relaxed"
          >
            Menu digitale, prenotazioni su WhatsApp, visibilità su Google.{" "}
            <span className="font-medium text-foreground">Tutto pronto in 48 ore.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#lavori"
              className="px-8 py-4 bg-primary text-white rounded-full flex items-center justify-center gap-2.5 hover:bg-primary/90 transition-all hover:scale-[1.03] hover:-translate-y-0.5 duration-300 shadow-lg shadow-primary/20 font-medium text-base"
            >
              Vedi i nostri lavori
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-foreground rounded-full flex items-center justify-center gap-2 hover:bg-foreground/5 transition-colors border border-foreground/20 font-medium text-base"
            >
              <MessageCircle className="w-4 h-4" />
              Scrivici su WhatsApp
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-sm text-muted"
          >
            Fatto a mano in Campania — non un template, non un builder.
          </motion.p>
        </div>

        {/* ── Mockup Column ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex items-center justify-center mt-12 lg:mt-0"
        >
          {/*
            Fixed-pixel container — NO overflow-hidden here so nothing gets clipped.
            All cards use absolute positioning inside this box.
          */}
          <div className="relative" style={{ width: "420px", height: "290px" }}>

            {/* ── Back card: Pizzeria (tilted, behind everything) ── */}
            <div
              className="absolute overflow-hidden rounded-xl shadow-lg"
              style={{
                width: "230px",
                height: "145px",
                top: "0px",
                left: "0px",
                transform: "rotate(-6deg)",
                zIndex: 1,
                background: "#edebe5",
                border: "1px solid rgba(255,255,255,0.55)",
              }}
            >
              {/* Mini browser bar */}
              <div
                className="flex items-center px-3 gap-1"
                style={{ height: "22px", background: "#e2dfd8", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fc605c" }} />
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fdbc40" }} />
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#34c749" }} />
              </div>
              <div className="relative" style={{ width: "230px", height: "123px" }}>
                <Image
                  src="/screenshots/da-gennaro.png"
                  alt="Pizzeria Da Gennaro"
                  fill
                  className="object-cover object-top"
                  sizes="230px"
                  quality={80}
                />
              </div>
            </div>

            {/* ── Main card: La Scogliera desktop (front center) ── */}
            <div
              className="absolute overflow-hidden rounded-2xl"
              style={{
                width: "285px",
                height: "178px",
                top: "65px",
                left: "65px",
                zIndex: 2,
                background: "#edebe5",
                border: "1px solid rgba(255,255,255,0.65)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
              }}
            >
              {/* Mini browser bar */}
              <div
                className="flex items-center px-4 gap-1.5"
                style={{ height: "28px", background: "#e5e2db", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#fc605c" }} />
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#fdbc40" }} />
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#34c749" }} />
              </div>
              <div className="relative" style={{ width: "285px", height: "150px" }}>
                <Image
                  src="/screenshots/la-scogliera-risorante.png"
                  alt="La Scogliera"
                  fill
                  className="object-cover object-top"
                  sizes="285px"
                  quality={90}
                  priority
                />
              </div>
            </div>

            {/* ── Phone: real 390px-viewport screenshot inside iPhone frame ── */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "86px",
                height: "184px",
                top: "20px",
                right: "-10px",
                zIndex: 3,
                borderRadius: "20px",
                background: "#0f0f0f",
                border: "5px solid #1c1c1c",
                boxShadow: "0 0 0 1px #3a3a3a, 0 24px 56px rgba(0,0,0,0.5)",
                transform: "rotate(5deg)",
              }}
            >
              {/* Dynamic Island */}
              <div
                style={{
                  position: "absolute",
                  top: "6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "30px",
                  height: "9px",
                  background: "#0f0f0f",
                  borderRadius: "999px",
                  zIndex: 10,
                }}
              />
              {/* Real mobile screenshot — taken at 390px viewport */}
              <div className="relative w-full h-full">
                <Image
                  src="/screenshots/trattoria-porto-mobile.png"
                  alt="Sito su mobile"
                  fill
                  className="object-cover object-top"
                  sizes="86px"
                  quality={90}
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
