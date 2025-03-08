<script setup lang="ts">
const props = defineProps<{
  weight: "heavy" | "light"
}>()

const WEIGHTS = {
  heavy: "4",
  light: "2"
}
</script>

<template>
  <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 5V19"
      stroke="currentColor"
      :stroke-width="WEIGHTS[props.weight]"
      stroke-linecap="round"
      stroke-linejoin="round"
      />
      <path
      d="M5 12H19"
      stroke="currentColor"
      :stroke-width="WEIGHTS[props.weight]"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
