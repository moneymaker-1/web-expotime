/**
 * Exhibition-hall booth dataset.
 *
 * The interactive hall renders 50 sculptural booths. Each booth represents a
 * company / project Expo Time has delivered for. Data is generated
 * deterministically (no randomness at runtime) so the layout is stable across
 * renders and SSR hydration.
 */

export type BoothShape = 'tower' | 'arch' | 'rings' | 'monolith' | 'pavilion' | 'helix';

export interface Booth {
  id: number;
  slug: string;
  nameEn: string;
  nameAr: string;
  sector: string;
  accent: string; // hex accent / emissive colour
  shape: BoothShape;
  descEn: string;
  descAr: string;
  execution: string[]; // build / execution gallery
  handover: string[]; // final handover gallery
  video: string;
  contact: { phone: string; email: string; website: string };
  // grid position in the hall (filled by buildLayout)
  col: number;
  row: number;
  x: number;
  z: number;
}

/* Curated Unsplash imagery — architecture, exhibitions, events, interiors. */
const IMAGES = [
  'photo-1540575467063-178a50c2df87',
  'photo-1591115765373-5207764f72e7',
  'photo-1511578314322-379afb476865',
  'photo-1505373877841-8d25f7d46678',
  'photo-1531058020387-3be344556be6',
  'photo-1558618666-fcd25c85cd64',
  'photo-1559136555-9303baea8ebd',
  'photo-1492684223066-81342ee5ff30',
  'photo-1497366216548-37526070297c',
  'photo-1497366811353-6870744d04b2',
  'photo-1486406146926-c627a92ad1ab',
  'photo-1431540015161-0bf868a2d407',
  'photo-1497215728101-856f4ea42174',
  'photo-1517457373958-b7bdd4587205',
  'photo-1524758631624-e2822e304c36',
  'photo-1556761175-5973dc0f32e7',
];

const img = (i: number, w = 1200) =>
  `https://images.unsplash.com/${IMAGES[i % IMAGES.length]}?w=${w}&q=80&auto=format&fit=crop`;

const SAMPLE_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';

const SECTOR_ACCENT: Record<string, string> = {
  government: '#8DC63F',
  tech: '#4FC3F7',
  finance: '#FFD54F',
  energy: '#FF8A65',
  culture: '#BA68C8',
  health: '#4DB6AC',
  giga: '#9CCC65',
  aviation: '#64B5F6',
  retail: '#F06292',
  industrial: '#A1887F',
};

const SHAPES: BoothShape[] = ['tower', 'arch', 'rings', 'monolith', 'pavilion', 'helix'];

const DESC_EN: Record<string, string> = {
  government: 'A landmark pavilion translating a national vision into an immersive spatial story.',
  tech: 'An interactive stand where light, motion and digital surfaces meet bold architecture.',
  finance: 'A refined, confident space built to communicate trust and institutional strength.',
  energy: 'A sculptural structure expressing scale, power and a sustainable future.',
  culture: 'A poetic environment blending heritage, craft and contemporary design language.',
  health: 'A calm, human-centred pavilion designed around clarity and wellbeing.',
  giga: 'A futuristic installation echoing the ambition of the Kingdom’s giga-projects.',
  aviation: 'A sweeping, aerodynamic form capturing movement and global connection.',
  retail: 'A vibrant brand world engineered for engagement and memorable moments.',
  industrial: 'A robust, precision-built structure showcasing engineering excellence.',
};

const DESC_AR: Record<string, string> = {
  government: 'جناح مميز يترجم رؤية وطنية إلى قصة مكانية غامرة.',
  tech: 'جناح تفاعلي يلتقي فيه الضوء والحركة والأسطح الرقمية بالعمارة الجريئة.',
  finance: 'مساحة أنيقة وواثقة صُممت لتعكس الثقة والقوة المؤسسية.',
  energy: 'هيكل نحتي يعبّر عن الضخامة والقوة ومستقبل مستدام.',
  culture: 'بيئة شاعرية تمزج بين التراث والحرفة ولغة التصميم المعاصرة.',
  health: 'جناح هادئ يركّز على الإنسان والوضوح والرفاهية.',
  giga: 'تجهيز مستقبلي يحاكي طموح المشاريع العملاقة في المملكة.',
  aviation: 'شكل انسيابي يجسّد الحركة والتواصل العالمي.',
  retail: 'عالم علامة تجارية نابض بالحياة مصمم للتفاعل واللحظات التي لا تُنسى.',
  industrial: 'هيكل متين مبني بدقة يبرز التميّز الهندسي.',
};

interface Seed {
  en: string;
  ar?: string;
  sector: string;
}

