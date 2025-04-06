<script setup lang="ts">
import { ref } from 'vue'
import type { TColors } from './types'
import type { TSizes } from '../types';

const props = defineProps<{
  variant: 'primary' | 'secondary' | 'neutral' | "link"
  size: 'small' | 'medium' | 'large'
  fillupXaxis?: boolean
  iconExists?: boolean
  mediumText?: boolean
  lightText?: boolean
  customclass?: string
  disabled?: boolean
  type?: "submit" | "button" | "reset"
}>()

// stylings or customizations
const COLORS: TColors = {
  primary: 'bg-[#CC492C] hover:bg-[#CC492C] text-white dark:text-[#172028]',
  secondary: '',
  neutral: 'bg-white dark:bg-[#172028] text-[#CC492C]',
  link: "bg-transparent hover:border-b-4 hover:border-[#CC492C] hover:bg-transparent "
}

const color = ref({
  [COLORS.neutral]: props.variant == 'neutral',
  [COLORS.primary]: props.variant == 'primary',
  [COLORS.secondary]: props.variant == 'secondary',
  [COLORS.link]: props.variant == 'link',
})

const SIZES: TSizes = {
  small: 'text-sm p-1 rounded-xs',
  medium: props.iconExists ? 'font-bold text-md px-3 md:px-8 py-3 rounded-sm' : "font-bold text-md px-4 md:px-8 py-4 rounded-sm",
  large: 'font-bold text-lg px-6 md:px-10 py-4 rounded-sm  ',
}

const size = {
  [SIZES.large]: props.size == 'large',
  [SIZES.medium]: props.size == 'medium',
  [SIZES.small]: props.size == 'small',
}

const width = {
  'w-full': props.fillupXaxis,
}
</script>

<template>
  <button
    :class="{
      'disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed hover:scale-[0.95]   underline- ease-in-out transition-all duration-150 flex justify-center gap-4 items-center': true,
      ...color,
      ...width,
      ...size,
      'font-medium': mediumText,
      [customclass as string]: true,
    }"
    @click="$emit('SomeEvent')"
    :disabled="disabled"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
