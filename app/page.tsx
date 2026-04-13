"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Works />
      <Process />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
