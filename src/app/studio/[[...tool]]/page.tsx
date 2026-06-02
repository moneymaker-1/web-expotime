'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

export default function StudioPage() {
  const [StudioComponent, setStudioComponent] = useState<any>(null)

  useEffect(() => {
    Promise.all([
      /* webpackIgnore: true */ import('next-sanity/studio'),
      /* webpackIgnore: true */ import('../../../../sanity.config'),
    ]).then(([studioMod, configMod]: any[]) => {
      const Studio = studioMod.NextStudio
      const config = configMod.default
      const SanityStudio = () => <Studio config={config} />
      SanityStudio.displayName = 'SanityStudio'
      setStudioComponent(() => SanityStudio)
    })
  }, [])

  if (!StudioComponent) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'system-ui' }}>
        <p>Loading Expo Time CMS...</p>
      </div>
    )
  }

  return <StudioComponent />
}
