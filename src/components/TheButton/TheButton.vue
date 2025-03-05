<script setup lang="ts">
import { ref } from 'vue'
import type { TColors, TSizes } from './types'

const props = defineProps<{
  variant: 'primary' | 'secondary' | 'neutral'
  size: 'small' | 'medium' | 'large'
  fillupXaxis: boolean
}>()

// stylings or customizations
const COLORS: TColors = {
  primary: '',
  secondary: '',
  neutral: 'bg-white text-[#CC492C]',
}

const color = ref({
  [COLORS.neutral]: props.variant == 'neutral',
  [COLORS.primary]: props.variant == 'primary',
  [COLORS.secondary]: props.variant == 'secondary',
})

const SIZES: TSizes = {
  small: '',
  medium: '',
  large: 'font-bold text-lg px-10 py-4 rounded-sm  ',
}

const size = {
  [SIZES.large]: props.size == 'large',
}

const width = {
  'w-full': props.fillupXaxis,
}
</script>

<template>
  <button :class="{ ...color, ...width, ...size, '  ': true }">
    <slot></slot>
  </button>
</template>

<style scoped></style>
