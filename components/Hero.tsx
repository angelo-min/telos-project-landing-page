"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/390000000000?text=Ciao%2C%20ho%20appena%20visto%20i%20vostri%20lavori%20%E2%80%94%20sono%20interessato%20a%20un%20sito%20per%20il%20mio%20locale.";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] pt-28 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.05] tracking-tight text-foreground"
          >
            Il tuo ristorante merita un sito all&apos;altezza della tua{" "}
            <span className="italic text-primary">cucina.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-muted max-w-lg leading-relaxed"
          >
            Siti web per ristoranti, pizzerie e trattorie in Campania.
            Professionali, veloci,{" "}
            <span className="font-medium text-foreground">pronti in 48 ore.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA: WhatsApp */}
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full flex items-center justify-center gap-2.5 hover:bg-[#20bd5a] transition-all hover:scale-[1.03] hover:-translate-y-0.5 duration-300 shadow-lg shadow-[#25D366]/20 font-medium text-base"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Rispondici su WhatsApp
            </Link>
            
            {/* Secondary CTA: scroll to demos */}
            <Link 
              href="#lavori"
              className="px-8 py-4 bg-transparent text-foreground rounded-full flex items-center justify-center gap-2 hover:bg-foreground/5 transition-colors border border-foreground/20 font-medium text-base"
            >
              Vedi i nostri lavori
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Trust signal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-sm text-muted"
          >
            Fatto a mano in Campania — non un template, non un builder.
          </motion.p>
        </div>

        {/* Visual Mockups */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative h-[500px] md:h-[600px] w-full mt-10 lg:mt-0"
        >
          {/* Main Card (Fine Dining) */}
          <div className="absolute top-0 right-[10%] w-[75%] h-[75%] rounded-2xl bg-surface-alt shadow-2xl border border-white/50 overflow-hidden transform rotate-2 z-20 transition-transform hover:rotate-0 duration-500 hover:scale-105">
            <div className="w-full h-8 bg-surface border-b border-foreground/5 flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70"></div>
            </div>
            <div className="w-full h-[calc(100%-2rem)] relative overflow-hidden">
                <Image src="/screenshots/la-scogliera-risorante.png" alt="Sito Ristorante Fine Dining" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
            </div>
          </div>

          {/* Secondary Card (Pizzeria) */}
          <div className="absolute bottom-[5%] left-0 w-[60%] h-[60%] rounded-xl bg-surface-alt shadow-xl border border-white/50 overflow-hidden transform -rotate-3 z-10 transition-transform hover:-rotate-1 hover:scale-105 duration-500">
             <div className="w-full h-6 bg-surface border-b border-foreground/5 flex items-center px-3 gap-1">
              <div className="w-2 h-2 rounded-full bg-muted/30"></div>
              <div className="w-2 h-2 rounded-full bg-muted/30"></div>
              <div className="w-2 h-2 rounded-full bg-muted/30"></div>
            </div>
            <div className="w-full h-[calc(100%-1.5rem)] relative overflow-hidden">
                 <Image src="/screenshots/da-gennaro.png" alt="Sito Pizzeria Verace" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" quality={85} />
            </div>
          </div>
          
           {/* Third Card (Trattoria Mobile) */}
          <div className="absolute bottom-[15%] right-0 w-[30%] h-[70%] rounded-[2rem] bg-foreground shadow-2xl border-[6px] border-surface-alt overflow-hidden transform rotate-6 z-30 transition-transform hover:rotate-3 hover:-translate-y-2 duration-500">
             <div className="w-full h-full relative overflow-hidden bg-[#fdfaf6]">
                <Image src="/screenshots/la-scogliera-alpha.png" alt="Sito Trattoria Mobile" fill className="object-cover object-left-top" sizes="(max-width: 768px) 100vw, 25vw" quality={85} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
