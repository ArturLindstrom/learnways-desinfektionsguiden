import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Vue3Mq } from "vue3-mq";

createApp(App).use(store).use(router).use(Vue3Mq).mount('#app')

