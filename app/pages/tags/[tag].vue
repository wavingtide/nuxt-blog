<script setup>
// fetch the blog post
const { data: posts } = await useAsyncData("blog-posts", () => {
  return queryCollection('blog').where("draft", "<>", true).order('date', 'DESC').all()
})
const { params: { tag } } = useRoute()
if (!tag) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tag not found',
    fatal: true,
  })
}
const filteredPosts = computed(() => {
  return posts.value?.filter(post => post.tags?.includes(slugifyText(tag))) || []
})

const route = useRoute()
const currentPage = computed(() => {
  const page = parseInt(route.query.page) || 1
  return page > 0 ? page : 1
})
</script>

<template>
  <h1 class="text-3xl mb-8">Tag: 
    <Tag :key="tag" :text="tag" />
  </h1>
  <NuxtLayout name="list-layout" :posts="filteredPosts" :current-page="currentPage">
  </NuxtLayout>
  <div class="mt-8 text-xl">
    <NuxtLink to="/tags">← All Tags</NuxtLink>
  </div>
</template>