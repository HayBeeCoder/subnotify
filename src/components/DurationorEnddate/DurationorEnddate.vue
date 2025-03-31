<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import SelectField from '../SelectField.vue/SelectField.vue'
import type { SelectOption } from '../types'
import TextinputField from '../InputField.vue/TextinputField.vue'
import { DURATION_OPTIONS } from '@/constants'
// import { NUM } from '@/constants'

const emit = defineEmits(['setDurationType', 'typeEventSetDuration', 'typeEventSetEndDate'])

defineProps<{
  doesUserKnowsDuration: boolean
  datevalue: string
  durationvalue: string
  minDate: string
  disabled: boolean
  error?: string
}>()

const durationOptions: Ref<SelectOption[]> = ref(DURATION_OPTIONS)

const selectedDurationOption: Ref<SelectOption> = ref(durationOptions.value[0])
// alert(props.doesUserKnowsDuration.value)
onMounted(() => {
  emit('setDurationType', selectedDurationOption.value.value)
})
</script>

<template>
  <div v-if="doesUserKnowsDuration">
    <div class="flex gap-5 w-full items-end justify-between" >
      <div class="w-[48%]">
        <TextinputField
          name="duration"
          :value="durationvalue"
          type="number"
          size="medium"
          label="Duration"
          placeholder="20"
          @type-event="(value) => emit('typeEventSetDuration', value)"
          :disabled="disabled"
        />
      </div>
      <div class="w-[48%]">
        <SelectField
          :options="durationOptions"
          :selected-option="selectedDurationOption"
          @select="
            (option: SelectOption) => {
              selectedDurationOption = option
              $emit('setDurationType', option.value)
            }
          "
          id="duration"
          :disabled="disabled"
        />
      </div>
    </div>
    <p class="text-red-400 text-xs" v-if="error">{{ error }}</p>
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
      :minDate="minDate"
      :disabled="disabled"
      :error="error"
    />
  </div>
</template>
