<template>
    <div class="content">
        <HomeTop />
        <router-view></router-view>
    </div>
</template>
<script lang="ts" setup>
import HomeTop from 'components/HomeTop.vue'
</script>
<style lang="less" scoped>
.content{
    // overflow-y: auto;
}
</style>