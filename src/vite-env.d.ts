/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue3-starry-sky';
declare module 'vue3-video-play'
declare module 'wjqutils'