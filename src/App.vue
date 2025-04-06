<script setup lang="ts">
import { RouterView, useRoute, type RouteRecordNameGeneric } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import { onMounted } from 'vue'
import { useThemeStore } from './stores/themesStore'
import { watch } from 'vue'
const { initializeTheme } = useThemeStore()

const route = useRoute()
onMounted(() => {
  initializeTheme()
  if (route.name == 'home') {
    document.documentElement.classList.remove("dark")
  }
})

watch(
  () => route.name,
  (newValue: RouteRecordNameGeneric) => {
    if(newValue == "home"){

      document.documentElement.classList.remove("dark")
    }
   
  },
)
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style scoped></style>
