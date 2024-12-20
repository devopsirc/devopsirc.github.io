<script setup>
import publications from '@/assets/data/publications.json'
</script>

<template>
  <div class="page publications mb-20">
    <h1 class="font-bold text-3xl">Publications</h1>
    <p class="text-xl"></p>
    <div class="mt-4 md:mt-8" v-for="pub in publications" :key="pub.id">
      <div class="flex space-x-4 md:space-x-8">
        <div class="text-base md:text-lg">{{ pub.year }}</div>
        <div>
          <div>
            <p v-if="pub.link == ''" class="text-base md:text-lg font-bold">{{ pub.title }}</p>
            <p v-else class="text-base md:text-lg font-bold"><a :href="pub.link" target="_blank" class="text-black">{{ pub.title }}</a></p>
            <p class="text-base md:text-lg">{{ pub.authors }}</p>
            <p class="text-base md:text-lg text-gray-500 -mt-1">{{ pub.venue }}</p>
          </div>
          <div>
            <span
              v-if="pub.type.toLowerCase() == 'conference'"
              class="badge-base bg-red-600 text-red-50"
              >{{ pub.type }}</span
            >
            <span
              v-if="pub.type.toLowerCase() == 'workshop'"
              class="badge-base bg-gray-500 text-gray-50"
              >{{ pub.type }}</span
            >
            <span
              v-if="pub.type.toLowerCase() == 'journal'"
              class="badge-base bg-green-600 text-green-50"
              >{{ pub.type }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
