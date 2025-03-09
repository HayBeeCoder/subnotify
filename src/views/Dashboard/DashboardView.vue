<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'
import useAuthUser from '@/composables/useAuthUser'

const { user } = useAuthUser()
</script>

<template>
  <section class="px-6">
    <DashboardHeader />
    <div v-if="user">
      <!--user_metadata is the key supabase nests all arbitrary meta data under-->
      <div>Hello {{ user.user_metadata.name }}</div>
    </div>
  </section>
</template>
