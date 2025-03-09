<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'
import TheModal from '@/components/TheModal/TheModal.vue'
import useAuthUser from '@/composables/useAuthUser'
import { ref } from 'vue'

const { user } = useAuthUser()
const isModalOpen = ref(false)
</script>

<template>
  <section class="px-6">
    <DashboardHeader
      @update:open-modal="
        () => {
          isModalOpen = true
        }
      "
    />
    <TheModal
      v-if="isModalOpen"
      @some-event="
        () => {
          isModalOpen = false
        }
      "
    />
    <div v-if="user">
      <!--user_metadata is the key supabase nests all arbitrary meta data under-->
      <div>Hello {{ user.user_metadata.name }}</div>
    </div>
  </section>
</template>
