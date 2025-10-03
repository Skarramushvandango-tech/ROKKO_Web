# GitHub Copilot Instructions for ROKKO_Web

## Project Overview
This is the official homepage for ROKKO! Records, a record label website built with modern web technologies. The site showcases artists, their releases, and provides contact/comment functionality for visitors.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with custom color theme
- **Package Manager**: npm

## Project Structure
```
src/
├── components/       # React components
│   ├── ArtistPage.tsx
│   ├── CommentSection.tsx
│   ├── ContactForm.tsx
│   ├── CurrentReleases.tsx
│   ├── Header.tsx
│   └── ...
├── data/            # Data files and mock data
│   └── mockData.ts  # Artist and release data structure
├── contexts/        # React contexts
├── utils/           # Utility functions
├── App.tsx          # Main app component with routing
└── main.tsx         # App entry point
```

## Key Components & Patterns

### Routing
- Simple page-based routing using React state (no router library)
- Pages: home, releases, artist, contact, comments
- Artist pages use slugified names as keys

### Data Structure
```typescript
interface Track { file: string; title: string }
interface Release { cover: string; thumbnail: string; picture: string; tracks: Track[] }
interface Artist { name: string; image: string; releases: { [key: string]: Release } }
```

### Styling
- Primary background: `#262626`
- Primary text color: `#F5F3BB`
- Accent colors: `#483D03`, `#96897B`
- Mix of inline styles and Tailwind CSS classes
- Responsive design with mobile-first approach

## Code Conventions

### Language
- **UI Text**: All user-facing text and labels must be in German (e.g., "Kontakt", "Kommentar", "E-Mail")
- **Code**: Variable names, function names, and comments should be in English
- **Comments**: Use German for UI-related inline comments where context is German-specific

### TypeScript
- Use explicit types for props and state
- Prefer interfaces over types for object shapes
- Use type annotations for function parameters and return values

### React
- Use functional components with hooks
- Prefer `const` arrow functions for components: `const ComponentName = () => {}`
- For exported components use: `export default function ComponentName() {}`
- Use meaningful state variable names
- Keep components focused and single-responsibility

### File Organization
- One component per file
- Component files use PascalCase: `ComponentName.tsx`
- Data/utility files use camelCase: `mockData.ts`
- Place reusable utilities in `/src/utils`

### Audio & Media
- Audio files are in M4A format
- Images stored in `/public/images/` (cover art, pictures)
- Audio files in `/public/audio/` organized by artist

## Common Tasks

### Adding a New Artist
1. Add artist data to `src/data/mockData.ts` following the `Artist` interface
2. Ensure all file paths in `releases` point to existing assets in `/public`
3. Include at least one release with tracks

### Adding a New Component
1. Create file in `src/components/` with PascalCase name
2. Import necessary React hooks and types
3. Use Tailwind classes for styling when possible
4. Keep inline styles for dynamic values (colors, dimensions)

### Modifying Pages
- Main page logic is in `src/App.tsx`
- Page switching controlled by `page` state variable
- Artist selection uses `artistKey` state variable

## Build & Development

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `/dist`)
- `npm run preview` - Preview production build locally

### Build Configuration
- Vite config in `vite.config.ts`
- Base path set to `/ROKKO_Web/` for GitHub Pages deployment
- Output directory: `dist/`

### Linting
- ESLint configured with TypeScript and React plugins
- Config in `eslint.config.js`
- Extends recommended configurations for JS, TypeScript, and React

## Special Considerations

### Comment System
- Comments stored in local component state (not persisted)
- No backend integration yet
- Comments require approval flag (future feature)

### Contact Form
- Email input validation needed
- No backend submission currently

### Asset Paths
- All assets use absolute paths from `/public` directory
- Vite serves `/public` at root during dev
- In production, paths are relative to the base path

## Testing
- No test infrastructure currently exists
- Focus on manual testing in browser
- Test responsive behavior at different screen sizes

## Deployment
- Configured for GitHub Pages
- Build command: `npm run build`
- Deploy contents of `dist/` directory
- Ensure base path matches repository name

## Questions & Help
- Refer to Vite documentation for build/config questions
- React 18 documentation for component patterns
- Tailwind CSS documentation for styling utilities
