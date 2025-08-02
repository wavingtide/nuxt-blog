<script setup lang="ts">
const POSTS_PER_PAGE = 10

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

const displayPosts = computed(() => posts.value?.slice((currentPage.value - 1) * POSTS_PER_PAGE, currentPage.value * POSTS_PER_PAGE))
function to(page: number) {
  return {
    query: {
      page
    }
  }
}
</script>

<template>
  <div v-if="page">
    <h1 class="text-3xl font-bold mb-4">{{ page?.title }}</h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">{{ page?.description }}</p>
    <template v-if="!displayPosts?.length">No posts found.</template>
    <template v-else>
      <ul>
        <li v-for="post in displayPosts" :key="post.path" class="py-4 p-4 hover:shadow-sm dark:hover:shadow-white/20 transition duration-200 rounded">
          <BlogPost :post="post" />
        </li>
      </ul>
      <UPagination
        v-if="(posts?.length || 0) > POSTS_PER_PAGE"
        :page="currentPage"
        :total="posts?.length"
        :items-per-page="POSTS_PER_PAGE"
        :to="to"
        show-edges
        variant="ghost"
        active-color="neutral"
        class="mt-8"
      />
    </template>
  </div>
</template>
