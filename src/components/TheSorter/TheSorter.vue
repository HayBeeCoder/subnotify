<script setup lang="ts">
import { ref, watch } from 'vue'
import IconSort from '../icons/IconSort.vue'
import { useRoute, useRouter } from 'vue-router'
import IconDone from '../icons/IconDone.vue'

const router = useRouter()
const route = useRoute()
const isSortModalOpen = ref(false)

const selectedSort = ref((route.query.sort as string) || 'none')

const props = defineProps<{ disabled: boolean }>()
// Watch for route query changes and update selectedSort
watch(
  () => route.query.sort as string,
  (newSort) => {
    selectedSort.value = newSort || 'none'
  },
)

type SortOption = {
  displayText: string
  value: string
}

const sortOptions: SortOption[] = [
  {
    displayText: 'Alphabetically ( A - Z)',
    value: 'az',
  },
  {
    displayText: 'Alphabetically ( Z - A)',
    value: 'za',
  },
  {
    displayText: 'Date of Creation (Newest first)',
    value: 'new',
  },
  {
    displayText: 'Date of Creation (Oldest first)',
    value: 'old',
  },
  {
    displayText: 'Duration (Shortest first)',
    value: 'short',
  },
  {
    displayText: 'Duration (Longest first)',
    value: 'long',
  },
  {
    displayText: 'None',
    value: 'none',
  },
]

const updateSortOption = (sortOption: SortOption) => {
  if (props.disabled) return
  if (selectedSort.value != sortOption.value) {
    router.push({
      path: '/dashboard',
      query: {
        ...route.query,
        sort: sortOption.value == 'none' ? undefined : sortOption.value,
      },
    })
  }
}

import { onMounted } from 'vue'

onMounted(() => {
  document.body.addEventListener('click', () => {
    if (isSortModalOpen.value) {
      isSortModalOpen.value = false
    }
  })
})
</script>

<template>
  <section class="relative">
    <button
      :class="{
        'inline-flex items-center gap-1 py-2 px-3 rounded-sm': true,
        'bg-white active': isSortModalOpen,
      }"
      @click.stop="
        () => {
          isSortModalOpen = !isSortModalOpen
        }
      "
    >
      <span class="w-4 h-4 inline-block text-[#8C8C8C]"><IconSort /></span>
      <span class="text-xs inline-block text-[#8C8C8C] font-semibold">Sort</span>
    </button>
    <div v-if="isSortModalOpen" class="bg-white">
      <ul
        class="absolute min-w-[250px] top-[120%] right-0 bg-white z-[1000] flex flex-col py-4 rounded-sm"
      >
        <li
          :class="{
            'text-[12px] py-2  hover:bg-gray-100 px-5 p-3 flex justify-between items-center': true,
            'cursor-pointer': !props.disabled,
            'cursor-not-allowed': props.disabled,
          }"
          v-for="(item, key) in sortOptions"
          :key="key"
          @click.stop="updateSortOption(item)"
        >
          <span>
            {{ item.displayText }}
          </span>
          <span v-if="selectedSort == item.value" class="w-4 h-4 text-[#FF5E3A]">
            <IconDone />
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
button:hover {
  background: #0000000d;
}
button:hover span {
  color: #4d4d4d;
}
ul {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}
span {
  display: inline-block;
}
</style>

// Date of Creation // Duration // Aphaeticall.,
