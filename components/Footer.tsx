import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-surface pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-heading font-semibold tracking-tight text-white mb-4 block">
              Telos Project.
            </Link>
            <p className="text-surface/60 max-w-sm mt-4 text-sm leading-relaxed">
              Realizziamo siti web artigianali per ristoranti, pizzerie e trattorie in Campania. 
              Mettiamo online il tuo locale in 48 ore.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-heading text-lg font-medium text-white mb-6">Navigazione</h4>
            <ul className="space-y-3">
              {['Lavori', 'Come funziona', 'Prezzi', 'Contatti'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-surface/60 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Social */}
          <div>
            <h4 className="font-heading text-lg font-medium text-white mb-6">Legale</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-surface/60 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-surface/60 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li className="mt-8">
                <Link 
                  href="#" 
                  className="text-surface/60 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface/40 text-xs">
            © 2026 Telos Project. Siti web per la ristorazione campana.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
            <span className="text-surface/40 text-xs tracking-wide">Accettando nuovi progetti</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
