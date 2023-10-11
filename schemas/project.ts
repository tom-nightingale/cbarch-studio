import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
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

    // Project fields
    defineField({
      name: 'projectSubtitle',
      title: 'Subtitle',
      description: 'Text above the project title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'projectTitle',
      title: 'Title',
      description: 'Project title',
      type: 'string',
      group: 'content',
    }),

    // list items go here.
    defineField({
      name: 'projectCopy',
      title: 'Copy',
      description: 'The text content of the project',
      type: 'blockContent',
      group: 'content',
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
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
      name: 'testimonial',
      title: 'Testimonial',
      description: 'Project testimonial',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'testimonialAuthor',
      title: 'Testimonial author',
      description: 'Who wrote this testimonial?',
      type: 'string',
      group: 'content',
    }),

    /* SEO fields...*/
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'string',
      group: 'seo',
    }),
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
