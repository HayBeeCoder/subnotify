<script lang="ts" setup>
import { onMounted, ref, watch, type Ref } from 'vue'
import type { CardType } from './type'
import api from '@/api/api'
import { useApi } from '@/api/composables/useApi'
import { apiStatus } from '@/api/constants/apiStatus'
import IconSpinner from '../icons/IconSpinner.vue'
import type { GetSubscriptionsResponse } from '@/types'

import getUniqueRandomItem from '@/api/helpers/getUniqueRandomItem'
import DashboardCard from './DashboardCard.vue'
import { useRoute } from 'vue-router'
import { SUBSCRIPTION_CARDS } from '@/constants'

const route = useRoute()
const cards: Ref<CardType[]> = ref(SUBSCRIPTION_CARDS)
const { ERROR, SUCCESS, PENDING } = apiStatus
const {
  exec,
  status,
  data: responseFromGettingAllSubscriptions,
  error,
} = useApi<GetSubscriptionsResponse>(api.get)

const pastelDarkPairs = [
  { pastel: '#FFE8D6', dark: '#CC9A66' }, // Peach Cream → Dark Peach
  { pastel: '#FFD6E0', dark: '#B35A72' }, // Soft Pink → Dark Rose
  { pastel: '#D6F8FF', dark: '#4D9EBE' }, // Pale Blue → Deep Teal
  { pastel: '#D6FFD6', dark: '#4A925A' }, // Mint Green → Dark Forest Green
  { pastel: '#FFF5BA', dark: '#B39B00' }, // Soft Yellow → Goldenrod
  { pastel: '#F8C8DC', dark: '#8A2A4D' }, // Blush Pink → Deep Burgundy
  { pastel: '#B5EAD7', dark: '#1B5F48' }, // Aqua Green → Dark Teal
  { pastel: '#E5D4FF', dark: '#663399' }, // Lavender Purple → Deep Purple
  { pastel: '#C1E1FF', dark: '#005A9C' }, // Baby Blue → Navy Blue
  { pastel: '#FDE2E4', dark: '#992233' }, // Light Coral → Dark Maroon
]

const emit = defineEmits(['statusEvent'])

onMounted(async () => {
  emit('statusEvent', status.value)
  //   try {
  // const newValue = route.query
  //   if (newValue?.q && newValue?.sort) {
  //       await exec(`/all?q=${newValue?.q}&sort=${newValue.sort}`)
  //     } else if (!newValue?.q && newValue?.sort) {
  //       await exec(`/all?sort=${newValue?.sort}`)
  //     } else if (!newValue?.sort&&newValue?.q) {
  //       await exec(`/all?q=${newValue?.q}`)
  //     }else {
  //       await exec(`all`)
  //     }

  //     if (status.value == ERROR) throw error
  //     if (status.value == SUCCESS)
  //       cards.value = (responseFromGettingAllSubscriptions.value as GetSubscriptionsResponse).data
  //   } catch (e) {
  //     console.log({ 'Error in Dashboard Cards': e })
  //   }
})

function generateRandomItem() {
  return getUniqueRandomItem(pastelDarkPairs)
  // lastPickedIndex.value = returnValue.lastIndex
  // return returnValue.index
}
watch(
  () => route.query,
  async (newValue) => {
    try {
      emit('statusEvent', PENDING)
      if (newValue?.q && newValue?.sort) {
        await exec(`/all?q=${newValue?.q}&sort=${newValue.sort}`)
      } else if (!newValue?.q && newValue?.sort) {
        await exec(`/all?sort=${newValue?.sort}`)
      } else if (!newValue?.sort && newValue?.q) {
        await exec(`/all?q=${newValue?.q}`)
      } else {
        await exec(`all`)
      }

      if (status.value == ERROR) {
        emit('statusEvent', ERROR)
        throw error
      }
      if (status.value == SUCCESS) {
        emit('statusEvent', SUCCESS)
        cards.value = (responseFromGettingAllSubscriptions.value as GetSubscriptionsResponse).data
      }
      //   } catch (e) {
      //   }
    } catch (e) {
      console.log({ 'Error in Dashboard Cards': e })
    }
  },
  {
    deep: true,
  },
)
</script>

<template>
  <section class="py-6">
    <!-- <span class="block text-[#FF5E3A] text-center w-32 h-32 mx-auto"
     v-if="status == PENDING"
      ><IconSpinner
    /></span> -->
    <p v-if="!cards.length" class="italic text-center text-sm">No subscriptions added yet!</p>
    <!-- <div v-if="status == SUCCESS"> -->
    <div class="overflow-hidden max-w-full">
      <ul
        class="max-w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5"
      >
        <DashboardCard
          v-for="(item, key) in cards"
          :key="key"
          :item="item"
          :index="Number(key)"
          :color="generateRandomItem()"
        />
      </ul>
    </div>
    <div v-if="status == ERROR">Seems an error occured! :(</div>
  </section>
</template>

// :color=" // (() => { // // "
