<script setup lang="ts">
import { computed, ref } from 'vue'
import DurationorEnddate from '../DurationorEnddate/DurationorEnddate.vue'
import TextinputField from '../InputField.vue/TextinputField.vue'
import SelectField from '../SelectField.vue/SelectField.vue'
import TheButton from '../TheButton/TheButton.vue'
import {
  areFormsDetailsEqual,
  calculateEndDateFromDuration,
  convertToSeconds,
  getAccurateDateFormat,
  getEndDate,
} from '@/utils/helpers'
import type { SelectOption } from '../types'
import {
  NUMBER_OF_DAYS_PER_DURATION,
  SUBSCRIPTION_DESCRIPTION,
  SUBSCRIPTION_END_DATE,
  SUBSCRIPTION_PROVIDER,
  SUBSCRIPTION_START_DATE,
  SUBSCRIPTION_TYPE,
  SUBSCRIPTION_USER_TIMEZONE,
} from '@/constants'
import type { CreateSubscriptionResponse, TNUMBER_OF_DAYS_PER_DURATION } from '@/types'
import type { Ref } from 'vue'
import useValidateFields from '@/composables/useValidateFields'
import { atleastxdaysapart, required } from '@/utils/validators'
import { useApi } from '@/api/composables/useApi'
import api from '@/api/api'
import { useRouter } from 'vue-router'
import { apiStatus } from '@/api/constants/apiStatus'
import type { AxiosError } from 'axios'
import type { CardType } from '../DashboardCards/type'

const emit = defineEmits(['editSuccess'])
const props = defineProps<{
  isEditSubscription?: boolean
  subscriptionToEdit?: CardType
}>()

const { push } = useRouter()

const doesUserKnowsOptions = ref([
  { label: "I know the subscription's end date", value: 'enddate' },
  {
    label: `I know the subscription's duration`,
    value: 'duration',
  },
])
const selectUserKnowledge = ref(doesUserKnowsOptions.value[0])

const doesUserKnowsDuration = computed(() => selectUserKnowledge.value.value == 'duration')
const { PENDING, SUCCESS, ERROR } = apiStatus
const {
  exec,
  error: errorOnSubmission,
  status,
  data: responseFromSubmission,
} = useApi<CreateSubscriptionResponse>(props.isEditSubscription ? api.put : api.post)

const isSubmittingForm = computed(() => status.value == PENDING)
// const isSubmittingForm = computed(() => true)

// watch(selectUserKnowledge, (newValue) => {
//   doesUserKnowsDuration.value = newValue.value == 'duration'
// })

const subprovider = ref(props.subscriptionToEdit?.provider || '')
const subtype = ref(props.subscriptionToEdit?.type || '')
const subdescription = ref(props.subscriptionToEdit?.description || '')
const subdurationtype = ref()
const subduration = ref(props.subscriptionToEdit?.duration || '3')
const substartDate = ref(
  props.subscriptionToEdit
    ? getAccurateDateFormat(new Date(props.subscriptionToEdit.start_date * 1000))
    : getAccurateDateFormat(new Date()),
)
const subendDate = ref(
  props.subscriptionToEdit
    ? getAccurateDateFormat(new Date(props.subscriptionToEdit.end_date * 1000))
    : getEndDate(substartDate.value, 30),
)

const rules = {
  [SUBSCRIPTION_PROVIDER]: [required()],
  [SUBSCRIPTION_TYPE]: [required()],
  [SUBSCRIPTION_END_DATE]: [atleastxdaysapart(getAccurateDateFormat(new Date()), 3, true)],
}
const { errors, validateForm } = useValidateFields()
const handleSubmit = async () => {
  const form = {
    [SUBSCRIPTION_PROVIDER]: subprovider.value,
    [SUBSCRIPTION_TYPE]: subtype.value,
    [SUBSCRIPTION_START_DATE]: convertToSeconds(substartDate.value),
    [SUBSCRIPTION_END_DATE]: convertToSeconds(
      doesUserKnowsDuration.value
        ? calculateEndDateFromDuration(
            substartDate.value,
            Number(subduration.value) *
              NUMBER_OF_DAYS_PER_DURATION[subdurationtype.value as TNUMBER_OF_DAYS_PER_DURATION],
          )
        : subendDate.value,
    ),
    [SUBSCRIPTION_DESCRIPTION]: subdescription.value,
    [SUBSCRIPTION_USER_TIMEZONE]: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }

  if (props?.subscriptionToEdit && areFormsDetailsEqual(props.subscriptionToEdit, form)) {
    alert('no edit was made!')
    return
  }

  validateForm(form, rules)
  if (!!Object.entries(errors.value).length) {
    return
  }
  try {
    if (props.isEditSubscription) {
      await exec(`/${(props.subscriptionToEdit as CardType).id as number}`, form)
    } else await exec('/', form)

    if (status.value == SUCCESS) {
      alert(responseFromSubmission.value?.message)
      subduration.value = subtype.value = subdescription.value = ''

      substartDate.value = getAccurateDateFormat(new Date())
      subendDate.value = getEndDate(substartDate.value, 30)

      if (props.isEditSubscription) {
        emit('editSuccess')
      } else push('/dashboard')
    }
    if (status.value == ERROR) throw errorOnSubmission.value
  } catch (e: unknown) {
    console.log({ error: e })
    alert((e as AxiosError<{ detail: string }>).response?.data?.detail || (e as AxiosError).message)
  }

  // createSubscription("", form)
}
</script>

<template>
  <section class="my-4 w-full max-w-[500px] mx-auto " @click="(e) => e.stopPropagation()">
    <h2 v-if="!isEditSubscription" class="text-center my-4">Track new subscription</h2>
    <h2 v-else class="text-center my-4">Update subscription</h2>

    <form class="mx-5 space-y-3 w-[92%] mx-auto">
      <div class="flex flex-col md:flex-row gap-3 items-stretch md:items-start">
        <TextinputField
          :error="errors.provider"
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
          :disabled="isSubmittingForm"
        />
        <TextinputField
          :error="errors.type"
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
          :disabled="isSubmittingForm"
        />
      </div>
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
        :disabled="isSubmittingForm"
      />

      <div class="flex flex-col md:flex-row gap-3 items-start">
        <div class="w-[50%] md:w-2/6 shrink-0">
          <TextinputField
            type="date"
            size="medium"
            label="Subscription Start Date"
            name="subdate"
            :value="substartDate"
            @type-event="
              (value: string) => {
                substartDate = value
              }
            "
            :maxDate="getAccurateDateFormat(new Date())"
            :disabled="isEditSubscription || isSubmittingForm"
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
          label="Choose an option you are sure of"
          :disabled="isSubmittingForm"
          className="w-1/2 grow-0"
        />
      </div>
      <DurationorEnddate
        :is-edit-subscription="isEditSubscription"
        :datevalue="subendDate"
        :durationvalue="String(subduration)"
        :durationtype="subdurationtype"
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
        @set-duration-type="
          (value: Ref) => {
            subdurationtype = value
          }
        "
        :minDate="getEndDate(substartDate, 3)"
        :disabled="isSubmittingForm"
        :error="errors.end_date"
      />

      <!-- <TextInputField /> -->
      <div class="w-full mt-6">
        <TheButton
          variant="primary"
          size="medium"
          fillup-xaxis
          type="button"
          :disabled="isSubmittingForm"
          @some-event="handleSubmit"
          >{{ isEditSubscription ? 'Update' : 'Submit' }}</TheButton
        >
      </div>
    </form>
  </section>
</template>
