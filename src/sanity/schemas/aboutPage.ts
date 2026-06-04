import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: '👥 صفحة من نحن',
  type: 'document',
  fields: [
    defineField({ name: 'titleAr', title: 'العنوان (عربي)', type: 'string', initialValue: 'من نحن' }),
    defineField({ name: 'titleEn', title: 'Title (English)', type: 'string', initialValue: 'About Us' }),
    defineField({ name: 'descriptionAr', title: 'الوصف (عربي)', type: 'text', initialValue: 'إكسبو تايم شركة رائدة في تصميم وتنفيذ أجنحة المعارض منذ 2015' }),
    defineField({ name: 'descriptionEn', title: 'Description (English)', type: 'text', initialValue: 'Expo Time is a leading exhibition stand design and fabrication company since 2015' }),
    defineField({ name: 'missionAr', title: 'رسالتنا (عربي)', type: 'text' }),
    defineField({ name: 'missionEn', title: 'Mission (English)', type: 'text' }),
    defineField({ name: 'visionAr', title: 'رؤيتنا (عربي)', type: 'text' }),
    defineField({ name: 'visionEn', title: 'Vision (English)', type: 'text' }),
  ],
})
