import { createClient } from 'next-sanity'
import { NextRequest, NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-06-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const readClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-06-01',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
})

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get('type')
  if (!type) return NextResponse.json({ error: 'type required' }, { status: 400 })

  const queries: Record<string, string> = {
    testimonial: `*[_type == "testimonial"] | order(order asc)`,
    service: `*[_type == "service"] | order(order asc)`,
    faq: `*[_type == "faq"] | order(order asc)`,
    siteSettings: `*[_type == "siteSettings"][0]`,
    portfolioProject: `*[_type == "portfolioProject"] | order(order asc) { ..., "imageUrl": image.asset->url }`,
  }

  const q = queries[type]
  if (!q) return NextResponse.json({ error: 'unknown type' }, { status: 400 })

  const data = await readClient.fetch(q)
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { action, type, id, data } = body

  try {
    if (action === 'create') {
      const doc = await client.create({ _type: type, ...data })
      return NextResponse.json(doc)
    }
    if (action === 'update') {
      const doc = await client.patch(id).set(data).commit()
      return NextResponse.json(doc)
    }
    if (action === 'delete') {
      await client.delete(id)
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ error: 'unknown action' }, { status: 400 })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
