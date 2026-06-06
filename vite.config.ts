import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

const target = process.env.TARGET ?? 'cloudflare-module'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({ target, customViteReactPlugin: true }),
    react(),
    ...(target === 'cloudflare-module' ? [cloudflare({ viteEnvironment: { name: 'ssr' } })] : []),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
})
