import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// - react(): JSX + Fast Refresh (instant updates while you edit)
// - tailwindcss(): compiles Tailwind classes; no tailwind.config.js needed in v4
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
