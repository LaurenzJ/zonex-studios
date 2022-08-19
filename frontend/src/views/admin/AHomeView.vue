<template>
  <div class="admin-home">
    <div class="grid place-items-center space-y-16 px-6 text-white">
      <h1>Admin - Home</h1>
      <nav class="">
      <router-link to="/admin/">
        Home
      </router-link>
      <router-link to="/admin/news">
        News
      </router-link>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AHomeView',

}
</script>
