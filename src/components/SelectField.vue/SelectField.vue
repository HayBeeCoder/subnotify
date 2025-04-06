<script setup lang="ts">
import { ref } from 'vue'
import type { SelectOption } from '../types'

defineProps<{
  selectedOption: SelectOption
  options: SelectOption[]
  id: string
  label?: string
  disabled: boolean
  shouldBeAbove?: boolean
  className?: string
}>()

const emit = defineEmits(['select'])
const isOpen = ref(false) // Toggle dropdown state

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: { label: string; value: string }) => {
  emit('select', option)
  isOpen.value = false // Close dropdown after selection
}
</script>
<template>
  <div :class="`relative w-full max-w-sm ${className}`">
    <label v-if="label" class="text-[0.8rem]" >{{ label }}</label>

    <!-- Trigger Button -->
    <button
      type="button"
      @click.prevent="toggleDropdown"
      class="relative disabled:opacity-40 block w-full rounded-lg border-[1px] outline-none border-slate-300   pl-3 py-2 text-left shadow-sm focus:border-slate-500 dark:focus:border-[#eff2f6] focus:outline-none sm:text-sm"
      :aria-expanded="isOpen"
      :aria-controls="'dropdown-' + id"
      :disabled
    >
      {{ selectedOption.label || 'Select an option' }}
      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 inline-flex items-baseline ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 flex items-end"
          viewBox="0 0 20 20"
          fill="currentColor"

        >
          <path
          class="inline-block"
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      :id="'dropdown-' + id"
      :class="{'absolute overflow-hidden  z-10 mt-2 w-full rounded-lg border border-gray-300 bg-white dark:bg-[#172028] shadow-lg': true,
            'bottom-full': shouldBeAbove
      }"
      role="menu"
    >
      <ul class="overflow-hidden">
        <li
          v-for="option in options"
          :key="option.value"
          @click.prevent="selectOption(option)"
          class="cursor-pointer px-4 py-2 hover:bg-indigo-500 hover:text-white sm:text-sm overflow-hidden"
          :class="{ 'bg-gray-100 dark:bg-[#202c37]': option.value === selectedOption.value }"
          role="menuitem"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
/* Custom styles for finer adjustments if needed */
</style>
