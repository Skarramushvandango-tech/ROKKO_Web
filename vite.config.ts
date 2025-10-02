import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ROKKO_Web/",
  build: { outDir: "dist" }
});
