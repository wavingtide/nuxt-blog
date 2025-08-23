<script setup lang="ts">
const appConfig = useAppConfig()
const links = [{
  'icon': 'i-lucide-mail',
  'to': `mailto:${appConfig.contact.email}`,
  'target': '_blank',
  'aria-label': 'Personal Email'
}, {
  'icon': 'i-simple-icons-github',
  'to': appConfig.contact.github,
  'target': '_blank',
  'label': 'Personal GitHub'
}, {
  'icon': 'i-simple-icons-linkedin',
  'to': appConfig.contact.linkedin,
  'target': '_blank',
  'label': 'Personal LinkedIn'
}, {
  'icon': 'i-simple-icons-stackoverflow',
  'to': appConfig.contact.stackoverflow,
  'target': '_blank',
  'label': 'Personal Stack Overflow'
}]
</script>

<template>
  <footer>
    <div class="mt-16 flex justify-between">
      <div> Copyright © {{ new Date().getFullYear() }}</div>
      <div class="space-x-2.5">
        <NuxtLink v-for="link in links" :key="link.icon" :to="link.to" target="_blank" :aria-label="link.label">
          <UIcon :name="link.icon" class="size-5"></UIcon>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>