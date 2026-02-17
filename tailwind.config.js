/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pressure cleaning palette: water blues, clean teals, spray accent
        primary: {
          green: '#0d9488',           // teal accent (water/clean)
          'green-dark': '#0f766e',
          'green-light': '#2dd4bf',
          blue: '#0891b2',            // main brand - pressure cleaning blue
          'blue-dark': '#0e7490',
          'blue-light': '#22d3ee',    // water/spray highlight
        },
        accent: {
          orange: '#f97316',          // CTA / spray accent
          'orange-dark': '#ea580c',
          yellow: '#fbbf24',          // trust / highlight
          'yellow-dark': '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'oswald': ['var(--font-oswald)', 'sans-serif'],
      },
      keyframes: {
        'slow-zoom': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
        marquee: 'marquee 140s linear infinite',
      },
    },
  },
  plugins: [],
}
