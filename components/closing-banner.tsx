
"use client"

import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ClosingBanner() {
  return (
    <section className="sdx-section py-16 md:py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Schlüsselfertige PV aus der Region – 
            <span className="relative inline-block mt-2 block">
              <span className="relative z-10">Angebot in 2 Minuten</span>
              <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-white opacity-30"></span>
            </span>
          </h2>
          
          {/* Subline */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 font-semibold">
            Fair geplant. Du wählst: Standard oder Premium.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full group"
              onClick={() => {
                const form = document.querySelector('#angebot');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Angebot anfordern
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold px-10 py-7 text-lg backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => {
                const form = document.querySelector('#angebot');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Rückruf vereinbaren
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-10 border-t-2 border-white/30">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:061312767980"
                className="flex items-center gap-4 text-white hover:text-yellow-100 transition-colors group bg-white/10 px-6 py-4 rounded-full backdrop-blur-sm hover:bg-white/20"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-7 h-7 text-yellow-600" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold">06131 2767980</div>
                  <div className="text-sm text-white/90 font-medium">Mo-Fr 09:00-17:00 Uhr</div>
                </div>
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-10">
            <div className="flex flex-wrap justify-center gap-4 text-white/95 text-sm md:text-base font-semibold">
              <span className="bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-sm">✓ Kostenlose Beratung</span>
              <span className="bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-sm">✓ Transparente Preise</span>
              <span className="bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-sm">✓ Regionale Ausführung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
