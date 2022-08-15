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
        scale: 0.9,
        opacity: 0,
        x: -100,
      },
      enter: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
          duration: 2000,
        },
      },
    },
    "pop-down": {
      initial: {
        scale: 1,
        opacity: 0,
        y: -100,
      },
      enter: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 2000,
        },
      },
    },
    "pop-down-delay-1000": {
      initial: {
        scale: 1,
        opacity: 0,
        y: -100,
      },
      enter: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          delay: 1000,
          duration: 2000,
        },
      },
    },
    "pop-up": {
      initial: {
        scale: 1,
        opacity: 0,
        y: 100,
      },
      enter: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 2000,
        },
      },
    },
    "pop-right-delay-500": {
      initial: {
        scale: 0.9,
        opacity: 0,
        x: -100,
      },
      enter: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
          delay: 500,
          duration: 2000,
        },
      },
    },
  },
});
Vue.use(router).mount("#app");
