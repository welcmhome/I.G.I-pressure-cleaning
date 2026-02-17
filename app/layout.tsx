import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Boynton Beach Landscaping LLC | Quality Landscaping & Gardening',
  description: 'Over 20 years of experience. Free estimates, high-quality work, and competitive pricing. Serving Boynton Beach and South Florida.',
  keywords: 'landscaping, Boynton Beach, South Florida, gardening, lawn care, landscape design, yard maintenance',
  icons: {
    icon: '/assets/BOYNTON%20BEACH%20LANDSCAPING%20LOGO.PNG',
    apple: '/assets/BOYNTON%20BEACH%20LANDSCAPING%20LOGO.PNG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="overflow-x-hidden bg-white">{children}</body>
    </html>
  )
}
