<script setup lang="ts">
import { ref } from 'vue'
import TextinputField from '../InputField.vue/TextinputField.vue'
import TheButton from '../TheButton/TheButton.vue'
import IconPlus from '../icons/IconPlus.vue'
import IconSearch from '../icons/IconSearch.vue'
import { useRoute, useRouter } from 'vue-router'

defineProps<{
  disabled: boolean
}>()
defineEmits(['typeEvent'])
const router = useRouter()
const route = useRoute()

const search_query = ref((route.query.q as string) || '')

function queryHandler() {
  if (search_query.value == '' && !route.query.q) return
  if (route.query.q != search_query.value) {
    router.push({
      path: '/dashboard',
      query: {
        ...route.query,
        q: search_query.value == '' ? undefined : search_query.value,
      },
    })
  }
}
</script>

<template>
  <section class="flex gap-1 md:justify-between my-4 w-full md:w-full">
    <!-- <form @submit.prevent="queryHandler"> -->
    <form
      class="flex items-stretch md:w-2/5 md:max-w-[450px] flex-grow relative "
      @submit.prevent="queryHandler()"
    >
      <span class="w-4 h-4 absolute text-slate-300 peer-focus:text-[#0a0a0a] top-1/2 -translate-y-1/2 left-[8px]">
        <IconSearch />
      </span>
      <TextinputField
        :disabled="disabled"
        type="text"
        size="medium"
        icon-position="left"
        class-value="w-full h-full peer"
        placeholder="Search for a subscription"
        name="Search"
        :value="search_query"
        @type-event="
          (value: string) => {
            search_query = value
            $emit('typeEvent', value)
          }
        "
      />
      <!-- </div> -->
    </form>
    <div class="flex items-center justify-end">
      <TheButton
        :disabled="disabled"
        variant="primary"
        size="medium"
        customclass=" "
        icon-exists
        @some-event="
          () => {
            router.push('new')
          }
        "
      >
        <!-- <span class="inline-block"> -->
        <span class="inline-block h-4 w-4">
          <IconPlus weight="heavy" />
        </span>
        <span class="hidden md:inline-block"> Track new subscription </span>
        <!-- </span> -->
      </TheButton>
    </div>
  </section>
</template>
