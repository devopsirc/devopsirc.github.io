<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-1000',
      moreDelay ? 'delay-700' : 'delay-500',
      trueCount < 1 && translateEffect
        ? isVisible
          ? transtionPosition[transition].from
          : transtionPosition[transition].to
        : '',
      trueCount < 1 && opacityEffect ? (isVisible ? 'opacity-100' : 'opacity-0') : ''
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, watchEffect, unref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const el = ref(null)
const isVisible = useElementVisibility(el)
const trueCount = ref(0)

watchEffect(() => {
  if (unref(isVisible) === true && unref(trueCount) < 1) {
    trueCount.value++
  }
})

const transtionPosition = {
  vertical: { from: 'translate-y-0', to: 'translate-y-10' },
  horizontalToRight: { from: '-translate-x-0', to: '-translate-x-12' },
  horizontalToLeft: { from: 'translate-x-0', to: 'translate-x-12' }
}

defineProps(['transition', 'moreDelay', 'translateEffect', 'opacityEffect'])
</script>
