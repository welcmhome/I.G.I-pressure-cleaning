# Boynton Beach Landscaping LLC Website

A modern, minimal, high-end website for Boynton Beach Landscaping LLC built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Clean, minimal, modern design
- 📱 Fully responsive (mobile-first)
- ✨ Smooth scroll animations
- 🎯 SEO optimized
- 🚀 Built with Next.js 14 App Router
- 💅 Styled with Tailwind CSS
- 🎭 Animated with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open **http://localhost:3000** in your browser.

   **Mac shortcut:** Double‑click **START-SERVER-AND-OPEN-SITE.command** in this folder to start the server and open the browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── WhyChooseUs.tsx   # Why Choose Us section
│   ├── ServiceAreas.tsx  # Service areas section
│   ├── About.tsx         # About section
│   ├── Reviews.tsx       # Google reviews section
│   ├── CTA.tsx           # Call to action section
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer component
│   └── FloatingCallButton.tsx  # Mobile call button
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary green color is defined as `primary-green`.

### Content

All content is defined within the component files. Edit the respective component files to update text, services, cities, etc.

### Images

Replace images in `public/assets/` with your landscaping photos. Update paths in Hero, About, Services, and WhyChooseUs as needed.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to [GitHub](https://github.com/welcmhome/BoyntonBeachLandscapingLLC).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New…** → **Project** and import your repo.
4. Leave the defaults (Framework: Next.js, Root: `.`) and click **Deploy**.
5. When it finishes, Vercel gives you a live URL.

## Contact Information

Update phone, email, and social links in the component files (Header, Hero, Contact, Footer, CTA) with your actual contact details.
