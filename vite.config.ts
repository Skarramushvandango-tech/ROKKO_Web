import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // wichtig für GitHub Pages unter /ROKKO_Web/
  base: "/ROKKO_Web/",
  build: {
    outDir: "dist",
    sourcemap: false
  }
});
