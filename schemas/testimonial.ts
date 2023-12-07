import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      description: 'Project testimonial',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'testimonialAuthor',
      title: 'Testimonial author',
      description: 'Who wrote this testimonial?',
      type: 'string',
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'testimonialAuthor',
    },
    prepare({title}: any) {
      return {
        title: title,
      }
    },
  },
})
