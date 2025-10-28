
'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function StorageSection() {
  return (
    <section className="py-20 md:py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Content Left - Image (auf Mobile oben) */}
          <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] order-1">
            {/* Gradient Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 flex items-center justify-center p-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-base md:text-lg px-4 leading-snug">
                  Produktfoto:<br />
                  Stromspeicher + PV-Module<br />
                  <span className="text-sm text-gray-600">(Weißer Speicher mit lila Blitz + schwarze Module)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Content Right - Text (auf Mobile unten) */}
          <div className="space-y-6 text-center lg:text-left order-2">
            
            {/* Eyebrow */}
            <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
              Photovoltaik + Speicher
            </p>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stromspeicher für gesteigerten{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Eigenverbrauch</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
              </span>
            </h2>

            {/* Body Text */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Die Sonne scheint, wenn du nicht zuhause bist? Man könnte jetzt denken: Was bringt die Solaranlage, wenn Sonnenstunden und der Stromverbrauch zeitlich nicht aufeinander fallen? Die Lösung für zeitversetzte Nutzung ist ein Heimspeicher. So verbrauchst du über 70 % deiner Solarenergie selbst und musst nur noch einen Bruchteil an Strom zukaufen.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-8 h-12 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link href="#angebot" className="flex items-center gap-2">
                  Jetzt beraten lassen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
