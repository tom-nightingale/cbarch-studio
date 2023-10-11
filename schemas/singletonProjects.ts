import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects Archive',
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
      name: 'introSubtitle',
      title: 'Intro Subtitle',
      description: 'Text above the intro heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      description: 'Introduction title at the top of the page',
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
      name: 'introCopy',
      title: 'Intro Copy',
      description: 'The text content of the introduction',
      type: 'blockContent',
      group: 'content',
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
