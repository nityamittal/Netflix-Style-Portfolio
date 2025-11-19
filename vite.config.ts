import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Crucial for GitHub Pages to load assets correctly
  build: {
    outDir: 'docs', // Build to 'docs' folder so you can select it in GitHub Pages settings
    emptyOutDir: true, // Clears the folder before building
  }
})