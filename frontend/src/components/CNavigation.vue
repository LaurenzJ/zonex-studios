<template>
  <div
    class="z-10 text-white top-0 sticky font-h1 py-0 bg-[#370000] bg-opacity-70 backdrop-blur-xl"
  >
    <nav
      class="sticky top-0 container px-6 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-red-800 md:text-2xl hover:text-blue-400"
        >
          <div class="flex">
            <img
              src="@/assets/images/logo.png"
              alt="SlimeSpy2"
              class="w-24 md:w-32"
            />
            <div class="m-auto">
              <h2 class="tracking-widest">ZONEX</h2>
              <h4 class="font-medium">Studios</h4>
            </div>
          </div>
        </router-link>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 pb-4"
      >
        <router-link to="/" class="nav-link">
          <li v-on:click="showMenu=false">Home</li>
        </router-link>
        <router-link to="/news" class="nav-link">
          <li v-on:click="showMenu=false">News</li>
        </router-link>
        <router-link to="/careers" class="nav-link">
          <li v-on:click="showMenu=false">Careers</li>
        </router-link>
        <router-link to="/company" class="nav-link">
          <li v-on:click="showMenu=false">Company</li>
        </router-link>
        <router-link to="/contact" class="nav-link">
          <li v-on:click="showMenu=false">Contact</li>
        </router-link>
        <router-link to="/community" class="nav-link">
          <li v-on:click="showMenu=false">Community</li>
        </router-link>
      </ul>
    </nav>
  </div>
  <router-view class="pt-16" v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>

a.router-link-exact-active {
  color: #a9bc93;
}

.animate__animated {
  --animate-duration: 0.8s;
}

</style>
