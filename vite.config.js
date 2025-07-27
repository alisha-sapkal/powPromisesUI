import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://powpromisesbackend.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
  optimizeDeps: {
    include: ['lucide-react', 'react-toastify'],
    exclude: []
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  }
})
