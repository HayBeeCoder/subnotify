<script setup lang="ts">
import ProductPitch from '@/components/pitch/ProductPitch.vue'
import LoginView from './LoginView/LoginView.vue'
</script>

<template>
  <section class="w-screen h-screen relative flex">
    <section
      class="min-md:w-1/2 min-md:relative bg-[#CC492C] flex justify-center absolute top-0 left-0 w-screen h-screen"
    >
      <ProductPitch />
    </section>
    <section class="hidden min-md:block h-full">
      <LoginView />
    </section>
  </section>
</template>
