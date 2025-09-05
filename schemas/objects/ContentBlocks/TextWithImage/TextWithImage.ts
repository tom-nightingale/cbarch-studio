import {defineField, defineType} from 'sanity'
import {BlockPreview} from '../BlockPreview'

export default defineType({
  name: 'textWithImage',
  title: 'Text With Image',
  type: 'object',
  fields: [
    defineField({
      title: 'Reverse Layout',
      name: 'reverseLayout',
      type: 'boolean',
      description: 'Revserse the layout for this block?',
    }),
    defineField({
      title: 'Apply Background',
      name: 'applyBackground',
      type: 'boolean',
      description: 'Apply a light background for this block?',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'imageBlock',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      description: 'Text above the heading',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Text above the heading',
    }),
    defineField({
      title: 'Title Heading Level',
      name: 'titleLevel',
      type: 'string',
      options: {
        list: ['h1', 'h2', 'h3', 'h4'],
      },
      description: 'What level would you like the heading for this block to be?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'blockContent',
      description: 'The copy for the section',
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'link'}],
      validation: (rule) => rule.max(1),
    }),
  ],
  initialValue: {
    reverseLayout: false,
    applyBackground: false,
    titleLevel: 'h1',
  },
  components: {preview: BlockPreview},
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image.image',
    },
  },
})
