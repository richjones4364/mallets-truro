# Malletts Home Hardware - Digital Flagship

A modern, high-performance website for Malletts Home Hardware, a legendary independent department store in Truro, Cornwall.

## Features

- **Heritage Hero Section**: Showcases 125 years of history with elegant typography
- **Department Mega-Grid**: Visual grid of department cards with hover effects
- **Multi-level Navigation**: Elegant mega-menu for 10+ departments
- **Tea on the Square**: Dedicated section for the coffee shop
- **Service Highlight Bar**: Key services like key cutting, blade sharpening, etc.
- **Mobile-First Design**: Floating department menu for in-store navigation
- **Check Stock CTA**: Easy enquiry form for stock availability
- **Modern Footer**: Map integration, opening hours, newsletter signup

## Tech Stack

- **Framework**: Next.js 14
- **UI**: Tailwind CSS + Shadcn UI
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Color Palette**: Deep Royal Blue (#1e3a8a), Slate Grey (#475569), Crisp White

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── navigation.tsx      # Main navigation with mega-menu
│   ├── hero.tsx            # Heritage hero section
│   ├── department-grid.tsx # Department cards grid
│   ├── tea-shop-section.tsx
│   ├── service-bar.tsx
│   ├── footer.tsx
│   ├── check-stock-dialog.tsx
│   └── mobile-department-menu.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Departments

- Cookshop
- Outlet Store
- Services
- Toys
- Giftware
- Luggage & Linens
- Household & Cleaning
- Gardening & Leisure
- Power Tools & Hand Tools
- Hardware & Ironmongery
- Heating & Fireside
- Tea Shop

## Contact

**Malletts Home Hardware**
6 & 7 Victoria Square, Truro, Cornwall, TR1 2RT
Tel: 01872 274441
Email: enquiries@mallettshomehardware.co.uk

