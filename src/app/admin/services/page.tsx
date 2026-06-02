'use client'

import { useState } from 'react'
import { useCrud } from '../_hooks/useCrud'
import { Field, SaveBtn, Card, PageHeader, Loader } from '../_components/Field'

interface Service {
  _id?: string
  titleAr: string; titleEn: string
  descAr: string; descEn: string
  icon: string; order: number
}

const empty: Omit<Service, '_id'> = { titleAr: '', titleEn: '', descAr: '', descEn: '', icon: '⭐', order: 99 }

export default function ServicesPage() {
  const { items, loading, saving, save, create, remove } = useCrud<Service>('service')
  const [drafts, setDrafts] = useState<Record<string, Service>>({})
  const [adding, setAdding] = useState(false)
  const [newItem, setNewItem] = useState<Omit<Service, '_id'>>({ ...empty })

  function draft(id: string, item: Service) { return drafts[id] ?? item }
  function update(id: string, item: Service, key: keyof Service, val: string | number) {
    setDrafts(d => ({ ...d, [id]: { ...draft(id, item), [key]: val } }))
  }

  if (loading) return <Loader />

  return (
    <div>
      <PageHeader title="الخدمات" icon="🔧" onAdd={() => setAdding(true)} />

      {adding && (
        <Card title="إضافة خدمة جديدة">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <Field label="العنوان (عربي)" value={newItem.titleAr} onChange={v => setNewItem(p => ({ ...p, titleAr: v }))} />
            <Field label="Title (English)" value={newItem.titleEn} onChange={v => setNewItem(p => ({ ...p, titleEn: v }))} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <Field label="الوصف (عربي)" value={newItem.descAr} onChange={v => setNewItem(p => ({ ...p, descAr: v }))} type="textarea" />
            <Field label="Description (English)" value={newItem.descEn} onChange={v => setNewItem(p => ({ ...p, descEn: v }))} type="textarea" />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 120 }}><Field label="الأيقونة (emoji)" value={newItem.icon} onChange={v => setNewItem(p => ({ ...p, icon: v }))} /></div>
            <div style={{ width: 100 }}><Field label="الترتيب" value={newItem.order} onChange={v => setNewItem(p => ({ ...p, order: +v }))} type="number" /></div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <SaveBtn saving={saving} label="إضافة" onClick={async () => { await create(newItem); setAdding(false); setNewItem({ ...empty }) }} />
            <button onClick={() => setAdding(false)} style={{ padding: '10px 16px', background: '#f1f5f9', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>إلغاء</button>
          </div>
        </Card>
      )}

      {items.map(item => {
        const d = draft(item._id!, item)
        return (
          <Card key={item._id} title={`${item.icon ?? ''} ${item.titleAr || item.titleEn}`} onDelete={() => confirm('حذف هذه الخدمة؟') && remove(item._id!)}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Field label="العنوان (عربي)" value={d.titleAr} onChange={v => update(item._id!, item, 'titleAr', v)} />
              <Field label="Title (English)" value={d.titleEn} onChange={v => update(item._id!, item, 'titleEn', v)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Field label="الوصف (عربي)" value={d.descAr} onChange={v => update(item._id!, item, 'descAr', v)} type="textarea" />
              <Field label="Description (English)" value={d.descEn} onChange={v => update(item._id!, item, 'descEn', v)} type="textarea" />
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              <div style={{ width: 120 }}><Field label="الأيقونة" value={d.icon} onChange={v => update(item._id!, item, 'icon', v)} /></div>
              <div style={{ width: 100 }}><Field label="الترتيب" value={d.order} onChange={v => update(item._id!, item, 'order', +v)} type="number" /></div>
              <div style={{ marginBottom: 14 }}><SaveBtn saving={saving} onClick={() => save(item._id!, drafts[item._id!] ?? {})} /></div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
