# Cloudflare Pages Deployment Guide

## Step-by-Step Deployment
1. **Create a Cloudflare Pages Project**
   - Log in to your Cloudflare account.
   - Navigate to the Pages section and click on "Create a Project".

2. **Connect Your Repository**
   - Select your GitHub repository containing the Precision Plumbing Co website code.

3. **Configure Build Settings**
   - Set the **Production Branch** to `main` (or your default branch).
   - Set the **Build Command** to:
     ```bash
     npm run build
     ```
   - Set the **Output Directory** to:
     ```bash
     out
     ```

4. **Environment Variables Configuration**
   - Add any required environment variables in the Cloudflare dashboard under the "Settings" tab.

5. **Domain Setup**
   - After deployment, you can set up a custom domain in the Cloudflare dashboard.
   - Follow the instructions provided to point your domain to Cloudflare.

## Post-Deploy Checklist
- Ensure SSL is enabled for secure connections.
- Check for any necessary redirects.
- Set up analytics tracking if required.