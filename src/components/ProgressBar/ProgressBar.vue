<script setup lang="ts">
import getPercentageOfSubscriptionDuration from '@/api/helpers/getPercentageOfSubscriptionDuration'

defineProps<{
  start_date: number
  end_date: number
}>()
</script>

<template>
  <div class="w-full h-[4px] bg-[#d0d0ad] dark:bg-slate-600 rounded-full flex">
    <div
      class="h-full rounded-full"
      :style="{
        background: '#FF5E3a',
        width: `${getPercentageOfSubscriptionDuration(start_date, end_date) * 100}%`,
      }"
    ></div>
  </div>
</template>
