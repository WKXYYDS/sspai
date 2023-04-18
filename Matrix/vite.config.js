import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 配置服务器代理
  server: {
    cors: true,
    proxy: {
      "/sspai": {
        target: "https://sspai.com/api/v1",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/sspai/, "")
      },

    }
  },
  // server: {
  //   cors: true, 
  //   proxy: {
  //     '/sspai': { 
  //       target: "https://sspai.com/api/v1",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace('/sspai', '') 
  //     }
  //   }
  // }
})
