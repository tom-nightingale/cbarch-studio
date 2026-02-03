import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Page',
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
    defineField({
      name: 'officePhoneNumber',
      title: 'Office Phone Number',
      description: 'Office phone number. (Will default to mobile numbers if not present)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address Line 1',
      description: 'Address Line 1',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      description: 'Address Line 2',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'city',
      title: 'City',
      description: 'City',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'postcode',
      title: 'Postcode',
      description: 'Postcode',
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
