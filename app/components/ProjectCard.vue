<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  image?: string;
  frontend_url?: string;
  github_url?: string;
  blog_url?: string;
  date?: string | Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
const { project, reverse } = defineProps<{ project: Project, reverse: boolean }>()
</script>

<template>
  <article 
    class="mx-auto md:mx-0 w-max grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 space-y-4 md:space-y-0 justify-between md:items-center"
  >
    <div 
      class="w-100 md:w-85"
      :class="reverse ? 'md:order-1' : 'md:order-2'"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title ? `Screenshot of ${project.title}` : 'Project image'"
        class="w-full aspect-[2/1] rounded-lg object-cover"
      />
    </div>
    <div 
      class="w-100 md:w-90 space-y-2"
      :class="reverse ? 'md:order-2' : 'md:order-1'"
    >
      <h2 class="text-xl font-bold">{{ project.title }}</h2>
      <p class="text-gray-600 dark:text-gray-400">{{ project.description }}</p>
      <div class="flex space-x-2 mt-4">
        <NuxtLink 
          v-if="project.frontend_url"
          :to="project.frontend_url"
          target="_blank"
          aria-label="View project"
          title="View project"
          class="hover:text-primary-500 dark:hover:text-primary-400 transition duration-200"
        >
          <UIcon name="i-lucide-external-link" class="size-5" />
        </NuxtLink>
        <NuxtLink 
          v-if="project.github_url"
          :to="project.github_url"
          target="_blank"
          aria-label="View source code"
          title="View source code"
          class="hover:text-primary-500 dark:hover:text-primary-400 transition duration-200"
        >
          <UIcon name="i-lucide-github" class="size-5" />
        </NuxtLink>
        <NuxtLink 
          v-if="project.blog_url"
          :to="project.blog_url"
          target="_blank"
          aria-label="Read blog post"
          title="Read blog post"
          class="hover:text-primary-500 dark:hover:text-primary-400 transition duration-200"
        >
          <UIcon name="i-lucide-book" class="size-5" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
