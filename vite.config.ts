import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig, loadEnv } from "vite";
import envOnly from "vite-env-only";
import tsconfigPaths from "vite-tsconfig-paths";
const isStorybook = process.argv[1]?.includes("storybook");

installGlobals();

export default defineConfig(() => ({
  plugins: [
    !isStorybook &&
      !process.env.VITEST &&
      remix({
        ignoredRouteFiles: ["**/.*"],
      }),
    tsconfigPaths(),
    envOnly(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./setup-tests.ts",
    // Additionally, this is to load ".env.test" during vitest
    env: loadEnv("test", process.cwd(), ""),
  },
  ssr: {
    noExternal: ["remix-i18next", "remix-utils"],
  },
  server: {
    hmr: {
      host: "localhost",
    },
  },
}));
