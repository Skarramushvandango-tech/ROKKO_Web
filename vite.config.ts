import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',                 // wichtig für Netlify
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
});
