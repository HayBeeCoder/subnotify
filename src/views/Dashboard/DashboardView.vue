<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'
import TextinputField from '@/components/InputField.vue/TextinputField.vue'
import TheButton from '@/components/TheButton/TheButton.vue'
import TheModal from '@/components/TheModal/TheModal.vue'
import useAuthUser from '@/composables/useAuthUser'
import { ref, type Ref } from 'vue'

const { user } = useAuthUser()
const isModalOpen: Ref<boolean> = ref(false)

// const newSubscription = ref({})
</script>

<template>
  <section class="px-6">
    <DashboardHeader
      @update:open-modal="
        () => {
          isModalOpen = true
        }
      "
    />
    <TheModal
      :is-modal-open="isModalOpen"
      @some-event="
        () => {
          isModalOpen = false
        }
      "
    >
      <h2 class="text-center my-4">Track new subscription</h2>

      <form class="mx-5 space-y-3">
        <TextinputField
          type="text"
          size="medium"
          label="Subscription Provider"
          placeholder="Apple"
        />
        <TextinputField
          type="text"
          size="medium"
          label="Subscription Type"
          placeholder="Apple TV+"
        />

        <TextinputField
          size="medium"
          label="Subscription Description"
          placeholder="Made this subscription for Steve"
          long-message
        />
        <div class="w-full flex gap-5 justify-between">
          <div class="grow-0 inline-block">
            <TextinputField type="date" size="medium" label="Subscription Start Date" />
          </div>
          <div class="grow-0">
            <TextinputField type="date" size="medium" label="Subscription End Date" />
          </div>
        </div>

        <!-- <TextInputField /> -->
         <div class="w-full mt-6">

           <TheButton variant="primary" size="medium" fillup-xaxis disabled>Submit</TheButton>
          </div>
      </form>
    </TheModal>
    <div v-if="user">
      <!--user_metadata is the key supabase nests all arbitrary meta data under-->
      <div>Hello {{ user.user_metadata.name }}</div>
    </div>
  </section>
</template>
