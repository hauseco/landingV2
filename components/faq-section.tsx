
'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    question: 'Wo sind wir tätig?',
    answer: 'Wir sind hauptsächlich in Rheinland-Pfalz, Hessen und dem Saarland tätig. Unser Hauptsitz befindet sich in Mainz, und wir haben eine weitere Niederlassung in Bodenheim.'
  },
  {
    question: 'Was ist unser Qualitätsstandard?',
    answer: 'Wir arbeiten ausschließlich mit hochwertigen Komponenten von renommierten Herstellern wie Bauer Solar, BYD und SMA. Alle unsere Installationen werden von zertifizierten Fachkräften durchgeführt und entsprechen den höchsten Qualitätsstandards.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-8">{faq.question}</h3>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Questions CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Hast Du noch{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Fragen</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-400 opacity-50"></span>
            </span>
            {' '}zur Solarenergie fürs Eigenheim?
          </h3>
          <Button 
            variant="outline" 
            className="rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-6 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#angebot">Mehr erfahren →</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
