import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.date(),
        author: z.string(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false),
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: 'blog.yml',
    }),
  },
})
