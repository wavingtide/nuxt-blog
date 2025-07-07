<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />
    <UContainer class="prose dark:prose-invert mx-auto pt-40 text-center">
      <h1>{{ error?.statusCode }}</h1>
      <NuxtLink to="/">Go back home</NuxtLink>
    </UContainer>
    <AppFooter />
  </div>
</template>