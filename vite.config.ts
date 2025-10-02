import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages unter /ROKKO_Web/
export default defineConfig({
  base: '/ROKKO_Web/',
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
});
