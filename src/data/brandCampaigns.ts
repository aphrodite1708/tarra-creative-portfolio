import { SAMPLES } from './samples'
import type { SectionId } from './sections'
import type { Sample } from './samples'

export interface BrandCampaign {
  id: string
  brand: string
  title: string
  subtitle?: string
  year: string
  sampleIds: string[]
}

export const BRAND_CAMPAIGNS: BrandCampaign[] = [
  // ── Wardah ───────────────────────────────────────────────────
  {
    id: 'wardah-nmf-amino-facewash',
    brand: 'Wardah',
    title: 'NMF Amino Face Wash',
    subtitle: 'Digital activation — Content Hijack concept',
    year: '2024',
    sampleIds: [
      'wardah-nmf-amino-campaign-brief',
      'wardah-nmf-facewash-digital-activation-kol-brief',
      'wardah-nmf-amino-campaign-brief-sourcing',
      'wardah-nmf-amino-campaign-brief-direction',
      'wardah-nmf-amino-campaign-brief-wardrobe',
      'wardah-nmf-amino-campaign-brief-creator',
      'wardah-nmf-amino-face-wash-script',
      'wardah-nmf-amino-face-wash-script-direction',
      'wardah-nmf-amino-face-wash-script-visual',
      'wardah-nmf-amino-face-wash-script-creator',
      'wardah-nmf-facewash-digital-activation-reels-storyline',
      'wardah-nmf-insight-reels',
      'wardah-nmf-insight-story',
      'wardah-nmf-insight-reels-creator',
      'wardah-nmf-insight-story-creator',
    ],
  },
  {
    id: 'wardah-lazada-brand-day',
    brand: 'Wardah',
    title: 'Lazada Brand Day',
    subtitle: 'NMF Amino Facewash — IG Stories activation',
    year: '2024',
    sampleIds: [
      'wardah-lazada-brandday-nmf-facewash-brief',
      'wardah-lazada-brandday-nmf-facewash-insight-story',
      'wardah-lazada-brandday-nmf-facewash-ugc',
    ],
  },
  {
    id: 'wardah-renew-you-crystal-secret',
    brand: 'Wardah',
    title: 'Renew You × Crystal Secret',
    subtitle: '5D Glow Skin — Trilogy Skin Barrier™',
    year: '2024',
    sampleIds: [
      'wardah-renew-you-crystal-secret-brief',
      'wardah-renew-you-crystal-secret-tiktok-insight',
      'wardah-renew-you-crystal-secret-ugc',
    ],
  },
  {
    id: 'wardah-multidimensional-glow',
    brand: 'Wardah',
    title: 'Day & Night Cream',
    subtitle: 'Multidimensional Glow — Glow Rhytm campaign',
    year: '2024',
    sampleIds: ['wardah-multidimensional-glow-kol-brief'],
  },
  {
    id: 'wardah-hydra-rose',
    brand: 'Wardah',
    title: 'Hydra Rose',
    subtitle: 'UGC script & creator management',
    year: '2024',
    sampleIds: [
      'wardah-hydra-rose-ugc-brief',
      'wardah-hydra-rose-ugc-brief-direction',
      'wardah-hydra-rose-ugc-script',
      'wardah-hydra-rose-ugc-script-creator',
    ],
  },
]

export function getBrandCampaigns(brandName: string): BrandCampaign[] {
  return BRAND_CAMPAIGNS.filter(c => c.brand === brandName)
}

// Returns deduplicated samples for a campaign, in definition order
export function getCampaignSamples(campaign: BrandCampaign): Sample[] {
  const idSet = new Set(campaign.sampleIds)
  const seen = new Set<string>()
  const seenContent = new Set<string>()
  const byId = new Map<string, Sample>()

  for (const sectionId of Object.keys(SAMPLES) as SectionId[]) {
    const areas = SAMPLES[sectionId]
    if (!areas) continue
    for (const areaIndex of Object.keys(areas)) {
      for (const sample of areas[Number(areaIndex)] ?? []) {
        if (idSet.has(sample.id) && !seen.has(sample.id)) {
          seen.add(sample.id)
          byId.set(sample.id, sample)
        }
      }
    }
  }

  // Return in campaign definition order, deduplicated by file/url
  const result: Sample[] = []
  for (const id of campaign.sampleIds) {
    const sample = byId.get(id)
    if (!sample) continue
    const contentKey = sample.file ?? sample.url ?? sample.id
    if (seenContent.has(contentKey)) continue
    seenContent.add(contentKey)
    result.push(sample)
  }
  return result
}

// Step each sample belongs to in the workflow
export type WorkflowStep = 'brief' | 'sourcing' | 'negotiation' | 'creative' | 'publishing' | 'reporting'

export function getSampleStep(sample: Sample): WorkflowStep {
  const id = sample.id.toLowerCase()
  if (id.includes('sourcing')) return 'sourcing'
  if (id.includes('ticket') || id.includes('negotia')) return 'negotiation'
  if (id.includes('brief') || id.includes('strategy')) return 'brief'
  if (id.includes('insight') || id.includes('analytic') || id.includes('report')) return 'reporting'
  if (sample.type === 'link') return 'publishing'
  if (id.includes('script') || id.includes('storyline') || id.includes('direction') || id.includes('wardrobe') || id.includes('visual') || id.includes('storyboard')) return 'creative'
  return 'creative'
}

export const WORKFLOW_STEPS: { id: WorkflowStep; label: string; short: string }[] = [
  { id: 'brief',       label: 'Campaign Brief',      short: 'Brief' },
  { id: 'sourcing',    label: 'Creator Sourcing',     short: 'Sourcing' },
  { id: 'negotiation', label: 'Negotiation',          short: 'Negotiation' },
  { id: 'creative',    label: 'Creative & Scripts',   short: 'Creative' },
  { id: 'publishing',  label: 'Publishing',           short: 'Publishing' },
  { id: 'reporting',   label: 'Insights & Payment',   short: 'Insights' },
]
