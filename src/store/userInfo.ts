import { defineStore } from "pinia";
import { ref,reactive } from "vue";

export default defineStore("userInfo",()=>{
    const info = reactive({
        userName : "",
        userId : "",
        isLogin : false
    })


    function login(name = "pms"){
        info.isLogin = true;
        info.userName = name;
    }

    function logout(){
        info.isLogin = false;
        info.userName = "";
    }

    return {
        info,
        login,
        logout
    }
})