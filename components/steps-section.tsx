
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: 1,
    title: 'Angebot anfragen',
    description: 'Du bist neugierig geworden und möchtest mehr zu unserem Angebot erfahren? Innerhalb von 2 Minuten kannst Du mit unserem Konfigurator Dein Angebot anfragen - mit einem Klick und unverbindlich. Wir freuen uns über Dein Interesse!',
    image: null,
    badge: 'In nur 2min'
  },
  {
    number: 2,
    title: 'Individuelle Beratung und Planung',
    description: 'Mit einem persönlichen Beratungsgespräch und einem Besichtigungstermin beginnen wir unser gemeinsames Projekt! Das gibt uns den nötigen Überblick zu allen wichtigen Details. Mithilfe der gewonnenen Infos können wir Dir ein maßgeschneidertes Angebot erstellen.',
    image: '/beratung_illustration.jpg',
    badge: null
  },
  {
    number: 3,
    title: 'Fachgerechte und sorgfältige Installation',
    description: 'Im dritten Schritt geht es an das Herzstück unseres Service: die Installation Deiner Solaranlage. Dank unserer Expertise und Erfahrung wird die Montage schnell, sauber und professionell durchgeführt.',
    image: '/installation_illustration.jpg',
    badge: null
  },
  {
    number: 4,
    title: 'Rundum-Service auch nach der Installation',
    description: 'Auch nach erfolgreicher Installation stehen wir Dir zur Seite! Wir übernehmen die Wartung, Überwachung und sind bei Fragen jederzeit für Dich da. Dein Sonnendach - Deine Energie!',
    image: null,
    badge: null
  }
]

export default function StepsSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      // Berechne den Fortschritt basierend auf der Scroll-Position
      const progress = Math.max(0, Math.min(100, 
        ((scrollPosition - sectionTop) / sectionHeight) * 100
      ))
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
            Mit <span className="relative inline-block">
              <span className="relative z-10">4 Schritten</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            in eine sonnige Zukunft!
          </h2>
        </div>

        {/* Steps - Mobile: Timeline links, Desktop: Timeline Mitte */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Timeline Line - Mobile: links, Desktop: Mitte */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gray-300 lg:-translate-x-1/2"></div>
          
          {/* Vertical Timeline Line - Foreground (gelb, wächst beim Scrollen) */}
          <div 
            className="absolute left-8 lg:left-1/2 top-0 w-1 bg-yellow-400 lg:-translate-x-1/2 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          ></div>

          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot - Mobile: links bei 8 (32px), Desktop: Mitte */}
                <div className="absolute left-8 lg:left-1/2 top-0 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full lg:-translate-x-1/2 z-10 transition-all duration-300">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Mobile Layout: Content rechts neben Timeline */}
                <div className="lg:hidden pl-20 pr-4">
                  {step.badge && (
                    <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3">
                      {step.badge}
                    </div>
                  )}
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 text-gray-900 rounded-full text-lg font-bold mb-3 shadow-lg">
                    {step.number}.
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {step.number === 1 && (
                    <Button 
                      variant="outline" 
                      className="rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-semibold transition-all duration-300 text-sm mb-4"
                      asChild
                    >
                      <a href="#angebot">Angebot anfragen →</a>
                    </Button>
                  )}
                  
                  {step.number === 2 && (
                    <Button 
                      variant="outline" 
                      className="rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-semibold transition-all duration-300 text-sm mb-4"
                      asChild
                    >
                      <a href="#angebot">Termin anfragen →</a>
                    </Button>
                  )}
                  
                  {step.image && (
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mt-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Desktop Layout: Alternierendes Grid wie vorher */}
                <div className={`hidden lg:grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16 lg:order-2'} space-y-4`}>
                    {step.badge && (
                      <div className={`inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold ${index % 2 === 0 ? 'lg:float-right lg:ml-4' : ''}`}>
                        {step.badge}
                      </div>
                    )}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 text-gray-900 rounded-full text-2xl font-bold transition-all duration-300 hover:scale-110 shadow-lg">
                      {step.number}.
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    {step.number === 2 && (
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href="#angebot">Termin anfragen →</a>
                      </Button>
                    )}
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    {step.image ? (
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <div className="text-8xl font-bold text-yellow-400/30">{step.number}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
