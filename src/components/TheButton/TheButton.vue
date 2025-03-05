<script setup lang="ts">
import { ref } from 'vue'
import type { TColors, TSizes } from './types'

const props = defineProps<{
  variant: 'primary' | 'secondary' | 'neutral'
  size: 'small' | 'medium' | 'large'
  fillupXaxis?: boolean
  iconExists?: boolean
  mediumText?: boolean
  lightText?: boolean
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
  large: 'font-bold text-lg px-6 min-md:px-10 py-4 rounded-sm  ',
}

const size = {
  [SIZES.large]: props.size == 'large',
}

const width = {
  'w-full': props.fillupXaxis,
}
</script>

<template>
  <button
    :class="{'hover:scale-[0.95] hover:bg-gray-100 ease-in-out transition-all duration-150 flex justify-center gap-4 items-center': true, ...color, ...width, ...size, 'font-medium': mediumText }"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
