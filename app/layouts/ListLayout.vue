<script setup>
const POSTS_PER_PAGE = 10

const { posts, currentPage } = defineProps({
  posts: {
    required: true
  },
  currentPage: {
    default: 1
  }
})
// const totalPages = computed(() => Math.ceil( posts.length / POSTS_PER_PAGE ))
const displayPosts = computed(() => posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE))

function to(page) {
  return {
    query: {
      page
    }
  }
}
</script>

<template>
  <div>
    <template v-if="!displayPosts.length">No posts found.</template>
    <template v-else>
      <ul>
        <li v-for="post in displayPosts" :key="post.path" class="py-4 p-4 hover:shadow-sm dark:hover:shadow-white/20 transition duration-200 rounded">
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
                  <a :href="post.path" class="text-gray-900 dark:text-gray-100">
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
        </li>
      </ul>
      <UPagination
        v-if="posts.length > POSTS_PER_PAGE"
        :page="currentPage"
        :total="posts.length"
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