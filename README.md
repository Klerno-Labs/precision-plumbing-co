# Precision Plumbing Co Website

## Project Description
This project is a high-quality, bespoke website for Precision Plumbing Co, a trusted local service provider delivering quality workmanship and reliable home improvement solutions. The website is designed to generate leads through an engaging and trust-inspiring online presence.

## Tech Stack
- Next.js 14+ (with App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/precision-plumbing-co.git
   cd precision-plumbing-co
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:

npm run dev

Visit `http://localhost:3000` in your browser.

### Build
To create a production build:

npm run build

### Deploy
To deploy the site:

npm run export

## Project Structure Overview

/src
  /components       # Shared components
  /config           # Configuration files (images, constants)
  /app              # Next.js app directory
    /api            # API routes
    /about          # About page components
    /services       # Services page components
    /home           # Home page components
  /styles           # Global styles

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is defined with a comment explaining where it appears on the site.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image for inner pages
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: First gallery image
- **gallery-2**: Second gallery image
- **gallery-3**: Third gallery image
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background
- **gallery-4**: Fourth gallery image

## Brand Customization
To change colors, fonts, or the logo:
- **Colors**: Modify the `tailwind.config.js` file.
- **Fonts**: Update the `layout.tsx` file to change Google Fonts.
- **Logo**: Change the logo URL in the `src/config/images.ts` file.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for API calls.

## Deployment Instructions
For deploying on Cloudflare Pages:
1. Set up a new project in the Cloudflare dashboard.
2. Connect your GitHub repository.
3. Set the build command to `npm run build` and the output directory to `out`.