<script setup>
import TheMobileNavView from "@/components/navbar/mobile/TheMobileNavView.vue";
import { useRouter } from "vue-router";

const routes = useRouter().options.routes;
</script>

<template>
  <nav
    class="flex items-center shadow-md !px-4 !h-14 space-x-4 bg-red-600 !fixed-top top-0 !mx-0 !mt-0 w-full"
  >
    <div class="flex items-center w-full">
      <TheMobileNavView :routes="routes" />
      <h1 class="ml-12 text-xl font-bold text-white fixed z-0">DevOps IRC</h1>
    </div>
  </nav>
</template>
