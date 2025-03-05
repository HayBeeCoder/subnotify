<script lang="ts" setup>
defineProps<{
  item: {
    emoji: string
    text: string
  }
}>()
</script>

<template>
  <li class="text-lg font-medium">
    {{ item.emoji + '' + item.text }}
  </li>
</template>
