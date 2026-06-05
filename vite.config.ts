import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackRouterPlugin } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouterPlugin(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
  }
})
