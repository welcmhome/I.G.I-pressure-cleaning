'use client'

/** Decorative water drops for pressure cleaning theme - use as background or inline accent */
export function WaterDropsPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg className="absolute w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="water-drops" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <ellipse cx="20" cy="25" rx="6" ry="8" fill="#0891b2" />
            <ellipse cx="50" cy="15" rx="5" ry="7" fill="#0891b2" />
            <ellipse cx="70" cy="40" rx="4" ry="6" fill="#0891b2" />
            <ellipse cx="10" cy="55" rx="5" ry="7" fill="#0891b2" />
            <ellipse cx="45" cy="60" rx="4" ry="6" fill="#0891b2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#water-drops)" />
      </svg>
    </div>
  )
}

/** Single water drop icon (teardrop) */
export function WaterDropIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.69c.24-.32.58-.5.95-.5.37 0 .71.18.95.5l8.5 11.27c.47.62.47 1.46 0 2.08-.24.31-.57.49-.95.49H4c-.38 0-.71-.18-.95-.49-.47-.62-.47-1.46 0-2.08L12 2.69z" />
    </svg>
  )
}

/** Pressure washer / spray wand icon */
export function PressureWandIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* Wand body */}
      <path d="M5 4h4l2 6 2-6h4" />
      <path d="M5 4v16M9 4v16" />
      {/* Nozzle */}
      <circle cx="7" cy="20" r="1.5" />
      {/* Spray lines */}
      <path d="M12 10v2M12 14v2M12 18v2" strokeWidth="1.5" opacity="0.8" />
      <path d="M14 11v2M14 15v2" strokeWidth="1.5" opacity="0.6" />
      <path d="M10 11v2M10 15v2" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}
