'use client'

import { motion } from 'framer-motion'

const cities = [
  'Boynton Beach',
  'Delray Beach',
  'Boca Raton',
  'Lake Worth',
  'West Palm Beach',
  'Palm Beach Gardens',
  'Wellington',
  'Jupiter',
  'Greenacres',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 sm:px-8 lg:px-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className="text-xl font-extrabold mb-4 text-white uppercase tracking-wide">Boynton Beach Landscaping LLC</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Quality landscaping & gardening. Boynton Beach & South Florida.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-medium">
              <li>
                <a href="tel:5611234567" className="hover:text-white transition-colors">
                  (561) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@boyntonbeachlandscaping.com" className="hover:text-white transition-colors">
                  info@boyntonbeachlandscaping.com
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
              href="https://www.facebook.com/p/Boynton-Beach-Landscaping-LLC-100069301104412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Boynton Beach Landscaping LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
