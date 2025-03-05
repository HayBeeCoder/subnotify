<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconSubnotify from './icons/IconSubnotify.vue'
</script>

<template>
  <header class="fixed w-screen px-6 min-md:px-10 pt-6 min-md:pt-6 z-10000">
    <RouterLink to="/">
      <span
        :class="{
          'text-[#FF5E3A] block min-md:w-24 w-24': true,
          ...{ 'text-white': $route.path == '/' },
        }"
      >
        <IconSubnotify />
      </span>
    </RouterLink>
  </header>
</template>
