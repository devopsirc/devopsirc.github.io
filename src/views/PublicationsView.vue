<script setup>
import publications from '@/assets/data/publications.json'
</script>

<template>
  <div class="page publications mb-20">
    <h1 class="font-bold text-3xl">Publications</h1>
    <p class="text-xl"></p>
    <div class="mt-8" v-for="pub in publications" :key="pub.id">
      <div class="flex space-x-8">
        <div class="mt-1 text-lg">{{ pub.year }}</div>
        <div>
          <div class="">
            <p class="text-lg">{{ pub.authors }}</p>
            <p class="text-lg font-bold">{{ pub.title }}</p>
            <p class="text-lg text-gray-500 -mt-1">{{ pub.venue }}</p>
          </div>
          <div class="">
            <span
              v-if="pub.type.toLowerCase() == 'conference'"
              class="badge-base bg-red-600 text-red-50"
              >{{ pub.type }}</span
            >
            <span
              v-if="pub.type.toLowerCase() == 'workshop'"
              class="badge-base bg-gray-400 text-gray-50"
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
