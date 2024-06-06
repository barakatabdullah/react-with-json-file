import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import generouted from '@generouted/react-router/plugin'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  // server: {
  //   proxy: { 
  //     "/api": {
  //       target: "./src/data/data.json",
  //       changeOrigin: true,
  //       secure:false,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // },
  plugins: [
    react(),
    UnoCSS(),
    generouted(),
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
