<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const videoUrl = ref('')

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://graph.instagram.com/DELzd0jPXPu?fields=media_url&access_token={your-access-token}',
    )
    videoUrl.value = response.data.media_url
  } catch (error) {
    console.error('Error fetching Instagram video:', error)
  }
})
</script>

<template>
  <div>
    <video v-if="videoUrl" :src="videoUrl" controls width="600"></video>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped>
.instagram-embed {
  margin: 20px 0;
}
</style>
