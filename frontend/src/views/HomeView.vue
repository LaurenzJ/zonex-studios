<template>
  <div class="home text-white">
    <div class="grid place-items-center space-y-16 px-6">
      <div class="relative lg:w-full lg:flex m-auto place-items-center">
        <img
          class="absolute h-full w-full"
          src="@/assets/images/home/bg.png"
          alt=""
        />
        <div
          v-motion-pop-down-delay-1000
          class="overflow-auto w-full lg:w-1/2 m-auto place-items-center"
        >
          <img src="@/assets/images/home/reflection.png" alt="" />
          <div class="flex flex-col justify-center items-center">
            <button
              type="button"
              class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div class="w-full lg:w-1/2 m-auto place-items-center">
          <img
            v-motion-pop-right
            src="@/assets/images/prototype_character.png"
            alt=""
          />
        </div>
      </div>
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
