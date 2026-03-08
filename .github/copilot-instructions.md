# OTT Platform Landing Page - Copilot Instructions

This is a premium, cinematic OTT streaming platform landing page built with React, Vite, and Three.js.

## Project Overview

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Key Libraries**: Three.js (WebGL), GSAP, Lenis (smooth scroll)
- **Styling**: CSS with advanced animations
- **Design**: Netflix + Apple TV+ inspired premium dark theme

## Environment Setup

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs on http://localhost:5173/ (or next available port)

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              - Sticky navigation with glassmorphism
│   ├── Hero.tsx                - Cinematic hero section
│   ├── GalaxyBackground.tsx    - Three.js particle system
│   ├── ContentShowcase.tsx     - 3D carousel & carousels
│   ├── DownloadSection.tsx     - 3D phone mockup
│   └── Footer.tsx              - Premium footer
├── styles/
│   ├── globals.css             - Global animations & typography
│   ├── Navbar.css              - Navigation styles
│   ├── Hero.css                - Hero section styles
│   ├── ContentShowcase.css     - Content grid & carousels
│   ├── DownloadSection.css     - Download section & phone
│   └── Footer.css              - Footer styles
├── App.tsx                     - Main component
└── index.css                   - Base CSS
```

## Key Features Implementation

### 1. Navbar (Sticky, Glassmorphic)
- Location: `src/components/Navbar.tsx`
- Fixed positioning with blur effect on scroll
- Responsive hamburger menu for mobile
- Glow effects on CTA button

### 2. Hero Section with WebGL
- Location: `src/components/Hero.tsx` + `src/components/GalaxyBackground.tsx`
- Three.js animated galaxy particles
- Mouse-responsive glow effect
- Cinematic fade-in animations
- Full-screen viewport

### 3. Content Showcase (3D Carousel)
- Location: `src/components/ContentShowcase.tsx`
- 3D rotated carousel (center-focused)
- Auto-scrolling horizontal row (Netflix-style)
- Pause-on-hover functionality
- Parallax depth indicators

### 4. Download Section (3D Phone)
- Location: `src/components/DownloadSection.tsx`
- Interactive 3D phone mockup
- Mouse-responsive perspective transform
- Floating particles in background
- App download buttons with glow effects

### 5. Premium Styling
- Location: `src/styles/globals.css`
- Glassmorphism effects
- Gradient animations
- Smooth scroll with Lenis library
- Performance-optimized animations

## Design System

### Color Palette
- Primary Black: `#0F0F0F`
- Accent Red: `#E50914`
- Secondary Dark: `#1A1A1A`
- Text: `#FFFFFF` and `rgba(255,255,255,0.6)`

### Responsive Breakpoints
- Desktop: default
- Tablet: 1024px and down
- Mobile: 768px and down
- Small Mobile: 480px and down

## Customization Guide

### Change Accent Color
1. Search `#E50914` across all CSS files
2. Update `GalaxyBackground.tsx` color values
3. Modify button gradients in component styles

### Update Navigation Links
- Edit `Navbar.tsx` links
- Update destination URLs in all CTAs

### Modify Content
- Edit mock movie data in `ContentShowcase.tsx`
- Update download links in `DownloadSection.tsx`
- Customize footer links in `Footer.tsx`

### Animation Tweaks
- CSS animation timings in `*.css` files
- Three.js camera/particle settings in `GalaxyBackground.tsx`
- Lenis scroll options in `App.tsx`

## Performance Considerations

- Three.js particle count optimized (~2000 particles)
- Hardware-accelerated CSS transforms
- Smooth 60fps animations
- Minimal component re-renders
- Lazy loading support ready

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build & Deployment

### Local Testing
```bash
npm run build
npm run preview
```

### Production Deployment

**Vercel** (recommended for Vite):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Troubleshooting

### Port 5173 Already in Use
- Vite will automatically use the next available port (e.g., 5174)
- Check `npm run dev` output for the correct URL

### Lenis Smooth Scroll Not Working
- The library is optional; page will work without it
- Check browser console for any import errors
- Ensure `npm install lenis` is completed

### Three.js Performance Issues
- Reduce particle count in `GalaxyBackground.tsx`
- Lower animation frame rates if needed
- Check GPU capability in target browsers

### TypeScript Errors
- Run `npm install --save-dev @types/three` if Three.js types missing
- Ensure all CSS imports are in component files

## Development Commands Reference

```bash
npm install              # Install dependencies
npm run dev             # Start dev server
npm run build           # Production build
npm run preview         # Preview production build
npm run lint            # Run ESLint (if configured)
npm fund                # View funding info
```

## Notes for Future Development

- Consider code-splitting if bundle size becomes an issue
- Add service worker for offline support if needed
- Implement lazy loading for images/videos when added
- Consider adding analytics (GA, Mixpanel, etc.)
- Set up proper error tracking (Sentry, etc.)

---

**Last Updated**: March 2026
**Status**: Production Ready ✓
