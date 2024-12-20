<script setup>
const persons = [
  { name: "Francis Bordeleau", title: "Professor & Chair Holder", picture: "Francis-Bordeleau.jpg" },
  { name: "Mohammed Sayagh", title: "Professor", picture: "Mohammed-Sayagh.jpg" },
  { name: "Henri Aïdasso", title: "PhD Student", picture: "Henri-Aidasso.jpeg" },
  { name: "Samah Kansab", title: "PhD Student", picture: "Samah-Kansab.png" },
]

const getImagePath = (name) => {
  return new URL(`../assets/images/team/${name}`, import.meta.url).href;
};
</script>
<template>
  <div class="page team mb-16">
    <h1 class="font-bold text-3xl">People</h1>
    <p class="text-xl">Professors, Students, and Interns</p>
    
    <div class="grid grid-cols-2 md:grid-cols-4 mt-12 space-x-2">
      <div class="flex flex-col items-center my-8" v-for="person in persons" :key="person.name">
        <img :src="getImagePath(person.picture)" class="h-48 w-48 rounded-full" :alt="person.name" />
        <p class="text-center text-xl font-bold mt-4">{{ person.name }}</p>
        <p>{{ person.title }}</p>
      </div>
    </div>
  </div>
</template>
