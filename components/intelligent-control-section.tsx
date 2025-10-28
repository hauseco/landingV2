
'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function IntelligentControlSection() {
  return (
    <section id="segment-3" className="py-20 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Content Left - Text */}
          <div className="space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
              Intelligente Steuerung + Dynamischer Stromtarif
            </p>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Bis zu 3.500 € mehr{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Ersparnis</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
              </span>
              {' '}pro Jahr
            </h2>

            {/* Body Text */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Normale PV-Anlagen produzieren nur Strom. Unser intelligentes System steuert, WANN und WOFÜR er genutzt wird: Speicher lädt zur richtigen Zeit, E-Auto tankt bei Netz-Tiefpreisen (8 ct statt 30 ct), Wärmepumpe nutzt günstige Stunden. Alles automatisch – du musst nichts tun.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-8 h-12 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link href="#angebot" className="flex items-center gap-2">
                  Jetzt intelligentes System anfragen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Content Right - Image Placeholder */}
          <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            {/* Gradient Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-purple-100 to-blue-100 flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-lg px-4">
                  Produktfoto:<br />EcoFlow Display mit Strompreis
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
