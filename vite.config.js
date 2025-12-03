import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy'
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    outDir: "docs"
  },
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "js/components"),
      "lib": path.resolve(__dirname, "js/lib")
    }
  }
});
