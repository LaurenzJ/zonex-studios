<template>
  <div class="company bg-black text-white">
    <div class="grid place-items-center space-y-16 px-6">
      <h1 v-motion-pop-right>Company</h1>
    
      <div class="p-2 w-full h-full lg:flex text-white">
        <div class="lg:w-1/3 w-full m-auto space-y-6 text-justify">
          <p v-motion-pop-up>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            eligendi qui repellat amet necessitatibus voluptatum dolorum quis
            accusantium pariatur perspiciatis. Reiciendis quo facilis iure
            distinctio ex et at saepe molestiae. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Illo ex reiciendis velit molestiae
            porro, esse sequi aliquam repudiandae aperiam optio reprehenderit
            voluptatum deserunt hic odio facere sed laudantium, quisquam iure.
          </p>
          <p v-motion-pop-right-delay-500>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            eligendi qui repellat amet necessitatibus voluptatum dolorum quis
            accusantium pariatur perspiciatis. Reiciendis quo facilis iure
            distinctio ex et at saepe molestiae.
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
                    <div class="lg:w-1/2 w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png"
                      />
                    </div>
                    <div class="lg:w-1/2 w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png"
                      />
                    </div>
                    <div class="lg:w-full w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap w-1/2">
                    <div class="lg:w-full w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png"
                      />
                    </div>
                    <div class="lg:w-1/2 w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block object-cover object-center w-full h-full rounded-lg"
                        src="https://shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png"
                      />
                    </div>
                    <div class="lg:w-1/2 w-full p-1 md:p-2">
                      <img
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
  name: 'CompanyView',
}
</script>
