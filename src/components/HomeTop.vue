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
  <div id="homeTop">
    <div class="homeBg">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import type { CSSProperties } from 'vue';


onMounted(() => {


})
onUnmounted(() => {

})
</script>
<style scoped lang="less">
#homeTop {
  height: 100vh;
  .homeBg {
    &:before {
      content: "";
      height: 100%;
      position: absolute;
      background: url('assets/image/header-bg.jpg') no-repeat center center;
      width: 100%;
      top: 0;
      background-size: cover;
    }
  }
}
</style>