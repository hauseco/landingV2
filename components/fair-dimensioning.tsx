
"use client"

import { TrendingUp, Zap, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function FairDimensioning() {
  return (
    <section className="sdx-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div>
            <Badge className="mb-6 bg-green-100 text-green-900 hover:bg-green-200 text-sm px-4 py-1.5 rounded-full">
              ✓ Eigenverbrauch zuerst
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nicht{' '}
              <span className="relative inline-block">
                <span className="relative z-10">größer</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
              </span>{' '}
              <br className="hidden md:block" />
              – sondern sinnvoller geplant
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wir planen deine Anlage auf <strong>Eigenverbrauch und Autarkie</strong> aus – nicht auf kWp-Maximum. 
              Das bedeutet: keine überdimensionierte Anlage, sondern eine, die zu deinem tatsächlichen Verbrauch passt.
            </p>
            
            <p className="text-gray-600 mb-8">
              So vermeidest du unnötige Kosten und erzielst eine schnellere Amortisation.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-yellow-50 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Bessere Amortisation</h4>
                  <p className="text-sm text-gray-700">Schnellere Rückzahlung durch optimierte Dimensionierung</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-yellow-50 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Weniger Einspeiseverluste</h4>
                  <p className="text-sm text-gray-700">Maximaler Eigenverbrauch statt teurer Einspeisung</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-yellow-50 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Passgenau zum Lastprofil</h4>
                  <p className="text-sm text-gray-700">Abgestimmt auf deine tatsächlichen Verbrauchsmuster</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Diagram */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 shadow-xl" style={{ borderRadius: '2rem 2rem 5rem 2rem' }}>
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Eigenverbrauch vs. Einspeisung
            </h4>
            
            <div className="space-y-8">
              {/* Eigenverbrauch Bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-base font-bold text-gray-900">Eigenverbrauch</span>
                  <span className="text-2xl font-bold text-green-600">70%</span>
                </div>
                <div className="w-full h-10 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-md transition-all duration-1000"
                    style={{ width: '70%' }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">✓ Optimale Nutzung deines Solarstroms</p>
              </div>

              {/* Einspeisung Bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-base font-bold text-gray-900">Einspeisung</span>
                  <span className="text-2xl font-bold text-yellow-600">30%</span>
                </div>
                <div className="w-full h-10 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-md transition-all duration-1000"
                    style={{ width: '30%' }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">✓ Überschuss ins Netz – fair vergütet</p>
              </div>

              {/* Legend */}
              <div className="pt-6 border-t-2 border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-md shadow"></div>
                  <span className="text-sm text-gray-700 font-medium">Eigenverbrauch = Maximale Ersparnis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md shadow"></div>
                  <span className="text-sm text-gray-700 font-medium">Einspeisung = Zusätzliche Einnahme</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  Rechenbeispiel – tatsächliche Werte hängen von Verbrauch, Ausrichtung und Speichergröße ab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
