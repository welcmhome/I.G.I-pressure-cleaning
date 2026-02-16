# In & Out Florida Pest Control Website

A modern, minimal, high-end website for In & Out Florida Pest Control built with Next.js, Tailwind CSS, and Framer Motion.

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
cd "/Volumes/Extreme SSD/Pest Control site"
npm run dev
```

3. Open **http://localhost:3006** in your browser.

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

Replace the placeholder image in `WhyChooseUs.tsx` with your actual image. You can use Next.js Image component for optimization.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to a GitHub repo (if you haven’t already).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New…** → **Project** and import your repo.
4. Leave the defaults (Framework: Next.js, Root: `.`) and click **Deploy**.
5. When it finishes, Vercel gives you a live URL (e.g. `your-project.vercel.app`).

No extra config is needed; Vercel detects Next.js and builds it.

## Contact Information

- Phone: (954) 213-4572
- Email: inoutfloridapestcontrol@gmail.com
- Instagram: @inoutfloridapestcontrol
