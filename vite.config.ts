import { defineConfig, type Plugin } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const resolvePath = (relative: string) =>
  fileURLToPath(new URL(relative, import.meta.url));

const stripCrossorigin = (): Plugin => ({
  name: "strip-crossorigin",
  enforce: "post",
  transformIndexHtml(html) {
    return html.replace(/\s+crossorigin(="[^"]*")?/g, "");
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stripCrossorigin(),
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
