import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    outDir: "docs"
  },
  resolve: {
    alias: {
      "common": path.resolve(__dirname, "scss/common"),
      "layouts": path.resolve(__dirname, "scss/layouts"),
      "views": path.resolve(__dirname, "scss/views"),
      "components": path.resolve(__dirname, "js/components"),
      "lib": path.resolve(__dirname, "js/lib")
    }
  }
});
