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
        <p class="text-gray-800 dark:text-gray-200">
          <time v-if="post?.body" :date="post?.date">{{ formatDate(post?.date) }}</time>
        </p>
      </header>
      <div class="text-gray-800 dark:text-gray-200">
        <ContentRenderer v-if="post?.body" :value="post"></ContentRenderer>
      </div>
      <!-- <footer>
        <p>Tags: 
          <span v-for="tag in post?.tags" :key="tag" class="inline-block mr-2">
            {{ tag }}
          </span>
        </p>
      </footer> -->
    </article>

    <!-- Surrounding articles -->
    <nav class="flex justify-between gap-4 mt-8">
      <Ubutton
        v-if="previousPost"
        class="cursor-pointer justify-start border border-black dark:border-white p-10 rounded-md flex-1"
        variants="ghost"
      >
        <NuxtLink :to="previousPost.path">
          <p class="font-semibold">← Previous: {{ previousPost.title }}</p>
          <p class="text-sm text-muted-foreground">{{ previousPost.description }}</p>
        </NuxtLink>
      </Ubutton>
      <Ubutton
        v-if="nextPost"
        class="cursor-pointer justify-end border border-black dark:border-white p-10 rounded-md flex-1"
        variants="ghost"
      >
        <NuxtLink :to="nextPost.path" class="text-right">
          <p class="font-semibold">→ Next: {{ nextPost.title }}</p>
          <p class="text-sm text-muted-foreground">{{ nextPost.description }}</p>
        </NuxtLink>
      </Ubutton>
    </nav>
  </section>
</template>
