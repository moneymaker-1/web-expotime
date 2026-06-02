import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: '🏠 الصفحة الرئيسية',
  type: 'document',
  groups: [
    { name: 'hero', title: '🎯 قسم البطولة (Hero)' },
    { name: 'stats', title: '📊 الإحصائيات' },
    { name: 'services', title: '⚙️ الخدمات المميزة' },
    { name: 'whyus', title: '🏆 لماذا إكسبو تايم' },
    { name: 'cta', title: '📞 قسم التواصل' },
  ],
  fields: [
    // Hero
    defineField({ name: 'heroBadgeAr', title: 'شارة (عربي)', type: 'string', group: 'hero', initialValue: 'الشريك الاستراتيجي للمعارض في السعودية' }),
    defineField({ name: 'heroBadgeEn', title: 'Badge (English)', type: 'string', group: 'hero', initialValue: "Saudi Arabia's Strategic Exhibition Partner" }),
    defineField({ name: 'heroTitleAr', title: 'العنوان الرئيسي (عربي)', type: 'string', group: 'hero', initialValue: 'نصنع تجارب معارض لا تُنسى' }),
    defineField({ name: 'heroTitleEn', title: 'Main Title (English)', type: 'string', group: 'hero', initialValue: 'We Create Unforgettable Exhibition Experiences' }),
    defineField({ name: 'heroSubtitleAr', title: 'العنوان الفرعي (عربي)', type: 'text', group: 'hero', initialValue: 'منذ 2005 ونحن نحوّل الأجنحة إلى تجارب استثنائية تجذب الزوار وتعزز العلامات التجارية في المملكة العربية السعودية والخليج.' }),
    defineField({ name: 'heroSubtitleEn', title: 'Subtitle (English)', type: 'text', group: 'hero', initialValue: 'Since 2005, we transform exhibition stands into exceptional experiences that attract visitors and strengthen brands across Saudi Arabia and the Gulf.' }),
    defineField({ name: 'heroCTAMainAr', title: 'زر رئيسي (عربي)', type: 'string', group: 'hero', initialValue: 'احصل على عرض سعر' }),
    defineField({ name: 'heroCTAMainEn', title: 'Main Button (English)', type: 'string', group: 'hero', initialValue: 'Get a Free Quote' }),
    // Stats
    defineField({ name: 'stat1Number', title: 'إحصائية 1 - الرقم', type: 'number', group: 'stats', initialValue: 500 }),
    defineField({ name: 'stat1LabelAr', title: 'إحصائية 1 - النص (عربي)', type: 'string', group: 'stats', initialValue: 'مشروع منجز' }),
    defineField({ name: 'stat1LabelEn', title: 'Stat 1 - Label (English)', type: 'string', group: 'stats', initialValue: 'Projects Completed' }),
    defineField({ name: 'stat2Number', title: 'إحصائية 2 - الرقم', type: 'number', group: 'stats', initialValue: 200 }),
    defineField({ name: 'stat2LabelAr', title: 'إحصائية 2 - النص (عربي)', type: 'string', group: 'stats', initialValue: 'عميل راضٍ' }),
    defineField({ name: 'stat2LabelEn', title: 'Stat 2 - Label (English)', type: 'string', group: 'stats', initialValue: 'Happy Clients' }),
    defineField({ name: 'stat3Number', title: 'إحصائية 3 - الرقم', type: 'number', group: 'stats', initialValue: 20 }),
    defineField({ name: 'stat3LabelAr', title: 'إحصائية 3 - النص (عربي)', type: 'string', group: 'stats', initialValue: 'سنة خبرة' }),
    defineField({ name: 'stat3LabelEn', title: 'Stat 3 - Label (English)', type: 'string', group: 'stats', initialValue: 'Years Experience' }),
    defineField({ name: 'stat4Number', title: 'إحصائية 4 - الرقم', type: 'number', group: 'stats', initialValue: 15 }),
    defineField({ name: 'stat4LabelAr', title: 'إحصائية 4 - النص (عربي)', type: 'string', group: 'stats', initialValue: 'دولة نعمل فيها' }),
    defineField({ name: 'stat4LabelEn', title: 'Stat 4 - Label (English)', type: 'string', group: 'stats', initialValue: 'Countries Served' }),
    // Why Us
    defineField({ name: 'whyUsTitleAr', title: 'عنوان القسم (عربي)', type: 'string', group: 'whyus', initialValue: 'لماذا تختار إكسبو تايم؟' }),
    defineField({ name: 'whyUsTitleEn', title: 'Section Title (English)', type: 'string', group: 'whyus', initialValue: 'Why Choose Expo Time?' }),
    // CTA
    defineField({ name: 'ctaTitleAr', title: 'عنوان (عربي)', type: 'string', group: 'cta', initialValue: 'هل أنت مستعد لجناحك المثالي؟' }),
    defineField({ name: 'ctaTitleEn', title: 'Title (English)', type: 'string', group: 'cta', initialValue: 'Ready for Your Perfect Stand?' }),
    defineField({ name: 'ctaSubtitleAr', title: 'نص فرعي (عربي)', type: 'text', group: 'cta', initialValue: 'تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر خلال 24 ساعة.' }),
    defineField({ name: 'ctaSubtitleEn', title: 'Subtitle (English)', type: 'text', group: 'cta', initialValue: 'Contact us today for a free consultation and quote within 24 hours.' }),
  ],
})
