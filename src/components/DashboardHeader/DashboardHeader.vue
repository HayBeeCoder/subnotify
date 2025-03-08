<script setup lang="ts">
import TextinputField from '../InputField.vue/TextinputField.vue'
import TheButton from '../TheButton/TheButton.vue'
import IconPlus from '../icons/IconPlus.vue'
import IconSearch from '../icons/IconSearch.vue'


</script>

<template>
  <section class="flex gap-1 my-4 w-full md:w-full ">
    <div class="flex items-stretch flex-grow relative">
      <span class="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-[8px]">
        <IconSearch/>
      </span>
      <TextinputField  size="medium" icon-position="left" placeholder="Search for a subscription"  />
    </div>
    <div class="flex items-center justify-end">
      <TheButton variant="primary" size="medium" customclass=" " icon-exists>
        <!-- <span class="inline-block"> -->
          <span class="inline-block h-4 w-4">

            <IconPlus weight="heavy" />
          </span>
          <span class="hidden  md:inline-block">
            Track new subscription
          </span>
        <!-- </span> -->
      </TheButton>
    </div>
  </section>
</template>
