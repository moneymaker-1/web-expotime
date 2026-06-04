'use client'

import { useState } from 'react'
import { useCrud } from '../_hooks/useCrud'
import { Field, SaveBtn, Card, PageHeader, Loader } from '../_components/Field'

interface Testimonial {
  _id?: string
  nameAr: string; nameEn: string
  roleAr: string; roleEn: string
  textAr: string; textEn: string
  rating: number; order: number
}

const empty: Omit<Testimonial, '_id'> = { nameAr: '', nameEn: '', roleAr: '', roleEn: '', textAr: '', textEn: '', rating: 5, order: 99 }

export default function TestimonialsPage() {
  const { items, loading, saving, save, create, remove } = useCrud<Testimonial>('testimonial')
  const [drafts, setDrafts] = useState<Record<string, Testimonial>>({})
  const [adding, setAdding] = useState(false)
  const [newItem, setNewItem] = useState<Omit<Testimonial, '_id'>>({ ...empty })

  function draft(id: string, item: Testimonial) {
    return drafts[id] ?? item
  }
  function update(id: string, item: Testimonial, key: keyof Testimonial, val: string | number) {
    setDrafts(d => ({ ...d, [id]: { ...draft(id, item), [key]: val } }))
  }

  if (loading) return <Loader />

  return (
    <div>
      <PageHeader title="آراء العملاء" icon="💬" onAdd={() => setAdding(true)} />

      {adding && (
        <Card title="إضافة رأي جديد">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <Field label="الاسم (عربي)" value={newItem.nameAr} onChange={v => setNewItem(p => ({ ...p, nameAr: v }))} />
            <Field label="Name (English)" value={newItem.nameEn} onChange={v => setNewItem(p => ({ ...p, nameEn: v }))} />
            <Field label="المنصب (عربي)" value={newItem.roleAr} onChange={v => setNewItem(p => ({ ...p, roleAr: v }))} />
            <Field label="Role (English)" value={newItem.roleEn} onChange={v => setNewItem(p => ({ ...p, roleEn: v }))} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <Field label="الرأي (عربي)" value={newItem.textAr} onChange={v => setNewItem(p => ({ ...p, textAr: v }))} type="textarea" />
            <Field label="Review (English)" value={newItem.textEn} onChange={v => setNewItem(p => ({ ...p, textEn: v }))} type="textarea" />
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 4 }}>
            <Field label="التقييم (1-5)" value={newItem.rating} onChange={v => setNewItem(p => ({ ...p, rating: +v }))} type="number" />
            <Field label="الترتيب" value={newItem.order} onChange={v => setNewItem(p => ({ ...p, order: +v }))} type="number" />
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
          <Card key={item._id} title={item.nameAr || item.nameEn} onDelete={() => confirm('حذف هذا الرأي؟') && remove(item._id!)}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Field label="الاسم (عربي)" value={d.nameAr} onChange={v => update(item._id!, item, 'nameAr', v)} />
              <Field label="Name (English)" value={d.nameEn} onChange={v => update(item._id!, item, 'nameEn', v)} />
              <Field label="المنصب (عربي)" value={d.roleAr} onChange={v => update(item._id!, item, 'roleAr', v)} />
              <Field label="Role (English)" value={d.roleEn} onChange={v => update(item._id!, item, 'roleEn', v)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Field label="الرأي (عربي)" value={d.textAr} onChange={v => update(item._id!, item, 'textAr', v)} type="textarea" />
              <Field label="Review (English)" value={d.textEn} onChange={v => update(item._id!, item, 'textEn', v)} type="textarea" />
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              <div style={{ width: 100 }}><Field label="التقييم" value={d.rating} onChange={v => update(item._id!, item, 'rating', +v)} type="number" /></div>
              <div style={{ width: 100 }}><Field label="الترتيب" value={d.order} onChange={v => update(item._id!, item, 'order', +v)} type="number" /></div>
              <div style={{ marginBottom: 14 }}><SaveBtn saving={saving} onClick={() => save(item._id!, drafts[item._id!] ?? {})} /></div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
