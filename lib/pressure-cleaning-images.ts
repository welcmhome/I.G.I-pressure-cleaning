/**
 * Pressure cleaning images from Unsplash (houses, driveways, windows, roofs, concrete).
 * All royalty-free for commercial use. Format: w=width, q=quality, fit=crop.
 */
const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`

export const pressureCleaningImages = {
  // Hero: clean house exterior
  hero: unsplash('1600585154340-be6161a56a0c', 1600), // modern house exterior
  heroMobile: unsplash('1600585154340-be6161a56a0c', 1200),
  // Services
  houseWashing: unsplash('1564013799919-ab600027ffc6', 600),   // house siding
  commercial: unsplash('1486406146926-c627a92ad1ab', 600),      // commercial building
  roof: unsplash('1600585154340-be6161a56a0c', 600),           // house exterior with roof
  driveway: unsplash('1600573472592-401b489a3cdc', 600),        // house + driveway
  deck: unsplash('1600566753190-17f0baa2a6c3', 600),           // deck/patio
  concrete: unsplash('1600573472592-401b489a3cdc', 600),           // driveway/concrete (same source as driveway)
  // About section: clean house exterior
  about: unsplash('1564013799919-ab600027ffc6', 900),
  // Why Choose Us: house exterior / pressure cleaning
  whyChooseUs: unsplash('1600573472592-401b489a3cdc', 900),
} as const
