
import { Wrench, Euro, Zap, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Wrench,
    title: 'Lokales Handwerk',
    description: 'Hier gibt es keine anonyme Massenabfertigung! Lokales Handwerk ist nachhaltig, persönlich und immer vor Ort!'
  },
  {
    icon: Euro,
    title: 'Garantierter Festpreis',
    description: 'Keine Kostenfalle: Darauf kannst Du Dich verlassen! Effektive Planbarkeit wird bei uns groß geschrieben.'
  },
  {
    icon: Zap,
    title: 'Schnelle Umsetzung',
    description: 'Bei uns sitzt jeder Handgriff, denn Solartechnik ist unsere Leidenschaft. Schnelle und gekonnte Umsetzung garantiert!'
  },
  {
    icon: ShieldCheck,
    title: 'Rundum-Sorglos-Paket',
    description: 'Von der Fachberatung über die Installation bis hin zur Wartung – Sonnendach liefert Dir den Service 2.0!'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title - nur auf Mobile sichtbar */}
        <div className="text-center mb-8 lg:hidden">
          <p className="text-sm font-medium text-gray-600 mb-2">Regionale Qualität aus Mainz</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Die{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Vorteile</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-400 opacity-50"></span>
            </span>
            {' '}von Sonnendach genießen!
          </h2>
        </div>

        {/* Features Grid - vertikal auf mobile, Grid auf Desktop */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-yellow-50 rounded-full mb-4 md:mb-6 transition-all duration-300 hover:bg-yellow-100">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
