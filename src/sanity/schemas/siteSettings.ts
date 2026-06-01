import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone1', title: 'Phone 1', type: 'string' }),
    defineField({ name: 'phone2', title: 'Phone 2', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'addressAr', title: 'العنوان (عربي)', type: 'string' }),
    defineField({ name: 'addressEn', title: 'Address (English)', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'twitter', title: 'Twitter URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
  ],
})
