<template>
    <div class="side__menu">
        MENU
    </div>
</template>
<script lang="ts" setup>


</script>
<style lang="less" scoped>
.side__menu {
    position: fixed;
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, .6);
    border-radius: 3px;
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
</style>