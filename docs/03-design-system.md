# Design System Documentation

## Overview
This design system ensures visual consistency, accessibility, and a premium user experience across the Blog & CMS Platform. It defines the foundation for all UI components, layouts, and interactions.

---

## 🎨 Design Philosophy

### Core Principles
1. **Content First**: Design serves the content, not overshadows it
2. **Readability**: Typography optimized for long-form reading
3. **Accessibility**: WCAG 2.1 AA compliance minimum
4. **Performance**: Lightweight, fast-loading design
5. **Consistency**: Predictable patterns across the platform
6. **Modern**: Contemporary aesthetics with timeless appeal

### Visual Direction
- Clean, minimal interface
- Generous whitespace
- Beautiful typography
- Subtle, purposeful animations
- Premium feel without complexity

---

## 🌈 Color System

### Light Mode Palette

#### Primary Colors
```css
--color-primary-50: #eff6ff;    /* Lightest blue */
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #3b82f6;   /* Main brand blue */
--color-primary-600: #2563eb;
--color-primary-700: #1d4ed8;
--color-primary-800: #1e40af;
--color-primary-900: #1e3a8a;   /* Darkest blue */
```

#### Neutral Colors
```css
--color-neutral-50: #fafaf9;    /* Backgrounds */
--color-neutral-100: #f5f5f4;
--color-neutral-200: #e7e5e4;
--color-neutral-300: #d6d3d1;
--color-neutral-400: #a8a29e;
--color-neutral-500: #78716c;
--color-neutral-600: #57534e;
--color-neutral-700: #44403c;
--color-neutral-800: #292524;
--color-neutral-900: #1c1917;   /* Text */
```

#### Semantic Colors
```css
/* Success - Green */
--color-success-500: #22c55e;
--color-success-600: #16a34a;
--color-success-50: #f0fdf4;

/* Warning - Amber */
--color-warning-500: #f59e0b;
--color-warning-600: #d97706;
--color-warning-50: #fffbeb;

/* Error - Red */
--color-error-500: #ef4444;
--color-error-600: #dc2626;
--color-error-50: #fef2f2;

/* Info - Blue */
--color-info-500: #0ea5e9;
--color-info-600: #0284c7;
--color-info-50: #f0f9ff;
```

### Dark Mode Palette

#### Background Colors
```css
--dark-bg-primary: #0a0a0a;      /* Main background */
--dark-bg-secondary: #171717;    /* Cards, elevated surfaces */
--dark-bg-tertiary: #262626;     /* Hover states */
--dark-bg-hover: #404040;        /* Interactive hover */
```

#### Text Colors
```css
--dark-text-primary: #fafafa;    /* Headings, main text */
--dark-text-secondary: #d4d4d4;  /* Body text */
--dark-text-tertiary: #a3a3a3;   /* Muted text */
--dark-text-disabled: #525252;   /* Disabled states */
```

#### Border Colors
```css
--dark-border-subtle: #262626;
--dark-border-default: #404040;
--dark-border-strong: #525252;
```

### Color Usage Guidelines

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Page Background | neutral-50 | dark-bg-primary |
| Card Background | white | dark-bg-secondary |
| Primary Text | neutral-900 | dark-text-primary |
| Secondary Text | neutral-600 | dark-text-secondary |
| Borders | neutral-200 | dark-border-default |
| Links | primary-600 | primary-400 |
| Buttons | primary-600 | primary-500 |

---

## ✍️ Typography

### Font Stack

#### Primary Font (Body & Headings)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

**Why Inter?**
- Excellent readability
- Professional appearance
- Complete character set
- Open source & free

#### Secondary Font (Code)
```css
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 
             'Monaco', 'Courier New', monospace;
```

#### Accent Font (Optional headings)
```css
font-family: 'Playfair Display', Georgia, serif;
```

### Type Scale

