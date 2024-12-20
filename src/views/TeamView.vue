<script setup>
import members from '@/assets/data/members.json'
import collaborators from '@/assets/data/collaborators.json'

const activeMembers = members.filter((member) => member.active)
const pastMembers = members.filter((member) => !member.active)

const getImagePath = (name) => {
  return new URL(`../assets/images/team/${name}`, import.meta.url).href
}
</script>
<template>
  <div class="page team mb-16">
    <h1 class="font-bold text-3xl">People</h1>
    <p class="text-xl text-stone-500">Professors, Students, and Interns</p>

    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-2">
      <div
        class="flex flex-col items-center my-8"
        v-for="person in activeMembers"
        :key="person.name"
      >
        <img :src="getImagePath(person.picture)" class="avatar" :alt="person.name" />
        <p class="name">{{ person.name }}</p>
        <p class="title">{{ person.title }}</p>
      </div>
    </div>

    <div class="mt-6 md:mt-12 mb-4">
      <h2 class="text-xl md:text-2xl font-bold">Collaborators</h2>
    </div>

    <ul class="space-y-1">
      <li v-for="person in collaborators" :key="person.name" class="text-lg font-normal">
        <a :href="person.url" target="_blank">{{ person.name }}</a
        >, <span class="text-stone-500">{{ person.title }}</span>
      </li>
    </ul>

    <div class="mt-6 md:mt-12 mb-4">
      <h2 class="text-xl md:text-2xl font-bold">Past Members</h2>
    </div>

    <ul class="space-y-1">
      <li v-for="person in pastMembers" :key="person.name" class="text-lg font-normal">
        <a :href="person.url" target="_blank">{{ person.name }}</a
        >, <span class="text-stone-500">{{ person.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss">
.avatar {
  @apply h-36 w-36 sm:h-48 sm:w-48 rounded-full;
}

.name {
  @apply text-center text-lg sm:text-xl font-bold mt-4;
}

.title {
  @apply text-center;
}
</style>
