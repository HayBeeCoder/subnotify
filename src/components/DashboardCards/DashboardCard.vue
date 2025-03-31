<script lang="ts" setup>
import convertTimezone from '@/utils/helpers/convertTime'
import type { CardType } from './type'

defineProps<{
  index: number,
  item: CardType
  color: {
    pastel: string
    dark: string
  }
}>()
</script>

<template>
  <div class="mb-5 bg-white p-4 rounded-[4px] border-b-4" :style="{ borderColor: color.pastel }">
    <div class="flex gap-3 items-center">
      <span class="font-medium text-sm text-[#A9A9A9] font-poppins"> #{{ index + 1 }} </span>
      <div class="border-[#F5F5F5] border-l-[1px] pl-2">
        <p>
          <span
            class="font-bold text-sm md:text-md spacing tracking-wider leading-[100%] text-[#1A1A1A]"
          >
            {{ item.provider }}
          </span>
        </p>
        <p class="text-[12px] md:text-md leading-[100%]">
          <!-- type: -->
          <span class="text-[#A9A9A9]"> {{ item.type }} </span>
        </p>
      </div>
    </div>

    <div class="my-3">
      <div class="flex justify-between text-[12px] text-[#606060]">
        <p class="-ml-[3px]">
          {{
            convertTimezone(
              item.start_date,
              item.user_timezone
            ).split(",")[0]
          }}
        </p>
        <p class="-mr-[3px]">{{
            convertTimezone(
              item.end_date,
              item.user_timezone,

            ).split(",")[0]
          }}</p>
      </div>
      <div class="w-full h-[3px] bg-[#F2F2F0] rounded-full flex">
        <div class="w-1/2 h-full rounded-full" :style="{ background: color.dark }" />
      </div>
    </div>
    <p class="text-[12px] flex gap-2 items-cener">
      <span class="text-[#A9A9A9]">Notification Date:</span>
      <span class="text-[#1A1A1A] font-semibold">{{ convertTimezone(item.end_date - 3600, item.user_timezone ) }}</span>
    </p>
  </div>
</template>

<style scoped>
span {
  display: inline-block;
}
</style>
