
"use client"

import { Brain, Car, TrendingDown, Shield } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'KI-Optimierung des Energieflusses',
    description: 'Intelligente Steuerung lernt deine Verbrauchsmuster und optimiert automatisch',
    link: '#angebot'
  },
  {
    icon: Car,
    title: 'Smartes Laden: Wallbox & Wärmepumpe',
    description: 'Automatisches Laden bei optimalen Bedingungen – nutzt überschüssigen Solarstrom',
    link: '#angebot'
  },
  {
    icon: TrendingDown,
    title: 'Dynamische Strompreise nutzen',
    description: 'Lade bei niedrigen Strompreisen und spare zusätzlich beim Netzbezug',
    link: '#angebot'
  },
  {
    icon: Shield,
    title: 'Notstrom-/Backup-Optionen',
    description: 'Versorgung auch bei Stromausfall – Sicherheit für dein Zuhause',
    link: '#angebot'
  }
]

export default function PremiumFeatures() {
  return (
    <section className="sdx-section py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-medium text-gray-600 mb-4">EcoFlow Premium Paket</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium:{' '}
            <span className="relative inline-block">
              <span className="relative z-10">KI und smarte</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>{' '}
            Steuerung
          </h2>
          <p className="text-lg text-gray-700">
            Mit EcoFlow Premium holst du das Maximum aus deiner Solaranlage heraus
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx}
                className="bg-white border-2 border-gray-200 p-6 md:p-8 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 group"
                style={{ borderRadius: idx % 2 === 0 ? '2rem 2rem 3rem 2rem' : '2rem 2rem 2rem 3rem' }}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-gray-900" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>
                
                <a 
                  href={feature.link}
                  className="text-sm font-bold text-yellow-600 hover:text-yellow-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Mehr erfahren 
                  <span className="text-xl">→</span>
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Alle Premium-Features sind im EcoFlow-Paket enthalten
            </p>
            <a
              href="#angebot"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md text-lg"
            >
              Premium-Angebot anfordern
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
