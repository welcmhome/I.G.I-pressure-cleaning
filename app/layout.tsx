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
  title: 'I.G.I Pressure Cleaning LLC | House, Commercial & Roof Cleaning | Delray Beach',
  description: 'House pressure washing, commercial pressure washing, and roof cleaning. Free estimates. Serving Delray Beach, Islamorada, and South Florida.',
  keywords: 'pressure washing, pressure cleaning, Delray Beach, South Florida, roof cleaning, house washing, commercial pressure washing, Islamorada',
  icons: {
    icon: '/assets/I.G.I%20LOGO.PNG',
    apple: '/assets/I.G.I%20LOGO.PNG',
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
