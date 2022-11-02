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
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__hinge"
      leave-active-class="animate__rotateOutDownLeft">
      <div class="homeBg" v-if="showTitle">
        <div class="title">Mr王的个人博客</div>
        <div class="text">在线搬砖，只为生活</div>
      </div>
    </transition-group>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import type { CSSProperties } from 'vue';
const showTitle = ref(true)

onMounted(() => {
  // showTitle.value=true

})
onUnmounted(() => {

})
</script>
<style scoped lang="less">
#homeTop {
  height: 100vh;
  position: relative;

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    background: url('../assets/image/header-bg.jpg') no-repeat center center;
    width: 100%;
    top: 0;
    background-size: cover;
  }

  .homeBg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .title {
      font-size: 100px;
      font-weight: bold;
      color: #fff;
      white-space: nowrap
    }

    .text {
      color: #fff;
      font-size: 40px;
      font-weight: 500;
    }
  }
}
</style>