<script setup>
import TheDefaultNavBar from '@/components/navbar/TheDefaultNavBar.vue'
import TheMobileNavBar from '@/components/navbar/mobile/TheMobileNavBar.vue'
</script>

<template>
  <div>
    <TheDefaultNavBar class="!hidden md:!flex" />
    <TheMobileNavBar class="flex md:hidden" />
  </div>
</template>
