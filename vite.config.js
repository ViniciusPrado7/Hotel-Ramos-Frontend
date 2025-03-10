import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, './src/Home.jsx'),
        quartos: resolve(__dirname, './src/pages/Quartos.jsx'),
        explore: resolve(__dirname, './src/pages/Explore.jsx'),
        amenidades: resolve(__dirname, './src/pages/Amenidades.jsx'),
      }
    }
  }
})