```css
/* Display - Hero sections */
--text-display: 4.5rem;      /* 72px */
--text-display-line: 1.1;

/* Headings */
--text-h1: 3rem;             /* 48px */
--text-h1-line: 1.2;

--text-h2: 2.25rem;          /* 36px */
--text-h2-line: 1.3;

--text-h3: 1.875rem;         /* 30px */
--text-h3-line: 1.3;

--text-h4: 1.5rem;           /* 24px */
--text-h4-line: 1.4;

--text-h5: 1.25rem;          /* 20px */
--text-h5-line: 1.4;

--text-h6: 1.125rem;         /* 18px */
--text-h6-line: 1.4;

/* Body */
--text-body-lg: 1.125rem;    /* 18px */
--text-body-lg-line: 1.7;

--text-body: 1rem;           /* 16px */
--text-body-line: 1.6;

--text-body-sm: 0.875rem;    /* 14px */
--text-body-sm-line: 1.5;

/* Small text */
--text-caption: 0.75rem;     /* 12px */
--text-caption-line: 1.4;
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Typography for Blog Posts

**Article Title**: Display or H1, Bold (700), extra tight spacing  
**Article Subtitle**: H4 or Body-lg, Medium (500), muted color  
**Section Headings**: H2-H4, Semibold (600)  
**Body Text**: Body-lg (18px), Normal (400), 1.7 line-height  
**Captions**: Body-sm, Medium (500), muted color  
**Quotes**: H3-H4, Italic, serif font

### Responsive Typography

```css
/* Mobile (<640px) */
--text-h1-mobile: 2rem;      /* 32px */
--text-h2-mobile: 1.75rem;   /* 28px */
--text-h3-mobile: 1.5rem;    /* 24px */
--text-body-mobile: 1rem;    /* 16px min for readability */

/* Tablet (640px-1024px) */
--text-h1-tablet: 2.5rem;    /* 40px */
--text-h2-tablet: 2rem;      /* 32px */
--text-h3-tablet: 1.625rem;  /* 26px */
```

---

## 📏 Spacing System

### Scale (based on 4px grid)
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Usage Guidelines

| Context | Spacing |
|---------|---------|
| Component padding (small) | space-4 (16px) |
| Component padding (default) | space-6 (24px) |
| Component padding (large) | space-8 (32px) |
| Section spacing | space-16 (64px) |
| Page margins | space-6 to space-8 |
| Element gaps | space-4 to space-6 |
| Card padding | space-6 to space-8 |

---

## 🔲 Layout System

### Container Widths
```css
--container-sm: 640px;    /* Single column content */
--container-md: 768px;    /* Default articles */
--container-lg: 1024px;   /* Wide content */
--container-xl: 1280px;   /* Full layouts */
--container-2xl: 1536px;  /* Extra wide */

/* Optimal reading width */
--container-prose: 65ch;  /* ~650-700px */
```

### Grid System
```css
/* 12-column grid */
--grid-cols: 12;
--grid-gap: var(--space-6);

/* Common layouts */
--layout-sidebar: 300px;   /* Sidebar width */
--layout-main: 1fr;        /* Main content */
```

### Breakpoints
```css
--breakpoint-sm: 640px;    /* Tablet */
--breakpoint-md: 768px;    /* Small laptop */
--breakpoint-lg: 1024px;   /* Laptop */
--breakpoint-xl: 1280px;   /* Desktop */
--breakpoint-2xl: 1536px;  /* Large desktop */
```

---

## 🎭 Components

### Buttons

#### Variants
```css
/* Primary Button */
.btn-primary {
  background: var(--color-primary-600);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: var(--color-primary-700);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

/* Secondary Button */
.btn-secondary {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
  border: 1px solid var(--color-neutral-300);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--color-primary-600);
  border: none;
}

