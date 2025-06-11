import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        landing: {
          external: 'http://localhost:3001/assets/remoteEntry.js',
          from: 'vite',
          externalType: 'url'
        },
        dashboard: {
          external: 'http://localhost:3002/assets/remoteEntry.js', 
          from: 'vite',
          externalType: 'url'
        }
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})