# ZUP.DIGITAL Multi-Site Project

A modern React application featuring ZUP.DIGITAL's main portal, dispatch service, and media coming soon page.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── floating-navbar.jsx
│   │   └── 3d-card.jsx
│   ├── AnimatedBackground.jsx
│   ├── Card3D.jsx
│   ├── DynamicTyping.jsx
│   ├── FlipCard.jsx
│   └── Navigation.jsx
├── pages/
│   ├── MainPortal.jsx
│   ├── DispatchHome.jsx
│   ├── MediaComingSoon.jsx
│   ├── About.jsx
│   ├── Terms.jsx
│   └── Privacy.jsx
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Features

- **Main Portal**: Dynamic typing animation with 3D cards
- **Floating Navigation**: Scroll-triggered navbar with smooth animations
- **Dispatch Service**: Complete taxi dispatch platform pages
- **Media Coming Soon**: Contact form with animated background
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **3D Animations**: Interactive card components with hover effects

## 🛠 Technologies

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Tabler Icons

## 🎯 Routes

- `/` - Main portal with dynamic typing and 3D cards
- `/dispatch` - Dispatch service homepage
- `/dispatch/about` - About page
- `/dispatch/terms` - Terms & conditions
- `/dispatch/privacy` - Privacy policy
- `/media` - Media coming soon page

## 🎨 Design System

- **Primary Color**: #FFD500 (ZUP Yellow)
- **Dark Theme**: #0A0A0A
- **Font**: Inter
- **Animations**: Smooth transitions with Framer Motion

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

This project is configured for Vercel deployment with proper routing setup in `vercel.json`.

---

© 2025 ZUP.DIGITAL - All rights reserved
