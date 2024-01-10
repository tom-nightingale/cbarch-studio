import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const SanityStructure = (S, context) =>
  S.list()
    .title('CB Architecture')
    .items([
      // S.listItem()
      //   .title('Global Settings')
      //   .child(S.document().schemaType('global').documentId('global').title('Global Settings')),
      // S.divider(),
      S.listItem()
        .title('Home')
        .child(S.document().schemaType('home').documentId('home').title('Home')),
      S.divider(),
      S.listItem()
        .title('About')
        .child(S.document().schemaType('about').documentId('about').title('About')),
      S.divider(),
      S.listItem()
        .title('Team')
        .child(S.document().schemaType('team').documentId('team').title('Team')),
      S.divider(),
      S.listItem()
        .title('Projects')
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('Projects Single')
                .child(
                  S.document()
                    .schemaType('projects')
                    .documentId('projects')
                    .title('Projects Archive')
                ),
              orderableDocumentListDeskItem({
                type: 'project',
                title: 'Projects',
                S,
                context,
              }),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Contact')
        .child(S.document().schemaType('contact').documentId('contact').title('Contact')),
      S.divider(),
      S.listItem()
        .title('Testimonials')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      S.divider(),
      S.listItem()
        .title('Team Members')
        .child(S.documentTypeList('teamMember').title('Team Members')),
    ])
