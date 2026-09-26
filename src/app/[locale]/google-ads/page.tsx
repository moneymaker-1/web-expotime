import type { Metadata } from 'next';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === 'ar';
  return {
    title: ar ? 'تصميم وتنفيذ أجنحة المعارض | إكسبو تايم' : 'Exhibition Stand Design & Build | Expo Time',
    description: ar
      ? 'تصميم وتنفيذ أجنحة المعارض في الرياض وجدة والمنطقة الشرقية. فريق واحد من التصميم حتى التسليم.'
      : 'Exhibition stand design and build in Riyadh, Jeddah and the Eastern Province. One accountable team from concept to handover.',
    robots: { index: false, follow: true },
  };
}

export default async function GoogleAdsLanding({ params }: Props) {
  const { locale } = await params;
  const ar = locale === 'ar';
  const message = ar
    ? 'مرحباً إكسبو تايم، أحتاج عرض سعر لجناح معرض. اسم الشركة: ___، اسم المعرض: ___، المدينة: ___، المساحة: ___ م²، تاريخ المعرض: ___.'
    : 'Hello Expo Time, I need a quotation for an exhibition stand. Company: ___, Exhibition: ___, City: ___, Stand size: ___ sqm, Event date: ___.';
  const whatsapp = 'https://wa.me/966112393255?text=' + encodeURIComponent(message);
  const email = 'mailto:info@expo-time.co?subject=' + encodeURIComponent(ar ? 'طلب عرض سعر جناح معرض' : 'Exhibition stand quotation request') + '&body=' + encodeURIComponent(message);

  return (
    <main dir={ar ? 'rtl' : 'ltr'} className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-5 text-sm uppercase tracking-[.25em] text-white/60">Expo Time · Saudi Arabia</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-7xl">
          {ar ? 'جناح معرض يُسلَّم كما اتفقنا. من التصميم إلى الموقع.' : 'An exhibition stand delivered as agreed. From concept to site.'}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
          {ar
            ? 'تصميم، تصنيع، إدارة مشروع وتنفيذ موقعي عبر فريق واحد. نخدم المعارض في الرياض وجدة والمنطقة الشرقية.'
            : 'Design, fabrication, project management and on-site execution through one accountable team across Riyadh, Jeddah and the Eastern Province.'}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a data-conversion="whatsapp_quote" href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-4 font-medium text-black">
            {ar ? 'اطلب عرض سعر عبر واتساب' : 'Get a quote on WhatsApp'}
          </a>
          <a data-conversion="email_quote" href={email} className="rounded-full border border-white/25 px-7 py-4 font-medium">
            {ar ? 'أرسل الطلب بالبريد' : 'Request by email'}
          </a>
          <Link href={`/${locale}/portfolio`} className="rounded-full border border-white/25 px-7 py-4 font-medium">
            {ar ? 'شاهد أعمالنا' : 'View our work'}
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
          {[
            ar ? 'تصميم مخصص للعلامة' : 'Custom stand design',
            ar ? 'تصنيع وتنفيذ' : 'In-house execution',
            ar ? 'إدارة الموقع والتصاريح' : 'Site & approval management',
            ar ? 'مسؤولية واحدة حتى التسليم' : 'Single-point accountability',
          ].map((x) => <div key={x} className="border-s border-white/15 ps-4 text-white/80">{x}</div>)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold md:text-5xl">{ar ? 'أرسل 5 معلومات. نبدأ من هنا.' : 'Send five details. We start from there.'}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {(ar ? ['اسم الشركة','اسم المعرض','المدينة','مساحة الجناح','تاريخ المعرض'] : ['Company','Exhibition','City','Stand size','Event date']).map((x,i) =>
            <div key={x} className="rounded-2xl border border-white/10 p-6"><span className="text-sm text-white/40">0{i+1}</span><p className="mt-8 text-xl">{x}</p></div>
          )}
        </div>
        <div className="mt-12 rounded-3xl border border-white/10 p-8 md:p-12">
          <p className="max-w-3xl text-2xl leading-relaxed text-white/85">
            {ar
              ? 'قبل المعرض لا تحتاج مورّدين متفرقين. تحتاج جهة تعرف الموعد، اللوائح، التنفيذ، وما الذي يقلقك قبل الافتتاح.'
              : 'Before show day, you do not need fragmented suppliers. You need one team that understands the deadline, venue rules, execution and what can go wrong before opening.'}
          </p>
          <a data-conversion="whatsapp_quote_bottom" href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-medium text-black">
            {ar ? 'ابدأ طلبك الآن' : 'Start your request'}
          </a>
        </div>
      </section>
    </main>
  );
}
