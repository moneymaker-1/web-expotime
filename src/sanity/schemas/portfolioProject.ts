import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({ name: 'titleAr', title: 'العنوان (عربي)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'titleEn', title: 'Title (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'categoryAr', title: 'الفئة (عربي)', type: 'string' }),
    defineField({ name: 'categoryEn', title: 'Category (English)', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
