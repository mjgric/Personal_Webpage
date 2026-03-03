import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'aboutme.html'),
        hobbies: resolve(__dirname, 'hobbies.html'),
        anime: resolve(__dirname, 'anime.html'),
      }
    }
  }
})