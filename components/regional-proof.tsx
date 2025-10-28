
"use client"

import Image from 'next/image'
import { MapPin } from 'lucide-react'

const cases = [
  {
    image: '/produkte_solarpanels_speicher.jpg',
    location: 'Bodenheim',
    system: '8,5 kWp + 10 kWh Speicher',
    benefit: 'Familie spart 85% Stromkosten – Autarkie bei 70%'
  },
  {
    image: '/hero_familie_solarhaus.jpg',
    location: 'Mainz-Bretzenheim',
    system: '12 kWp + 15 kWh Speicher + EcoFlow Premium',
    benefit: 'E-Auto lädt mit PV-Überschuss, Wärmepumpe smart gesteuert, dynamische Tarife aktiv – Autarkie 75%'
  },
  {
    image: '/team_solar_handwerker.jpg',
    location: 'Nieder-Olm',
    system: '6 kWp + 8 kWh Speicher',
    benefit: 'Kompakte Anlage, perfekt dimensioniert – ROI in 8 Jahren'
  }
]

export default function RegionalProof() {
  return (
    <section className="sdx-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-medium text-gray-600 mb-4">Referenzen aus deiner Nähe</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Projekte in{' '}
            <span className="relative inline-block">
              <span className="relative z-10">deiner Nähe</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Über 200 zufriedene Kunden in der Region Mainz, Rheinhessen und Umgebung
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {cases.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-gray-200 overflow-hidden hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
              style={{ borderRadius: idx === 1 ? '2rem 2rem 5rem 2rem' : '2rem 2rem 3rem 2rem' }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={project.image}
                  alt={`PV-Projekt in ${project.location}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm">
                  ✓ Realisiert
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-yellow-700 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-xl">{project.location}</span>
                </div>

                <div className="text-base font-bold text-gray-900 mb-3">
                  {project.system}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Visual */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 md:p-10 max-w-5xl mx-auto shadow-xl" style={{ borderRadius: '2rem 2rem 5rem 2rem' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Über 200 Installationen in der Region
            </h3>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-8 md:p-12 border-2 border-yellow-200">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Mainz', 'Bodenheim', 'Nieder-Olm', 'Ingelheim', 'Bingen', 'Wiesbaden', 'Worms', 'Alzey'].map((city) => (
                <span key={city} className="px-5 py-2.5 bg-white rounded-full border-2 border-gray-200 font-semibold text-gray-900 hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                  📍 {city}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-center text-lg font-medium">
              <strong>Regional verwurzelt seit über 10 Jahren</strong> – Referenzen aus deiner direkten Umgebung
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
