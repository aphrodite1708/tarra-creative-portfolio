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
    1: [
      {
        id: 'secondate-xexymix-padel-kol-catalogue',
        title: 'Playdate Padel Event — KOL Catalogue',
        brand: 'Secondate × Xexymix',
        type: 'pdf',
        file: '/samples/campaigns/secondate-xexymix-padel-kol-catalogue.pdf',
        description: 'KOL styling catalogue for the Secondate × Xexymix Playdate Padel Event, covering outfit options across Team White, Red, and Green.',
        year: '2024',
      },
    ],
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
        id: 'kaila-cushion-kol-brief',
        title: 'Cushion 2in1 — KOL Video Brief',
        brand: 'Kaila Beauté',
        type: 'image',
        file: '/samples/campaigns/kaila-cushion-kol-brief.jpg',
        description: 'Video concept brief for a soft-sell UGC creator: a full-day outing concept with before-after Cushion 2in1 demo.',
        year: '2025',
      },
      {
        id: 'cevita-tomo-kenko-launch-campaign-strategy',
        title: 'Cevita — Launching Campaign Strategy',
        brand: 'Tomo Kenko',
        type: 'pdf',
        file: '/samples/campaigns/cevita-tomo-kenko-launch-campaign-strategy.pdf',
        description: 'Full offline & online launch campaign strategy for Cevita multivitamin — audience mapping, event concept, campaign objectives, and KOL activation plan.',
        year: '2025',
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
