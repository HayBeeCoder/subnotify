<script setup lang="ts">
defineProps<{
  isModalOpen: boolean
}>()
</script>

<template>
  <section
    :class="{
      'z-[900] fixed top-full transform ease-linear  bg-transparent w-screen h-screen left-0': true,
      'translate-y-full': !isModalOpen,
      '-translate-y-full': isModalOpen,
    }"
  >
    <div v-if="isModalOpen" class="w-full h-full dark" @click="$emit('someEvent')"></div>
    <section
      :class="{
        'bg-white h-[65%] w-full bottom-0 absolute duration-500 ease-in-out left-0 bottom-[0px]': true,
        'translate-y-[165%]': !isModalOpen,
        '-translate-y-0': isModalOpen,
      }"
    >
      <slot> </slot>
    </section>
  </section>
</template>

<style scoped>
.dark {
  background: rgba(0, 0, 0, 0.3);
}
</style>
