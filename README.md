# Habede - Birthday Celebration Website

A beautiful birthday celebration website built with React, Vite, and Tailwind CSS.

## Features

- 🎂 Hero section with birthday greetings
- 💝 Special greeting from boyfriend
- 📸 Photo gallery with memories
- 💌 Community wishes wall
- 🎨 Beautiful animations and transitions
- 📱 Fully responsive design

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Motion (for animations)
- GSAP (for advanced animations)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or pnpm

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd habede
```

2. Install dependencies

```bash
npm install
# or
pnpm install
```

3. Start development server

```bash
npm run dev
# or
pnpm dev
```

4. Build for production

```bash
npm run build
# or
pnpm build
```

## Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

### Option 2: Manual Deployment

1. Build your project:

```bash
npm run build
```

2. Upload the `dist` folder to Netlify

### Build Settings for Netlify

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

## Project Structure

```
habede/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images and assets
│   ├── components/  # Reusable components
│   ├── layouts/     # Page layouts
│   ├── data/        # Data files
│   └── styles/      # CSS styles
├── netlify.toml     # Netlify configuration
└── vite.config.js   # Vite configuration
```

## Customization

- Update photos in `public/` folder
- Modify greeting messages in layout files
- Customize colors and styling in Tailwind config
- Add new sections as needed

## License

This project is private and for personal use only.
