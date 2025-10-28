
"use client"

import { Search, FileText, FileCheck, Wrench, Power } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Vor-Ort-Check/Remote-Check',
    we: 'Prüfung der Gegebenheiten',
    you: 'Basisdaten bereitstellen'
  },
  {
    number: 2,
    icon: FileText,
    title: 'Planung & Angebot A/B',
    we: 'Zwei transparente Angebote erstellen',
    you: 'Paket wählen (Standard/Premium)'
  },
  {
    number: 3,
    icon: FileCheck,
    title: 'Anmeldung/Netzbetreiber',
    we: 'Alle Formalitäten übernehmen',
    you: 'Unterschrift auf Vollmacht'
  },
  {
    number: 4,
    icon: Wrench,
    title: 'Montage durch eigenes Team',
    we: 'Saubere, termingetreue Installation',
    you: 'Zugang gewähren am vereinbarten Tag'
  },
  {
    number: 5,
    icon: Power,
    title: 'Inbetriebnahme & App-Setup',
    we: 'Einweisung & vollständige Dokumentation',
    you: 'Erste Schritte in der App lernen'
  }
]

export default function ProcessSteps() {
  return (
    <section className="sdx-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-medium text-gray-600 mb-4">Der Sonnendach-Prozess</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            So läuft es ab –{' '}
            <span className="relative inline-block">
              <span className="relative z-10">wir übernehmen</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Von der Planung bis zur Inbetriebnahme: Du lehnst dich zurück, wir kümmern uns um alles
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div 
                key={step.number}
                className="bg-white border-2 border-gray-200 p-6 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 relative"
                style={{ borderRadius: '2rem 2rem 3rem 2rem' }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-5 mt-4">
                  <Icon className="w-7 h-7 text-gray-900" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-5 leading-tight">
                  {step.title}
                </h3>

                {/* Responsibilities */}
                <div className="space-y-4">
                  <div className="bg-yellow-50 rounded-xl p-3">
                    <div className="text-xs font-bold text-yellow-700 mb-1.5 uppercase tracking-wide">Wir:</div>
                    <p className="text-sm text-gray-900 font-medium">{step.we}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3">
                    <div className="text-xs font-bold text-green-700 mb-1.5 uppercase tracking-wide">Du:</div>
                    <p className="text-sm text-gray-900 font-medium">{step.you}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-300 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="text-gray-700 mb-6 text-lg">
              Bereit für deine Solaranlage? Starte jetzt!
            </p>
            <Button 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-6 text-lg shadow-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => {
                const form = document.querySelector('#angebot');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt Prozess starten – Angebot in 2 Min
            </Button>
            <p className="text-sm text-gray-600 mt-4 font-medium">
              ✓ Kostenlos · ✓ Unverbindlich · ✓ In 2 Minuten
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
