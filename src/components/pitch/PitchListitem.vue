<script lang="ts" setup>
defineProps<{
  item: {
    emoji: string
    text: string
  }
}>()
</script>

<template>
  <li class="text-lg">
    {{ item.emoji + ' ' + item.text }}
  </li>
</template>
