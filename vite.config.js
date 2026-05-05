import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages: set base to your repo name, e.g. '/club-america-van/'
// For root deployment (custom domain): leave base as '/'
export default defineConfig({
  plugins: [react()],
  base: '/clubamerica/',
})
