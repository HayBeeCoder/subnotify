<script setup lang="ts">
import { ref } from 'vue'
import TextinputField from '../InputField.vue/TextinputField.vue'
import TheButton from '../TheButton/TheButton.vue'
import IconPlus from '../icons/IconPlus.vue'
import IconSearch from '../icons/IconSearch.vue'
import { useRouter } from 'vue-router'

defineEmits(['typeEvent'])
const router = useRouter()

const search_query= ref("")
</script>

<template>
  <section class="flex gap-1 md:justify-between my-4 w-full md:w-full ">
    <div class="flex items-stretch w-2/5 max-w-[450px] relative  ">
      <span class="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-[8px]">
        <IconSearch />
      </span>
      <TextinputField
        type="text"
        size="medium"
        icon-position="left"
        class-value="w-full h-full"
        placeholder="Search for a subscription"
        name="Search"
        :value="search_query"
        
        @type-event="
          (value: string) => {

            $emit('typeEvent', value)
          }
        "

      />
    </div>
    <div class="flex items-center justify-end">
        <TheButton
          variant="primary"
          size="medium"
          customclass=" "
          icon-exists
          @some-event="() => {router.push('new')}"
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
