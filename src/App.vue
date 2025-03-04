<script setup lang="ts">
import IconSubnotify from './components/icons/IconSubnotify.vue'
import ProductPitch from './components/pitch/ProductPitch.vue'
</script>

<template>
  <section class="w-screen h-screen relative">
    <header class="fixed w-screen px-2 min-w:px-6 pt-2 z-10000">
      <span class="text-white block min-md:w-24 w-24">
        <IconSubnotify />
      </span>
    </header>
    <section class="min-md:w-1/2 min-md:h-full min-md:relative bg-[#CC492C] flex pt-20  justify-center  absolute top-0 left-0 w-screen h-screen">
      <ProductPitch />
    </section>
    <section></section>
  </section>
</template>

<style scoped></style>
