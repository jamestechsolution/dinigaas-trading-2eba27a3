// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When TARGET=netlify (set by netlify.toml), disable the Cloudflare plugin
// and tell TanStack Start to emit a Netlify-compatible build.
const target = process.env.TARGET; // "netlify" | "vercel" | undefined
const isNetlify = target === "netlify";
const isVercel = target === "vercel";
const customTarget = isNetlify || isVercel;

export default defineConfig({
  nitro: customTarget ? false : undefined,
  tanstackStart: isNetlify
    ? { target: "netlify" }
    : isVercel
      ? { target: "vercel" }
      : undefined,
});
