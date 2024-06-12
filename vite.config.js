import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import {visualizer} from "rollup-plugin-visualizer";

const shouldAnalyze = process.env.ANALYZE === "true";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    shouldAnalyze &&
      visualizer({
        template: "treemap",
        open: true,
        gzipSize: true,
        filename: "dist/stats.html",
      }),
  ],
  esbuild: {
    pure: mode === "production" ? ["console.log"] : [],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
