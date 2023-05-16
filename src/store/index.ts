import {createPinia} from "pinia"

const pinia = createPinia()

export default{
    install(ins){
        ins.use(pinia)
    }
}