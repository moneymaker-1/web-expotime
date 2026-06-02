/**
 * Seed script — populates Sanity CMS with existing site content.
 * Run once: node scripts/seed-sanity.mjs
 */
import { createClient } from 'next-sanity'
import { readFileSync } from 'node:fs'

// Load env from .env.local
const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
const get = (k) => (env.match(new RegExp(`^${k}=(.*)$`, 'm')) || [])[1]?.trim()

const client = createClient({
  projectId: get('NEXT_PUBLIC_SANITY_PROJECT_ID'),
  dataset: get('NEXT_PUBLIC_SANITY_DATASET') || 'production',
  apiVersion: '2025-06-01',
  token: get('SANITY_API_TOKEN'),
  useCdn: false,
})

const portfolioProjects = [
  { titleAr: 'جناح أرامكو - معرض الطاقة الدولي', titleEn: 'Saudi Aramco Stand - International Energy Exhibition', categoryAr: 'أجنحة مخصصة', categoryEn: 'Custom Stands', year: '2024', client: 'Saudi Aramco' },
  { titleAr: 'جناح stc - جيتكس 2024', titleEn: 'stc Stand - GITEX 2024', categoryAr: 'أجنحة مخصصة', categoryEn: 'Custom Stands', year: '2024', client: 'STC' },
  { titleAr: 'جناح صندوق الاستثمارات - منتدى مستقبل الاستثمار', titleEn: 'PIF Stand - Future Investment Initiative', categoryAr: 'إنتاج الفعاليات', categoryEn: 'Event Production', year: '2024', client: 'Public Investment Fund' },
  { titleAr: 'مؤتمر قمة مستقبل الاستثمار', titleEn: 'Future Investment Initiative Summit', categoryAr: 'إدارة المؤتمرات', categoryEn: 'Conference Management', year: '2023', client: 'Ministry of Investment' },
  { titleAr: 'جناح نيوم - معرض البيج فايف', titleEn: 'NEOM Stand - Big 5 Saudi', categoryAr: 'أجنحة مخصصة', categoryEn: 'Custom Stands', year: '2023', client: 'NEOM' },
  { titleAr: 'تفعيل علامة بنك الراجحي', titleEn: 'Al Rajhi Bank Brand Activation', categoryAr: 'تفعيل العلامات التجارية', categoryEn: 'Brand Activations', year: '2023', client: 'Al Rajhi Bank' },
  { titleAr: 'جناح سابك - معرض الكيمياء الدولي', titleEn: 'SABIC Stand - International Chemistry Exhibition', categoryAr: 'أجنحة مخصصة', categoryEn: 'Custom Stands', year: '2023', client: 'SABIC' },
  { titleAr: 'فعالية اليوم الوطني السعودي', titleEn: 'Saudi National Day Event', categoryAr: 'إنتاج الفعاليات', categoryEn: 'Event Production', year: '2024', client: 'Ministry of Culture' },
]

const clients = [
  { name: 'Saudi Aramco' }, { name: 'STC' }, { name: 'Public Investment Fund' }, { name: 'NEOM' },
  { name: 'Al Rajhi Bank' }, { name: 'SABIC' }, { name: 'Ministry of Investment' }, { name: 'Saudi Space Authority' },
  { name: 'Saudi Ports Authority' }, { name: 'KAUST' }, { name: 'Ministry of Culture' }, { name: 'Emaar Group' },
]

const testimonials = [
  { nameAr: 'محمد العتيبي', nameEn: 'Mohammed Al-Otaibi', roleAr: 'مدير التسويق', roleEn: 'Marketing Director', companyAr: 'شركة الاتصالات السعودية', companyEn: 'STC', textAr: 'تجربة رائعة مع إكسبو تايم. الجناح كان استثنائياً وجذب اهتمام كبير من الزوار. الفريق محترف جداً ويتعامل مع كل التفاصيل باحترافية عالية.', textEn: 'An amazing experience with Expo Time. The stand was exceptional and attracted significant attention from visitors. The team is very professional.', rating: 5 },
  { nameAr: 'سارة الغامدي', nameEn: 'Sarah Al-Ghamdi', roleAr: 'مدير الفعاليات', roleEn: 'Events Director', companyAr: 'مجموعة أعمار', companyEn: 'Emaar Group', textAr: 'نعمل مع إكسبو تايم منذ 5 سنوات وهم دائماً يتجاوزون توقعاتنا. الجودة والإبداع والالتزام بالمواعيد من أبرز ما يميزهم.', textEn: 'We have been working with Expo Time for 5 years and they always exceed our expectations. Quality, creativity, and commitment to deadlines.', rating: 5 },
  { nameAr: 'فهد الشمري', nameEn: 'Fahad Al-Shammari', roleAr: 'مسؤول المعارض', roleEn: 'Exhibitions Manager', companyAr: 'أرامكو السعودية', companyEn: 'Saudi Aramco', textAr: 'أفضل شركة تصميم أجنحة في المملكة العربية السعودية. يفهمون احتياجات العميل ويقدمون حلولاً إبداعية تعكس هوية العلامة التجارية بشكل مثالي.', textEn: 'The best exhibition stand design company in Saudi Arabia. They understand client needs and deliver creative solutions.', rating: 5 },
  { nameAr: 'نورة القحطاني', nameEn: 'Noura Al-Qahtani', roleAr: 'مديرة التسويق', roleEn: 'Marketing Director', companyAr: 'وزارة الثقافة', companyEn: 'Ministry of Culture', textAr: 'إكسبو تايم حولت فكرتنا إلى واقع مبهر. الفريق متعاون ومبدع وملتزم بالجودة في كل خطوة من خطوات التنفيذ.', textEn: 'Expo Time turned our idea into a stunning reality. The team is collaborative, creative, and committed to quality at every step.', rating: 5 },
]

