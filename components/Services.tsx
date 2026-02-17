'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { pressureCleaningImages } from '@/lib/pressure-cleaning-images'

const services = [
  {
    name: 'House Pressure Washing',
    description: 'Remove dirt, mold, algae, and stains from siding, windows, and exterior surfaces. Enhance curb appeal and protect your home.',
    image: pressureCleaningImages.houseWashing,
  },
  {
    name: 'Commercial Pressure Washing',
    description: 'Storefronts, offices, and business properties. Professional results that make a strong first impression.',
    image: pressureCleaningImages.commercial,
  },
  {
    name: 'Roof Cleaning',
    description: 'Safe, effective roof cleaning to remove black streaks, algae, and moss. Extend the life of your roof.',
    image: pressureCleaningImages.roof,
  },
  {
    name: 'Driveway & Walkway Cleaning',
    description: 'Concrete, pavers, and stone. Restore clean, like-new surfaces and improve safety.',
    image: pressureCleaningImages.driveway,
  },
  {
    name: 'Deck & Patio Cleaning',
    description: 'Wood and composite decks, patios, and outdoor living areas. Gentle yet thorough cleaning.',
    image: pressureCleaningImages.deck,
  },
  {
    name: 'Concrete & Pavers',
    description: 'Driveways, pool decks, and hardscape. We remove oil stains, rust, and years of buildup.',
    image: pressureCleaningImages.concrete,
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-200" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="border-l-4 border-primary-blue pl-6 mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary-blue font-semibold text-sm uppercase tracking-wider"
          >
            What we offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1"
          >
            Pressure cleaning services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col sm:flex-row overflow-hidden bg-white rounded-none border border-gray-200 hover:border-primary-blue/50 hover:shadow-lg transition-all"
            >
              <div className="sm:w-2/5 relative h-44 sm:h-auto sm:min-h-[180px] flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/30 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
