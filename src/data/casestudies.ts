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
  },

  'skintific-aha-bha-pha-pads-astaririri': {
    id: 'skintific-aha-bha-pha-pads-astaririri',
    brand: 'Skintific',
    campaign: 'AHA BHA PHA Exfoliating Pads',
    creator: 'astaririri',
    timeline: '2025',
    role: 'Campaign Manager & Creative Strategist',
    challenge: "Exfoliating products face a hidden-need problem — most people don't exfoliate because they can't feel or see the buildup on their skin. The challenge was to create a hook so visceral it made the invisible visible: showing audiences the actual dirt on a cotton pad they never knew was there. The strategy had to convert passive scrollers into grossed-out, then convinced, buyers — all within the first three seconds.",
    stages: [
      {
        number: '01',
        title: 'Script & Storyline',
        body: "Built the full scene-by-scene storyline for Riri's Reel — opening with the gross-out cotton pad hook that reveals real skin buildup to shock viewers into stopping their scroll. The strategy: use the audience's own skin as the proof. Six scenes from dirty pad reveal to full product close, with each scene engineered to build escalating curiosity. Caption written in Riri's voice: 'WARNING⚠️ Jangan jijiq ya guys... Itu real kotoran muka kalo jarang exfo' — deliberately informal and relatable to lower the barrier of watching something unpleasant.",
        samples: [
          {
            id: 'cs-skintific-pads-script',
            title: 'Storyline & Script — Skintific AHA BHA PHA Exfoliating Pads',
            type: 'pdf',
            file: '/samples/campaigns/storyline-skintific-aha-bha-pha-pads.pdf',
          }
        ]
      },
      {
        number: '02',
        title: 'Published Content',
        body: "The final IG Reel, produced by astaririri following the storyline. The cotton pad reveal lands exactly as intended — Riri's natural reaction carries the moment authentically, and the dual-sided pad's visible residue does the persuasion work that no copy claim could replicate. The before-and-after skin comparison in the closing scene converts the gross-out opening into a credible product proof.",
        samples: [
          {
            id: 'cs-skintific-pads-ugc',
            title: 'astaririri × Skintific AHA BHA PHA Pads — IG Reel',
            type: 'link',
            url: 'https://drive.google.com/file/d/17XQJ96Jnk7tLBFHjJtfH41jRYQvCdKk8/view?usp=sharing',
          }
        ]
      },
      {
        number: '03',
        title: 'Campaign Insights',
        body: 'Performance data and post-campaign learnings — to be added when the insight report is available.',
        samples: []
      }
    ]
  },

  'skintific-pdrn-moisturizer-astaririri': {
    id: 'skintific-pdrn-moisturizer-astaririri',
    brand: 'Skintific',
    campaign: 'PDRN Moisturizer',
    creator: 'astaririri',
    timeline: 'January 2025',
    role: 'Campaign Manager & Creative Strategist',
    challenge: "PDRN (Polydeoxyribonucleotide) is a clinical-grade ingredient derived from salmon DNA — powerful for skin regeneration but completely unfamiliar to most Indonesian beauty consumers. The challenge was to make a niche, clinical-sounding ingredient feel approachable and credible without a dermatologist in frame. The strategy anchored the product to a feeling the audience already knew: post-clinic skin sensitivity. If you've ever been to a skincare clinic and felt that tight, slightly raw, freshly-treated skin — that's the problem Skintific PDRN Moisturizer was positioned to solve.",
    stages: [
      {
        number: '01',
        title: 'Campaign Brief',
        body: "Developed the full campaign brief for astaririri — defining the core content angle (Glowing Glass Skin as a clinic-treatment alternative), mandatory scenes, talking points, and format requirements. The strategic decision: open with the post-treatment irritation feeling to trigger immediate recognition in clinic-goers, then position PDRN as the at-home recovery and maintenance solution. Product must appear within 5 seconds. 14-day usage footage required as the proof arc. Product knowledge — covering the hero ingredients (5,000 ppm PDRN, Brightenyl®, Chronoglow, Symbright Plus), the glass-skin timeline (instant moisture → 3 days smoother → 7 days fading dark spots → 14 days glass skin), and all key talking points — was briefed to Riri alongside the content strategy.",
        samples: [
          {
            id: 'cs-skintific-pdrn-brief',
            title: 'Campaign Brief — Skintific PDRN Moisturizer',
            type: 'pdf',
            file: '/samples/campaigns/skintific-pdrn-moisturizer-jan-brief.pdf',
          },
          {
            id: 'cs-skintific-pdrn-product-knowledge',
            title: 'Product Knowledge — Skintific PDRN Bright & Smooth Moisture Gel',
            type: 'pdf',
            file: '/samples/campaigns/skintific-pdrn-product-knowledge.pdf',
          }
        ]
      },
      {
        number: '02',
        title: 'Script & Storyline',
        body: "Wrote the 5-scene storyline to execute the clinic-alternative narrative. Scene 1 hook: Riri stitches real images of post-treatment redness and irritation, then cuts to her own nervous reaction — 'Jujur, w tuh dari dulu penasaran sama treatment muka yang pakai PDRN. Tapi pas lihat beberapa kondisi kulit setelah treatment kayak gini, kok jadi agak takut juga yaaa.' Scene 2 reveals Skintific PDRN Moisturizer as the accessible entry point to the ingredient. Scenes 3–4 follow a real usage journey (Day 1 first use → skin progress montage) to replace instant-claim format with a believable 14-day transformation arc. Scene 5 closes with the glass-skin result and clinic-alternative CTA.",
        samples: [
          {
            id: 'cs-skintific-pdrn-script',
            title: 'Storyline & Script — Skintific PDRN Moisturizer',
            type: 'pdf',
            file: '/samples/campaigns/storyline-skintific-pdrn-moisturizer.pdf',
          }
        ]
      },
      {
        number: '03',
        title: 'Published Content',
        body: "The final IG Reel, produced by astaririri following the brief and storyline. Riri's authentic nervous-curious hook pulls in anyone who has considered a PDRN clinic treatment but been put off by the downtime — positioning Skintific as the low-barrier first step into the ingredient.",
        samples: [
          {
            id: 'cs-skintific-pdrn-ugc',
            title: 'astaririri × Skintific PDRN Moisturizer — IG Reel',
            type: 'link',
            url: 'https://drive.google.com/file/d/1uvdNQHfkx7lD9hPELq4d-jgWiXl-U0KF/view?usp=sharing',
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
