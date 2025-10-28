
"use client"

import { Clock, Eye, Wrench } from 'lucide-react'

const serviceFeatures = [
  {
    icon: Clock,
    value: '≤ 3',
    unit: 'Werktage',
    label: 'Reaktionszeit',
    description: 'Schnelle Hilfe wenn du sie brauchst'
  },
  {
    icon: Eye,
    value: 'Monitoring',
    unit: 'inklusive',
    label: '',
    description: 'Wir behalten deine Anlage im Blick'
  },
  {
    icon: Wrench,
    value: 'Vor-Ort',
    unit: 'Service',
    label: 'vom Meisterbetrieb',
    description: 'Kompetenz aus der Region'
  }
]

export default function ServiceSLA() {
  return (
    <section className="sdx-section py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-medium text-gray-600 mb-4">Unser Service-Versprechen</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Regional.</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>{' '}
            Verlässlich. Erreichbar.
          </h2>
          <p className="text-lg text-gray-700">
            Wir kommen, wenn was ist – ohne Diskussion
          </p>
        </div>

        {/* Service KPIs */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {serviceFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx}
                className="text-center bg-white border-2 border-gray-200 p-8 md:p-10 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
                style={{ borderRadius: idx === 1 ? '2rem 2rem 5rem 2rem' : '2rem 2rem 3rem 2rem' }}
              >
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="w-10 h-10 text-gray-900" strokeWidth={2.5} />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {feature.value}
                </div>
                
                <div className="text-xl font-bold text-gray-700 mb-4">
                  {feature.unit}
                </div>
                
                {feature.label && (
                  <div className="text-base font-semibold text-gray-700 mb-3">
                    {feature.label}
                  </div>
                )}
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-300 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              Service ohne Kleingedrucktes
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg max-w-2xl mx-auto mb-6">
              Als regionaler Meisterbetrieb sind wir schnell vor Ort. Monitoring-App zeigt dir jederzeit den Status. 
              Und wenn doch mal etwas sein sollte: <strong>maximal 3 Werktage Reaktionszeit. Garantiert.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-700">
              <span className="bg-white px-4 py-2 rounded-full shadow">✓ Schnelle Reaktion</span>
              <span className="bg-white px-4 py-2 rounded-full shadow">✓ Transparente Kommunikation</span>
              <span className="bg-white px-4 py-2 rounded-full shadow">✓ Faire Preise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
