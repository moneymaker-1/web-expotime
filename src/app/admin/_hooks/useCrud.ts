'use client'

import { useCallback, useEffect, useState } from 'react'

export function useCrud<T extends { _id?: string }>(type: string) {
  const [items, setItems] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`/api/admin?type=${type}`)
    const data = await res.json()
    setItems(Array.isArray(data) ? data : data ? [data] : [])
    setLoading(false)
  }, [type])

  useEffect(() => { load() }, [load])

  async function save(id: string, data: Partial<T>) {
    setSaving(true)
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update', type, id, data }),
    })
    await load()
    setSaving(false)
  }

  async function create(data: Omit<T, '_id'>) {
    setSaving(true)
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'create', type, data }),
    })
    await load()
    setSaving(false)
  }

  async function remove(id: string) {
    setSaving(true)
    await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', id }),
    })
    await load()
    setSaving(false)
  }

  return { items, loading, saving, save, create, remove, reload: load }
}
