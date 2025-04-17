<script lang="ts" setup>
import { onMounted, ref, watch, type Ref } from 'vue'
import type { CardType } from './type'
import api from '@/api/api'
import { useApi } from '@/api/composables/useApi'
import { apiStatus } from '@/api/constants/apiStatus'
import IconSpinner from '../icons/IconSpinner.vue'
import type { DeleteSubscriptionsResponse, GetSubscriptionsResponse } from '@/types'
import DashboardCard from './DashboardCard.vue'
import { useRoute } from 'vue-router'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm.vue'
import ProgressBar from '../ProgressBar/ProgressBar.vue'
import TextinputField from '../InputField.vue/TextinputField.vue'
import convertTimezone from '@/utils/helpers/convertTime'
import TheButton from '../TheButton/TheButton.vue'
import { DELETE_THIS_PROJECT } from '@/constants'
import IconDelete from '../icons/IconDelete.vue'
import type { AxiosError } from 'axios'
import { useThemeStore } from '@/stores/themesStore'
// import { SUBSCRIPTION_CARDS } from '@/constants'

const route = useRoute()
const cards: Ref<CardType[]> = ref([])
const cardToEdit: Ref<CardType | null> = ref(null)
const cardDeets: Ref<CardType | null> = ref(null)
const showFullDescription = ref(false)
const deleteProjectStatement = ref('')
const showDeleteFormInput = ref(false)

const {initializeTheme} = useThemeStore()
// const cards: Ref<CardType[]> = ref(SUBSCRIPTION_CARDS)
const { ERROR, SUCCESS, PENDING } = apiStatus
const {
  exec,
  status,
  data: responseFromGettingAllSubscriptions,
  error,
} = useApi<GetSubscriptionsResponse>(api.get)

const {
  exec: deleteCard,
  status: statusOnDeletion,
  data: deleteSubscriptionResponse,
  error: errorOnDeletion,
} = useApi<DeleteSubscriptionsResponse>(api.delete)

const emit = defineEmits(['statusEvent'])


