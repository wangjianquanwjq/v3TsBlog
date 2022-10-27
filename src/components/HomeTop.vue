

<template>
  <div class="hometop">
    顶部
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

</script>
<style scoped lang="less">
.hometop {
  height: 100vh;

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
</style>