/* Danger Button */
.btn-danger {
  background: var(--color-error-500);
  color: white;
}
```

#### Sizes
- **Small**: 0.5rem 1rem padding, 0.875rem font
- **Default**: 0.75rem 1.5rem padding, 1rem font
- **Large**: 1rem 2rem padding, 1.125rem font

---

### Cards

```css
.card {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: 0.75rem;
  padding: var(--space-6);
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--color-primary-300);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* Dark mode */
.dark .card {
  background: var(--dark-bg-secondary);
  border-color: var(--dark-border-default);
}
```

#### Card Variants
- **Blog Post Card**: Featured image, title, excerpt, metadata
- **Author Card**: Avatar, name, bio, stats
- **Category Card**: Icon, title, post count
- **Search Result Card**: Title, snippet, metadata

---

### Forms

```css
/* Input Fields */
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid var(--color-neutral-300);
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Textarea */
.textarea {
  min-height: 120px;
  resize: vertical;
}

/* Select */
.select {
  appearance: none;
  background-image: url('chevron-down.svg');
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  padding-right: 2.5rem;
}
```

#### Form States
- **Default**: Neutral border
- **Focus**: Primary border + shadow
- **Error**: Red border + error message
- **Success**: Green border + success message
- **Disabled**: Gray background, reduced opacity

---

### Navigation

```css
/* Header Navigation */
.nav-header {
  height: 72px;
  background: white;
  border-bottom: 1px solid var(--color-neutral-200);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
}

/* Navigation Links */
.nav-link {
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: var(--color-neutral-700);
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--color-primary-600);
}

.nav-link.active {
  color: var(--color-primary-600);
  border-bottom: 2px solid var(--color-primary-600);
}
```

---

### Badges & Tags

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

/* Tag variations */
.tag-category {
  background: var(--color-primary-50);
  color: var(--color-primary-600);
}

.tag-keyword {
  background: var(--color-neutral-200);
  color: var(--color-neutral-700);
  border: 1px solid var(--color-neutral-300);
}
```

---

## 🎬 Motion & Animation

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
```

### Duration
```css
--duration-fast: 150ms;      /* Micro-interactions */
--duration-normal: 250ms;    /* Standard transitions */
--duration-slow: 350ms;      /* Large movements */
--duration-slower: 500ms;    /* Page transitions */
```

### Common Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}
```

### Animation Guidelines
- **Subtle**: Most animations should be barely noticeable
- **Performance**: Use transform and opacity only
- **Purpose**: Every animation should serve a purpose
- **Accessibility**: Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🖼️ Images & Media

### Image Ratios
```css
--ratio-square: 1/1;         /* Profile images */
--ratio-video: 16/9;         /* Featured images */
--ratio-portrait: 3/4;       /* Author photos */
--ratio-landscape: 4/3;      /* Thumbnails */
--ratio-ultra-wide: 21/9;    /* Hero banners */
```

### Image Styles

```css
/* Featured Image */
.featured-image {
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0.75rem;
}

/* Avatar */
.avatar {
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 9999px;
}

/* Thumbnail */
.thumbnail {
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 0.5rem;
}
```

### Image Sizes
- **Avatar Small**: 32px × 32px
- **Avatar Medium**: 48px × 48px
- **Avatar Large**: 96px × 96px
- **Thumbnail**: 200px × 150px
- **Featured**: 1200px × 675px
- **Hero**: 1920px × 1080px

---

## 🔍 Icons

### Icon System
**Using**: Lucide React (installed)

Lucide provides a comprehensive set of beautifully crafted open source icons with consistent style and size.

### Installation
```bash
npm install lucide-react
```

### Icon Sizes
```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
```

### Usage Examples

```tsx
import { Search, Menu, X, ChevronRight, Heart, Share2 } from 'lucide-react';

// In components
<Search size={24} />
<Menu size={20} className="text-neutral-700" />
<Heart size={16} strokeWidth={2.5} />
```

### Common Icons for Blog Platform

```tsx
// Navigation
import { Home, BookOpen, User, Settings, Menu, X } from 'lucide-react';

// Actions
import { Search, Edit, Trash2, Save, Plus, Minus } from 'lucide-react';

// Content
import { FileText, Image, Video, Calendar, Clock } from 'lucide-react';

// Social
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

// Social Media
import { Twitter, Facebook, Linkedin, Github, Mail } from 'lucide-react';

// UI
import { ChevronRight, ChevronLeft, ChevronUp, ChevronDown } from 'lucide-react';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

// Status
import { Check, AlertCircle, Info, XCircle } from 'lucide-react';
```

