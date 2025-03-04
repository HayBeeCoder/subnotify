<script setup lang="ts">
defineProps<{
  item: {
    emoji: string
    text: string
  }
}>()
</script>

<template>
  <li>
    {{ item.emoji + ' ' + item.text }}
  </li>
</template>
