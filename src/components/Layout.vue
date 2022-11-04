<template>
    <div class="content">
        <HomeTop @click="showMenuClick" />
        <el-backtop :right="20" :bottom="20" />
        <router-view @click="showMenuClick" v-slot="{ Component }">
            <transition-group appear name="animate__animated animate__bounce"
                enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutBottomRight">
                <component :is="Component" v-bind:key="Component">
                </component>
            </transition-group>
        </router-view>
        <starry-sky :stars-count="1000" :distance="100" />
        <Footer @click="showMenuClick" />
        <Meun @showMenu='showMenu' ref="childRef" />
    </div>
</template>
<script lang="ts" setup>

import HomeTop from 'components/HomeTop.vue'
import Meun from 'components/Meun.vue'
import Footer from 'components/Footer.vue'
import { ref } from 'vue'
const childRef = ref<any>();
const show = ref<boolean>();
// 如果菜单是打开的  点击右边的 头部后下面的内容时 关闭菜单
const showMenuClick = () => {
    if (show.value == true) {
        childRef.value.sideMenuFalse()
    }
}
const showMenu = (val?: boolean) => {
    show.value = val
}
</script>
<style lang="less" scoped>
.content {
    /deep/ .el-backtop {
        width: 60px;
        height: 60px;
    }
}
</style>