<script setup lang="ts">
import TheButton from '@/components/TheButton/TheButton.vue'
import useAuthUser from '@/composables/useAuthUser'
import { loginProviders } from './data'
import { useRouter } from 'vue-router'
import type { Provider } from '@supabase/supabase-js'

const router = useRouter()
const { isLoggedIn } = useAuthUser()
const { loginWithSocialProvider } = useAuthUser()

const handleLogin = async (provider: Provider) => {
  try {
    const loggedIn = await isLoggedIn()

    if (loggedIn) {
      router.push({ name: 'dashboard' })
      return
    }
    if (provider) {
      await loginWithSocialProvider(provider).then(() => {
        // router.push({ name: 'dashboard' })
      })
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section
    class="h-screen w-full md:w-[50vw] m-auto flex flex-col justify-center items-center gap-5"
  >
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
        @some-event="handleLogin(item.provider.toLowerCase() as Provider)"
      >
        <span class="inline-block"> Connect with {{ item.provider }} </span>
        <span class="inline-block w-6 aspect-square">
          <img class="{'w-full h-full': true }" :src="item.icon" />
        </span>
      </TheButton>
    </div>
  </section>
</template>
