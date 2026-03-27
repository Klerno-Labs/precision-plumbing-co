# Precision Plumbing Co Website Handoff

## What Was Built
We have created a modern, responsive website for Precision Plumbing Co that includes the following pages:
- **Home Page**: Features a split hero section, instant quote form, trust bar, services grid, testimonials, and a call-to-action section.
- **About Page**: Showcases the company culture, team bios, and an origin story.
- **Services Page**: Lists categorized services with detailed descriptions and "Get a Quote" buttons.

### Screenshots Guidance
- Home Page: [Insert screenshot here]
- About Page: [Insert screenshot here]
- Services Page: [Insert screenshot here]

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the slot you want to change (e.g., "hero").
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats
You can use any web-accessible image URL (Cloudinary, S3, etc.). For best results, use images at least 1200px wide and in landscape orientation for hero images.

## Changing Logo
If a logo slot exists, you can swap it in the `src/config/images.ts` file in the same manner as other images.

## Changing Colors
To modify the color scheme, edit the `tailwind.config.js` file. You can adjust the primary, secondary, and accent colors as needed.

## Changing Fonts
To change the Google Font used in the site, update the `layout.tsx` file where the fonts are imported.

## Updating Text Content
To update text content, edit the respective page files located in the `/src/app` directory. Each page has its own components that can be modified.

## Requesting Changes
For any changes or updates, please reach out to Pegrio support via email at support@pegrio.com.

## Hosting and Maintenance Info
The website is hosted on Cloudflare Pages. Ensure to monitor performance and uptime through the Cloudflare dashboard.

## Contact
For any questions or support, please contact Pegrio support.