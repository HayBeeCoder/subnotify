<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import SelectField from '../SelectField.vue/SelectField.vue'
import type { SelectOption } from '../types'
import TextinputField from '../InputField.vue/TextinputField.vue';

 defineProps<{ doesUserKnowsDuration: boolean }>()

const durationOptions: Ref<SelectOption[]> = ref([
  { label: 'Days', value: 'day' },
  { label: 'Weeks', value: 'week' },
  { label: 'Months', value: 'month' },
])

const selectedDurationOption: Ref<SelectOption> = ref(durationOptions.value[0])
// alert(props.doesUserKnowsDuration.value)
</script>

<template>
  <div  class="flex gap-5 w-full items-end justify-between" v-if="doesUserKnowsDuration">
  <div class="w-[48%]">
    <TextinputField type="number" size="medium" label="Duration" placeholder="20" />
  </div>
  <div class="w-[48%]">
    <SelectField
      :options="durationOptions"
      :selected-option="selectedDurationOption"
      @select="
        (option) => {
          selectedDurationOption.value = option
        }
      "
      id="duration"
    />
  </div>
  </div>
  <div class="w-1/2" v-else >
  <TextinputField  type="date" size="medium" label="Subscription End Date" />
  </div>
</template>
