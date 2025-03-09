<script setup lang="ts">
import ProductPitch from '@/components/pitch/ProductPitch.vue'
import LoginView from './LoginView/LoginView.vue'
import MovingBackground from '@/components/MovingBackground/MovingBackground.vue'
</script>

<template>
  <section class="w-screen h-screen relative flex">
    <section
      class="md:w-1/2 md:relative bg-[#CC492C] flex justify-center absolute top-0 left-0 w-screen h-screen"
    >
      <MovingBackground />
      <ProductPitch />
    </section>
    <section class="hidden md:block h-full">
      <LoginView />
    </section>
  </section>
</template>
