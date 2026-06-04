'use client'

import Link from 'next/link'

const CARDS = [
  { href: '/admin/testimonials', icon: '💬', label: 'آراء العملاء', desc: 'أضف وعدّل تقييمات العملاء' },
  { href: '/admin/services', icon: '🔧', label: 'الخدمات', desc: 'إدارة قائمة الخدمات المقدمة' },
  { href: '/admin/faqs', icon: '❓', label: 'الأسئلة الشائعة', desc: 'إدارة الأسئلة والأجوبة' },
  { href: '/admin/projects', icon: '🖼️', label: 'المشاريع', desc: 'معرض الأعمال والمشاريع' },
  { href: '/admin/settings', icon: '⚙️', label: 'إعدادات الموقع', desc: 'الهاتف والبريد ووسائل التواصل' },
]

export default function AdminHome() {
  return (
    <div>
      <h1 style={{ margin: '0 0 8px', fontSize: 24, fontWeight: 700, color: '#0f172a' }}>مرحباً بك 👋</h1>
      <p style={{ margin: '0 0 32px', color: '#64748b', fontSize: 14 }}>اختر القسم الذي تريد تعديله</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {CARDS.map(c => (
          <Link key={c.href} href={c.href} style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#fff', borderRadius: 12, padding: '24px 20px', cursor: 'pointer',
              border: '1.5px solid #e2e8f0', transition: 'all 0.15s',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#f8c842')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
