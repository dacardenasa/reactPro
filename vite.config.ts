import { defineConfig } from "vite";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    }
  },
  plugins: [react(), manualChunksPlugin()]
});
