// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ROKKO_Web/",
  server: {
    port: 5173,
    open: true,
  },
});
