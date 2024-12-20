<script setup>
import { reactive } from "vue";

import { TransitionChild, TransitionRoot } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const state = reactive({
  open: false,
});

const props = defineProps({
  routes: Array,
});

function toogle() {
  state.open = !state.open;
}
</script>

<template>
  <div>
    <!-- Mobile menu button-->
    <div
      @click="toogle"
      class="inline-flex items-center justify-center p-2 text-gray-200 hover:text-white"
    >
      <span class="sr-only">Open main menu</span>
      <XMarkIcon v-if="state.open" class="block h-6 w-6" />
      <Bars3Icon v-else class="block h-6 w-6" />
    </div>

    <TransitionRoot as="template" :show="state.open">
      <TransitionChild
        as="template"
        enter="ease-out duration-200"
        enter-from="opacity-0 translate-h-0"
        enter-to="opacity-100 translate-h-full"
        leave="ease-in duration-200"
        leave-from="opacity-100 translate-h-full"
        leave-to="opacity-0 translate-h-0"
      >
        <div
          class="bg-white shadow-md shadow-stone-500/50 text-black absolute fixed-top w-full -ml-4 mt-2 space-y-2 px-8 py-5 z-50"
        >
          <router-link
            @click="state.open = false"
            v-for="route in props.routes"
            :key="route.name"
            :to="route.path"
            class="block text-lg text-left"
            >{{ route.name }}</router-link
          >
        </div>
      </TransitionChild>
    </TransitionRoot>
  </div>
</template>

<style lang="postcss" scoped>
  a {
    @apply text-stone-700
  }
</style>
