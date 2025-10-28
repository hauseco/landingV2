
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Yellow decorative circle - nur Desktop */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-50 hidden lg:block"></div>
      
      <div className="container mx-auto px-4">
        {/* Mobile-First Layout: Bild oben, Text unten */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Hero Image - oben auf Mobile, rechts auf Desktop - OHNE Badge */}
          <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] overflow-hidden shadow-2xl order-1 lg:order-2" style={{ borderRadius: '2rem 2rem 5rem 18rem' }}>
            <Image
              src="/hero_familie_solarhaus.jpg"
              alt="Glückliche Familie vor ihrem Solarhaus"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content - unten auf Mobile, links auf Desktop */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            
            {/* Urgency Badge - NEU */}
            <div className="inline-block">
              <div className="bg-[#E53E3E] text-white text-sm font-semibold px-4 py-2 rounded-lg">
                ⚡ Jetzt noch 19% MwSt. sparen – nur bis 31.12.2025
              </div>
            </div>

            {/* H1 - NEUE HEADLINE */}
            <h1 className="text-[32px] md:text-[48px] font-bold text-gray-900 leading-tight">
              Smarte PV mit intelligenter{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Steuerung</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
              </span>
              {' '}– Dein Meisterbetrieb aus{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Erftstadt</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
              </span>
            </h1>
            
            {/* Subline - NEUE BENEFITS */}
            <p className="text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Automatische Lastverschiebung · Dynamische Strompreise · Bis zu 3.500 € Ersparnis/Jahr
            </p>

            {/* Trust Badges - ERWEITERT mit Schatten */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                Meisterbetrieb Erftstadt seit 2010
              </span>
              <span className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                ≤ 3 Werktage Reaktionszeit
              </span>
              <span className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                &gt; 200 Installationen in der Region
              </span>
              <span className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                ⭐ 4,9 Sterne (Google-Bewertungen)
              </span>
            </div>

            {/* Regionale Zeile - NEU */}
            <p className="text-sm text-[#888888]">
              Wir installieren in: Erftstadt · Köln · Bonn · Rhein-Erft-Kreis · Euskirchen
            </p>

            {/* CTA Buttons - ÜBERARBEITET mit 2 Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-8 h-14 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link href="#angebot" className="flex items-center gap-2">
                  Kostenlose Potenzialanalyse
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-50 text-gray-900 font-bold text-base md:text-lg px-8 h-14 rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:+4922359999999" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-40 hover:scale-110 group">
        <svg className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
      </button>
    </section>
  )
}
