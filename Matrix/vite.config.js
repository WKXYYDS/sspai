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
  server: {
    proxy: {
      '/sspai': {
        target: 'https://sspai.com/api/v1', // 实际请求地址
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/sspai/, ""),
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
          proxy.on("proxyReq", function (e, req, res) {
            e.setHeader("Origin", "https://sspai.com/api/v1");
          });
        }

      }
    },
  },
})