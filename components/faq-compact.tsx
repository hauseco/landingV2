
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: 'EcoFlow vs. GoodWe + IBC – was passt zu mir?',
    answer: 'GoodWe + IBC (Standard) passt, wenn du bewährte Technik zum fairen Preis suchst und keine smarten Features benötigst. EcoFlow Premium lohnt sich, wenn du E-Auto/Wärmepumpe hast, dynamische Strompreise nutzen möchtest oder maximale Autarkie + KI-Optimierung willst. Wir beraten dich ehrlich.'
  },
  {
    question: 'Wie funktionieren dynamische Strompreise?',
    answer: 'Mit dynamischen Tarifen (z.B. Tibber, aWATTar) schwankt der Strompreis stündlich. Das EcoFlow Premium-System erkennt automatisch günstige Zeitfenster und lädt dann den Speicher oder startet Großverbraucher (Wallbox, Wärmepumpe). So sparst du zusätzlich beim Netzbezug – ohne manuellen Aufwand.'
  },
  {
    question: 'Wallbox nachrüsten – geht das?',
    answer: 'Ja, problemlos! Beide Pakete sind wallbox-ready. Im Premium-Paket mit EcoFlow wird die Wallbox sogar smart gesteuert: Laden erfolgt automatisch bei Solarüberschuss oder günstigen Strompreisen. Wir können die Wallbox direkt mit installieren oder später nachrüsten.'
  },
  {
    question: 'Wie groß sollte der Speicher sein?',
    answer: 'Als Faustregel: 1-1,5 kWh Speicherkapazität pro kWp Anlagenleistung. Für eine 8 kWp Anlage empfehlen wir 8-12 kWh Speicher. Das ermöglicht hohe Eigenverbrauchsquoten (70-80%) ohne überdimensioniert zu sein. Wir berechnen die optimale Größe individuell.'
  },
  {
    question: 'Lohnt sich PV noch?',
    answer: 'Absolut! Mit steigenden Strompreisen (aktuell ~40 Cent/kWh) amortisiert sich eine PV-Anlage in 8-12 Jahren. Danach produzierst du 15-20 Jahre praktisch kostenlosen Strom. Plus: Du wirst unabhängiger vom Strompreis und leistest einen Beitrag zum Klimaschutz.'
  },
  {
    question: 'Lohnt sich Notstrom?',
    answer: 'Für kritische Verbraucher (Homeoffice, medizinische Geräte, Tiefkühler) kann Notstrom sinnvoll sein. Das Premium EcoFlow-Paket bietet eine einfache Notstrom-Option. Bei längeren Stromausfällen bist du so abgesichert. Für die meisten Haushalte ist es jedoch kein Muss.'
  },
  {
    question: 'Welche Module/Wechselrichter nutzt ihr?',
    answer: 'Im Standard-Paket setzen wir auf bewährte IBC-Module (Made in Germany) mit GoodWe Wechselrichtern und Speichern. Im Premium-Paket kommt das innovative EcoFlow-System mit KI-Energiemanagement zum Einsatz. Beide Systeme sind hochwertig, zertifiziert und bieten langfristige Garantien.'
  },
  {
    question: 'Baut ihr überdimensioniert?',
    answer: 'Nein! Wir planen auf Eigenverbrauch zuerst. Eine zu große Anlage führt zu unnötigen Kosten und schlechterer Amortisation. Unser Prinzip: Passgenau zum Lastprofil, nicht maximale kWp. So erreichst du schnellere Rückzahlung und höhere Wirtschaftlichkeit.'
  }
]

export default function FAQCompact() {
  return (
    <section className="sdx-section py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-medium text-gray-600 mb-4">Deine Fragen, unsere Antworten</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Häufige Fragen{' '}
            <span className="relative inline-block">
              <span className="relative z-10">vor dem Kauf</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-50"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Alles was du wissen musst – ehrlich und transparent beantwortet
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-white border-2 border-gray-200 rounded-2xl px-6 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-gray-900 hover:text-yellow-700 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Noch Fragen? Wir beraten dich gerne persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#angebot"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md"
              >
                Angebot anfordern
              </a>
              <a
                href="tel:061312767980"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-4 rounded-full border-2 border-gray-300 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
              >
                📞 Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
