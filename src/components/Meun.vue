<template>
    <div class="side__menu" @click="sideMenuBut" v-show="!showMenu">
        MENU
    </div>
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__rotateInDownLeft"
        leave-active-class="animate__slideOutLeft">
        <div class="menu" v-if="showMenu">
            <div>
                
                <div class="outImg" @click="sideMenuBut">
                    <el-image style="width: 32px; height: 32px" :src="outImg" fit="fill" />
                </div>
            </div>

        </div>
    </transition-group>

</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import outImg from 'assets/image/out.png'
const showMenu = ref(false)
const sideMenuBut = () => {
    showMenu.value = !showMenu.value
}

</script>
<style lang="less" scoped>
.side__menu {
    position: fixed;
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, .6);
    border-radius: 4px;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: left .3s ease;
}

.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 560px;
    height: 100vh;
    background: #ccc;

    .outImg {
        height: 32px;
        padding: 20px;
        text-align: right;
        cursor: pointer;
    }
}
</style>