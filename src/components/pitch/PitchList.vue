<script setup lang="ts">
import PitchListitem from './PitchListitem.vue'
const pitchlist = [
  { emoji: '💳', text: 'No more suprise charges.' },
  { emoji: '⏰', text: 'No more missed deadlines.' },
  { emoji: '🚀', text: "Just smart remiders-before it's too late" },
]
</script>
<template>
  <ul>
    <PitchListitem :item="item" :key="key" v-for="(item, key) in pitchlist" />
  </ul>
</template>
