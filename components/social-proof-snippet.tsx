
'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Play } from 'lucide-react'

export default function SocialProofSnippet() {
  return (
    <section className="py-20 md:py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Video - Links auf Desktop, oben auf Mobile */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-gray-900 group cursor-pointer">
            {/* Placeholder Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </div>
                <p className="text-white text-sm font-medium">Video abspielen</p>
              </div>
            </div>
            
            {/* Hier später Video einbetten */}
            {/* <iframe 
              className="absolute inset-0 w-full h-full" 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="Kundenreferenz"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>

          {/* Text + KPIs - Rechts auf Desktop, unten auf Mobile */}
          <div className="space-y-6">
            
            {/* Label */}
            <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
              Kunde aus Erftstadt
            </p>

            {/* Zitat */}
            <blockquote className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
              „Wir wollten etwas für die Umwelt tun und unabhängiger werden. 
              Ich muss nicht mehr tanken – oder wenn, dann kostet es nichts mehr."
            </blockquote>

            {/* Name */}
            <p className="text-base text-gray-600">
              Familie aus Erftstadt
            </p>

            {/* KPI-Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              
              {/* Chip 1: Autarkie */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center space-y-2">
                <span className="text-3xl">⚡</span>
                <p className="text-sm text-gray-600 font-medium">Autarkie</p>
                <p className="text-3xl font-bold text-gray-900">85%</p>
              </div>

              {/* Chip 2: Ersparnis */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center space-y-2">
                <span className="text-3xl">💰</span>
                <p className="text-sm text-gray-600 font-medium">Ersparnis</p>
                <p className="text-3xl font-bold text-gray-900">1.400 €<span className="text-lg">/Jahr</span></p>
              </div>

              {/* Chip 3: Amortisation */}
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center space-y-2">
                <span className="text-3xl">📈</span>
                <p className="text-sm text-gray-600 font-medium">Amortisation</p>
                <p className="text-3xl font-bold text-gray-900">9 <span className="text-lg">Jahre</span></p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base px-8 h-12 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link href="#angebot">
                  Auch so viel sparen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
