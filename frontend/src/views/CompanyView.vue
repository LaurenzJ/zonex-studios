<template>
  <div class="company bg-black text-white">
    <div class="grid place-items-center space-y-16 px-6">
      <h1 v-motion-pop-right>Company</h1>

      <div class="h-full w-full" v-if="showModal">
        <button @click="showModal = false">X</button>
        <img v-bind:src="currentImage" alt="" />
      </div>

      <div v-if="!showModal" class="p-2 w-full h-full lg:flex text-white">
        <div class="lg:w-1/3 w-full m-auto space-y-6 text-justify">
          <p v-motion-pop-up>
            Incorporated in March, 2021, Zonex studio is one of computer game
            developement company in Turkey. Currently focused on a story driven
            horror game, Zonex studio is aiming to create an ecosystem for young
            developers for those who wants to step inside game developement
            indistury but cannot find quality resources.
          </p>
          <p v-motion-pop-right-delay-500>
            In June 2022, Zonex studio launched the very first Mobile game which
            generated 40k downloads within its first two months.
          </p>
          <p v-motion-pop-down>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ex
            reiciendis velit molestiae porro, esse sequi aliquam repudiandae
            aperiam optio reprehenderit voluptatum deserunt hic odio facere sed
            laudantium, quisquam iure.
          </p>
        </div>
        <div class="lg:w-1/2 w-full m-auto">
          <div>
            <section class="overflow-hidden text-gray-700">
              <div class="container px-0 mx-auto p-16">
                <div class="flex flex-wrap -m-1 md:-m-2">
                  <div class="flex flex-wrap w-1/2">
                    <div class="w-full p-1 md:p-2">
                      <img
                        @click="
                          showImage(
                            'https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png'
                          )
                        "
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="@/assets/images/company/billard.png"
                      />
                    </div>
                    <div class="lg:w-full w-full p-1 md:p-2">
                      <img
                        @click="
                          showImage(
                            'https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png'
                          )
                        "
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="@/assets/images/company/zonex_wall.png"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap w-1/2">
                    <div class="lg:w-full w-full p-1 md:p-2">
                      <img
                        @click="
                          showImage(
                            '@/assets/images/company/Itower.jpeg'
                          )
                        "
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="@/assets/images/company/Itower.jpeg"
                      />
                    </div>
                    <div class="lg:w-1/2 w-full p-1 md:p-2">
                      <img
                        @click="
                          showImage(
                            'https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png'
                          )
                        "
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="@/assets/images/company/lounge.png"
                      />
                    </div>
                    <div class="lg:w-1/2 w-full p-1 md:p-2">
                      <img
                        @click="
                          showImage(
                            'https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png'
                          )
                        "
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyView",
  data() {
    return {
      showModal: false,
      currentImage: null,
    };
  },
  methods: {
    showImage(image) {
      this.currentImage = image;
      this.showModal = true;
    },
  },
};
</script>
