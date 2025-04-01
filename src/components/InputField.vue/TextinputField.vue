<script setup lang="ts">
import { ref } from 'vue'
import type { TSizes } from '../types'
// import { getOnlyDateNothingElse } from '@/utils/helpers'

const props = defineProps<{
  placeholder?: string
  size: 'small' | 'medium' | 'large'
  iconPosition?: 'left' | 'right'
  label?: string
  longMessage?: boolean
  disabled?: boolean
  type?: 'text' | 'date' | 'number'
  name: string
  value: string
  minDate?: string
  maxDate?: string
  error?: string
  classValue?: string
}>()

const query = ref(props.value)
const startdate = ref(props?.value)
const duration = ref(props.value)

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

function filterInput() {
  duration.value = duration.value.replace(/\D/g, '') // Remove non-numeric characters
}
defineEmits(['typeEvent'])
</script>

<template>
  <div :class="classValue">
    <!-- <form class="flex justify-center my-8" v-on:submit.stop="search"> -->
    <label v-if="label" class="text-[0.8rem]" :for="name">{{ label }}</label>
    <input
      :name="name"
      v-if="type == 'text'"
      :class="{
        'disabled:opacity-40 inline-block border-slate-300 text-slate-800 focus:outline-none focus:border-slate-500 w-full h-full': true,
        ...size,
        ...{
          'pr-8': props.iconPosition == 'right',
          'pl-8': props.iconPosition == 'left',
        },
        class: true,
      }"
      v-model="query"
      type="text"
      :placeholder="placeholder"
      @input="$emit('typeEvent', query)"
      :disabled="disabled"
    />

    <textarea
      v-if="longMessage"
      :class="{
        'disabled:opacity-40 border-slate-300 text-slate-800 focus:outline-none focus:border-slate-500 w-full': true,
        ...size,
      }"
      :name="name"
      v-model="query"
      :placeholder="placeholder"
      @input="$emit('typeEvent', query)"
      :disabled="disabled"
      rows="4"
      cols="33"
    />
    <input
      v-if="type == 'date'"
      type="date"
      :class="{
        'disabled:opacity-40 border-slate-300 text-slate-800 focus:outline-none focus:border-slate-500 w-full': true,
        ...size,
      }"
      @change="$emit('typeEvent', startdate)"
      :name="name"
      v-model="startdate"
      :value="startdate"
      :disabled="disabled"
      :min="minDate"
      :max="maxDate"
    />
    <input
      v-if="type == 'number'"
      pattern="[0-9]*"
      inputmode="numeric"
      type="text"
      id="numberInput"
      :class="{
        'disabled:opacity-40 border-slate-300 text-slate-800 focus:outline-none focus:border-slate-500 w-full': true,
        ...size,
      }"
      min="1"
      :name="name"
      v-model="duration"
      :disabled="disabled"
      @input="
        () => {
          filterInput()
          $emit('typeEvent', duration)
        }
      "
      @paste.prevent
    />

    <p class="text-red-400 text-xs" v-if="error">{{ error }}</p>
  </div>
  <!-- </form> -->
</template>
