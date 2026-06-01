import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: '**/*.md',
      // Extra front-matter fields used by the docs nav/layout.
      schema: z.object({
        navTitle: z.string().optional(),
        icon: z.string().optional(),
        section: z.string().optional(),
        order: z.number().optional(),
      }),
    }),
  },
})
