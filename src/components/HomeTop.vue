<!-- <template>
  <div class="home">
    <canvas id="canvas" />
    <img :style="canvasStyle" src="../assets/image/header-bg.jpg" />
  </div>
</template>

<script>
import { init } from "../assets/js/rain.js";
export default {
  name: "Home",
  data() {
    return {
      canvasStyle: {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        left: "0",
        bottom: "0",
      },
      ctx: {},
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = document.querySelector("#canvas");
      this.ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(this.ctx);
    },
  },
};
</script> -->

<template>
  <div class="homeTop">
    <canvas id="canvas" />
    <div class="homeBg" :style="canvasStyle">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import type { CSSProperties } from 'vue';
import { init } from '../assets/js/rain'
let canvasStyle = reactive<CSSProperties>({
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: -1,
  left: "0",
  bottom: "0",
})
let ctx = reactive({})
const initCanvas = () => {
  let canvas: any = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init(ctx);

}
onMounted(() => {
  initCanvas()
})
</script>
<style scoped lang="less">
#canvas {
  background: url('assets/image/header-bg.jpg') no-repeat center center;
  background-size: cover;
}

.homeTop {
  height: 100vh;
  // .homeBg {
  //   &:before {
  //     content: "";
  //     height: 100%;
  //     position: absolute;
  //     background: url('assets/image/header-bg.jpg') no-repeat center center;
  //     width: 100%;
  //     top: 0;
  //     background-size: cover;
  //   }
  // }
}
</style>