const services = [
  { slug: 'exhibition-stand-design', icon: '🎨', titleAr: 'تصميم أجنحة المعارض', titleEn: 'Exhibition Stand Design', descAr: 'نصمم أجنحة معارض استثنائية تعكس هوية علامتك التجارية بتصاميم ثلاثية الأبعاد احترافية', descEn: 'We design extraordinary exhibition stands that reflect your brand identity with professional 3D visualizations' },
  { slug: 'exhibition-booth-fabrication', icon: '🔧', titleAr: 'تنفيذ وتصنيع الأجنحة', titleEn: 'Exhibition Booth Fabrication', descAr: 'تصنيع وتنفيذ أجنحة المعارض بأعلى معايير الجودة باستخدام أحدث المواد والتقنيات', descEn: 'Manufacturing and fabricating exhibition stands with the highest quality standards' },
  { slug: 'exhibition-contractor', icon: '🏗️', titleAr: 'مقاول المعارض', titleEn: 'Exhibition Contractor', descAr: 'خدمات مقاولة شاملة لجميع أعمال التركيب والبناء في المعارض والفعاليات', descEn: 'Comprehensive contracting services for all installation and construction work' },
  { slug: 'conference-management', icon: '🎤', titleAr: 'إدارة المؤتمرات', titleEn: 'Conference Management', descAr: 'تنظيم مؤتمرات ومنتديات بمستوى عالمي مع حلول صوتية وبصرية متكاملة', descEn: 'World-class conference and forum organization with integrated audio-visual solutions' },
  { slug: 'event-management', icon: '📅', titleAr: 'إدارة الفعاليات', titleEn: 'Event Management', descAr: 'إدارة متكاملة لفعالياتك من التخطيط إلى التنفيذ مع فريق متخصص وخبرة واسعة', descEn: 'Complete event management from planning to execution with a specialized team' },
  { slug: 'event-production', icon: '🎬', titleAr: 'إنتاج الفعاليات', titleEn: 'Event Production', descAr: 'إنتاج متكامل للفعاليات يشمل الصوت والإضاءة والديكور وإدارة اللوجستيات', descEn: 'Comprehensive event production including sound, lighting, décor, and logistics' },
  { slug: 'exhibition-services', icon: '⭐', titleAr: 'خدمات المعارض الشاملة', titleEn: 'Exhibition Services', descAr: 'باقة شاملة من خدمات المعارض تغطي جميع احتياجاتك من الألف إلى الياء', descEn: 'A comprehensive package of exhibition services covering all your needs' },
  { slug: 'custom-booths', icon: '✏️', titleAr: 'الأجنحة المخصصة', titleEn: 'Custom Booths', descAr: 'أجنحة مصممة خصيصاً لتلبية احتياجاتك مع أعلى معايير الجودة في التنفيذ والتشطيب', descEn: 'Bespoke booths designed specifically to meet your requirements' },
  { slug: 'modular-booths', icon: '🧩', titleAr: 'الأجنحة النمطية', titleEn: 'Modular Booths', descAr: 'حلول مرنة وقابلة للتوسع توفر أفضل قيمة مقابل التكلفة للمشاركة في معارض متعددة', descEn: 'Flexible and scalable solutions that deliver the best value' },
  { slug: 'temporary-structures', icon: '🏛️', titleAr: 'الهياكل المؤقتة', titleEn: 'Temporary Structures', descAr: 'هياكل مؤقتة عالية الجودة للمعارض الخارجية والفعاليات الكبرى والخيام الضخمة', descEn: 'High-quality temporary structures for outdoor exhibitions and large-scale events' },
  { slug: 'brand-activations', icon: '⚡', titleAr: 'تفعيل العلامات التجارية', titleEn: 'Brand Activations', descAr: 'تجارب تفاعلية مبتكرة تعزز حضور علامتك التجارية وتخلق انطباعاً لا يُنسى', descEn: 'Innovative interactive experiences that enhance your brand presence' },
]

