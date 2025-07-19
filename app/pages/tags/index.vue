<script setup lang="ts">
// fetch the blog post
const { data: posts } = await useAsyncData("blog-posts", () => {
  return queryCollection('blog').where("draft", "<>", true).order('date', 'DESC').all()
})

const tagCounts = computed(() => {
  const counts: Record<string, number> = {}

  for (const post of posts.value || []) {
    const tags = post.tags || []
    for (const tag of tags) {
      counts[tag] = (counts[tag] || 0) + 1
    }
  }

  return counts
})

const sortedTags = computed(() => {
  return Object.entries(tagCounts.value)
    .sort((a, b) => b[1] - a[1]) // sort by count desc
    .map(([tag, count]) => ({ tag, count }))
})
</script>

<template>
  <h1 class="text-3xl mb-8">All Tags</h1>
  <ul class="space-y-4">
    <li v-for="item in sortedTags" :key="item.tag">
      <Tag :text="item.tag" :count="item.count" />
    </li>
  </ul>
</template>