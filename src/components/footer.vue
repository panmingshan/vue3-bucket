<template>
    <div class="footer">
        <h2 @click="changeName">{{ footerInfo.name }}</h2>
        <a :href="footerInfo.link">详情</a>
        <ul>
            <li v-for="item in footerInfo.list">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const footerInfo : any = ref({
    list: [{
        title: "列表1"
    }, {
        title: "列表1"
    }, {
        title: "列表1"
    }, {
        title: "列表1"
    },],
    name: "footer",
    link: "http://link.com"
})

function changeName(){
    footerInfo.value.name = "test111"
}
</script>
<style lang="less" scoped>
.footer {
    background: black;
    color: white;
}
</style>