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
          duration: 1000,
        },
      },
      tapped: {
        scale: 0.9,
        opacity: .9,
        x: -100,
        
      },
    },
    "pop-right-pc": {
      initial: {
        scale: 0.9,
        opacity: 1,
        x: 0,
      },
      tapped: {
        scale: 0.9,
        opacity: .9,
        x: -100,
        
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
          duration: 1000,
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
          duration: 1000,
        },
      },
    },
    "pop-down-delay-2000": {
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
          duration: 1000,
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
    "rotate-10-delay-500": {
      initial: {
        y: 40,
        opacity: 0.25,
        rotate: -10,
      },
      enter: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
          duration: 2000,
        },
      },
    },
    "roll-on-visible": {
      initial: {
        x: -15,
      },
      visible: {
        x: 0,
        transition: {
          duration: 1000
        }
      }
    },
    "fade-down-on-visible": {
      initial: {
        y: -15,
      },
      visible: {
        y: 0,
        transition: {
          duration: 1000
        }
      }
    },
  },
});
Vue.use(router).mount("#app");
