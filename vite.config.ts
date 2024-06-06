import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  server: {
    proxy: { 
      "/api": {
        target: "https://dummyjson.com",
        changeOrigin: true,
        secure:false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [
    react(),
    UnoCSS(),
    AutoImport(
{
  imports:[{
    "primereact/inputText":['InputText'],
    "primereact/password":['Password'],
    "primereact/card":['Card'],
    "primereact/button":['Button'],
  }
  ]
}
    ),
  ],
})
