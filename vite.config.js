import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({mode}) => ({
  plugins: [react()],
  esbuild: {
    pure: mode === "production" ? ["console.log"] : [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
