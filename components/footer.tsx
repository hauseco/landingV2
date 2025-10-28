
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-full">
                <Phone className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <Link href="tel:061312767980" className="text-xl font-bold text-gray-900 hover:text-yellow-600">
                  06131 2767980
                </Link>
                <p className="text-sm text-gray-600">Mo-Fr 09:00-17:00 Uhr</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-full">
                <Mail className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <Link 
                  href="mailto:willkommen@sonnendach.energy" 
                  className="text-lg font-medium text-gray-900 hover:text-yellow-600 break-all"
                >
                  willkommen@sonnendach.energy
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Oder nutze unser <Link href="#angebot" className="underline hover:text-gray-900">Kontaktformular</Link>
                </p>
              </div>
            </div>

            {/* Customer Reviews Link */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-blue-500 text-white text-xs">JM</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-green-500 text-white text-xs">SK</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-purple-500 text-white text-xs">LB</AvatarFallback>
                  </Avatar>
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">+</span>
                  </div>
                </div>
              </div>
              <Link href="#bewertungen" className="text-sm font-medium text-gray-900 hover:text-yellow-600">
                Kundenberichte entdecken →
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Menu</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-700 hover:text-gray-900">
                Start
              </Link>
              <Link href="#angebot" className="block text-gray-700 hover:text-gray-900">
                Angebot anfragen
              </Link>
              <Link href="#eigenheim" className="block text-gray-700 hover:text-gray-900">
                Eigenheim
              </Link>
              <Link href="#bewertungen" className="block text-gray-700 hover:text-gray-900">
                Bewertungen
              </Link>
              <Link href="#unternehmen" className="block text-gray-700 hover:text-gray-900">
                Unternehmen
              </Link>
              <Link href="#" className="block text-gray-700 hover:text-gray-900">
                Ratgeber
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Standorte</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Bodenheim</h5>
                <p className="text-sm text-gray-600">Am Kümmerling 21-25</p>
                <p className="text-sm text-gray-600">55294 Bodenheim</p>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Mainz</h5>
                <p className="text-sm text-gray-600">Große Bleiche 15</p>
                <p className="text-sm text-gray-600">55116 Mainz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="#" className="hover:text-gray-900">Impressum</Link>
              <Link href="#" className="hover:text-gray-900">Datenschutz</Link>
              <Link href="#" className="hover:text-gray-900">AGB</Link>
            </div>
            <p className="text-sm text-gray-600">
              Copyright © 2025 Sonnendach Energy GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
