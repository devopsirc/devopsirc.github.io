<script setup>
import { useRouter } from 'vue-router';

const routes = useRouter().options.routes;

</script>

<template>
  <nav class="nav-default fixed-top">
    <div class="w-full">
      <h1 class="text-3xl font-bold"><router-link to="/">DevOps IRC</router-link></h1>
    </div>
    <div class="flex justify-end items-center w-full h-full">
      <router-link
        v-for="route in routes"
        :key="route.id"
        :to="route.path"
        class="nav-item"
        :class="{ 'nav-item-selected': this.$route.path === route.path }"
        >{{ route.name }}
      </router-link>
    </div>
  </nav>
</template>
