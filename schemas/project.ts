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
      name: 'title',
      title: 'Title',
      description: 'Project title',
      type: 'string',
      group: 'content',
    }),

    defineField({
      name: 'projectLocation',
      title: 'Location',
      description: 'Location of the project',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'projectValue',
      title: 'Value',
      description: 'Value of the project',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'projectInvolvement',
      title: 'Involvement',
      description: 'Involvement in the project',
      type: 'string',
      group: 'content',
    }),

    defineField({
      name: 'projectCopy',
      title: 'Copy',
      description: 'The text content of the project',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'projectCopyImage',
      title: 'Copy Image',
      description: 'Image to accompany page copy',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'featuredProjectGallery',
      title: 'Featured Project Gallery',
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

    /* SEO fields...*/
    defineField({
      name: 'orderRank',
      title: 'Order',
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
      media: 'heroImages.0.asset',
    },
    prepare({title, media}: any) {
      return {
        title: title,
        media: media,
      }
    },
  },
})
