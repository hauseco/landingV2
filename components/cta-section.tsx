
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl" style={{ borderRadius: '2rem 2rem 6rem 2rem' }}>
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/cta_senioren_solarhaus.jpg"
              alt="Energie tanken & Kosten senken"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 hover:bg-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-24 px-8 md:px-16 text-white">
            <p className="text-lg md:text-xl mb-4 transition-all duration-300">Mit Sonnendach wird Dein Haus zum Kraftwerk</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-300">
              <span className="relative inline-block">
                <span className="relative z-10">Energie tanken</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-yellow-400 opacity-70"></span>
              </span>
              <br />
              & Kosten senken!
            </h2>
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
              asChild
            >
              <Link href="#angebot" className="flex items-center gap-2">
                Angebot anfragen
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
