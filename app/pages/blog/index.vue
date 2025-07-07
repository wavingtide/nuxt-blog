<script setup lang="ts">
// fetch the blog post info
const { data: page } = await useAsyncData("blog-page", () => {
  return queryCollection('pages').path('/blog').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
// fetch the blog post
const { data: posts } = await useAsyncData("blog-posts", () => {
  return queryCollection('blog').order('date', 'DESC').all()
})
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog posts not found',
    fatal: true,
  })
}

// define SEO
useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <div v-if="page">
    <!-- Add a page hero -->
    <h1 class="text-3xl font-bold mb-4">{{ page?.title }}</h1>
    <p class="text-gray-500 dark:text-gray-400 mb-8">{{ page?.description }}</p>
    <!-- TODO: add pagination functionality-->
    <NuxtLayout name="list-layout" :posts="posts" current-page="1">
    </NuxtLayout>
  </div>
</template>
