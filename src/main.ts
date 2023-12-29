import { createApp } from 'vue'
import store from '@/store/index'
import router from '@/router'
import { MotionPlugin } from '@vueuse/motion'
// @ts-ignore
import VueKinesis from 'vue-kinesis'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(VueKinesis)
app.use(store)
app.mount('#app')
