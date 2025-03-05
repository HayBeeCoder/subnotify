<script setup lang="ts">
import TheButton from '@/components/TheButton/TheButton.vue'
import IconGoogle from '@/assets/images/google.png'
import IconGithub from '@/assets/images/github.png'

const loginProviders = [
  {
    provider: 'Google',
    icon: IconGoogle,
  },
  {
    provider: 'Github',
    icon: IconGithub,
  },
]
</script>

<template>
  <section class="h-screen w-full min-md:w-[50vw] m-auto flex flex-col justify-center  items-center gap-5 ">
    <h2>Create an account</h2>
    <div class="w-4/5 max-w-md space-y-5">
      <TheButton
        v-for="(item, key) in loginProviders"
        :key="key"
        variant="neutral"
        size="large"
        fillup-xaxis
        icon-exists
        medium-text
        >
        <span class="inline-block">

          Connect with {{ item.provider }}
        </span>
        <span class="inline-block w-6 aspect-square">
          <img class="{'w-full h-full': true }" :src="item.icon" />
        </span>
      </TheButton>
    </div>
  </section>
</template>
