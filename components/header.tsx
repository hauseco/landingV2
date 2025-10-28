
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-yellow-400 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"></div>
            <span className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-500">SONNENDACH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#eigenheim" className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 relative group">
              Eigenheim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#bewertungen" className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 relative group">
              Bewertungen
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#unternehmen" className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 relative group">
              Unternehmen
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="flex items-center gap-2 text-cyan-500 group cursor-pointer">
              <div className="w-5 h-5 bg-cyan-500 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
              <span className="font-medium transition-all duration-300 group-hover:scale-105">Energieberatung</span>
            </div>
          </nav>

          {/* CTA Button */}
          <Button 
            className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            asChild
          >
            <Link href="#angebot" className="flex items-center gap-2">
              Angebot anfragen
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link href="#eigenheim" className="text-gray-700 hover:text-gray-900 font-medium">
                Eigenheim
              </Link>
              <Link href="#bewertungen" className="text-gray-700 hover:text-gray-900 font-medium">
                Bewertungen
              </Link>
              <Link href="#unternehmen" className="text-gray-700 hover:text-gray-900 font-medium">
                Unternehmen
              </Link>
              <Link href="#energieberatung" className="text-cyan-500 font-medium">
                Energieberatung
              </Link>
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full"
                asChild
              >
                <Link href="#angebot" className="flex items-center gap-2 justify-center">
                  Angebot anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
