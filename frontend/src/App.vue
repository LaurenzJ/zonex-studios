<template>
  
  <CNavigation></CNavigation>
  <div class="my-16"></div>
  <CFooter></CFooter>
</template>

<script>

import CNavigation from './components/CNavigation.vue';
import CFooter from './components/CFooter.vue'

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    CNavigation,
    CFooter
  }
};
</script>
<style>


@import url('http://fonts.cdnfonts.com/css/hoefler-text');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;800&display=swap');


</style>
                