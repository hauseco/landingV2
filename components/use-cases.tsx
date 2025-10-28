
'use client'

import { motion } from 'framer-motion'
import { Car, Home, Check } from 'lucide-react'

export default function UseCases() {
  return (
    <section className="py-20 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Eyebrow + Headline + Subline */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
            Intelligente Steuerung im Alltag
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            So arbeitet das{' '}
            <span className="relative inline-block">
              <span className="relative z-10">System</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
            {' '}für Sie – jeden Tag
          </h2>
          <p className="text-base text-gray-600">
            Automatische Optimierung ohne Ihr Zutun
          </p>
        </div>

        {/* Card 1: E-Auto laden */}
        <motion.div 
          className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 mb-6 relative transition-shadow duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Chip - Desktop: rechts oben absolute, Mobile: inline */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-yellow-400 text-gray-900 font-bold text-sm px-4 py-2 rounded-full">
            Spart bis 800 €/Jahr
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center">
              <div className="relative">
                <Car className="w-8 h-8 md:w-10 md:h-10 text-green-600" strokeWidth={2} />
                <svg 
                  className="absolute -top-1 -right-2 w-5 h-5 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-0 md:pt-2 pr-0 md:pr-40">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                E-Auto laden
              </h3>
              
              <p className="text-base font-semibold text-gray-900 mb-3 leading-relaxed">
                Nur bei PV-Überschuss oder Strompreis &lt;12 ct/kWh
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Das System startet den Ladevorgang automatisch, wenn Ihre PV-Anlage Überschuss produziert oder der Netzstrom besonders günstig ist. So tanken Sie immer zum besten Preis.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Micro-Copy unter Card 1 */}
        <div className="flex items-center gap-2 mb-6 ml-2">
          <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
          <p className="text-sm text-gray-600">
            Funktioniert mit jedem Wechselrichter ab 2020
          </p>
        </div>

        {/* Card 2: Heizen mit Wärmepumpe */}
        <motion.div 
          className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 relative transition-shadow duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Chip - Desktop: rechts oben absolute, Mobile: inline */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-yellow-400 text-gray-900 font-bold text-sm px-4 py-2 rounded-full">
            30% effizienter
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center">
              <div className="relative">
                <Home className="w-8 h-8 md:w-10 md:h-10 text-green-600" strokeWidth={2} />
                <svg 
                  className="absolute -top-1 -right-2 w-5 h-5 text-red-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-0 md:pt-2 pr-0 md:pr-40">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Heizen mit Wärmepumpe
              </h3>
              
              <p className="text-base font-semibold text-gray-900 mb-3 leading-relaxed">
                Wärmepumpe nach Wettervorhersage & PV-Ertrag steuern
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Die intelligente Steuerung heizt Ihr Haus vor, wenn die Sonne scheint oder Strom günstig ist. Bei schlechtem Wetter nutzt sie gespeicherte Wärme – 30% effizienter als Standard-Steuerung.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
