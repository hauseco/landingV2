
import Image from 'next/image'
import { Check } from 'lucide-react'

const products = [
  'Bauer Solartechnik Premium Glas-Glas Black Modul 445 Watt (30 Jahre Produkt- und Leistungsgarantie)',
  'FENECON Home 10 Wechselrichter',
  'SMA Sunny Home 2.0 Energiemanager',
  'FENECON Home 10 Stromspeicher'
]

export default function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/produkte_solarpanels_speicher.jpg"
              alt="Solarpanel Produkte"
              fill
              className="object-cover"
            />
          </div>

          {/* Product List */}
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-gray-900 text-lg">{product}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unsere starken Partner
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="bg-white px-8 py-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-gray-900">BAUER<br/>SOLAR</div>
            </div>
            <div className="bg-white px-8 py-6 rounded-xl shadow-md">
              <div className="w-24 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BYD</span>
              </div>
            </div>
            <div className="bg-white px-8 py-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">SMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
