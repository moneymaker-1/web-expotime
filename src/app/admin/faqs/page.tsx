'use client'

import { useState } from 'react'
import { useCrud } from '../_hooks/useCrud'
import { Field, SaveBtn, Card, PageHeader, Loader } from '../_components/Field'

interface FAQ {
  _id?: string
  questionAr: string; questionEn: string
  answerAr: string; answerEn: string
  order: number
}

const empty: Omit<FAQ, '_id'> = { questionAr: '', questionEn: '', answerAr: '', answerEn: '', order: 99 }

export default function FAQsPage() {
  const { items, loading, saving, save, create, remove } = useCrud<FAQ>('faq')
  const [drafts, setDrafts] = useState<Record<string, FAQ>>({})
  const [adding, setAdding] = useState(false)
  const [newItem, setNewItem] = useState<Omit<FAQ, '_id'>>({ ...empty })

  function draft(id: string, item: FAQ) { return drafts[id] ?? item }
  function update(id: string, item: FAQ, key: keyof FAQ, val: string | number) {
    setDrafts(d => ({ ...d, [id]: { ...draft(id, item), [key]: val } }))
  }

  if (loading) return <Loader />

  return (
    <div>
      <PageHeader title="الأسئلة الشائعة" icon="❓" onAdd={() => setAdding(true)} />

      {adding && (
        <Card title="إضافة سؤال جديد">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            <Field label="السؤال (عربي)" value={newItem.questionAr} onChange={v => setNewItem(p => ({ ...p, questionAr: v }))} />
            <Field label="Question (English)" value={newItem.questionEn} onChange={v => setNewItem(p => ({ ...p, questionEn: v }))} />
            <Field label="الجواب (عربي)" value={newItem.answerAr} onChange={v => setNewItem(p => ({ ...p, answerAr: v }))} type="textarea" />
            <Field label="Answer (English)" value={newItem.answerEn} onChange={v => setNewItem(p => ({ ...p, answerEn: v }))} type="textarea" />
          </div>
          <div style={{ width: 120 }}><Field label="الترتيب" value={newItem.order} onChange={v => setNewItem(p => ({ ...p, order: +v }))} type="number" /></div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <SaveBtn saving={saving} label="إضافة" onClick={async () => { await create(newItem); setAdding(false); setNewItem({ ...empty }) }} />
            <button onClick={() => setAdding(false)} style={{ padding: '10px 16px', background: '#f1f5f9', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>إلغاء</button>
          </div>
        </Card>
      )}

      {items.map(item => {
        const d = draft(item._id!, item)
        return (
          <Card key={item._id} title={item.questionAr || item.questionEn} onDelete={() => confirm('حذف هذا السؤال؟') && remove(item._id!)}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Field label="السؤال (عربي)" value={d.questionAr} onChange={v => update(item._id!, item, 'questionAr', v)} />
              <Field label="Question (English)" value={d.questionEn} onChange={v => update(item._id!, item, 'questionEn', v)} />
              <Field label="الجواب (عربي)" value={d.answerAr} onChange={v => update(item._id!, item, 'answerAr', v)} type="textarea" />
              <Field label="Answer (English)" value={d.answerEn} onChange={v => update(item._id!, item, 'answerEn', v)} type="textarea" />
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              <div style={{ width: 120 }}><Field label="الترتيب" value={d.order} onChange={v => update(item._id!, item, 'order', +v)} type="number" /></div>
              <div style={{ marginBottom: 14 }}><SaveBtn saving={saving} onClick={() => save(item._id!, drafts[item._id!] ?? {})} /></div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
