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
      name: 'firstSubtitle',
      title: 'First Subtitle',
      description: 'Text above the first heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'firstTitle',
      title: 'First Title',
      description: 'First title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'firstCopy',
      title: 'First Copy',
      description: 'The copy for the first about section',
      type: 'blockContent',
      group: 'content',
    }),

    // Main copy
    defineField({
      name: 'secondSubtitle',
      title: 'Second Subtitle',
      description: 'Text above the second heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'secondTitle',
      title: 'Second Title',
      description: 'H1',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'secondCopy',
      title: 'Second Copy',
      description: 'The copy for the second about section',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'copyImage',
      title: 'First & Second Image',
      description: 'Image to accompany first and second copy section',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'content',
    }),

    //Secondary copy
    defineField({
      name: 'thirdSubtitle',
      title: 'Third Subtitle',
      description: 'Text above the copy heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'thirdTitle',
      title: 'Third Title',
      description: 'H1',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'thirdCopy',
      title: 'Third Copy',
      description: 'The tertiary copy of the page',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'thirdCopyImage',
      title: 'Third Copy Image',
      description: 'Image to accompany tertiary copy',
      type: 'image',
      options: {
        hotspot: true,
      },
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
