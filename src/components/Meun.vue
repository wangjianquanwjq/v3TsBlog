<template>
    <div class="side__menu" @click="sideMenuBut" v-show="!showMenu">
        MENU
    </div>
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__rotateInDownLeft"
        leave-active-class="animate__slideOutLeft">
        <div class="menu" v-if="showMenu">
            <div class="topContent">
                <div class="outImg" @click="sideMenuBut">
                    <el-image style="width: 32px; height: 32px" :src="outImg" fit="fill" />
                </div>
                <br>
                <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__shakeY"
                    leave-active-class="animate__rotateOutDownLeft">
                    <div class="avatar" v-if="showTitle">
                        <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                    </div>
                </transition-group>
                <p>Mr王</p>
            </div>
            <ul class="navList">
                <li>
                    <el-divider>分割</el-divider>
                </li>
                <li @click="goRouter('home')">首页</li>
                <li @click="goRouter('darkCopy')">深浅拷贝</li>
                <li @click="goRouter('aboutMe')">关于我</li>
            </ul>
        </div>
    </transition-group>

</template>
<script lang="ts" setup>
import { ref, reactive, defineEmits, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import outImg from 'assets/image/out.png'
const emit = defineEmits(['showMenu'])//将当前的菜单显示状态传给父组件
// // 接受组件的值
// const props=defineProps({
//     isShow:Number
// })
const router = useRouter()
const showMenu = ref(false)
const showTitle = ref(true)
const sideMenuBut = () => {
    showMenu.value = !showMenu.value
    emit('showMenu', showMenu.value)
}
const sideMenuFalse = () => {
    showMenu.value = false
}
const goRouter = (val: string) => {
    sideMenuFalse()
    router.push(`./${val}`)
}
// 父组件调用 子组件的中的方法     需要暴露出去
defineExpose({ sideMenuFalse })
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
    cursor: pointer;
    transition: left .3s ease;
    padding: 20px 30px 20px 80px;
    background: url('../assets/image/menu.png') no-repeat;
    background-size: 25%;
    background-position-y: center;
    background-position-x: 20px;
}

.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 560px;
    height: 100vh;
    background: #000;
    text-align: center;

    .topContent {
        background: url('../assets/image/side-bg.gif') no-repeat center center;
        width: 100%;
        height: 478px;
        background-size: cover;
        padding: 20px;
        box-sizing: border-box;
        color: #fff;

        .outImg {
            height: 32px;
            text-align: right;
            cursor: pointer;
        }

        .avatar {
            margin-bottom: 20px;
        }
    }


    .navList {
        margin-top: 240px;

        li {
            color: white;
            cursor: pointer;
            height: 80px;
            font-size: 40px;
            font-weight: bold;
            text-align: center;
        }
    }

}
</style>