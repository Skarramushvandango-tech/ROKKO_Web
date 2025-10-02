import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ROKKO_Web/",
  plugins: [react()],
  build: { outDir: "dist" }
});
