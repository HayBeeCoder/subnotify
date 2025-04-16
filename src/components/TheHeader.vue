<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import IconSubnotify from './icons/IconSubnotify.vue'
import TheButton from './TheButton/TheButton.vue'
import useAuthUser from '@/composables/useAuthUser'
import { useThemeStore } from '@/stores/themesStore'
import IconSun from './icons/IconSun.vue'
import IconMoon from './icons/IconMoon.vue'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const { logout } = useAuthUser()

const themeStore = useThemeStore()

const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const handleLogout = async () => {
  await logout()
  router.push('/')
}
</script>

<!-- 'bg-white  relative': route.name != 'auth' && route.name != 'home', -->
<template>
  <header
    :class="{
      'fixed w-screen px-6 md:px-10 py-4 md:pt-6 z-10000 flex justify-between bg-transparent ': true,
      'dark:bg-[#172028] bg-white relative': route.name != 'auth' && route.name != 'home'
    }"
  >
    <RouterLink to="/">
      <span
        :class="{
          'text-[#FF5E3A] block md:w-24 w-24': true,
          ...{ 'text-white': $route.path == '/' },
        }"
      >
        <IconSubnotify />
      </span>
    </RouterLink>
    <button

    v-if="route.name != 'home'"
      :class="{
        'w-8 h-8': true,
        'text-[#eff2f6]': theme == 'dark',
        'text-[#202c37]': theme != 'dark',
      }"
      @click="toggleTheme()"
    >
      <IconSun v-if="theme == 'dark'" />
      <IconMoon v-else />
    </button>
    <div
      :class="{
        hidden: route.name == 'auth' || route.name == 'home',
      }"
    >
      <!-- <button>{{ theme == "dark" ? <IconSun /> : <IconMoon />} }</div>button> -->
      <TheButton size="small" variant="link" @some-event="handleLogout()"> Logout </TheButton>
    </div>
  </header>
</template>
