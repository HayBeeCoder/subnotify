<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import IconSubnotify from './icons/IconSubnotify.vue'
import TheButton from './TheButton/TheButton.vue'
import useAuthUser from '@/composables/useAuthUser'

const route = useRoute()
const router = useRouter()
const { logout } = useAuthUser()

const handleLogout = async () => {
  await logout()
  router.push('/')
}
</script>

<template>
  <header
    :class="{
      'fixed w-screen px-6 md:px-10 py-4 md:pt-6 z-10000 flex justify-between bg-transparent ': true,
      'bg-white relative': route.name != 'auth' && route.name != 'home',
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
    <div
      :class="{
        hidden: route.name == 'auth' || route.name == 'home',
      }"
    >
      <TheButton size="small" variant="link" @some-event="handleLogout()"> Logout </TheButton>
    </div>
  </header>
</template>
