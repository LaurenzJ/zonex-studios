import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

import 'flowbite';


const Vue = createApp(App)

Vue.use(router).mount('#app')
