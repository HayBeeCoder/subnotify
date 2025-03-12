<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import SelectField from '../SelectField.vue/SelectField.vue'
import type { SelectOption } from '../types'
import TextinputField from '../InputField.vue/TextinputField.vue'

const emit = defineEmits(['set:DurationType', 'typeEventSetDuration', 'typeEventSetEndDate'])

defineProps<{ doesUserKnowsDuration: boolean; datevalue: string; durationvalue: string }>()

const durationOptions: Ref<SelectOption[]> = ref([
  { label: 'Days', value: 'day' },
  { label: 'Weeks', value: 'week' },
  { label: 'Months', value: 'month' },
])

const selectedDurationOption: Ref<SelectOption> = ref(durationOptions.value[0])
// alert(props.doesUserKnowsDuration.value)
emit('set:DurationType', selectedDurationOption)

</script>

<template>
  <div class="flex gap-5 w-full items-end justify-between" v-if="doesUserKnowsDuration">
    <div class="w-[48%]">
      <TextinputField
        name="duration"
        :value="durationvalue"
        type="number"
        size="medium"
        label="Duration"
        placeholder="20"
        @type-event="
          (value) => emit('typeEventSetDuration', value)
        "
      />
    </div>
    <div class="w-[48%]">
      <SelectField
        :options="durationOptions"
        :selected-option="selectedDurationOption"
        @select="
          (option: SelectOption) => {
            selectedDurationOption = option
            $emit('set:DurationType', option.value)
          }
        "
        id="duration"
      />
    </div>
  </div>
  <div class="w-1/2" v-else>
    <TextinputField
      name="subenddate"
      type="date"
      size="medium"
      label="Subscription End Date"
      :value="datevalue"
      @type-event="
        (value) => {
          $emit('typeEventSetEndDate', value)
        }
      "
    />
  </div>
</template>
