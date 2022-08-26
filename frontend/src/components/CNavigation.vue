<template>
  <div
    class="z-10 text-white top-0 sticky font-h1 py-0 -mt-6 bg-opacity-10 backdrop-blur-xl"
  >
    <nav
      class="sticky top-0 container px-6 mx-auto md:flex md:justify-between md:items-center grid  m-auto"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-red-800 md:text-2xl hover:text-blue-400"
        >
          <div class="flex">
            <img
              src="@/assets/images/logo.png"
              alt="logo"
              class="w-24 md:w-32"
            />
            <div class="m-auto">
              <img
              src="@/assets/images/logo_full.png"
              alt="logo"
              class="w-32 md:w-64"
            />
            </div>
          </div>
        </router-link>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button

            type="button"
            class="text-white hover:text-white focus:outline-none focus:text-white"
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
      <ul v-motion-fade-down-on-visible
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 pb-0"
      >
        <router-link to="/" class="nav-link">
          <li v-on:click="showMenu = false">Home</li>
        </router-link>
        <router-link to="/news" class="nav-link">
          <li v-on:click="showMenu = false">News</li>
        </router-link>
        <router-link to="/careers" class="nav-link">
          <li v-on:click="showMenu = false">Careers</li>
        </router-link>
        <router-link to="/company" class="nav-link">
          <li v-on:click="showMenu = false">Company</li>
        </router-link>
        <router-link to="/contact" class="nav-link">
          <li v-on:click="showMenu = false">Contact</li>
        </router-link>
        <router-link to="/community" class="nav-link">
          <li v-on:click="showMenu = false">Community</li>
        </router-link>
      </ul>
    </nav>
  </div>
  <router-view
    class="pt-16"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '300',
        duration: 2000,
      },
    }"
  />
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
  color: crimson;
}

.animate__animated {
  --animate-duration: 0.8s;
}
</style>
