<script setup lang="ts">
import useAuthUser from '@/composables/useAuthUser'

const { user } = useAuthUser()
</script>

<template>
  <div v-if="user">
    <!--user_metadata is the key supabase nests all arbitrary meta data under-->
    <div>Hello {{ user.user_metadata.name }}</div>
  </div>
</template>
