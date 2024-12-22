<template>
  <div class="page partners mb-20">
    <h1 class="font-bold text-3xl">Partners</h1>
    <p class="text-lg mt-4">
      We are working in close collaboration with academic and insdustrial partners, towards the improvement of DevOps processes of software organizations, currently in the context of Software-Defined
      Networks (SDN). Please feel free to
      <router-link class="underline" to="/contact">contact us</router-link> if interested in a partnership with us.
    </p>
    <div class="my-8 md:my-12 grid md:grid-cols-2">
      <div class="flex justify-center">
        <a href="https://www.telus.com/" target="_blank">
          <img src="@/assets/images/partners/telus.png" class="h-16 md:h-20 mt-10" alt="TELUS" />
        </a>
      </div>
      <div class="flex justify-center">
        <a href="https://www.kaloom.com/" target="_blank">
          <img src="@/assets/images/partners/kaloom.svg" class="h-24 md:h-32" alt="Kaloom" />
        </a>
      </div>
    </div>

    <div class="my-12 md:my-20 grid md:grid-cols-2">
      <div class="flex justify-center">
        <a href="https://flux.cs.queensu.ca/mase/" target="_blank">
          <img src="@/assets/images/partners/queens_university.jpg" class="h-40 md:h-64 -mt-12 md:-mt-20 ml-8 md:ml-20" alt="Queen's University" />
        </a>
      </div>
      <div class="flex justify-center">
        <a href="https://mcscert.mcmaster.ca/" target="_blank">
          <img src="@/assets/images/partners/mcmaster_university.png" class="h-24 md:h-32" alt="McMaster University" />
        </a>
      </div>
    </div>
  </div>
</template>
