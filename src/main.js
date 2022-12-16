import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();  // mitt 라이브러리 셋팅
let app = createApp(App)
app.config.globalProperties.emitter = emitter; // 글로벌 변수 보관함

import store from './store.js' // vuex4 main.js 세팅

app.use(store).mount('#app')

