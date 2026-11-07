import type { SectionId } from './sections'

export type SampleType = 'pdf' | 'image' | 'link' | 'video'

export interface Sample {
  id: string
  title: string
  brand: string
  type: SampleType
  file?: string
  url?: string
  description?: string
  year?: string
}

// samples[sectionId][areaIndex] = Sample[]
export const SAMPLES: Partial<Record<SectionId, Record<number, Sample[]>>> = {
  campaigns: {
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
    1: [
      {
        id: 'cevita-tomo-kenko-launch-campaign-strategy-sourcing',
        title: 'Cevita — KOL & Event Activation Strategy',
        brand: 'Tomo Kenko',
        type: 'pdf',
        file: '/samples/campaigns/cevita-tomo-kenko-launch-campaign-strategy.pdf',
        description: 'Creator and event activation strategy within the Cevita launch — target audience mapping, KOL integration, and event touchpoints.',
        year: '2025',
      },
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
    5: [
      {
        id: 'activgluta-instagram-insight',
        title: 'Activgluta — Instagram Stories Insight',
        brand: 'Activgluta',
        type: 'pdf',
        file: '/samples/campaigns/activgluta-instagram-insight.pdf',
        description: '44.6K views · 35.9K accounts reached · 1,589 link clicks · 239 sticker taps. Audience: 97.3% women, 98.8% Indonesia, 68.6% age 25–34.',
        year: '2025',
      },
      {
        id: 'activgluta-tiktok-insight',
        title: 'Activgluta — TikTok Video Analysis',
        brand: 'Activgluta',
        type: 'pdf',
        file: '/samples/campaigns/activgluta-tiktok-insight.pdf',
        description: '57.7K views · 1,605 likes · 44.7K total viewers · 80.4% For You traffic. Audience: 90% female, 99.3% Indonesia, 52% age 25–34.',
        year: '2025',
      },
    ],
  },
}

  copywriting: {
    1: [
      {
        id: 'wardah-nmf-amino-face-wash-script',
        title: 'Wardah NMF Amino Face Wash — Reels & Stories Script',
        brand: 'Wardah',
        type: 'pdf',
        file: '/samples/copywriting/wardah-nmf-amino-face-wash-script.pdf',
        description: 'Full UGC script for Reels + Instagram Stories: 6-scene Reels script and 5-story IG series. Concept, dialogue, visual direction, and text overlays.',
        year: '2025',
      },
    ],
  },
}

export function getSamples(sectionId: SectionId, areaIndex: number): Sample[] {
  return SAMPLES[sectionId]?.[areaIndex] ?? []
}
