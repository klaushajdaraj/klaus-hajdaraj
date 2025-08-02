# Personal Portfolio Website

A modern, interactive personal portfolio website featuring a 3D badge component and terminal-style interface. Built with cutting-edge web technologies, powered by AI.

## 🌟 Features

- **Interactive 3D Badge**: Physics-based draggable badge with realistic rope simulation
- **Terminal Interface**: Retro terminal-style navigation with command-line design
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **Modern Tech Stack**: Built with Next.js 14, React Three Fiber, and TypeScript
- **AI-Powered Development**: Enhanced and optimized using AI

## 🎯 Inspiration

The 3D interactive badge component is inspired by Vercel's innovative [3D event badge implementation](https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber).

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### 3D Graphics & Animation
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **@react-three/rapier** - Physics engine integration
- **Three.js** - 3D graphics library
- **MeshLine** - Thick line rendering for ropes

### UI Components & Animation
- **NextUI** - Modern React UI library
- **Framer Motion** - Production-ready motion library

### Development Tools
- **Blender** - 3D model creation and optimization
- **PostCSS** - CSS processing

### Deployment & Hosting
- **Vercel** - Production deployment and hosting platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/klaushajdaraj/klaus-hajdaraj.git
cd klaus-hajdaraj
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
klaus-hajdaraj/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Badge3D.tsx       # 3D badge component
│   ├── band.tsx          # Physics rope component
│   ├── Terminal.tsx      # Terminal interface
│   ├── LeftSection.tsx   # Layout components
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
│   └── assets/          # 3D models and textures
│       ├── 3d/          # GLB 3D models
│       └── images/      # Texture files
└── styles/              # Global styles
    └── globals.css      # Tailwind CSS styles
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and adapt it for your own use. If you find bugs or have suggestions for improvements, please open an issue.

---

*Built with ❤️ using modern web technologies and AI • Deployed on [Vercel](https://vercel.com)*
