# GitHub Copilot Instructions for ROKKO_Web

## Project Overview

ROKKO_Web is a React-based website for ROKKO! Records, a record label from the Ruhrpott region. The site showcases artists, their releases, music tracks, and provides contact functionality.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript (strict mode)
- **Deployment**: GitHub Pages

## Project Structure

```
src/
├── components/        # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArtistPage.tsx
│   ├── CurrentReleases.tsx
│   ├── ContactForm.tsx
│   ├── CommentSection.tsx
│   └── ...
├── data/             # Mock data and content
│   ├── mockData.ts   # Artist and release data
│   └── bios.ts       # Artist biographies
├── contexts/         # React contexts
├── utils/            # Utility functions
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Code Style and Conventions

### TypeScript
- Use TypeScript for all new files (`.tsx` for components, `.ts` for utilities)
- Define proper types and interfaces; avoid `any` type
- Use type inference where appropriate
- Export types that are used across files

### React Components
- Use functional components with hooks
- Prefer named exports for components
- Use `useState`, `useEffect`, and other hooks as needed
- Keep components focused and single-purpose

### Styling
- Use Tailwind CSS utility classes for styling
- Color scheme:
  - Background: `#262626` (or `bg`)
  - Text: `#F5F3BB` (or `text`)
  - Accent 1: `#483D03` (or `accent1`)
  - Accent 2: `#96897B` (or `accent2`)
- Use inline styles sparingly; prefer Tailwind utilities

### Naming Conventions
- Components: PascalCase (e.g., `ArtistPage.tsx`)
- Files: PascalCase for components, camelCase for utilities
- Variables/Functions: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: Follow Tailwind conventions

## Domain-Specific Guidelines

### Artists and Releases
- Artists have multiple releases
- Each release has:
  - Cover image and thumbnail
  - Picture (artist photo)
  - Track list with file paths and titles
- Artist names should be treated as keys for navigation
- Use `slugify()` function for converting artist names to URL-safe keys

### Content Management
- Artist bios are stored in HTML format in `public/data/bios.html`
- Each section has an `id` or `data-artist` attribute for identification
- Content is fetched and parsed at runtime

### Audio and Media
- Audio files are in `.m4a` format
- Images are organized by artist/release in `public/images/`
- Videos are in `public/video/`

## Build and Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Build Configuration
- Base path for GitHub Pages: `/ROKKO_Web/`
- Output directory: `dist/`
- Vite configuration: `vite.config.ts`

## Testing and Quality

- No test framework is currently configured
- Build the project to verify changes: `npm run build`
- Preview locally before pushing: `npm run preview`

## Deployment

- Automatic deployment via GitHub Actions on push to `main`
- Deployed to GitHub Pages
- Workflow file: `.github/workflows/pages.yml`

## Important Notes

1. **German Language**: Content is primarily in German. Respect this when adding UI text or comments.
2. **No Backend**: This is a static site with no backend services.
3. **Mock Data**: All artist and release data is in `src/data/mockData.ts`
4. **Asset Paths**: Use the `asset()` utility function for correct path resolution in production
5. **Page Navigation**: The app uses internal state for page navigation (no routing library)

## Common Tasks

### Adding a New Component
1. Create file in `src/components/` with PascalCase naming
2. Use TypeScript and proper type definitions
3. Export as default: `export default function ComponentName() { ... }`
4. Import and use in parent component

### Adding a New Artist
1. Add artist data to `src/data/mockData.ts`
2. Follow the existing data structure
3. Add artist bio to `public/data/bios.html` with proper section ID
4. Add artist images to `public/images/pictures/`
5. Add release covers to `public/images/cover/`

### Styling Changes
1. Prefer Tailwind utility classes
2. Use the defined color scheme from `tailwind.config.js`
3. Keep responsive design in mind (mobile-first)

## Things to Avoid

- Don't use `any` type in TypeScript
- Don't add external routing libraries (navigation is handled internally)
- Don't add unnecessary dependencies
- Don't ignore TypeScript errors
- Don't break the existing color scheme
- Don't add backend/server functionality
