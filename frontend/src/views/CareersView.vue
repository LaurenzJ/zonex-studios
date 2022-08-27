<template>
  <div class="careers text-white w-full">
    <div class="grid place-items-center space-y-16 lg:px-6 px-2">
      <h1 v-motion-pop-right>Careers</h1>
      <iframe
        v-motion-pop-right
        class="w-full aspect-video"
        width="1180"
        height="500"
        src="https://www.youtube.com/embed/sdeZZK9Yu2E"
        title="SlimeSpy2: Ninja Assassination"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div
        class="rounded-xl bg-slate-300 lg:w-2/3 w-full text-left text-[#978C8C] text-xl lg:py-20 py-6 lg:px-16 px-6 space-y-6"
      >
        <h2 v-motion-pop-down class="text-3xl text-black">OPEN POSITIONS</h2>

        <dl v-motion-roll-on-visible class="space-y-4">
          <div>
            <dt><h3>Junior-Mid 3D Animator</h3></dt>
            <dd>
              • Able to create 3D animations in maya, blender or unreal engine
              5.
            </dd>
            <dd>• Able to clean up mocap data and create unique animations.</dd>
            <dd>• 1 Years of experiance. (min.)</dd>
            <dd>• Can work with the team members.</dd>
          </div>
          <div>
            <dt><h3>Senior UE4 Gameplay programmer</h3></dt>
            <dd>
              • Able to execute mechanics in blueprints as mentioned in game
              design document.
            </dd>
            <dd>• Able to solve critique problems.</dd>
            <dd>• 4 Years of experiance. (min.)</dd>
            <dd>• Can work with the team members.</dd>
          </div>
          <div>
            <dt><h3>Junior-Mid UE4 Animator programmer</h3></dt>
            <dd>
              • Able to execute mechanics in animation blueprints as mentioned
              in game design document.
            </dd>
            <dd>• Able to work fluently with animation layering.</dd>
            <dd>• 1 Years of experiance. (min.)</dd>
            <dd>• Can work with the team members.</dd>
          </div>
          <div>
            <dt><h3>Rigger</h3></dt>
            <dd>
              • Able to create complicated humanoid character rig system with
              control rigs.
            </dd>
            <dd>• Able to solve critique problems.</dd>
            <dd>• 2 Years of experiance. (min.)</dd>
            <dd>• Can work with the team members.</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareersView",
};
</script>
