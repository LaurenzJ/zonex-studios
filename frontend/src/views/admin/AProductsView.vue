<template>
  <div class="admin-products">
    
    <div class="grid place-items-center space-y-16 px-6">
      <h1>Admin - Products</h1>
      <nav>
      <router-link to="/admin/">
        Home
      </router-link>
      <router-link to="/admin/products">
        Products
      </router-link>
      </nav>


        
    <div class="flex w-2/3 mx-auto overflow-hidden rounded-lg shadow-md dark:bg-green">
        <!-- <img class="object-cover w-1/3 h-64" src="@/assets/images/Otto-dk-scheld.png" alt="Article"> -->

        <div class="p-6">
            <div>
                <span class="text-xs font-medium uppercase">Foodsteps</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-white transition-colors duration-200 transfor hover:text-gray-600 hover:underline">Diekrech</a>            
            </div>
        </div>
        <div class="w-full text-end">
          <svg class="mx-50" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
        </div>
        
    </div>


      <!-- <form class="w-3/4 max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Virnumm *
            </label>
            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Max">
            
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Nonumm *
            </label>
            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mustermann">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              E-mail *
            </label>
            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Äre Message *
            </label>
            <textarea required class="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button class="shadow bg-[#a9bc93] hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Send
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'AProductsView',

}
</script>
