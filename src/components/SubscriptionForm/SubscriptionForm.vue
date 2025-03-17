<script setup lang="ts">
import { computed, ref } from 'vue'
import DurationorEnddate from '../DurationorEnddate/DurationorEnddate.vue'
import TextinputField from '../InputField.vue/TextinputField.vue'
import SelectField from '../SelectField.vue/SelectField.vue'
import TheButton from '../TheButton/TheButton.vue'
import { convertToSeconds, getAccurateDateFormat, getEndDate } from '@/utils/helpers'
import type { SelectOption } from '../types'
import {
  SUBSCRIPTION_DESCRIPTION,
  SUBSCRIPTION_END_DATE,
  SUBSCRIPTION_PROVIDER,
  SUBSCRIPTION_START_DATE,
  SUBSCRIPTION_TYPE,
} from '@/constants'

const doesUserKnowsOptions = ref([
  { label: "I know the subscription's end date", value: 'enddate' },
  {
    label: `I know the subscription's duration`,
    value: 'duration',
  },
])
const selectUserKnowledge = ref(doesUserKnowsOptions.value[0])

const doesUserKnowsDuration = computed(() => selectUserKnowledge.value.value == 'duration')

// watch(selectUserKnowledge, (newValue) => {
//   doesUserKnowsDuration.value = newValue.value == 'duration'
// })

const subprovider = ref('')
const subtype = ref('')
const subdescription = ref('')
const subdurationtype = ref()
const subduration = ref('3')
const substartDate = ref(getAccurateDateFormat(new Date))
// const substartDate = ref(new Date(new Date().toLocaleDateString()).toISOString())
console.log({ substartDate: substartDate.value })
// const subendDate = ref(getEndDate(substartDate.value, 30))
const subendDate = ref(getEndDate(substartDate.value, 30))
const handleSubmit = () => {
  const form = {
    [SUBSCRIPTION_PROVIDER]: subprovider.value,
    [SUBSCRIPTION_TYPE]: subtype.value,
    [SUBSCRIPTION_START_DATE]: convertToSeconds(substartDate.value),
    [SUBSCRIPTION_END_DATE]: convertToSeconds(subendDate.value),
    [SUBSCRIPTION_DESCRIPTION]: subdescription.value,
  }
  console.log({ form })
}
</script>

<template>
  <section class="my-4">
    <h2 class="text-center my-4">Track new subscription</h2>

    <form class="mx-5 space-y-3" @submit.prevent="handleSubmit">
      <TextinputField
        name="subprovider"
        :value="subprovider"
        type="text"
        size="medium"
        label="Subscription Provider"
        placeholder="Apple"
        @type-event="
          (value: string) => {
            subprovider = value
          }
        "
      />
      <TextinputField
        name="subtype"
        :value="subtype"
        type="text"
        size="medium"
        label="Subscription Type"
        placeholder="Apple TV+"
        @type-event="
          (value: string) => {
            subtype = value
          }
        "
      />

      <TextinputField
        name="subdescription"
        :value="subdescription"
        size="medium"
        label="Subscription Description"
        placeholder="Made this subscription for Steve"
        long-message
        @type-event="
          (value: string) => {
            subdescription = value
          }
        "
      />
      <div class="w-1/2">
        <TextinputField
          type="date"
          size="medium"
          label="Subscription Start Date"
          name="subdate"
          :value="substartDate"
          @type-event="
            (value: string) => {
              console.log({ value })
              substartDate = value
            }
          "
          :maxDate="getAccurateDateFormat(new Date())"
        />
      </div>

      <SelectField
        :options="doesUserKnowsOptions"
        :selected-option="selectUserKnowledge"
        @select="
          (option: SelectOption) => {
            selectUserKnowledge = option
          }
        "
        id="userKnowledge"
        label="Kindly choose the option you feel most confident about"
      />

      <DurationorEnddate
        :datevalue="subendDate"
        :durationvalue="String(subduration)"
        durationtype="subdurationtype"
        :does-user-knows-duration="doesUserKnowsDuration"
        @type-event-set-end-date="
          (value: string) => {
            subendDate = value
          }
        "
        @type-event-set-duration="
          (value) => {
            subduration = value
          }
        "
        @set:duration-type="
          (value: string) => {
            subdurationtype = value
          }
        "
        :minDate="getEndDate(substartDate, 3)"
      />

      <!-- <TextInputField /> -->
      <div class="w-full mt-6">
        <TheButton variant="primary" size="medium" fillup-xaxis type="submit">Submit</TheButton>
      </div>
    </form>
  </section>
</template>
