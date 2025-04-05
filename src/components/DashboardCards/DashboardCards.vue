<script lang="ts" setup>
import {onMounted, ref, watch, type Ref } from 'vue'
import type { CardType } from './type'
import api from '@/api/api'
import { useApi } from '@/api/composables/useApi'
import { apiStatus } from '@/api/constants/apiStatus'
import IconSpinner from '../icons/IconSpinner.vue'
import type { GetSubscriptionsResponse } from '@/types'
import DashboardCard from './DashboardCard.vue'
import { useRoute } from 'vue-router'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm.vue'
// import { SUBSCRIPTION_CARDS } from '@/constants'

const route = useRoute()
const cards: Ref<CardType[]> = ref([])
const cardToEdit: Ref<CardType | null> = ref(null)
// const cards: Ref<CardType[]> = ref(SUBSCRIPTION_CARDS)
const { ERROR, SUCCESS, PENDING } = apiStatus
const {
  exec,
  status,
  data: responseFromGettingAllSubscriptions,
  error,
} = useApi<GetSubscriptionsResponse>(api.get)

const emit = defineEmits(['statusEvent'])

onMounted(async () => {
  emit('statusEvent', status.value)
  try {
    const newValue = route.query
    if (newValue?.q && newValue?.sort) {
      await exec(`/all?q=${newValue?.q}&sort=${newValue.sort}`)
    } else if (!newValue?.q && newValue?.sort) {
      await exec(`/all?sort=${newValue?.sort}`)
    } else if (!newValue?.sort && newValue?.q) {
      await exec(`/all?q=${newValue?.q}`)
    } else {
      await exec(`all`)
    }

    if (status.value == ERROR) throw error
    if (status.value == SUCCESS)
      cards.value = (responseFromGettingAllSubscriptions.value as GetSubscriptionsResponse).data
  } catch (e) {
    console.log({ 'Error in Dashboard Cards': e })
  }
})

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

watch(
  () => cardToEdit.value,
  (newValue) => {
    console.log({ cardToEdit: cardToEdit.value })
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  },
)

async function refetch() {
  emit('statusEvent', status.value)
  try {
    const newValue = route.query
    if (newValue?.q && newValue?.sort) {
      await exec(`/all?q=${newValue?.q}&sort=${newValue.sort}`)
    } else if (!newValue?.q && newValue?.sort) {
      await exec(`/all?sort=${newValue?.sort}`)
    } else if (!newValue?.sort && newValue?.q) {
      await exec(`/all?q=${newValue?.q}`)
    } else {
      await exec(`all`)
    }

    if (status.value == ERROR) throw error
    if (status.value == SUCCESS)
      cards.value = (responseFromGettingAllSubscriptions.value as GetSubscriptionsResponse).data
  } catch (e) {
    console.log({ 'Error in Dashboard Cards': e })
  }
}
</script>

<template>
  <section
    v-if="cardToEdit"
    class="fixed top-0 left-0 w-screen h-screen z-[100000] flex flex-col justify-center items-center"
    :style="{ background: 'rgba(0,0,0,0.3)' }"
    @click="() => (cardToEdit = null)"
  >
    <div class="bg-white w-[94%] m-auto py-4 rounded-sm">
      <SubscriptionForm
        :is-edit-subscription="true"
        :subscription-to-edit="cardToEdit as CardType"
        @edit-success="
          async () => {
            cardToEdit = null
            await refetch()
          }
        "
      />
    </div>
  </section>
  <section class="py-6 min-h-screen">
    <span class="block text-[#FF5E3A] text-center w-32 h-32 mx-auto" v-if="status == PENDING"
      ><IconSpinner
    /></span>
    <div v-if="status == SUCCESS">
      <p v-if="!cards.length" class="italic text-center text-sm">No subscriptions added yet!</p>
      <div v-else class="overflow-hidden max-w-full">
        <ul
          class="max-w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5"
        >
          <DashboardCard
            v-for="(item, key) in cards"
            :key="key"
            :item="item"
            :index="Number(key)"
            @edit-me="
              (value: CardType) => {
                console.log({ value })
                cardToEdit = value
              }
            "
          />
        </ul>
      </div>
    </div>
    <div v-if="status == ERROR">Seems an error occured! :(</div>
  </section>
</template>

// :color=" // (() => { // // "
