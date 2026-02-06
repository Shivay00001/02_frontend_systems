# 02_frontend_systems - Next.js Admin Dashboard

> Production-grade admin dashboard demonstrating modern React patterns, TypeScript, and enterprise UI architecture.

## 🎯 Overview

This module implements a comprehensive admin dashboard with:

- **Next.js 14** - App Router with Server Components
- **TypeScript** - Full type safety
- **TailwindCSS** - Utility-first styling
- **Authentication** - JWT-based auth flow
- **RBAC UI** - Role-based access control
- **CRUD Operations** - Full data management

## 📁 Structure

```
02_frontend_systems/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── dashboard/       # Dashboard pages
│   │   ├── users/           # User management
│   │   └── api/             # API routes
│   ├── components/          # React components
│   │   ├── ui/              # Base UI components
│   │   └── layouts/         # Layout components
│   ├── lib/                 # Utilities
│   ├── hooks/               # Custom hooks
│   └── types/               # TypeScript types
├── public/                  # Static assets
└── tests/                   # Component tests
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# Edit .env.local with your API URL

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        PAGES (App Router)                   │
│         (Server Components, Route Handlers, Layouts)        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT COMPONENTS                        │
│            (Interactive UI, Forms, State)                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       HOOKS & CONTEXT                        │
│           (useAuth, useApi, AppContext)                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      API CLIENT                             │
│            (Fetch wrapper, Type-safe calls)                 │
└─────────────────────────────────────────────────────────────┘
```

## 🎨 Design System

- **Colors**: Dark mode with accent colors
- **Typography**: Inter font family
- **Spacing**: 4px grid system
- **Components**: Consistent, reusable UI elements

## 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm test -- --coverage
```

## 📄 License

MIT
