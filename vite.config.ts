import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
});
