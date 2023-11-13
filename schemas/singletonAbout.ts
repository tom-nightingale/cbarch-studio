import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
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
    // Intro
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
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'introCopy',
      title: 'Intro Copy',
      description: 'The text content of the introduction',
      type: 'blockContent',
      group: 'content',
    }),

    // Main copy
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
      type: 'string',
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
      group: 'content',
    }),

    // Meet the team
    defineField({
      name: 'teamSubtitle',
      title: 'Team Subtitle',
      description: 'Text above the team members heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'teamTitle',
      title: 'Team Title',
      description: 'Team title',
      type: 'string',
      group: 'content',
    }),

    defineField({
      name: 'team',
      title: 'Team',
      description: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'teamMember'}],
        },
      ],
      group: 'content',
    }),

    // SEO fields
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
