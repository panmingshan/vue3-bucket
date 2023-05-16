<template>
    <div class="content">
        <button @click="login" v-if="!info.isLogin">登录</button>
        <button @click="logout" v-else>注销<span>{{info.name}}</span></button>
        <Nav></Nav>
        <RouterView></RouterView>
    </div>
</template>
<script setup lang="ts">
import {ref,reactive} from "vue"
import useUserInfoStore from "../../../store/userInfo.ts"
import {RouterView} from "vue-router"
import Nav from "../component/nav/nav.vue"

const {info,login,logout} = useUserInfoStore()
</script>
<style lang="less">
@bg : red;

.content{
    background-color: @bg;
}
</style>