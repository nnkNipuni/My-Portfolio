# Nipuni Kahandawa - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring glassmorphism design, smooth animations, and embedded project videos.

## Features

- ✨ **Glassmorphism Hero Section** - Beautiful frosted glass effect with animated background
- 🎬 **Project Showcase** - Display projects with embedded YouTube/Vimeo videos
- 🎨 **Modern Design** - Clean, professional UI with Tailwind CSS
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Fade-in and slide-up animations using Framer Motion
- 🚀 **Vercel Ready** - Optimized for deployment on Vercel or Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Add your profile photo:
   - Place your photo in the `public` folder as `profile-photo.jpg`
   - Or update the image path in `components/Hero.js`

3. Update project data:
   - Edit `components/Projects.js` to add your actual projects
   - Replace the example video URLs with your YouTube/Vimeo embed URLs

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Profile Information

Edit `components/Hero.js` to change:
- Your name (currently "NIPUNI KAHANDAWA")
- Profile photo path
- Summary text

### Add/Edit Projects

Edit the `projects` array in `components/Projects.js`:
```javascript
{
  id: 1,
  name: 'Your Project Name',
  description: 'Project description...',
  tools: ['React', 'Node.js', ...],
  videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
}
```

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes in components

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## Project Structure

```
portfolio/
├── app/
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.js         # Hero section component
│   └── Projects.js     # Projects section component
├── public/             # Static assets (add your photo here)
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Next/Image** - Optimized images

## License

This project is open source and available for personal use.
