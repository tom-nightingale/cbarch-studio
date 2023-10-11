import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of the team member',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
      description: 'Email address of the team member',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Phone Number',
      name: 'phone',
      type: 'string',
      description: 'Phone number of the team member',
    }),
    defineField({
      name: 'image',
      title: 'Team Member Image',
      description: 'Image to accompany team member',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      description: 'The main text content for the team member',
      type: 'blockContent',
    }),
  ],
})