const faqs = [
  { questionAr: 'كم تستغرق عملية تصميم وتنفيذ جناح المعرض؟', questionEn: 'How long does it take to design and build an exhibition stand?', answerAr: 'تستغرق عملية التصميم والتنفيذ عادةً من 4 إلى 8 أسابيع، حسب حجم الجناح وتعقيده. نوصي بالتواصل معنا قبل 3 أشهر على الأقل من موعد المعرض.', answerEn: 'The design and build process typically takes 4 to 8 weeks, depending on the stand size and complexity.' },
  { questionAr: 'هل تقدمون خدماتكم في جميع مدن المملكة؟', questionEn: 'Do you serve all cities in Saudi Arabia?', answerAr: 'نعم، نخدم جميع مدن المملكة العربية السعودية بما فيها الرياض وجدة والدمام والخبر ومكة المكرمة والمدينة المنورة ونيوم والمنطقة الشرقية.', answerEn: 'Yes, we serve all Saudi cities including Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, NEOM, and the Eastern Province.' },
  { questionAr: 'ما أنواع الأجنحة التي تصممونها؟', questionEn: 'What types of stands do you design?', answerAr: 'نصمم وننفذ جميع أنواع الأجنحة: الأجنحة المخصصة، الأجنحة النمطية، الأجنحة مزدوجة الطابق، أجنحة الشل سكيم، والهياكل المؤقتة.', answerEn: 'We design and build all types of stands: custom, modular, double-decker, shell scheme stands, and temporary structures.' },
  { questionAr: 'هل تقدمون خدمة التركيب والفك والشحن؟', questionEn: 'Do you provide installation, dismantling, and shipping services?', answerAr: 'نعم، نقدم خدمة شاملة تشمل التصميم والتصنيع والشحن والتركيب والفك بعد المعرض مع ضمان سلامة جميع العناصر.', answerEn: 'Yes, we provide a comprehensive service including design, manufacturing, shipping, installation, and post-show dismantling.' },
  { questionAr: 'كيف يمكنني الحصول على عرض سعر؟', questionEn: 'How can I get a quote?', answerAr: 'يمكنك التواصل معنا عبر نموذج الاتصال أو الاتصال المباشر. سنتواصل معك خلال 24 ساعة بعرض سعر مفصل.', answerEn: 'You can contact us via the contact form or call us directly. We will get back to you within 24 hours with a detailed quote.' },
  { questionAr: 'هل تعملون في المعارض الدولية خارج المملكة؟', questionEn: 'Do you work at international exhibitions outside Saudi Arabia?', answerAr: 'نعم، نقدم خدماتنا في المعارض الدولية الكبرى في دول الخليج والشرق الأوسط وأوروبا وآسيا.', answerEn: 'Yes, we provide our services at major international exhibitions in GCC countries, the Middle East, Europe, and Asia.' },
]

async function seed() {
  const tx = client.transaction()

  // Singletons
  tx.createIfNotExists({ _id: 'homePage', _type: 'homePage' })
  tx.createIfNotExists({ _id: 'aboutPage', _type: 'aboutPage' })
  tx.createIfNotExists({ _id: 'siteSettings', _type: 'siteSettings' })

  // Collections — deterministic IDs so re-running updates instead of duplicating
  portfolioProjects.forEach((p, i) => tx.createOrReplace({ _id: `project-${i + 1}`, _type: 'portfolioProject', order: i + 1, ...p }))
  clients.forEach((c, i) => tx.createOrReplace({ _id: `client-${i + 1}`, _type: 'client', order: i + 1, ...c }))
  testimonials.forEach((t, i) => tx.createOrReplace({ _id: `testimonial-${i + 1}`, _type: 'testimonial', order: i + 1, ...t }))
  services.forEach((s, i) => tx.createOrReplace({ _id: `service-${i + 1}`, _type: 'service', order: i + 1, pageSlug: s.slug, icon: s.icon, titleAr: s.titleAr, titleEn: s.titleEn, descAr: s.descAr, descEn: s.descEn }))
  faqs.forEach((f, i) => tx.createOrReplace({ _id: `faq-${i + 1}`, _type: 'faq', order: i + 1, ...f }))

  const result = await tx.commit()
  console.log(`✓ Seeded ${result.results.length} documents into Sanity CMS`)
}

seed().catch((err) => { console.error('Seed failed:', err.message); process.exit(1) })
