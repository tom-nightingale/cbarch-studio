import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team Page',
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
