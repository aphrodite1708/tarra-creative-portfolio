import type { SectionId } from './sections'

export type SampleType = 'pdf' | 'image' | 'link' | 'video'

export interface Sample {
  id: string
  title: string
  brand: string
  type: SampleType
  file?: string   // path under /samples/…
  url?: string    // external link
  description?: string
  year?: string
}

// samples[sectionId][areaIndex] = Sample[]
export const SAMPLES: Partial<Record<SectionId, Record<number, Sample[]>>> = {
  campaigns: {
    // 0 = Campaign Briefs
    0: [
      {
        id: 'westcare-sunscreen-brief',
        title: 'Invisible UV Protector SPF 45+++',
        brand: 'Westcare',
        type: 'pdf',
        file: '/samples/campaigns/westcare-sunscreen-brief.pdf',
        description: 'Full campaign brief & creator guidelines for Westcare sunscreen launch.',
        year: '2022',
      },
      {
        id: 'walls-paddlepop-jiggly-jelly-kol-brief',
        title: 'MTX Gems — Paddle Pop Jiggly Jelly KOL Brief',
        brand: "Wall's",
        type: 'pdf',
        file: '/samples/campaigns/walls-paddlepop-jiggly-jelly-kol-brief.pdf',
        description: 'PR Kit KOL brief for the Paddle Pop Jiggly Jelly launch, collaborating with the Jumbo film.',
        year: '2025',
      },
    ],
  },
}

export function getSamples(sectionId: SectionId, areaIndex: number): Sample[] {
  return SAMPLES[sectionId]?.[areaIndex] ?? []
}
