import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

import VuePrlx from 'vue-prlx'
App.use(VuePrlx);

import 'flowbite';

createApp(App).use(router).mount('#app')
