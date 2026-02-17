# I.G.I Pressure Cleaning LLC Website

A modern, minimal website for I.G.I Pressure Cleaning LLC built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Clean, minimal, modern design
- Fully responsive (mobile-first)
- Smooth scroll animations
- SEO optimized
- Built with Next.js 14 App Router
- Styled with Tailwind CSS
- Animated with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

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

   **Mac:** Double-click **START-SERVER-AND-OPEN-SITE.command** to start the server and open the site.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx        # Root layout & metadata
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── ServiceAreas.tsx
│   ├── About.tsx
│   ├── Reviews.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── FloatingCallButton.tsx
└── public/
    └── assets/           # Add logo and images here
```

## Customization

### Logo & colors

- Logo used: **`public/assets/I.G.I LOGO.PNG`** (header and favicon).
- Edit `tailwind.config.js` to change the color scheme when you have the new logo.

### Content

Content is in the component files. Update phone, email, cities, services, and copy as needed.

### Images

- Logo: `public/assets/I.G.I LOGO.PNG` (header and favicon).
- **Optional:** Replace or add images in `public/assets/` for Hero, Services, About, and WhyChooseUs. Current placeholders: `service-house.webp`, `service-commercial.webp`, `service-roof.webp`, `service-driveway.webp`, `service-deck.webp`, `service-concrete.webp`, `about.webp`, `why-choose-us.webp`. Hero background uses `tropical-landscape-design.jpg` until you replace it.

## Git & deploy

- **Remote:** This project is set to push to **https://github.com/welcmhome/I.G.I-pressure-cleaning**. Do not push to the old landscaping repo.
- To deploy: push to the repo above, then connect the repo to Vercel (or your host) and deploy.

## Contact on site

- Phone: (561) 377-8663
- Email: info@igipressurecleaning.com (update if different)
- Facebook: [I.G.I Pressure Cleaning llc](https://www.facebook.com/people/IGI-Pressure-Cleaning-llc/100068313952530/)

## Build for production

```bash
npm run build
npm start
```
