<template>
  <div class="home text-white">
    <div class="grid place-items-center space-y-16 px-6">
      <h1>Home</h1>

      <div class="lg:w-full lg:flex m-auto place-items-center">
        <div class="w-1/2 bg-black"></div>
        <div class="w-1/2 bg-red-200">f</div>
      </div>

      <div class="md:w-1/2">
        <h2 class="font-sans text-center">“Eng kulinaresch Entdeckungsrees</h2>
        <h2 class="font-sans text-center">duerch eise klenge Grand-Duché”</h2>
      </div>

      <div class="w-2/5 border-b border-solid border-1 border-black"></div>
      <div class="lg:w-2/5 w-full px-4">
        <p class="text-center text-xl">
          Foodsteps offréiert de Familljen mat Kanner tëschent 5 an 10 Joer
          flott kulinaresch Entdeckungsreesen duerch eise Grand-Duché. Wärend
          enger spannender Schnitzeljuegd musst dir mat e puer Rätselen
          rausfannen wou déi verschidde Statiounen sinn bei deenen dir ënnerwee
          eppes Guddes z’iessen kritt. Zum Schluss vun all Wanderung kréien
          d’Kanner och nach e puer flott Iwwerraschungen !
        </p>
      </div>
      <div class="w-2/5 border-b border-solid border-1 border-black"></div>

      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center">
          <!-- <img
            class="lg:object-fill 2xl:w-2/3 w-full"
            src="@/assets/images/Otto-dk-scheld.png"
            alt=""
          /> -->
        </div>

        <div class="grid lg:place-items-start lg:w-1/2">
          <h2 class="text-center 2xl:w-2/3 w-full pb-6">Dikrech</h2>
          <p class="text-center 2xl:w-2/3 w-full text-xl">
            Dëse Wee weist iech op zirka 7 km lauter Schéinheeten déi Dikrech ze
            bidden huet. Mat nëmmen 30 Héichtemeteren ass den Tour och fir kleng
            Been gutt machbar.Ënnerwee kënnt dir iech op insgesamt 19 Rätsel-,
            an 3 Iessens-Statiounen freeën.
          </p>
          <div class="text-center 2xl:w-2/3 w-full">
            <button
              class="shadow bg-[#a9bc93] hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 my-4 px-4 rounded"
              type="button"
              onclick="location.href='/product/diekrech'"
            >
              Kafen
            </button>
          </div>
        </div>
      </div>
      <div class="w-2/5 border-b border-solid border-1 border-black"></div>

      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center">
          <h2 class="text-center 2xl:w-2/3 w-full pb-6">Sozial Medien</h2>
          <p class="text-center 2xl:w-2/3 w-full text-xl">
            Wat d’Sozial Medien ubelaangt si mir aktiv op
            <a
              class="underline hover:no-underline hover:text-black text-green"
              target="_blank"
              href="https://www.instagram.com/foodsteps.lu/?fbclid=IwAR2A3KdDo2qJZXPHkCQY4h0gHtpAPEJ9iYa4jAFbF0OU0NMQU2q2vTdx98Q"
              >Instagram</a
            >,
            <a
              class="underline hover:no-underline hover:text-black text-green"
              target="_blank"
              href="https://www.facebook.com/people/Foodsteps-Lux/100073846185606/"
              >Facebook</a
            >
            an
            <a
              class="underline hover:no-underline hover:text-black text-green"
              target="_blank"
              href="https://twitter.com/FoodSteps_lu?fbclid=IwAR1XznlSQXmVzo2AH56OEg5XjKn8FaWO5qT4dLaVo3fJuvzAFCodQ_k6mAM"
              >Twitter</a
            >
            wou mir regelméissegen Kontent posten fir Iech um lafenden ze halen.
            Do fannt Dir Informatiounen déi haaptsächlech mat Neiegkeeten oder
            Ännerungen vun eisem Projet ze dinn hunn. Awer och Kontent zu eiser
            Ekipp fir Iech een klengen Abléck hannert d’Kulissen ze ginn.
          </p>
        </div>

        <div class="grid lg:place-items-start lg:w-1/2">
          <h2 class="text-center 2xl:w-2/3 w-full pb-6">Kooperatiounen</h2>
          <p class="text-center 2xl:w-2/3 w-full text-xl">
            Dank eise Geschäftspartner, dem
            <a
              class="underline hover:no-underline hover:text-black text-green"
              target="_blank"
              href="https://www.cinescala.lu/de/"
              >Ciné Scala</a
            >,
            <a
              class="underline hover:no-underline hover:text-black text-green"
              target="_blank"
              href="https://fischer1913.com/"
              >Fischer</a
            >
            an
            <a
              class="underline hover:no-underline hover:text-black text-green"
              target="_blank"
              href="https://www.editus.lu/fr/cafe-beim-frank-diekirch-524847"
              >Beim Fränk</a
            >
            konnt eisen Projet mat Succès ëmgesat ginn. Mir sinn frou mat dësen
            dräi Betriber zesummen ze schaffen an bedanken eis vir
            d’Méiglechkeet vun dësen Kooperatiounen.
          </p>
        </div>
      </div>

      <div class="w-2/5 border-b border-solid border-1 border-black"></div>

      <div class="text-center">
        <h1 class="text-2xl md:text-5xl">
          Weider Aktivitéiten <br />
          <span>kommen, schreift Iech fir <br /></span>
          <span
            >eis
            <a
              class="underline hover:no-underline hover:text-black text-green"
              href="/newsletter"
              >Newsletter</a
            >
            an.</span
          >
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
