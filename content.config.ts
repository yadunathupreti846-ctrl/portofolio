import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    category: z.enum(['web', 'mobile', 'design']),
    featuredImage: z.string(),
    gallery: z.array(z.string()).optional(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    profileImage: z.string(),
    socialLinks: z.array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    siteTitle: z.string(),
    logo: z.string(),
    footerText: z.string(),
    contactEmail: z.string().email(),
  }),
});

export const collections = {
  projects: projectsCollection,
  about: aboutCollection,
  settings: settingsCollection,
};