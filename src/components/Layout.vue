<template>
    <div class="content">
        <HomeTop />
        <router-view></router-view>
        <Meun />
    </div>
</template>
<script lang="ts" setup>
import HomeTop from 'components/HomeTop.vue'
import Meun from 'components/Meun.vue'

</script>
<style lang="less" scoped>
.content {
    // overflow-y: auto;
}
</style>