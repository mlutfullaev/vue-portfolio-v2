import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'
// @ts-ignore
import VueKinesis from 'vue-kinesis'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(VueKinesis)
app.use(store)
app.mount('#app')
