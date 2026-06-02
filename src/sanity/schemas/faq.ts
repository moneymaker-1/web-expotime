import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: '❓ الأسئلة الشائعة',
  type: 'document',
  fields: [
    defineField({ name: 'questionAr', title: 'السؤال (عربي)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'questionEn', title: 'Question (English)', type: 'string', validation: r => r.required() }),
    defineField({ name: 'answerAr', title: 'الجواب (عربي)', type: 'text' }),
    defineField({ name: 'answerEn', title: 'Answer (English)', type: 'text' }),
    defineField({ name: 'order', title: 'الترتيب', type: 'number' }),
  ],
  preview: {
    select: { title: 'questionEn' },
  },
})
