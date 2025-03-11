<script setup lang="ts">
import { ref, watch } from 'vue'
import DurationorEnddate from '../DurationorEnddate/DurationorEnddate.vue'
import TextinputField from '../InputField.vue/TextinputField.vue'
import SelectField from '../SelectField.vue/SelectField.vue'
import TheButton from '../TheButton/TheButton.vue'

const doesUserKnowsOptions = ref([
  { label: "I know the subscription's end date", value: 'enddate' },
  {
    label: `I know the subscription's duration`,
    value: 'duration',
  },
])
const selectUserKnowledge = ref(doesUserKnowsOptions.value[0])

const doesUserKnowsDuration = ref(doesUserKnowsOptions.value[0].value == 'duration')

watch(selectUserKnowledge, (newValue) => {
  doesUserKnowsDuration.value = newValue.value == 'duration'
})

// cosnt field =
</script>

<template>
  <section class="my-4">
    <h2 class="text-center my-4">Track new subscription</h2>

    <form class="mx-5 space-y-3">
      <TextinputField type="text" size="medium" label="Subscription Provider" placeholder="Apple" />
      <TextinputField type="text" size="medium" label="Subscription Type" placeholder="Apple TV+" />

      <TextinputField
        size="medium"
        label="Subscription Description"
        placeholder="Made this subscription for Steve"
        long-message
      />
      <div class="w-1/2">
      <TextinputField type="date" size="medium" label="Subscription Start Date" />
      </div>

      <SelectField
        :options="doesUserKnowsOptions"
        :selected-option="selectUserKnowledge"
        @select="
          (option) => {
            selectUserKnowledge = option
          }
        "
        id="userKnowledge"
      />

      <DurationorEnddate :does-user-knows-duration="doesUserKnowsDuration" />

      <!-- <TextInputField /> -->
      <div class="w-full mt-6">
        <TheButton variant="primary" size="medium" fillup-xaxis disabled>Submit</TheButton>
      </div>
    </form>
  </section>
</template>
