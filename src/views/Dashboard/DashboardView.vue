<script setup lang="ts">
import DashboardCards from '@/components/DashboardCards/DashboardCards.vue'
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'

import useAuthUser from '@/composables/useAuthUser'
import { ref } from 'vue'


const { user } = useAuthUser()

const query = ref("")

// const newSubscription = ref({})
</script>

<template>
  
  <section class="px-6 w-screen text-wrap max-w-full overflow-x-hidden break-words">
    <div v-if="user">
      <!--user_metadata is the key supabase nests all arbitrary meta data under-->
      <p>Hello {{ user.user_metadata.name }}</p>
      <p>Searching for {{ query  }}</p>
    </div>
    <DashboardHeader
      :query="query"
      @type-event="
        (value:string) => {
          query=value
        }
      "
    />



    <DashboardCards>
    </DashboardCards>
  </section>
</template>
