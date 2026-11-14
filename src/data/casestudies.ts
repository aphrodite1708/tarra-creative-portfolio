export interface CaseStudySample {
  id: string
  title: string
  type: 'pdf' | 'image' | 'link' | 'video'
  file?: string
  url?: string
  thumbnail?: string
}

export interface CaseStudyStage {
  number: string
  title: string
  body: string
  samples?: CaseStudySample[]
}

export interface CaseStudy {
  id: string
  brand: string
  campaign: string
  creator?: string
  timeline: string
  role: string
  challenge: string
  stages: CaseStudyStage[]
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'skintific-peeling-solution-astaririri': {
    id: 'skintific-peeling-solution-astaririri',
    brand: 'Skintific',
    campaign: 'Peeling Solution',
    creator: 'astaririri',
    timeline: 'July 2025',
    role: 'Campaign Manager & Creative Strategist',
    challenge: "Chemical peeling products carry an intimidating reputation — audiences associate them with pain, irritation, and damaged skin. The challenge was to convert that fear-based objection into curiosity and purchase intent, while ensuring the content felt authentic and personal coming from a trusted creator like astaririri.",
    stages: [
      {
        number: '01',
        title: 'Campaign Brief',
        body: "Developed the full campaign brief for astaririri — defining the core USP, mandatory scenes, talking points, visual references, and format requirements. The strategic decision: lead with the audience's fear. The hook instruction was to open with a reaction stitch of real 'peeling gone wrong' content, so viewers already felt seen before Skintific was introduced as the solution. Product must appear in the first 3–5 seconds, and a full before-and-after was required as proof.",
        samples: [
          {
            id: 'cs-skintific-ps-brief',
            title: 'Campaign Brief — Skintific Peeling Solution',
            type: 'pdf',
            file: '/samples/campaigns/skintific-peeling-solution-brief.pdf',
          }
        ]
      },
      {
        number: '02',
        title: 'Script & Storyline',
        body: "Wrote the scene-by-scene storyline for Riri to follow — 6 scenes from reaction hook to product close. The script kept Riri's natural, conversational voice intact while ensuring every mandatory brand talking point landed at the right moment: the comfort claim, the claystick comparison, the ingredients callout, and the before-and-after reveal. Caption was written to target beauty audiences who had a bad experience with peeling before.",
        samples: [
          {
            id: 'cs-skintific-ps-script',
            title: 'Storyline & Script — Skintific Peeling Solution',
            type: 'pdf',
            file: '/samples/campaigns/storyline-skintific-peeling-solution.pdf',
          }
        ]
      },
      {
        number: '03',
        title: 'Published Content',
        body: "The final IG Reel, produced by astaririri following the brief and storyline. The objection-first hook — stitching footage of people reacting badly to peeling products — stopped the scroll by making the audience feel their own past experience before the solution was revealed. Riri's personal, unscripted delivery carried the product integration naturally.",
        samples: [
          {
            id: 'cs-skintific-ps-ugc',
            title: 'astaririri × Skintific Peeling Solution — IG Reel',
            type: 'link',
            url: 'https://drive.google.com/file/d/1qXNLH6JwfNyX2M9xQnmWuWfH8LUqymrh/view?usp=sharing',
          }
        ]
      },
      {
        number: '04',
        title: 'Campaign Insights',
        body: 'Performance data and post-campaign learnings — to be added when the insight report is available.',
        samples: []
      }
    ]
  }
}
