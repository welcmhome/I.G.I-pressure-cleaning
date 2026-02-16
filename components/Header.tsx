'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#why-choose-us', label: 'Why Us' },
    { href: '#service-areas', label: 'Areas' },
    { href: '#about', label: 'About' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  return (
    <>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                <img
                  src="/assets/LOGO%20PEST%20CONTROL.png"
                  alt="In & Out Florida Pest Control"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base sm:text-lg text-gray-900">In & Out</div>
                <div className="text-xs sm:text-sm text-primary-blue font-semibold">Florida Pest Control</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.querySelector(link.href)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-gray-700 hover:text-primary-blue font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:9542134572"
                className="px-5 py-2.5 bg-primary-blue text-white font-bold rounded-xl text-sm hover:bg-primary-blue-dark transition-colors"
              >
                Call Now
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-800 p-2 z-50"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden pb-6 border-t border-gray-200 mt-4 relative z-50 bg-white"
            >
              <div className="flex flex-col gap-1 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="py-3 px-2 text-gray-800 hover:text-primary-blue font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:9542134572"
                  className="mt-3 py-3 bg-primary-blue text-white font-bold rounded-xl text-center hover:bg-primary-blue-dark"
                >
                  Call (954) 213-4572
                </a>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  )
}
