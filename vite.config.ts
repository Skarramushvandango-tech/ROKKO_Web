import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // <-- für Netlify wichtig, NICHT '/ROKKO_Web/'
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
