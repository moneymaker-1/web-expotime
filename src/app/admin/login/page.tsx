'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      if (password === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'expotime2025')) {
        sessionStorage.setItem('admin_auth', '1')
        router.replace('/admin')
      } else {
        setError(true)
        setLoading(false)
      }
    }, 400)
  }

  return (
    <div dir="rtl" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      fontFamily: "'Tajawal', 'Segoe UI', sans-serif",
    }}>
      <div style={{
        background: '#fff', borderRadius: 16, padding: '48px 40px', width: '100%', maxWidth: 380,
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🏢</div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#0f172a' }}>إكسبو تايم</h1>
          <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: 13 }}>لوحة إدارة الموقع</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 13, color: '#374151', marginBottom: 6, fontWeight: 500 }}>
              كلمة المرور
            </label>
            <input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(false) }}
              placeholder="أدخل كلمة المرور"
              style={{
                width: '100%', padding: '11px 14px', borderRadius: 8, border: error ? '1.5px solid #ef4444' : '1.5px solid #e2e8f0',
                fontSize: 15, boxSizing: 'border-box', outline: 'none', color: '#0f172a',
              }}
              autoFocus
            />
            {error && <p style={{ margin: '6px 0 0', color: '#ef4444', fontSize: 12 }}>كلمة المرور غير صحيحة</p>}
          </div>
          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '12px', background: loading ? '#94a3b8' : '#f8c842',
            color: '#0f172a', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.15s',
          }}>
            {loading ? 'جارٍ الدخول...' : 'دخول'}
          </button>
        </form>
      </div>
    </div>
  )
}
