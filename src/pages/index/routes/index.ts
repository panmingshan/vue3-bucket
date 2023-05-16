import {createWebHashHistory,createRouter} from "vue-router"
import index from "../component/index/index.vue"
import list from "../component/list/index.vue"


const routes = [
    {
        path : "/",component : index,
    },
    {
        path : "/list",component : list,
    },
    
]

const router = createRouter({
    history : createWebHashHistory(),
    routes,
})

export default {
    install(ins){
        ins.use(router)
    }
}