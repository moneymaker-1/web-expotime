import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: '⚙️ إعدادات الموقع',
  type: 'document',
  groups: [
    { name: 'contact', title: '📞 معلومات التواصل' },
    { name: 'social', title: '📱 وسائل التواصل' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    defineField({ name: 'phone1', title: 'الجوال', type: 'string', group: 'contact', initialValue: '+966551016181' }),
    defineField({ name: 'phone2', title: 'الهاتف', type: 'string', group: 'contact', initialValue: '+966112393255' }),
    defineField({ name: 'whatsapp', title: 'واتساب', type: 'string', group: 'contact', initialValue: '966112393255' }),
    defineField({ name: 'email', title: 'البريد الإلكتروني', type: 'string', group: 'contact', initialValue: 'info@expo-time.co' }),
    defineField({ name: 'addressAr', title: 'العنوان (عربي)', type: 'string', group: 'contact', initialValue: 'طريق الملك فهد، الرياض، المملكة العربية السعودية' }),
    defineField({ name: 'addressEn', title: 'Address (English)', type: 'string', group: 'contact', initialValue: 'King Fahd Road, Riyadh, Saudi Arabia' }),
    defineField({ name: 'instagram', title: 'Instagram', type: 'string', group: 'social', initialValue: 'https://instagram.com/expotimeksa' }),
    defineField({ name: 'twitter', title: 'Twitter / X', type: 'string', group: 'social', initialValue: 'https://twitter.com/expotime' }),
    defineField({ name: 'linkedin', title: 'LinkedIn', type: 'string', group: 'social', initialValue: 'https://linkedin.com/company/expo-time' }),
    defineField({ name: 'youtube', title: 'YouTube', type: 'string', group: 'social', initialValue: 'https://youtube.com/@expotime' }),
  ],
})
