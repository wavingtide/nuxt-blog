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
  return queryCollection('blog').where("draft", "<>", true).order('date', 'DESC').all()
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

const route = useRoute()
const currentPage = computed(() => {
  const page = parseInt(route.query.page as string) || 1
  return page > 0 ? page : 1
})
</script>

<template>
  <div v-if="page">
    <h1 class="text-3xl font-bold mb-4">{{ page?.title }}</h1>
    <p class="text-gray-500 dark:text-gray-400 mb-8">{{ page?.description }}</p>
    <NuxtLayout name="list-layout" :posts="posts" :current-page="currentPage">
    </NuxtLayout>
  </div>
</template>
