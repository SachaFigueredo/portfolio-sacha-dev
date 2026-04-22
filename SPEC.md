# Portfolio Dev Profesional - Specification

## 1. Project Overview

**Project Name:** Portfolio Dev Profesional  
**Type:** Single-page portfolio with scroll navigation  
**Stack:** React 18 + TypeScript + Tailwind CSS + Next.js 14 (App Router)  
**Purpose:** Convert visitors into freelance clients and job opportunities  
**Target:** Companies, startups, and clients looking for full-stack developers

---

## 2. UI/UX Specification

### Layout Structure

- **Single page scroll** with fixed navigation that smooth-scrolls to sections
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette (Dark Mode Elegante)
- **Background Primary:** `#0a0a0f` (near-black)
- **Background Secondary:** `#12121a` (card backgrounds)
- **Background Tertiary:** `#1a1a24` (hover states)
- **Text Primary:** `#f8fafc` (white-ish)
- **Text Secondary:** `#94a3b8` (muted gray)
- **Accent Primary:** `#3b82f6` (electric blue)
- **Accent Secondary:** `#8b5cf6` (purple highlight)
- **Accent Gradient:** `linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)`
- **Success:** `#22c55e` (green for CTAs)
- **Border:** `#27272a` (subtle borders)

#### Typography
- **Font Family:** `"Inter", sans-serif` (Google Fonts)
- **Headings:**
  - H1: 48px/56px, font-weight: 700
  - H2: 36px/44px, font-weight: 600
  - H3: 24px/32px, font-weight: 600
- **Body:** 16px/24px, font-weight: 400
- **Small:** 14px/20px, font-weight: 400

#### Spacing System
- Base unit: 4px
- Section padding: 96px vertical (desktop), 64px (mobile)
- Card padding: 24px
- Component gap: 16px/24px

#### Visual Effects
- **Cards:** `bg-white/5` with backdrop blur, subtle border
- **Shadows:** Soft glow effects using accent color
- **Animations:**
  - Fade-in on scroll (Framer Motion)
  - Hover scale: 1.02
  - Button hover: brightness increase
- **Glassmorphism:** `backdrop-blur-md` on navigation

---

## 3. Component Specification

### Navigation (Fixed)
- Logo: Name or "Dev" initials
- Links: Inicio, Sobre Mí, Proyectos, Servicios, Contacto
- Mobile: Hamburger menu with slide-in drawer
- Glassmorphism background on scroll

### Hero Section
- Full viewport height (100vh)
- Animated gradient background (subtle)
- Name: Large heading with gradient text
- Subtitle: Professional title
- Value proposition: One-liner what you solve
- CTA Buttons:
  - "Ver proyectos" → scrolls to #proyectos
  - "Contactarme" → scrolls to #contacto

### Sobre Mí Section
- Two-column layout (text + image/illustration)
- Professional description
- Focus on problem-solving
- Client-oriented messaging

### Tecnologías Section
- Grid of technology icons (4-5 per row)
- Icons: React, Node.js, PostgreSQL, JavaScript, TypeScript, Express, Git, Tailwind
- Hover effect with glow

### Proyectos Section
- Card grid (3 columns desktop, 1 mobile)
- Each card:
  - Project name
  - Description (2-3 lines)
  - Technologies used (tags)
  - Links: Demo + GitHub

### Servicios Section
- 2x2 grid of service cards
- Each card:
  - Icon (lucide-react)
  - Service title
  - Brief description
  - "Más info" button

### Contacto Section
- Contact form (simulated with console.log)
- Email display
- WhatsApp button (wa.me link)
- Social links: GitHub, LinkedIn

### Footer
- Social links
- Copyright
- "Built with React + Next.js"

---

## 4. Functionality Specification

### Navigation
- Smooth scroll to sections on click
- Active section highlighting
- Mobile menu toggle

### Form
- Name, email, message fields
- Client-side validation
- Submit shows success message (simulated)

### Animations
- Sections fade-in on scroll
- Staggered card animations
- Smooth hover transitions

### SEO
- Meta title and description
- Open Graph tags
- Semantic HTML structure

---

## 5. File Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── SobreMi.tsx
│   │   ├── Tecnologias.tsx
│   │   ├── Proyectos.tsx
│   │   ├── Servicios.tsx
│   │   ├── Contacto.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── portfolio.ts
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 6. Acceptance Criteria

- [ ] Page loads without errors
- [ ] All sections visible and properly styled
- [ ] Navigation smooth-scrolls to sections
- [ ] Mobile menu works correctly
- [ ] Form validation works
- [ ] Animations play smoothly
- [ ] Responsive on all breakpoints
- [ ] Dark theme consistent throughout
- [ ] All links functional