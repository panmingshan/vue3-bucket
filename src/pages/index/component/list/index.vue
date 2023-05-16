<template>
    <div>
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import {useRoute,useRouter} from "vue-router"

const list : number[] = [1,1,2,1,1,1]

</script>
<style lang="less">
    
</style>