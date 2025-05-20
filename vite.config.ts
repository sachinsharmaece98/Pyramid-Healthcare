import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

console.log('API VITE', import.meta?.env?.VITE_NODE_API_URI);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change 'dist' to 'build'
  },
  server: {
    // port: 5173,
    proxy: {
      '/public': import.meta?.env?.VITE_NODE_API_URI ?? 'http://193.203.161.59',
      '/api': import.meta?.env?.VITE_NODE_API_URI ?? 'http://193.203.161.59',
    }
  },
})
