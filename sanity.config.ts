import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'expo-time',
  title: 'Expo Time CMS',
  projectId: '11v82gji',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Expo Time CMS')
          .items([
            S.listItem()
              .title('📄 الصفحات')
              .child(
                S.list()
                  .title('الصفحات')
                  .items([
                    S.listItem()
                      .title('🏠 الصفحة الرئيسية')
                      .child(
                        S.document()
                          .schemaType('homePage')
                          .documentId('homePage')
                      ),
                    S.listItem()
                      .title('👥 من نحن')
                      .child(
                        S.document()
                          .schemaType('aboutPage')
                          .documentId('aboutPage')
                      ),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('🖼️ مشاريع الأعمال')
              .child(S.documentTypeList('portfolioProject').title('مشاريع الأعمال')),
            S.listItem()
              .title('⚙️ الخدمات')
              .child(S.documentTypeList('service').title('الخدمات')),
            S.listItem()
              .title('🤝 العملاء')
              .child(S.documentTypeList('client').title('العملاء')),
            S.listItem()
              .title('💬 آراء العملاء')
              .child(S.documentTypeList('testimonial').title('آراء العملاء')),
            S.listItem()
              .title('❓ الأسئلة الشائعة')
              .child(S.documentTypeList('faq').title('الأسئلة الشائعة')),
            S.divider(),
            S.listItem()
              .title('⚙️ إعدادات الموقع')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
