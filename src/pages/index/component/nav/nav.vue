<template>
    <div class="nav">
        <div><router-link to="/" tag="div" >首页</router-link></div>
        <div><router-link to="/list"  tag="div" >列表</router-link></div>
    </div>
</template>
<script setup lang="ts">
import {useRoute,useRouter,RouterLink} from "vue-router"

</script>
<style lang="less">
.nav{
    position: fixed;
    right: 0;
    background: black;
    padding: 20px 10px;
    color: white;
}
</style>