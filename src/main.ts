import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { MotionPlugin } from '@vueuse/motion'
// @ts-ignore
import VueKinesis from 'vue-kinesis'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(VueKinesis)
app.mount('#app')
