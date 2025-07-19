<script setup lang="ts">
const route = useRoute()
const {data: post} = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found',
    fatal: true,
  })
}
const {data: surround} = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('blog', route.path, {
    fields: ["description"]
  })
})
const previousPost = surround.value?.[0] || null
const nextPost = surround.value?.[1] || null

const title = post.value?.seo?.title || post.value?.title
const description = post.value?.seo?.description || post.value?.description
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const articleLink = computed(() => `${window?.location}`)
</script>

<template>
  <!-- Date, title, author, content, tags, previous and next article -->
  <section>
    <article class="prose max-w-none dark:prose-invert prose-lg">
      <header>
        <h1>{{ post?.title }}</h1>
        <p class="space-x-3">Tags: 
          <Tag v-for="tag in post?.tags" :key="tag" :text="tag" class="inline-block no-underline" />
        </p>
        <p class="text-gray-800 dark:text-gray-200">
          <time v-if="post?.body" :date="post?.date">{{ formatDate(post?.date) }}</time>
        </p>
      </header>
      <hr />
      <div class="text-gray-800 dark:text-gray-200">
        <ContentRenderer v-if="post?.body" :value="post"></ContentRenderer>
      </div>
    </article>

    <!-- Surrounding articles -->
    <nav class="grid grid-cols-2 gap-4 mt-8">
      <NuxtLink
        v-if="previousPost"
        :to="previousPost.path"
        class="cursor-pointer justify-start border border-black dark:border-white p-8 rounded-md"
      >
        <p class="font-semibold">← Previous: {{ previousPost.title }}</p>
        <p class="text-sm mt-2 text-gray-500 dark:text-gray-400">{{ previousPost.description }}</p>
      </NuxtLink>
      <NuxtLink 
        v-if="nextPost"
        :to="nextPost.path"
        class="text-right cursor-pointer justify-end border border-black dark:border-white p-8 rounded-md col-start-2"
      >
        <p class="font-semibold">→ Next: {{ nextPost.title }}</p>
        <p class="text-sm mt-2 text-gray-500 dark:text-gray-400">{{ nextPost.description }}</p>
      </NuxtLink>
    </nav>
  </section>
</template>
