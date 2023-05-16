<template>
    <div>
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
import  Header from "../components/header"
import  Footer from "../components/footer.vue"
</script>
<style lang="less">
    
</style>