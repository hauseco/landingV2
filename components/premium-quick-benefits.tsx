
import { Brain, Car, TrendingDown, Shield } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'KI-Optimierung',
    description: 'Intelligente Steuerung für maximale Effizienz'
  },
  {
    icon: Car,
    title: 'Smartes Laden',
    description: 'Wallbox & Wärmepumpe automatisch steuern'
  },
  {
    icon: TrendingDown,
    title: 'Dynamische Strompreise',
    description: 'Günstige Zeitfenster automatisch nutzen'
  },
  {
    icon: Shield,
    title: 'Notstrom-Option',
    description: 'Sicherheit bei Stromausfall'
  }
]

export default function PremiumQuickBenefits() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Premium auf einen{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Blick</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="text-center p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-yellow-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 shadow-md">
                  <Icon className="w-8 h-8 text-gray-900" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
