import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.date(),
        author: z.string(),
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: 'blog.yml',
    }),
  },
})
