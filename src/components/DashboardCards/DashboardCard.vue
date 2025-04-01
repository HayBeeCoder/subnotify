<script lang="ts" setup>
import convertTimezone from '@/utils/helpers/convertTime'
import type { CardType } from './type'
import IconEdit from '../icons/IconEdit.vue';
import IconBell from '../icons/IconBell.vue';

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
  <!--:style="{ borderColor: color.pastel }" -->
  <li class="mb-5 bg-white p-4 rounded-[4px] cursor-pointer hover:scale-105 hover:ease-linear ease-linear duration-300" 
  >
    <div class="flex gap-3 items-center">
      <span class="font-medium text-sm text-[#A9A9A9] font-poppins"> #{{ index + 1 }} </span>
      <div class="border-[#F5F5F5] border-l-[1px] pl-2 flex-grow">
        <p>
          <span
            class="font-bold text-sm  spacing tracking-wider leading-[100%] text-[#1A1A1A]"
          >
            {{ item.provider }}
          </span>
        </p>
        <p class="text-[12px]  leading-[100%]">
          <!-- type: -->
          <span class=" text-[#777777]"> {{ item.type }} </span>
        </p>
      </div>
      <span class="w-5 h-5 text-[#A9A9A9] hover:text-[#1a1a1a] cursor-pointer">
      <IconEdit/>
      </span>
    </div>

    <div class="my-3">
      <div class="flex justify-between text-[12px] text-[#606060] mb-[3px]">
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
      <div class="w-full h-[4px] bg-[#d0d0ad] rounded-full flex">
        <div class="w-1/2 h-full rounded-full" :style="{ background: color.dark }" />
      </div>
    </div>
    <!-- <div class="flex justify-between items-center"> -->
    <p class="text-[13px] flex items-center ">
    <span class="w-4 h-4 text-[#a9a9a9] mr-px"><IconBell/></span>
      <span class="text-[#777777] mr-[2px] ">Notification Date:</span>
      <span class="text-[#1A1A1A] font-semibold">{{ convertTimezone(item.end_date - 86400, item.user_timezone ) }}</span>
    </p>

    <!-- </div> -->
  </li>
</template>

<style scoped>
span {
  display: inline-block;
}

li{
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.05);
  /* box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); */


}
</style>