async function fetchCards(){
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
onMounted(async () => {

  initializeTheme()
  await fetchCards()

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
    if (status.value == SUCCESS){}
      cards.value = (responseFromGettingAllSubscriptions.value as GetSubscriptionsResponse).data
  } catch (e) {
    console.log({ 'Error in Dashboard Cards': e })
  }
}

async function handleDelete() {
  try {
    if (cardDeets.value) {
      await deleteCard(`/${cardDeets.value?.id}`)

      if (statusOnDeletion.value == ERROR) throw errorOnDeletion
      if (statusOnDeletion.value == SUCCESS) {
        alert((deleteSubscriptionResponse.value as DeleteSubscriptionsResponse).message)
        ;(document.getElementById('cardDeetsWrapper') as HTMLElement).click();
        await fetchCards()
      }
    }
  } catch (e: unknown) {
    console.log({ error: e })
    alert((e as AxiosError<{ detail: string }>).response?.data?.detail || (e as AxiosError).message)
  }
}
</script>

<template>
  <section
    v-if="cardToEdit"
    class="fixed top-0 left-0 w-screen h-screen z-[100000] flex flex-col pt-5 items-center bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.5)]"
    @click="() => (cardToEdit = null)"
  >
    <div class="bg-white dark:bg-[#172028] w-[90%] max-w-[520px] mx-auto p-4 rounded-sm">
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
  <section
    id="cardDeetsWrapper"
    v-if="cardDeets"
    class="fixed top-0 left-0 w-screen h-screen z-[100000] flex flex-col pt-5 items-center bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.5)]"
    @click="
      () => {
        cardDeets = null
        showFullDescription = false
        showDeleteFormInput = false
        deleteProjectStatement = ''
      }
    "
  >
    <div
      class="bg-white dark:bg-[#172028] w-[90%] max-w-[520px] m-auto px-5 py-8 rounded-sm space-y-4"
      @click.stop=""
    >
      <div>
        <h2 class="text-center mb-1">{{ cardDeets.provider }}</h2>
        <p class="text-xs text-center">{{ cardDeets.type }}</p>
      </div>

      <div class="text-xs">
        <p class="text-[#A9A9A9]">Subscription Description</p>
        <p
          :class="{
            'text-justify overflow-hidden overflow-ellipsis': true,
            desc: !showFullDescription,
          }"
          @click="
            () => {
              showFullDescription = !showFullDescription
            }
          "
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nihil repellat iure
          eveniet beatae aliquid voluptatem! Quidem ipsa reiciendis laborum, omnis obcaecati
          quibusdam quis hic sint? Quo rerum rem ea. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum repudiandae debitis nulla, fugiat porro repellendus culpa ut
          impedit ex hic et, consequatur inventore sit dolor accusantium quod repellat. Modi nulla
          explicabo fugiat nemo, possimus libero vel sequi delectus omnis ipsum quas, officia
          dolores vero commodi! Ab debitis distinctio voluptatem laudantium mollitia omnis incidunt
          consequuntur, deserunt, laborum ratione explicabo quos sunt?
        </p>
      </div>

      <div class="flex gap-3 justify-between text-xs">
        <div>
          <p class="text-[#A9A9A9]">Start Date</p>
          <p>{{ convertTimezone(cardDeets.start_date, cardDeets.user_timezone) }}</p>
        </div>
        <div>
          <p class="text-[#A9A9A9]">Duration</p>
          <p>{{ cardDeets.duration + ' days' }}</p>
        </div>

        <div>
          <p class="text-[#A9A9A9]">End Date</p>
          <p>{{ convertTimezone(cardDeets.end_date, cardDeets.user_timezone) }}</p>
        </div>
      </div>

      <div><ProgressBar :start_date="cardDeets.start_date" :end_date="cardDeets.end_date" /></div>

      <div class="mt-12">
        <div v-if="showDeleteFormInput">
          <TextinputField
            name="delete_project"
            error=""
            :value="deleteProjectStatement"
            type="text"
            size="medium"
            :placeholder="DELETE_THIS_PROJECT"
            @type-event="
              (value: string) => {
                deleteProjectStatement = value
              }
            "
          >
            <p class="text-[0.7rem]">
              Type <b>`{{ DELETE_THIS_PROJECT }}`</b> in the text box below
            </p>
          </TextinputField>
          <div class="w-full flex flex-grow py-1">
            <TheButton
              variant="danger"
              size="small"
              class="w-full"
              :disabled="DELETE_THIS_PROJECT != deleteProjectStatement || statusOnDeletion == PENDING"
              @click="handleDelete"
            >
              <p v-if="statusOnDeletion != PENDING">Delete Card</p>
              <span v-else class="block text-white text-center w-6 h-6 mx-auto"
                ><IconSpinner
              /></span>
            </TheButton>
          </div>
        </div>

        <button
          v-else
          class="inline-block text-red-600 h-6 w-6"
          @click="() => (showDeleteFormInput = true)"
        >
          <IconDelete />
        </button>
      </div>
    </div>
  </section>
  <section class="py-6 min-h-screen">
    <span class="block text-[#FF5E3A] text-center w-32 h-32 mx-auto" v-if="status == PENDING"
      ><IconSpinner
    /></span>
    <div v-if="status == SUCCESS">
      <p v-if="!cards.length" class="italic text-center text-sm">No subscriptions to display!</p>
      <div v-else class="overflow-hidden max-w-full">
        <ul
          class="max-w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5"
        >
          <DashboardCard
            v-for="(item, key) in cards"
            :key="key"
            :item="item"
            :index="Number(key)"
            @show-my-deets="
              (value: CardType) => {
                cardDeets = value
              }
            "
            @edit-me="
              (value: CardType) => {
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

<style scoped>
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
