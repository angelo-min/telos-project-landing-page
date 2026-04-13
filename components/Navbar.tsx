"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WA_URL =
  "https://wa.me/390000000000?text=Ciao%2C%20ho%20appena%20visto%20i%20vostri%20lavori%20%E2%80%94%20sono%20interessato%20a%20un%20sito%20per%20il%20mio%20locale.";

const links = [
  { name: "Lavori", href: "#lavori" },
  { name: "Come funziona", href: "#come-funziona" },
  { name: "Prezzi", href: "#prezzi" },
  { name: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 py-4 lg:px-12",
          scrolled ? "glass-effect py-3" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-semibold tracking-tight z-50">
            Telos Project.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#20bd5a] transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Parliamone
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 -mr-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-surface/95 backdrop-blur-md pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-heading hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-12 flex justify-center">
              <Link
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 bg-[#25D366] text-white text-lg rounded-full hover:bg-[#20bd5a] transition-colors shadow-md w-full max-w-sm text-center flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Parliamone su WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
