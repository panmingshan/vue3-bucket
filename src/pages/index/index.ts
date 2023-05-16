import {createApp} from "vue"
import app from "./index.tsx"
import store from "../../store/index.ts"
import router from "./routes/index.ts"


createApp(app).use(store).use(router).mount("#app")