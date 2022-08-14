import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

import "flowbite";

import { MotionPlugin } from "@vueuse/motion";

const Vue = createApp(App);

Vue.use(MotionPlugin, {
  directives: {
    "pop-right": {
      initial: {
        scale: 1,
        opacity: 0,
        x: -100,
      },
      enter: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
          duration: 5000,
        },
      },
    },
  },
});
Vue.use(router).mount("#app");
