import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: '⚙️ الخدمات',
  type: 'document',
  fields: [
    defineField({ name: 'titleAr', title: 'الاسم (عربي)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'titleEn', title: 'Name (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'descAr', title: 'الوصف (عربي)', type: 'text' }),
    defineField({ name: 'descEn', title: 'Description (English)', type: 'text' }),
    defineField({ name: 'icon', title: 'أيقونة (إيموجي)', type: 'string' }),
    defineField({ name: 'pageSlug', title: 'رابط الصفحة', type: 'string', description: 'مثال: exhibition-stand-design' }),
    defineField({ name: 'order', title: 'الترتيب', type: 'number' }),
  ],
  preview: {
    select: { title: 'titleEn', subtitle: 'icon' },
  },
})