### Size Usage Guidelines
- **Navigation**: 24px (`size={24}`)
- **Buttons**: 20px (`size={20}`)
- **Social links**: 24px (`size={24}`)
- **Feature highlights**: 48px (`size={48}`)
- **Inline text**: 16px (`size={16}`)

### Styling Icons

```tsx
// Color
<Search className="text-primary-600" />

// Custom size
<Heart size={32} />

// Stroke width
<Menu strokeWidth={2.5} />

// With animation
<Heart 
  className="hover:text-red-500 transition-colors" 
  fill={isFavorited ? 'currentColor' : 'none'}
/>
```

---

## ✨ Effects & Shadows

### Box Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 
          0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 
             0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 
             0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 
             0 10px 10px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
```

### Usage
| Element | Shadow |
|---------|--------|
| Cards (default) | shadow |
| Cards (hover) | shadow-lg |
| Dropdowns | shadow-md |
| Modals | shadow-xl |
| Floating buttons | shadow-lg |

### Border Radius
```css
--radius-sm: 0.25rem;   /* 4px */
--radius: 0.5rem;       /* 8px */
--radius-md: 0.75rem;   /* 12px */
--radius-lg: 1rem;      /* 16px */
--radius-xl: 1.5rem;    /* 24px */
--radius-full: 9999px;  /* Circle */
```

---

## 📱 Responsive Design

### Mobile-First Approach
Start with mobile design, enhance for larger screens.

### Touch Targets
- **Minimum**: 44px × 44px
- **Recommended**: 48px × 48px
- **Comfortable**: 56px × 56px

### Mobile Optimizations
- Larger tap targets
- Simplified navigation
- Readable font sizes (min 16px for body)
- Optimized images
- Bottom navigation for key actions

---

## ♿ Accessibility

### Color Contrast
- **AA Standard**: Minimum 4.5:1 for normal text
- **AA Large Text**: Minimum 3:1 for large text (18px+)
- **AAA Standard**: Minimum 7:1 for normal text

### Focus States
```css
.focusable:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: var(--radius);
}
```

### Screen Reader Only
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 🎨 Component Library

### Recommended Structure
```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   └── Avatar.tsx
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── Container.tsx
├── blog/
│   ├── PostCard.tsx
│   ├── PostHeader.tsx
│   ├── PostContent.tsx
│   ├── AuthorBio.tsx
│   └── TableOfContents.tsx
└── common/
    ├── Navigation.tsx
    ├── SearchBar.tsx
    ├── Newsletter.tsx
    └── SocialShare.tsx
```

---

## 🚀 Implementation with Tailwind CSS

### Config Example
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // Your primary color scale
        },
        neutral: {
          // Your neutral scale
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        // Prose customizations
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
```

---

## 📋 Design Checklist

### Before Launch
- [ ] All colors meet WCAG AA contrast ratios
- [ ] Font sizes are readable (min 16px body)
- [ ] Touch targets are 44px minimum
- [ ] Focus states are visible
- [ ] Dark mode works correctly
- [ ] Responsive on all breakpoints
- [ ] Images have alt text
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Forms have proper labels
- [ ] Error states are clear
- [ ] Loading states are implemented
- [ ] Empty states are designed

---

## 🔄 Design Tokens

Consider using CSS custom properties for easy theming:

```css
:root {
  /* Colors */
  --primary: var(--color-primary-600);
  --background: var(--color-neutral-50);
  --foreground: var(--color-neutral-900);
  
  /* Typography */
  --font-body: var(--text-body);
  --font-heading: var(--text-h1);
  
  /* Spacing */
  --spacing-unit: var(--space-4);
  
  /* Borders */
  --border-radius: var(--radius);
  --border-color: var(--color-neutral-200);
}

.dark {
  --primary: var(--color-primary-400);
  --background: var(--dark-bg-primary);
  --foreground: var(--dark-text-primary);
  --border-color: var(--dark-border-default);
}
```

---

*Last updated: 2026-01-17*
