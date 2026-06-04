'use client'

interface FieldProps {
  label: string
  value: string | number
  onChange: (v: string) => void
  type?: 'text' | 'textarea' | 'number' | 'url'
  placeholder?: string
}

export function Field({ label, value, onChange, type = 'text', placeholder }: FieldProps) {
  const base: React.CSSProperties = {
    width: '100%', padding: '9px 12px', borderRadius: 8,
    border: '1.5px solid #e2e8f0', fontSize: 14, boxSizing: 'border-box',
    outline: 'none', color: '#0f172a', fontFamily: 'inherit',
    transition: 'border-color 0.15s',
  }

  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: 'block', fontSize: 12, color: '#475569', marginBottom: 4, fontWeight: 500 }}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value as string}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          style={{ ...base, resize: 'vertical' }}
          onFocus={e => (e.target.style.borderColor = '#f8c842')}
          onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
        />
      ) : (
        <input
          type={type}
          value={value as string}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          style={base}
          onFocus={e => (e.target.style.borderColor = '#f8c842')}
          onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
        />
      )}
    </div>
  )
}

export function SaveBtn({ onClick, saving, label = 'حفظ التغييرات' }: { onClick: () => void, saving: boolean, label?: string }) {
  return (
    <button onClick={onClick} disabled={saving} style={{
      padding: '10px 20px', background: saving ? '#94a3b8' : '#f8c842', color: '#0f172a',
      border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 700,
      cursor: saving ? 'not-allowed' : 'pointer', transition: 'background 0.15s',
    }}>
      {saving ? '⏳ جارٍ الحفظ...' : `💾 ${label}`}
    </button>
  )
}

export function Card({ children, title, onDelete }: { children: React.ReactNode, title?: string, onDelete?: () => void }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 12, border: '1.5px solid #e2e8f0',
      padding: '20px', marginBottom: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    }}>
      {(title || onDelete) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          {title && <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>{title}</span>}
          {onDelete && (
            <button onClick={onDelete} style={{
              background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca',
              borderRadius: 6, padding: '4px 10px', fontSize: 12, cursor: 'pointer',
            }}>🗑️ حذف</button>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

export function PageHeader({ title, icon, onAdd }: { title: string, icon: string, onAdd?: () => void }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#0f172a' }}>{icon} {title}</h2>
      {onAdd && (
        <button onClick={onAdd} style={{
          background: '#0f172a', color: '#f8c842', border: 'none', borderRadius: 8,
          padding: '10px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
        }}>+ إضافة جديد</button>
      )}
    </div>
  )
}

export function Loader() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8', fontSize: 14 }}>
      ⏳ جارٍ التحميل...
    </div>
  )
}
