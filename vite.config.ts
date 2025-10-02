import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// WICHTIG: base = '/<Repo-Name>/'  -> bei dir '/ROKKO_Web/'
export default defineConfig({
  base: '/ROKKO_Web/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
