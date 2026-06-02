import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'client',
  title: '🤝 العملاء',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'اسم العميل', type: 'string', validation: r => r.required() }),
    defineField({ name: 'logo', title: 'الشعار', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'website', title: 'الموقع الإلكتروني', type: 'url' }),
    defineField({ name: 'order', title: 'الترتيب', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
})
