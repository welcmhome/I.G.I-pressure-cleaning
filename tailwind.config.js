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
        // Logo palette: palm greens, ocean turquoise, sun orange/yellow
        primary: {
          green: '#228B22',           // forest green (palm leaves)
          'green-dark': '#1a6b1a',
          'green-light': '#32CD32',   // lime green (logo foliage)
          blue: '#00CED1',           // turquoise (logo water)
          'blue-dark': '#00a8a8',
          'blue-light': '#40E0D0',   // light turquoise
        },
        accent: {
          orange: '#FF8C00',         // sun orange (logo)
          'orange-dark': '#e67e00',
          yellow: '#FFD700',        // sun yellow (logo text)
          'yellow-dark': '#e6c200',
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
