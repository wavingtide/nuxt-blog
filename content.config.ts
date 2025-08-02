import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const createBaseSchema = () => z.object({
  title: z.string(),
  description: z.string()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional()
})

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        about: createBaseSchema(),
        blog: createBaseSchema(),
      })
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        date: z.date(),
        tags: z.array(z.string()),
        frontend_url: z.string().url().optional(),
        github_url: z.string().url().optional(),
        blog_url: z.string().url().optional(),
        image: z.string().url().optional(),
        draft: z.boolean().default(false),
      })
    }),
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
      source: '*.yml',
      schema: z.object({
        links: z.array(createButtonSchema())
      })
    }),
  },
})
