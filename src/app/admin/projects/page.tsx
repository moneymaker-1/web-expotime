'use client'

import { useState } from 'react'
import { useCrud } from '../_hooks/useCrud'
import { Field, SaveBtn, Card, PageHeader, Loader } from '../_components/Field'

interface Project {
  _id?: string
  titleAr: string; titleEn: string
  categoryAr: string; categoryEn: string
  client: string; year: string
  imageUrl?: string; order: number
}

const empty: Omit<Project, '_id'> = { titleAr: '', titleEn: '', categoryAr: '', categoryEn: '', client: '', year: new Date().getFullYear().toString(), order: 99 }

export default function ProjectsPage() {
  const { items, loading, saving, save, create, remove } = useCrud<Project>('portfolioProject')
  const [drafts, setDrafts] = useState<Record<string, Project>>({})
  const [adding, setAdding] = useState(false)
  const [newItem, setNewItem] = useState<Omit<Project, '_id'>>({ ...empty })

  function draft(id: string, item: Project) { return drafts[id] ?? item }
  function update(id: string, item: Project, key: keyof Project, val: string | number) {
    setDrafts(d => ({ ...d, [id]: { ...draft(id, item), [key]: val } }))
  }

  if (loading) return <Loader />

  return (
    <div>
      <PageHeader title="المشاريع" icon="🖼️" onAdd={() => setAdding(true)} />

      {adding && (
        <Card title="إضافة مشروع جديد">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <Field label="اسم المشروع (عربي)" value={newItem.titleAr} onChange={v => setNewItem(p => ({ ...p, titleAr: v }))} />
            <Field label="Project Name (English)" value={newItem.titleEn} onChange={v => setNewItem(p => ({ ...p, titleEn: v }))} />
            <Field label="التصنيف (عربي)" value={newItem.categoryAr} onChange={v => setNewItem(p => ({ ...p, categoryAr: v }))} />
            <Field label="Category (English)" value={newItem.categoryEn} onChange={v => setNewItem(p => ({ ...p, categoryEn: v }))} />
            <Field label="اسم العميل" value={newItem.client} onChange={v => setNewItem(p => ({ ...p, client: v }))} />
            <Field label="السنة" value={newItem.year} onChange={v => setNewItem(p => ({ ...p, year: v }))} />
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <SaveBtn saving={saving} label="إضافة" onClick={async () => { await create(newItem); setAdding(false); setNewItem({ ...empty }) }} />
            <button onClick={() => setAdding(false)} style={{ padding: '10px 16px', background: '#f1f5f9', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>إلغاء</button>
          </div>
        </Card>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
        {items.map(item => {
          const d = draft(item._id!, item)
          return (
            <Card key={item._id} title={item.titleAr || item.titleEn} onDelete={() => confirm('حذف هذا المشروع؟') && remove(item._id!)}>
              {item.imageUrl && (
                <img src={item.imageUrl} alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
              )}
              <Field label="اسم المشروع (عربي)" value={d.titleAr} onChange={v => update(item._id!, item, 'titleAr', v)} />
              <Field label="Project Name (English)" value={d.titleEn} onChange={v => update(item._id!, item, 'titleEn', v)} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                <Field label="التصنيف (عربي)" value={d.categoryAr} onChange={v => update(item._id!, item, 'categoryAr', v)} />
                <Field label="Category" value={d.categoryEn} onChange={v => update(item._id!, item, 'categoryEn', v)} />
                <Field label="العميل" value={d.client} onChange={v => update(item._id!, item, 'client', v)} />
                <Field label="السنة" value={d.year} onChange={v => update(item._id!, item, 'year', v)} />
              </div>
              <SaveBtn saving={saving} onClick={() => save(item._id!, drafts[item._id!] ?? {})} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}
