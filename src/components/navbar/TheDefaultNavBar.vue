<template>
  <nav
    class="flex items-center !px-10 !h-20 space-x-4 bg-red-600 fixed-top top-0 !mx-0 !mt-0 w-full"
  >
    <div class="w-full">
      <h1 class="text-2xl font-bold text-white">DevOps IRC</h1>
    </div>
    <div class="flex justify-end items-center w-full h-full">
      <router-link
        v-for="route in this.$router.options.routes"
        :key="route.id"
        :to="route.path"
        class="nav-item"
        :class="{ 'nav-item-selected': this.$route.path === route.path }"
        >{{ route.name }}
      </router-link>
    </div>
  </nav>
</template>
