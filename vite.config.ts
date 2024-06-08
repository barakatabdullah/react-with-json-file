import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import { nodePolyfills } from "vite-plugin-node-polyfills";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  plugins: [
    react(),
    UnoCSS(),
    generouted(),
    nodePolyfills(),
  ],
})
