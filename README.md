# Ascendant Ventures Landing Page

Single-page marketing site for Ascendant Ventures, built with vanilla HTML, CSS, and a bit of client-side JavaScript for interactive effects.

## Local Development

- No build tools are required. Open `index.html` directly in any modern browser.
- To tweak styles or copy changes, edit `index.html`; all assets are loaded via CDN.

## Netlify Deployment

1. **Create a new site** in Netlify and link it to this repository (or drag-and-drop a zip of the project).
2. **Build settings**
   - Build command: `npm run build` is not required — leave it empty.
   - Publish directory: `.` (project root) or whichever folder contains `index.html`.
3. **Forms**  
   The contact form is wired up for Netlify Forms. Submissions appear in the Netlify dashboard automatically, and the site script progressively enhances the experience by showing an inline success message.

### Recommended Netlify Add-ons

- **Branch Deploys / Deploy Previews** to review edits before publishing.
- **Form notifications** (Email, Slack, etc.) for real-time lead alerts.

## Tech Highlights

- Lucide icons, Anime.js animations, and TSParticles for visual polish.
- Responsive layout with CSS grid/flexbox.
- Progressive enhancements and graceful fallbacks if JS libraries fail to load.

