<script setup lang="ts">
defineProps<{
  text: string
  count?: number
}>()
</script>

<template>
  <NuxtLink 
    :href="`/tags/${slugifyText(text)}`"
    class="text-primary-500 hover:text-secondary-600 dark:hover:text-secondary-400 text-sm font-medium uppercase border rounded-sm px-1 py-0.5 mt-1"
  >
    {{ slugifyText(text) }}
    <span v-if="count" class="ml-1">({{ count }})</span>
  </NuxtLink>
</template>
