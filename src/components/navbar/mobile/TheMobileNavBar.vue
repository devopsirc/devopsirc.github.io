<script setup>
import TheMobileNavView from "@/components/navbar/mobile/TheMobileNavView.vue";
import { useRouter } from "vue-router";

const routes = useRouter().options.routes;
</script>

<template>
  <nav
    class="flex items-center shadow-lg !px-4 !h-14 space-x-4 bg-orange-700 !fixed-top top-0 !mx-0 !mt-0 w-full z-50"
  >
    <div class="flex items-center w-full">
      <TheMobileNavView :routes="routes" />
      <h1 class="ml-12 text-xl font-bold text-white fixed z-0">ÉTS DevOps IRC</h1>
    </div>
  </nav>
</template>
