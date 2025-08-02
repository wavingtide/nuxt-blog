<script setup>
const { post } = defineProps(['post'])
</script>

<template>
  <article class="flex flex-col space-y-2 xl:space-y-0">
    <dl>
      <dt class="sr-only">Published on</dt>
      <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
        <time :datetime="post.date">
          {{ formatDate(post.date) }}
        </time>
      </dd>
    </dl>
    <div class="space-y-3">
      <div>
        <h2 class="text-2xl leading-8 font-bold tracking-tight">
          <a :href="post.path" class="text-gray-800 dark:text-gray-100">
            {{ post.title }}
          </a>
        </h2>
        <div class="flex flex-wrap space-x-3">
          <Tag v-for="tag in post.tags" :key="tag" :text="tag" />
        </div>
      </div>
      <div class="prose max-w-none text-gray-500 dark:text-gray-400">
        {{ post.description }}
      </div>
    </div>
  </article>
</template>