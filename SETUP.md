# Quick Setup Guide

## Step 1: Install Dependencies

```bash
cd portfolio
npm install
```

## Step 2: Add Your Profile Photo

1. Place your photo in the `public` folder
2. Name it `profile-photo.jpg` (or update the path in `components/Hero.js`)
3. Recommended: Square image, at least 800x800px

## Step 3: Update Project Videos

1. Open `components/Projects.js`
2. Replace the example `videoUrl` values with your actual YouTube/Vimeo embed URLs
3. Format: `https://www.youtube.com/embed/VIDEO_ID` or `https://player.vimeo.com/video/VIDEO_ID`

## Step 4: Customize Content

- **Name**: Edit `components/Hero.js` line 34
- **Summary**: Edit `components/Hero.js` lines 68-75
- **Projects**: Edit the `projects` array in `components/Projects.js`

## Step 5: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

## Step 6: Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js and deploy!

## Notes

- The portfolio uses placeholder videos by default - make sure to replace them
- If your profile photo doesn't load, a fallback with initials "NK" will appear
- All animations and glassmorphism effects are included and ready to use
