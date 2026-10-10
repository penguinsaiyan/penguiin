import { defineConfig } from "vite";

// Vite is used purely as a dev server for the static site, not as a bundler.
// Deployment still serves these files as-is from the repo root.
export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
});