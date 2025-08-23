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
          <BlogPost :post="post" />
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