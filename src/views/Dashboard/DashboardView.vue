<script setup lang="ts">
import { apiStatus } from '@/api/constants/apiStatus'
import DashboardCards from '@/components/DashboardCards/DashboardCards.vue'
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'
import TheSorter from '@/components/TheSorter/TheSorter.vue'

import useAuthUser from '@/composables/useAuthUser'
import { ref } from 'vue'

const { user } = useAuthUser()
const { IDLE, PENDING } = apiStatus

const query = ref('')

const apiRequestStatus = ref(IDLE)

// const newSubscription = ref({})
</script>

<template>
  <section class="px-6 w-screen text-wrap max-w-full overflow-x-hidden break-words">
    <div v-if="user">
      <!--user_metadata is the key supabase nests all arbitrary meta data under-->
      <p>Hello {{ user.user_metadata.name }}</p>
    
    </div>
    <DashboardHeader
      :disabled="apiRequestStatus == PENDING"
      :query="query"
      @type-event="
        (value: string) => {
          query = value
        }
      "
    />

    <div class="flex justify-end">
      <TheSorter :disabled="apiRequestStatus == PENDING" />
    </div>

    <DashboardCards
      @status-event="
        (value: symbol) => {
          apiRequestStatus = value
        }
      "
    >
    </DashboardCards>
  </section>
</template>
