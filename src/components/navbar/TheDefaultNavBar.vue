<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const path = computed(() => router.currentRoute.value.path)
</script>

<template>
  <nav class="nav-default fixed-top">
    <div class="w-full">
      <h1 class="text-3xl font-bold"><router-link class="hover:no-underline" to="/">ÉTS DevOps IRC</router-link></h1>
    </div>
    <div class="flex justify-end items-center w-full h-full">
      <router-link
        v-for="route in router.options.routes"
        :key="route.id"
        :to="route.path"
        class="nav-item"
        :class="{ 'nav-item-selected': path === route.path }"
        >{{ route.name }}
      </router-link>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
a {
  color: white;
}
</style>