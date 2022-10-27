import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'//自动引入文件路由配置
import path from 'path' //path引入可能报错可以使用 import {resolve} from 'path'
import { resolve } from 'path'
export default defineConfig({
  plugins: [vue(),
    // 写这儿的没有配置
  // Pages({
  //   dirs: "src/views", // 需要生成路由的文件目录，默认就是识别src下面的views文件
  //   exclude: ["**/components/*.vue"], // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
  // }),
  ],
  resolve: {
    alias: {
      // path.resolve(__dirname, 'src')
      // 配置别名 像vue cli一样 以@引入文件 还需要tsconfig.json 配置不然 @的时候没得提示  还会标红
      '@': resolve(__dirname, 'src'),
      "components": resolve(__dirname, "src/components"),
      "assets": resolve(__dirname, "src/assets"),
      "views": resolve(__dirname, "src/views"),
      "layouts": resolve(__dirname, "src/layouts"),
      "utils": resolve(__dirname, "src/utils"),
      "apis": resolve(__dirname, "src/apis"),
    },
  },
  server: {
    host: '0.0.0.0', //运行后就是你自己的本机ip
    port: 1314,//端口号
    strictPort: true,//设置为true，若端口已被占用则会直接退出，反之为false，尝试下一个端口
    open: true,//打开浏览器，直接设置为true，打开默认浏览器
    proxy: {
      '/api': {
        target: "",
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 配置的全局的less样式
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve("src/assets/css/common.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // chunks 大小限制
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 分类输出
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) { // 超大静态资源拆分
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },
    // 清除console等多余代码
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  }
})
