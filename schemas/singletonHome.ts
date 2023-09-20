import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      group: 'content',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      description: 'Text to accompany the hero image',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'copySubtitle',
      title: 'Copy Subtitle',
      description: 'Text above the copy heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'copyTitle',
      title: 'Copy Title',
      description: 'H1',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'copy',
      title: 'Copy',
      description: 'The main text content of the page',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'copyImage',
      title: 'Copy Image',
      description: 'Image to accompany page copy',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectsSubtitle',
      title: 'Projects Subtitle',
      description: 'Text above the projects heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      description: 'Select two featured projects',
      type: 'array',
      validation: (Rule) => Rule.length(2),
      of: [
        {
          title: 'Project',
          name: 'project',
          type: 'reference',
          to: [{type: 'project'}],
          options: {
            disableNew: true,
          },
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'content',
      validation: (Rule) => Rule.length(3),
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    /* SEO fields...*/
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Only used to generate the slug.',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'seo',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
