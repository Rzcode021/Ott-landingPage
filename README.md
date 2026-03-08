# OTT Platform - Premium Cinematic Landing Page

A high-end, cinematic OTT streaming platform landing page built with React, Vite, and Three.js WebGL animations. Featuring premium 2026 design aesthetics inspired by Netflix and Apple TV+.

## 🎨 Design Features

- **Ultra-Premium Dark Theme**: Dark background (#0F0F0F) with premium accent color (#E50914)
- **Advanced WebGL Animations**: Three.js galaxy/particle background with dynamic effects
- **Glassmorphism UI**: Modern frosted glass effects and transparency
- **Smooth Scroll**: Lenis smooth scrolling library integration
- **Full Responsiveness**: Mobile, tablet, and desktop optimized
- **Performance Optimized**: Efficient animations and lazy loading

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Sticky navigation with glassmorphism
│   ├── Hero.tsx                # Cinematic hero section with galaxy background
│   ├── GalaxyBackground.tsx    # Three.js particle animation component
│   ├── ContentShowcase.tsx     # 3D carousel & horizontal scrolling rows
│   ├── DownloadSection.tsx     # 3D phone mockup with app preview
│   └── Footer.tsx              # Premium footer
├── styles/
│   ├── globals.css             # Global typography & animations
│   ├── Navbar.css              # Navigation styles
│   ├── Hero.css                # Hero section styles
│   ├── ContentShowcase.css     # Content showcase styles
│   ├── DownloadSection.css     # Download section styles
│   └── Footer.css              # Footer styles
├── App.tsx                     # Main app component
├── App.css                     # App wrapper styles
└── index.css                   # Base styles
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173/`

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📦 Dependencies

- **React 18**: UI framework
- **Vite**: Lightning-fast build tool
- **Three.js**: WebGL graphics library
- **GSAP**: Advanced animation library
- **Lenis**: Premium smooth scroll library

## 🎬 Features

### Navbar
- Sticky positioning with smooth scroll blur effect
- Semi-transparent glassmorphism background
- Responsive hamburger menu
- Premium glow hover effects on CTA button
- Smooth navigation transitions

### Hero Section
- Full-screen immersive layout
- Three.js animated galaxy with particles
- Dynamic mouse-following glow effect
- Cinematic fade-in animations
- Large bold typography with gradient effects
- Call-to-action button with glowing effects

### Content Showcase
- **3D Poster Carousel**: Center-focused carousel with 3D rotation effects
- **Horizontal Auto-Scroll**: Netflix-style infinite scrolling row
- Pause-on-hover functionality
- 3D tilt effects with depth perception
- Smooth drag/click navigation
- Parallax depth indicators

### Download Section
- **3D Phone Mockup**: Interactive 3D smartphone with perspective transform
- Live OTT UI preview on phone screen
- Mouse-responsive 3D rotation
- Soft glow lighting effects
- Floating particles background animation
- Dual download buttons with premium styling

### Footer
- Premium company information sections
- Social media links
- Legal/help navigation
- Smooth hover animations
- Fully responsive grid layout

## 🎨 Color Scheme

- **Primary Black**: `#0F0F0F`
- **Accent Red**: `#E50914`
- **Secondary Dark**: `#1A1A1A`
- **Text Light**: `#FFFFFF`
- **Text Muted**: `rgba(255, 255, 255, 0.6)`

## 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width
- **Tablet**: 1024px and down
- **Mobile**: 768px and down
- **Small Mobile**: 480px and down

## ⚡ Performance Optimization

- Efficient Three.js rendering
- Hardware-accelerated CSS transforms
- Smooth 60fps animations
- Optimized particle count
- Lazy component rendering
- Minimal re-renders with React hooks

## 🔧 Customization

### Change Accent Color
- Update `#E50914` throughout CSS files
- Modify `GalaxyBackground.tsx` color values
- Update button gradients in component CSS

### Modify Content
- Edit mock data in `ContentShowcase.tsx`
- Update links in `Navbar.tsx` and `DownloadSection.tsx`
- Customize footer links in `Footer.tsx`

### Adjust Animations
- Modify animation timing in component CSS
- Edit Three.js parameters in `GalaxyBackground.tsx`
- Adjust Lenis scroll settings in `App.tsx`

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Build Output
```bash
npm run build
# Output: dist/
```

## 📄 License

Created for premium streaming platform demonstration.

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Made with ❤️ for premium web experiences**
