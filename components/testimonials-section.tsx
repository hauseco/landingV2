
'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Jochen Lange',
      initial: 'J',
      avatarColor: 'bg-blue-500',
      time: 'Vor 3 Monaten',
      quote: 'Das Beratungsgespräch war sehr ausführlich und kompetent. Die Durchführung der Arbeiten erfolgte termingenau. Die 9 kWh-Anlage mit 5 kWh-Speicher ist seit 3 Wochen in Betrieb – wir sind sehr zufrieden und empfehlen Hauseco gerne weiter.',
      chip: {
        text: 'PV 9 kWp · Speicher 5 kWh',
        bg: 'bg-gray-100',
        textColor: 'text-gray-900',
      }
    },
    {
      id: 2,
      name: 'Klaus van den Boom',
      initial: 'K',
      avatarColor: 'bg-purple-600',
      time: 'Vor einem Jahr',
      quote: 'Die Beratung war sehr ausführlich, der Zeitplan wurde exakt eingehalten. Die Anlage läuft zu unserer Zufriedenheit und wir freuen uns darüber, kostenlos "tanken" zu können. Hauseco jederzeit wieder.',
      chip: {
        text: '💚 "Hauseco jederzeit wieder"',
        bg: 'bg-green-500',
        textColor: 'text-white',
      }
    },
    {
      id: 3,
      name: 'Doris Westermeier',
      initial: 'D',
      avatarColor: 'bg-green-500',
      time: 'Vor 2 Jahren',
      quote: 'Der Chef hat sich viel Zeit genommen und alle Fragen beantwortet. Die Anlage wurde eine Woche früher geliefert als geplant. Immer wenn wir am Stromzähler vorbeigehen, müssen wir grinsen :-D',
      chip: {
        text: '😊 "Müssen wir grinsen"',
        bg: 'bg-yellow-400',
        textColor: 'text-gray-900',
      }
    }
  ]

  return (
    <section className="py-20 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Eyebrow + Headline + Subline */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
            Das sagen unsere Kunden
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Über{' '}
            <span className="relative inline-block">
              <span className="relative z-10">50 zufriedene</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
            {' '}Haushalte in Erftstadt und Umgebung
          </h2>
          <p className="text-base text-gray-600">
            Echte Bewertungen von Google – keine erfundenen Testimonials
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-5 md:p-6 flex flex-col transition-shadow duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-[18px] h-[18px] fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] md:text-base text-gray-900 leading-relaxed mb-4 flex-grow">
                "{review.quote}"
              </p>

              {/* Chip */}
              <div className="mb-5">
                <span className={`inline-block ${review.chip.bg} ${review.chip.textColor} text-xs font-bold px-3 py-1.5 rounded-2xl`}>
                  {review.chip.text}
                </span>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                {/* Avatar */}
                <div className={`w-10 h-10 ${review.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-base">
                    {review.initial}
                  </span>
                </div>
                
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {review.time}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Badge */}
        <motion.div
          className="flex flex-col items-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white border border-gray-200 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] px-6 py-4 inline-flex items-center gap-3 mb-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
            
            {/* Text */}
            <div className="text-left">
              <p className="text-lg font-bold text-gray-900">
                4,9 von 5 Sternen auf Google
              </p>
              <p className="text-sm text-gray-600">
                Basierend auf 50+ Bewertungen
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base px-8 h-12 rounded-lg shadow-[0_4px_12px_rgba(252,211,77,0.3)] transition-all duration-300 hover:shadow-[0_6px_16px_rgba(252,211,77,0.4)] hover:scale-105"
            asChild
          >
            <a
              href="https://g.page/r/hauseco/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Alle Bewertungen auf Google ansehen
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
