
'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function GridPowerSection() {
  return (
    <section className="py-20 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Content Left - Text */}
          <div className="space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
              PV-Anlage + dynamischer Stromtarif
            </p>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Reststrom günstig aus dem{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Netz</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
              </span>
              {' '}beziehen
            </h2>

            {/* Body Text */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Volle Autarkie ist in Deutschland nicht wirtschaftlich. Auch mit Solaranlage und Speicher benötigst du einen Teil Netzstrom. Das Komplettpaket von Hauseco optimiert deinen Reststrombezug über den dynamischen Stromtarif: Du kaufst flexibel zu den günstigsten Zeitpunkten ein – zeitweise für 0 Cent pro kWh*.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-8 h-12 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link href="#angebot" className="flex items-center gap-2">
                  Jetzt beraten lassen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Content Right - Image Placeholder */}
          <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            {/* Gradient Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-teal-50 flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="w-32 h-56 bg-gray-900 rounded-3xl shadow-2xl mx-auto relative overflow-hidden">
                  {/* Smartphone Mockup */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl flex flex-col items-center justify-center p-3">
                    <p className="text-xs font-bold text-gray-800 mb-2">Heartbeat</p>
                    <div className="w-full h-20 border-4 border-cyan-400 rounded-full flex items-center justify-center mb-2">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">-1,6</p>
                        <p className="text-[8px] text-gray-600">ct/kWh</p>
                      </div>
                    </div>
                    <p className="text-[8px] text-gray-600">Heartbeat-Strompreis</p>
                  </div>
                </div>
                <p className="text-gray-700 font-semibold text-base px-4">
                  Screenshot:<br />Smartphone mit Heartbeat-App
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
