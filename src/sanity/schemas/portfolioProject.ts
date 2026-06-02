import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolioProject',
  title: '🖼️ مشاريع الأعمال',
  type: 'document',
  fields: [
    defineField({ name: 'titleAr', title: 'الاسم (عربي)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'titleEn', title: 'Name (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'categoryAr', title: 'الفئة (عربي)', type: 'string' }),
    defineField({ name: 'categoryEn', title: 'Category (English)', type: 'string' }),
    defineField({ name: 'image', title: 'الصورة', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'descriptionAr', title: 'الوصف (عربي)', type: 'text' }),
    defineField({ name: 'descriptionEn', title: 'Description (English)', type: 'text' }),
    defineField({ name: 'year', title: 'السنة', type: 'string' }),
    defineField({ name: 'client', title: 'العميل', type: 'string' }),
    defineField({ name: 'order', title: 'الترتيب', type: 'number' }),
  ],
  preview: {
    select: { title: 'titleEn', subtitle: 'categoryEn', media: 'image' },
  },
})
