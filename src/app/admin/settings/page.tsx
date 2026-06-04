'use client'

import { useEffect, useState } from 'react'
import { Field, SaveBtn, Card, Loader } from '../_components/Field'

interface Settings {
  _id?: string
  phone1: string; phone2: string; whatsapp: string; email: string
  addressAr: string; addressEn: string
  instagram: string; twitter: string; linkedin: string; youtube: string
  heroVideoUrl: string; heroImageUrl: string
}

const EMPTY: Settings = { phone1: '', phone2: '', whatsapp: '', email: '', addressAr: '', addressEn: '', instagram: '', twitter: '', linkedin: '', youtube: '', heroVideoUrl: '', heroImageUrl: '' }

export default function SettingsPage() {
  const [data, setData] = useState<Settings>(EMPTY)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch('/api/admin?type=siteSettings').then(r => r.json()).then(d => {
      if (d) setData({ ...EMPTY, ...d })
      setLoading(false)
    })
  }, [])

  async function handleSave() {
    setSaving(true)
    const { _id, ...rest } = data
    const id = _id ?? 'siteSettings'
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: _id ? 'update' : 'create', type: 'siteSettings', id, data: rest }),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  function set(key: keyof Settings, val: string) { setData(d => ({ ...d, [key]: val })) }

  if (loading) return <Loader />

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#0f172a' }}>⚙️ إعدادات الموقع</h2>
        {saved && <span style={{ background: '#dcfce7', color: '#16a34a', padding: '6px 14px', borderRadius: 8, fontSize: 13 }}>✅ تم الحفظ</span>}
      </div>

      <Card title="🎬 الهيدر — فيديو وصورة الخلفية">
        <p style={{ fontSize: 12, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>
          ارفع الفيديو أو الصورة على أي خدمة استضافة (Cloudinary، Google Drive، إلخ) وضع الرابط المباشر هنا.
          الفيديو يُفضَّل بامتداد .mp4 — الصورة تظهر احتياطياً إذا لم يتوفر فيديو.
        </p>
        <Field label="🎥 رابط فيديو الهيدر (Hero Video URL — .mp4)" value={data.heroVideoUrl} onChange={v => set('heroVideoUrl', v)} type="url" placeholder="https://..." />
        <Field label="🖼️ رابط صورة الهيدر (Hero Image URL — احتياطي)" value={data.heroImageUrl} onChange={v => set('heroImageUrl', v)} type="url" placeholder="https://..." />
      </Card>

      <Card title="📞 معلومات التواصل">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
          <Field label="رقم الجوال" value={data.phone1} onChange={v => set('phone1', v)} placeholder="+966551016181" />
          <Field label="رقم الهاتف" value={data.phone2} onChange={v => set('phone2', v)} placeholder="+966112393255" />
          <Field label="واتساب (بدون +)" value={data.whatsapp} onChange={v => set('whatsapp', v)} placeholder="966551016181" />
          <Field label="البريد الإلكتروني" value={data.email} onChange={v => set('email', v)} placeholder="info@expo-time.co" />
          <Field label="العنوان (عربي)" value={data.addressAr} onChange={v => set('addressAr', v)} />
          <Field label="Address (English)" value={data.addressEn} onChange={v => set('addressEn', v)} />
        </div>
      </Card>

      <Card title="📱 وسائل التواصل الاجتماعي">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
          <Field label="Instagram" value={data.instagram} onChange={v => set('instagram', v)} type="url" />
          <Field label="Twitter / X" value={data.twitter} onChange={v => set('twitter', v)} type="url" />
          <Field label="LinkedIn" value={data.linkedin} onChange={v => set('linkedin', v)} type="url" />
          <Field label="YouTube" value={data.youtube} onChange={v => set('youtube', v)} type="url" />
        </div>
      </Card>

      <SaveBtn saving={saving} onClick={handleSave} label="حفظ جميع الإعدادات" />
    </div>
  )
}
