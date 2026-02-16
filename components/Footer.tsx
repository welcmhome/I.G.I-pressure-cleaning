'use client'

import { motion } from 'framer-motion'

const cities = [
  'Boca Raton',
  'Palm Beach',
  'Broward Estates',
  'Hollywood',
  'Fort Lauderdale',
  'Parkland',
  'Pembroke Pines',
  'Coral Springs',
  'Plantation',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 sm:px-8 lg:px-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-white uppercase tracking-wide">In & Out Florida Pest Control</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Pest elimination & prevention. South Florida.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-medium">
              <li>
                <a href="tel:9542134572" className="hover:text-white transition-colors">
                  (954) 213-4572
                </a>
              </li>
              <li>
                <a href="mailto:inoutfloridapestcontrol@gmail.com" className="hover:text-white transition-colors">
                  inoutfloridapestcontrol@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Service Areas</h4>
            <ul className="space-y-1 text-gray-400 text-sm font-medium">
              {cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Follow Us</h4>
            <a
              href="https://instagram.com/inoutfloridapestcontrol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} In & Out Florida Pest Control. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
