
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="unternehmen" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Team Image */}
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/team_solar_handwerker.jpg"
              alt="Sonnendach Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Solartechnik aus Mainz
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Eine <strong>persönliche Betreuung</strong> vom ersten Moment bis zur fertigen Installation und darüber hinaus – das zeichnet unsere Firma aus Mainz aus! Wir sind der erste Ansprechpartner für alle Themen rund um Photovoltaikanlagen in <strong>Rheinland-Pfalz, Hessen</strong> und dem <strong>Saarland</strong>.
              </p>
              <p>
                Bei uns kannst Du Dich auf <strong>fachliche Kompetenz</strong> und hochwertige <strong>Komponenten</strong> freuen. <strong>Unsere Mission:</strong> Nachhaltigkeit und Kosteneffizienz in deutsche Haushalte unserer Region bringen. Werde auch Du mit Solarstrom und moderner Speichertechnologie <strong>unabhängig</strong> und <strong>umweltfreundlich</strong>.
              </p>
              <p className="text-xl font-semibold text-gray-900">
                Die Energiewende beginnt auf Deinem Dach - mit Sonnendach!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
