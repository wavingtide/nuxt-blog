<script setup>
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}

const {data: projects} = await useAsyncData('projects', () => {
  return queryCollection('projects').order('date', 'DESC').all()
})

const appConfig = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <div v-if="page">
    <h1 class="text-3xl font-bold mb-4">{{ page?.title }}</h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">{{ page?.description }}</p>
    <template class="mb-20 flex text-white text-center dark:text-black">
      <NuxtLink
        :to="appConfig.contact[page.links[0].to]"
        target="_blank"
        class="px-2 py-1 rounded bg-primary-500 dark:bg-primary-400 hover:bg-primary-400 dark:hover:bg-primary-500 transition duration-200"
      >
        {{  page.links[0].label }}
      </NuxtLink>
      <NuxtLink
        :to="`mailto:${appConfig.contact[page.links[1].to]}`"
        class="ml-3 px-2 py-1 rounded bg-neutral-950 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-300 transition duration-200"
      >
        {{ page.links[1].label }}
      </NuxtLink>
    </template>
    <template v-if="projects?.length">
      <div class="space-y-4 md:space-y-16">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.path"
          :project="project"
          :reverse="index % 2 === 1"
        />
      </div>
    </template>
    <template v-else>
      <p class="text-gray-500 dark:text-gray-400">No projects found.</p>
    </template>
  </div>
</template>
