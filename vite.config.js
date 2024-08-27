import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://juan-tech.com/",
  plugins: [react(), jsconfigPaths()],
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      //input: "./server/main.js",
    },
  },
});
