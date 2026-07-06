import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const resolvePath = (relative: string) =>
  fileURLToPath(new URL(relative, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "CNAME",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      components: resolvePath("js/components"),
      lib: resolvePath("js/lib"),
    },
  },
});
