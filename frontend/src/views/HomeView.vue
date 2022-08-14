<template>
  <div class="home text-white">
    <div class="grid place-items-center space-y-16 px-6">
      <h1>Home</h1>

      <div class="lg:w-full lg:flex m-auto place-items-center">
        <div class="w-1/2 bg-black">f</div>
        <div class="w-1/2 bg-red-200">
          <img v-motion-pop-right src="@/assets/images/prototype_character.png" alt="">
        </div>
      </div>
    </div>
    <div
      class="target"
      v-motion-fade
    >
      1
    </div>
  </div>
</template>

<style>
.target {
  width: 100px;
  height: 100px;
  margin: 300px auto 500px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  border-radius: 10px;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "HomeView",
};
</script>
