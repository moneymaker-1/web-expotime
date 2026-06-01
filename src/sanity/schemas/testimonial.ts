import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'nameAr', title: 'الاسم (عربي)', type: 'string' }),
    defineField({ name: 'nameEn', title: 'Name (English)', type: 'string' }),
    defineField({ name: 'roleAr', title: 'المنصب (عربي)', type: 'string' }),
    defineField({ name: 'roleEn', title: 'Role (English)', type: 'string' }),
    defineField({ name: 'textAr', title: 'النص (عربي)', type: 'text' }),
    defineField({ name: 'textEn', title: 'Text (English)', type: 'text' }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', validation: r => r.min(1).max(5) }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
