import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siti Web per Ristoranti in Campania | Agenzia Web",
  description: "Creiamo siti web per ristoranti, pizzerie e trattorie in Campania. Professionali, veloci, pronti in 48 ore. Design rustico-elegante su misura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)] antialiased relative">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
