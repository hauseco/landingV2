
"use client"

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PackageComparison() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Zwei Pakete zur{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Auswahl</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
            {' '}– Wähle dein PV-Paket
          </h2>
          <p className="text-lg text-gray-700">
            65 % wählen EcoFlow Premium – 35 % GoodWe + IBC. Du entscheidest – wir beraten ehrlich.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
          {/* Standard Package */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-900 text-sm font-bold rounded-full border-2 border-blue-200">
                Preis/Leistung
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Standard – GoodWe + IBC
            </h3>
            
            <p className="text-gray-700 text-lg mb-6">Bewährte Technik zum fairen Preis</p>
            
            <div className="space-y-3 mb-8">
              {[
                'Bewährte Technik – zuverlässig seit Jahren',
                'Deutsche IBC-Module – Qualität Made in Germany',
                'GoodWe Wechselrichter + Speicher',
                'Monitoring-App inklusive',
                'Faire Lieferzeit – planbar'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full py-6 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
              onClick={() => {
                document.querySelector('#angebot')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Standard-Angebot anfordern
            </Button>
          </div>

          {/* Premium Package */}
          <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-block px-5 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full shadow-lg">
                ⭐ Empfohlen
              </span>
            </div>
            
            <div className="mb-4 mt-2">
              <span className="inline-block px-4 py-2 bg-yellow-50 text-yellow-900 text-sm font-bold rounded-full border-2 border-yellow-200">
                KI & Smart
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Premium – EcoFlow KI
            </h3>
            
            <p className="text-gray-700 text-lg mb-6">Intelligente Energie für maximale Autarkie</p>
            
            <div className="space-y-3 mb-8">
              {[
                'KI-gesteuerte Optimierung – mehr Eigenverbrauch',
                'Dynamische Stromtarife ausnutzen',
                'Wallbox & Wärmepumpe smart steuern',
                'Notstrom-Fähigkeit inklusive',
                'Premium-App mit Prognosen & Insights'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full py-6 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
              onClick={() => {
                document.querySelector('#angebot')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Premium-Angebot anfordern
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
