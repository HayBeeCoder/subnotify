<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'

import useAuthUser from '@/composables/useAuthUser'
import { useRouter } from 'vue-router'

const { user } = useAuthUser()
const router = useRouter()

// const newSubscription = ref({})
</script>

<template>
  <section class="px-6">
    <DashboardHeader
      @update:open-modal="
        () => {
          router.push('new')
        }
      "
    />

    <div v-if="user">
      <!--user_metadata is the key supabase nests all arbitrary meta data under-->
      <div>Hello {{ user.user_metadata.name }}</div>
    </div>
  </section>
</template>
