'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

export default function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="service-areas" ref={ref} className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-2">Coverage</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Serving South Florida
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-2xl border border-gray-200 py-8 px-6 sm:px-10"
        >
          <p className="text-center text-gray-600 text-sm font-medium mb-6">
            We provide pest control and prevention throughout the greater South Florida area, including:
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-900 font-semibold">
            {cities.map((city, index) => (
              <span key={city} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-300">·</span>}
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
