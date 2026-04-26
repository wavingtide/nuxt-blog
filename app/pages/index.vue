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
const displayPosts = computed(() => posts.value?.slice(0, 3))


useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <h1 class="text-5xl font-bold mb-8">{{ page.title }}</h1>
  <p class="mb-12">{{ page.description }}</p>
  <h1 class="text-3xl font-bold mb-4">{{ page?.blog.title }}</h1>
  <p class="text-gray-600 dark:text-gray-400 mb-8">{{ page?.blog.description }}</p>
  <template v-if="!displayPosts?.length">No posts found.</template>
  <template v-else>
    <ul>
      <li v-for="post in displayPosts" :key="post.path" class="py-4 hover:shadow-sm dark:hover:shadow-white/20 transition duration-200 rounded">
        <BlogPost :post="post" />
      </li>
    </ul>
  </template>
</template>