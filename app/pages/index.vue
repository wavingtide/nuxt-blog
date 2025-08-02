<script setup>
const { data: page } = await useAsyncData('home-page', () => {
  return queryCollection('home').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>

<template>
  <p>{{ page.title }}</p>
</template>