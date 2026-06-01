import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'titleAr', title: 'العنوان (عربي)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'titleEn', title: 'Title (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'descAr', title: 'الوصف (عربي)', type: 'text' }),
    defineField({ name: 'descEn', title: 'Description (English)', type: 'text' }),
    defineField({ name: 'icon', title: 'Icon (emoji or name)', type: 'string' }),
    defineField({ name: 'slug', title: 'Page Slug', type: 'slug', options: { source: 'titleEn' } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
