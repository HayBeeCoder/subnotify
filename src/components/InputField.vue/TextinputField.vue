<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { TSizes } from '../types'

const query: Ref<string> = ref('')
const props = defineProps<{
  placeholder?: string
  size: 'small' | 'medium' | 'large'
  iconPosition: 'left' | 'right' | 'none'
}>()

const SIZES: TSizes = {
  small: '',
  medium: 'p-2  border rounded-md',
  large: '',
}

const size = {
  [SIZES.large]: props.size == 'large',
  [SIZES.medium]: props.size == 'medium',
  [SIZES.small]: props.size == 'small',
}
</script>

<template>
  <!-- <form class="flex justify-center my-8" v-on:submit.stop="search"> -->
    <!-- <label></label> -->
  <input
    :class="{
      'disabled:opacity-40 border-slate-300 text-slate-800 focus:outline-none focus:border-slate-500 w-full': true,
      ...size,
      ...{
        'pr-8': props.iconPosition == 'right',
        'pl-8': props.iconPosition == 'left',
      },
    }"
    type="text"
    v-model="query"
    :placeholder="placeholder"
    @change="$emit('typeEvent', query)"
  />

  <!-- </form> -->
</template>
