<script setup lang="ts">
import IconSubnotify from './components/icons/IconSubnotify.vue'
import InstagramVideo from './components/InstagramVideo.vue'
</script>

<template>
  <section class="w-screen h-screen">
    <header class="fixed w-screen px-6 pt-2">
      <span class="text-white block min-md:w-40 w-32">
        <IconSubnotify />
      </span>
    </header>
    <section class="w-1/2 h-full bg-[#FF5E3A]">
      <InstagramVideo />
    </section>
    <section></section>
  </section>
</template>

<style scoped></style>
