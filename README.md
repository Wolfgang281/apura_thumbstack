# APURA - Thumbstack Front-End Machine Test

A responsive landing page for APURA, a European cloud platform focused on data sovereignty and privacy.

## 🚀 Live Demo

**[View Live Site](#)** _(Add your Vercel/Netlify link here)_

## 📖 About This Project

This is my submission for the Thumbstack Front-End Machine Test (July 2025). The project is a pixel-perfect implementation of the provided Figma design, showcasing APURA's mission to provide Europeans with complete control over their data.

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling (custom config)
- **Lucide React** - Icon library

## 📂 Project Structure

```
apura_thumbstack/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── AboutUs.jsx
│   │   ├── EmailCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Mission.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Products.jsx
│   │   ├── Roadmap.jsx
│   │   └── SupporterCTA.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   ├── index.css       # Tailwind imports
│   └── main.jsx        # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Wolfgang281/apura_thumbstack.git
cd apura_thumbstack
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Implementation

### Key Features

✅ **Pixel-Perfect Design** - Carefully matched spacing, typography, and colors from Figma  
✅ **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop  
✅ **Smooth Interactions** - Hover effects, transitions, and micro-animations  
✅ **Component-Based** - Modular, reusable React components  
✅ **Performance Optimized** - Fast loading with Vite's optimization  
✅ **Accessible** - Semantic HTML and ARIA labels where needed

### Color Palette

- **Primary Yellow:** `#E4FF1A` - Brand highlight color
- **Dark Background:** `#1A1A1A` - Main dark sections
- **Light Beige:** `#EDEBE6` / `#E8E5E0` - Alternate section backgrounds
- **White:** `#FFFFFF` - Clean sections and text

### Components Overview

1. **Hero** - Full-screen intro with navigation and key message
2. **EmailCTA** - Email capture bar
3. **Mission** - Company mission statement
4. **Products** - Three product cards (IaaS, Workspace, Socials)
5. **AboutUs** - "By Europeans, for Europeans" section with Europe map
6. **Roadmap** - 5-stage development timeline
7. **SupporterCTA** - Call to action for supporters
8. **Newsletter** - Email subscription form
9. **Footer** - Links, social media, copyright

## 🎯 My Approach

### Design Fidelity

I focused on matching the Figma design exactly by:

- Using the exact color codes and spacing from the design system
- Implementing custom SVG graphics (like the Europe map in the footer and about section)
- Carefully matching typography weights and sizes at each breakpoint

### Responsiveness

The site uses a mobile-first approach with Tailwind's responsive utilities:

- **Mobile:** Single column layouts, simplified navigation
- **Tablet:** Two-column grids, expanded spacing
- **Desktop:** Full multi-column layouts, maximum content width

### Code Quality

- **Component separation** - Each section is its own component for maintainability
- **Reusable patterns** - Consistent button styles, hover effects, and transitions
- **Clean state management** - Simple useState hooks for forms and mobile menu
- **Semantic HTML** - Proper use of section, nav, footer, etc.

### Trade-offs & Decisions

**Why I chose Vite over Next.js:**  
For a landing page without routing or SSR needs, Vite provides faster dev experience and simpler deployment.

**Inline Tailwind vs separate CSS:**  
Tailwind utility classes keep styles close to components and reduce context switching during development.

**Lucide icons:**  
Lightweight, customizable, and tree-shakeable - perfect for the social icons and CTAs.

**Optimizations applied:**

- Vite's automatic code splitting
- Optimized SVG graphics
- Minimal dependencies
- Lazy loading for below-fold content _(if implemented)_

## ♿ Accessibility

- Semantic HTML elements throughout
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive text sizing

## 🌐 Browser Support

Tested and working on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Deployment

This project can be deployed to:

**Vercel:**

```bash
npm run build
# Connect your GitHub repo to Vercel
```

**Netlify:**

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

## 🤔 What I Learned

- Building pixel-perfect UIs requires attention to the smallest details
- Mobile-first responsive design is crucial for modern web apps
- Component composition makes complex UIs maintainable
- Custom SVG graphics can enhance visual appeal without bloating bundle size

## 👤 Author

**Wolfgang**

- GitHub: [@Wolfgang281](https://github.com/Wolfgang281)
- Repository: [apura_thumbstack](https://github.com/Wolfgang281/apura_thumbstack)

---

_Submission Date: January 2026_
