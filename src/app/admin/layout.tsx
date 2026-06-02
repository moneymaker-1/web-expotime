'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const NAV = [
  { href: '/admin', label: 'الرئيسية', icon: '🏠' },
  { href: '/admin/testimonials', label: 'آراء العملاء', icon: '💬' },
  { href: '/admin/services', label: 'الخدمات', icon: '🔧' },
  { href: '/admin/faqs', label: 'الأسئلة الشائعة', icon: '❓' },
  { href: '/admin/projects', label: 'المشاريع', icon: '🖼️' },
  { href: '/admin/settings', label: 'إعدادات الموقع', icon: '⚙️' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [authed, setAuthed] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (pathname === '/admin/login') { setAuthed(false); return }
    const ok = sessionStorage.getItem('admin_auth')
    if (!ok) router.replace('/admin/login')
    else setAuthed(true)
  }, [pathname, router])

  if (pathname === '/admin/login') return <>{children}</>
  if (!authed) return null

  function logout() {
    sessionStorage.removeItem('admin_auth')
    router.replace('/admin/login')
  }

  return (
    <div dir="rtl" style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9', fontFamily: "'Tajawal', 'Segoe UI', sans-serif" }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 40 }} />
      )}

      {/* Sidebar */}
      <aside style={{
        width: 240, background: '#0f172a', color: '#fff', display: 'flex', flexDirection: 'column',
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 50,
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(0)',
        transition: 'transform 0.2s',
      }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid #1e293b' }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#f8c842' }}>إكسبو تايم</div>
          <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>لوحة التحكم</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 0', overflowY: 'auto' }}>
          {NAV.map(item => {
            const active = item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href)
            return (
              <Link key={item.href} href={item.href} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '11px 20px',
                color: active ? '#f8c842' : '#94a3b8', textDecoration: 'none', fontSize: 14,
                background: active ? 'rgba(248,200,66,0.08)' : 'transparent',
                borderRight: active ? '3px solid #f8c842' : '3px solid transparent',
                transition: 'all 0.15s',
              }}>
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <button onClick={logout} style={{
          margin: '12px 16px 20px', padding: '10px', borderRadius: 8, border: 'none',
          background: '#1e293b', color: '#ef4444', cursor: 'pointer', fontSize: 13,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          🚪 تسجيل الخروج
        </button>
      </aside>

      {/* Main */}
      <div style={{ marginRight: 240, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{
          background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '14px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 30,
        }}>
          <span style={{ fontSize: 13, color: '#64748b' }}>
            {NAV.find(n => n.href === '/admin' ? pathname === '/admin' : pathname.startsWith(n.href))?.label ?? 'لوحة التحكم'}
          </span>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#f8c842', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>👤</div>
        </header>
        <main style={{ flex: 1, padding: '28px 24px' }}>
          {children}
        </main>
      </div>
    </div>
  )
}
