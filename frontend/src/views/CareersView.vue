<template>
  <div class="careers text-white w-full">
    <div class="grid place-items-center space-y-16 px-6">
      <h1 v-motion-pop-right>Careers</h1>
      <iframe v-motion-pop-right
        class="w-full aspect-video"
        width="1180"
        height="500"
        src="https://www.youtube.com/embed/ZKuHqAiaSjA"
        title="SlimeSpy2: Ninja Assassination"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div
        class="rounded-xl bg-slate-300 lg:w-2/3 w-full text-left text-[#978C8C] text-xl py-20 px-16 space-y-6"
      >
        <h2 class="text-3xl ">OPEN POSITIONS</h2>
        <h3>JOB TITLE</h3>
        <h3>JOB TITLE</h3>
        <h3>JOB TITLE</h3>
        <h3>JOB TITLE</h3>
        <h3>JOB TITLE</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareersView",
};
</script>