/* Real Expo Time clients/projects first, then plausible KSA entities to reach 50. */
const SEEDS: Seed[] = [
  { en: 'Saudi Aramco', ar: 'أرامكو السعودية', sector: 'energy' },
  { en: 'Public Investment Fund', ar: 'صندوق الاستثمارات العامة', sector: 'finance' },
  { en: 'NEOM', ar: 'نيوم', sector: 'giga' },
  { en: 'SABIC', ar: 'سابك', sector: 'industrial' },
  { en: 'stc', ar: 'stc', sector: 'tech' },
  { en: 'Al Rajhi Bank', ar: 'مصرف الراجحي', sector: 'finance' },
  { en: 'Ministry of Culture', ar: 'وزارة الثقافة', sector: 'culture' },
  { en: 'Ministry of Investment', ar: 'وزارة الاستثمار', sector: 'government' },
  { en: 'KACST', ar: 'مدينة الملك عبدالعزيز للعلوم والتقنية', sector: 'tech' },
  { en: 'Riyadh Chamber', ar: 'غرفة الرياض', sector: 'government' },
  { en: 'Al Madinah Development Authority', ar: 'هيئة تطوير المدينة المنورة', sector: 'government' },
  { en: 'Ensan Charity', ar: 'جمعية إنسان', sector: 'culture' },
  { en: 'Ministry of Finance', ar: 'وزارة المالية', sector: 'finance' },
  { en: 'SIMAH', ar: 'سمة', sector: 'finance' },
  { en: 'Colors of Saudi Arabia', ar: 'ألوان السعودية', sector: 'culture' },
  { en: 'Ministry of Health', ar: 'وزارة الصحة', sector: 'health' },
  { en: 'Ministry of Defense', ar: 'وزارة الدفاع', sector: 'government' },
  { en: 'Ministry of Education', ar: 'وزارة التعليم', sector: 'government' },
  { en: 'Hayyak Lounge', ar: 'حياك لاونج', sector: 'retail' },
  { en: 'SIDMC', ar: 'الشركة السعودية للصناعات الدفاعية', sector: 'industrial' },
  { en: 'Diriyah Gate', ar: 'بوابة الدرعية', sector: 'giga' },
  { en: 'Red Sea Global', ar: 'البحر الأحمر العالمية', sector: 'giga' },
  { en: 'Qiddiya', ar: 'القدية', sector: 'giga' },
  { en: 'ROSHN', ar: 'روشن', sector: 'giga' },
  { en: 'Maaden', ar: 'معادن', sector: 'industrial' },
  { en: 'ACWA Power', ar: 'أكوا باور', sector: 'energy' },
  { en: 'Saudi Electricity Company', ar: 'الشركة السعودية للكهرباء', sector: 'energy' },
  { en: 'Saudia', ar: 'السعودية', sector: 'aviation' },
  { en: 'flynas', ar: 'طيران ناس', sector: 'aviation' },
  { en: 'Riyadh Air', ar: 'طيران الرياض', sector: 'aviation' },
  { en: 'Alinma Bank', ar: 'مصرف الإنماء', sector: 'finance' },
  { en: 'Bank Albilad', ar: 'بنك البلاد', sector: 'finance' },
  { en: 'SAB', ar: 'البنك السعودي الأول', sector: 'finance' },
  { en: 'Mobily', ar: 'موبايلي', sector: 'tech' },
  { en: 'Zain KSA', ar: 'زين السعودية', sector: 'tech' },
  { en: 'Elm', ar: 'علم', sector: 'tech' },
  { en: 'Tahakom', ar: 'تحكم', sector: 'tech' },
  { en: 'Lucid', ar: 'لوسيد', sector: 'industrial' },
  { en: 'Ceer Motors', ar: 'سير', sector: 'industrial' },
  { en: 'Almarai', ar: 'المراعي', sector: 'retail' },
  { en: 'Savola Group', ar: 'مجموعة صافولا', sector: 'retail' },
  { en: 'Jarir', ar: 'جرير', sector: 'retail' },
  { en: 'Tawuniya', ar: 'التعاونية', sector: 'finance' },
  { en: 'Bupa Arabia', ar: 'بوبا العربية', sector: 'health' },
  { en: 'Seha Virtual Hospital', ar: 'مستشفى صحة الافتراضي', sector: 'health' },
  { en: 'King Faisal Specialist Hospital', ar: 'مستشفى الملك فيصل التخصصي', sector: 'health' },
  { en: 'Ithra', ar: 'إثراء', sector: 'culture' },
  { en: 'Diriyah Biennale', ar: 'بينالي الدرعية', sector: 'culture' },
  { en: 'Saudi Tourism Authority', ar: 'الهيئة السعودية للسياحة', sector: 'culture' },
  { en: 'Misk Foundation', ar: 'مؤسسة مسك', sector: 'government' },
];

function buildLayout(): Booth[] {
  const COLS = 5;
  const SPACING_X = 7.5;
  const SPACING_Z = 8.5;
  const COUNT = 50;

  const booths: Booth[] = [];
  for (let i = 0; i < COUNT; i++) {
    const seed = SEEDS[i % SEEDS.length]!;
    const sector = seed.sector;
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    // Centre the columns, stagger alternate rows slightly for an organic floor.
    const stagger = row % 2 === 0 ? 0 : SPACING_X * 0.32;
    const x = (col - (COLS - 1) / 2) * SPACING_X + stagger;
    const z = -row * SPACING_Z;

    booths.push({
      id: i + 1,
      slug: seed.en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      nameEn: seed.en,
      nameAr: seed.ar ?? seed.en,
      sector,
      accent: SECTOR_ACCENT[sector] ?? '#8DC63F',
      shape: SHAPES[i % SHAPES.length]!,
      descEn: DESC_EN[sector] ?? DESC_EN.government!,
      descAr: DESC_AR[sector] ?? DESC_AR.government!,
      execution: [img(i), img(i + 3), img(i + 6)],
      handover: [img(i + 1), img(i + 4), img(i + 8)],
      video: SAMPLE_VIDEO,
      contact: {
        phone: '+966 11 239 3255',
        email: 'info@expo-time.co',
        website: 'https://expo-time.co',
      },
      col,
      row,
      x,
      z,
    });
  }
  return booths;
}

export const booths: Booth[] = buildLayout();

export const HALL = {
  cols: 5,
  rows: Math.ceil(50 / 5),
  spacingX: 7.5,
  spacingZ: 8.5,
  get depth() {
    return (this.rows - 1) * this.spacingZ;
  },
};
