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

const subprovider = ref('')
const subtype = ref('')
const subdescription = ref('')
const subdurationtype = ref()
const subduration = ref('1')
const substartDate = ref(new Date().toISOString())
const subendDate = ref(getEndDate(substartDate.value?.split('T')[0], 30))
function getEndDate(startDate: string, daysToAdd: number) {
 
  const start = new Date(startDate);
  start.setDate(start.getDate() + daysToAdd);
  return start.toISOString()
}

// watch(subprovider, (newValue) => {
//   console.log({ subprovide: newValue })
// })
// watch(subtype, (newValue) => {
//   console.log({ subtype: newValue })
// })
// watch(subdescription, (newValue) => {
//   console.log({ subdescription: newValue })
// })
// watch(substartDate, (newValue) => {
//   console.log({ substartDate: newValue })
// })
// watch(subendDate, (newValue) => {
//   console.log({ subendDate: newValue })
// })
// watch(subduration, (newValue) => {
//   console.log({ subduration: newValue })
// })
</script>

<template>
  <section class="my-4">
    <h2 class="text-center my-4">Track new subscription</h2>

    <form class="mx-5 space-y-3">
      <TextinputField
        name="subprovider"
        :value="subprovider"
        type="text"
        size="medium"
        label="Subscription Provider"
        placeholder="Apple"
        @type-event="
          (value) => {
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
          (value) => {
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
          (value) => {
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
            (value) => {
              substartDate = value
            }
          "
        />
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
        label="Kindly choose the option you feel most confident about"
      />

      <DurationorEnddate
        :datevalue="subendDate"
        :durationvalue="String(subduration)"
        durationtype="subdurationtype"
        :does-user-knows-duration="doesUserKnowsDuration"
        @type-event-set-end-date="
          (value) => {
            subendDate = value
          }
        "
        @type-event-set-duration="value => {
          subduration = value
        }"
        @set:duration-type="
          (value: string) => {
            subdurationtype = value
          }
        "
      />

      <!-- <TextInputField /> -->
      <div class="w-full mt-6">
        <TheButton variant="primary" size="medium" fillup-xaxis disabled>Submit</TheButton>
      </div>
    </form>
  </section>
</template>
