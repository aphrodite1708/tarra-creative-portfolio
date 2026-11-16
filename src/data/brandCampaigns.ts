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

  // ── Bio-Oil ──────────────────────────────────────────────────
  {
    id: 'bio-oil-skincare-oil-natural',
    brand: 'Bio-Oil',
    title: 'Skincare Oil (Natural)',
    subtitle: 'IG Reels + Stories — #BioOilHealthySkinHabits',
    year: '2025',
    sampleIds: [
      'bio-oil-skincare-oil-natural-kol-brief',
      'bio-oil-skincare-oil-natural-ugc',
      'bio-oil-skincare-oil-natural-reels-insight',
      'bio-oil-skincare-oil-natural-stories-insight',
    ],
  },

  // ── Finally Found You ────────────────────────────────────────
  {
    id: 'ffy-moisturizer-toner-kak-riri',
    brand: 'Finally Found You',
    title: 'Moisturizer & Toner',
    subtitle: 'Kak Riri — IG Stories UGC activation',
    year: '2025',
    sampleIds: [
      'ffy-moisturizer-toner-igs-storyline-creator',
      'ffy-moisturizer-toner-igs-ugc-1',
      'ffy-moisturizer-toner-igs-ugc-2',
      'ffy-moisturizer-toner-igs-ugc-3',
      'ffy-moisturizer-toner-igs-ugc-4',
      'ffy-moisturizer-toner-igs-insight',
    ],
  },

  // ── Natur-E ──────────────────────────────────────────────────
  {
    id: 'natur-e-ceraglow-hyaluglow',
    brand: 'Natur-E',
    title: 'CeraGlow & Hyaluglow Serum',
    subtitle: 'Natur-E × Sunny Dahye — Mega Macro KOL activation',
    year: '2023',
    sampleIds: [
      'natur-e-ceraglow-hyaluglow-kol-brief',
      'natur-e-ceraglow-hyaluglow-ugc',
      'natur-e-ceraglow-hyaluglow-tiktok-insight',
    ],
  },
  {
    id: 'natur-e-advanced-astari-riri',
    brand: 'Natur-E',
    title: 'Advanced Full Series',
    subtitle: 'Astari Riri — IG Reels + Stories KOL activation',
    year: '2025',
    sampleIds: [
      'natur-e-advanced-brief',
      'natur-e-advanced-brief-direction',
      'natur-e-advanced-brief-wardrobe',
      'natur-e-graphic-visual',
      'natur-e-advanced-starter-bundle-social-post',
      'natur-e-advanced-astari-riri-reels-ugc',
      'natur-e-advanced-astari-riri-stories-ugc-1',
      'natur-e-advanced-astari-riri-stories-ugc-2',
      'natur-e-advanced-astari-riri-ugc-extra',
      'natur-e-advanced-insight',
      'natur-e-advanced-reel-insight',
      'natur-e-advanced-stories-insight-1',
      'natur-e-advanced-stories-insight-2',
    ],
  },

  // ── Activgluta ───────────────────────────────────────────────
  {
    id: 'activgluta-ig-tiktok-campaign',
    brand: 'Activgluta',
    title: 'Instagram & TikTok Campaign',
    subtitle: 'IG Stories + TikTok — beauty supplement activation',
    year: '2025',
    sampleIds: ['activgluta-instagram-insight', 'activgluta-tiktok-insight'],
  },

  // ── Ashley ───────────────────────────────────────────────────
  {
    id: 'ashley-global-outreach',
    brand: 'Ashley',
    title: 'Global Fashion Brand Outreach',
    subtitle: 'Vietnamese fashion brand — catalogue & outreach research',
    year: '2025',
    sampleIds: ['ashley-global-brand-outreach'],
  },

  // ── BLP Beauty ───────────────────────────────────────────────
  {
    id: 'blp-beauty-holiday-gift-sets',
    brand: 'BLP Beauty',
    title: 'Holiday Gift Sets',
    subtitle: 'Holiday 1 & 2 — KOL brief & creative direction',
    year: '2024',
    sampleIds: ['blp-beauty-holiday-gift-set-brief', 'blp-beauty-holiday-gift-set-brief-direction'],
  },

  // ── BabyGo ───────────────────────────────────────────────────
  {
    id: 'babygo-brand-profile-activation',
    brand: 'BabyGo',
    title: 'Brand Profile & Creator Brief',
    subtitle: 'Diaper bags & accessories — creator onboarding',
    year: '2024',
    sampleIds: ['babygo-brand-profile', 'babygo-brand-profile-creator'],
  },

  // ── Beauty of Joseon ─────────────────────────────────────────
  {
    id: 'beauty-of-joseon-multi-sku',
    brand: 'Beauty of Joseon',
    title: 'Multi-SKU KOL Activation',
    subtitle: 'Light On Serum + Ginseng Moist Sun Serum — IG & TikTok',
    year: '2025',
    sampleIds: [
      'beautyofjoseon-kol-brief',
      'beautyofjoseon-kol-brief-direction',
      'beautyofjoseon-kol-brief-wardrobe',
      'beautyofjoseon-rice-probiotics-sunscreen-visual',
      'beautyofjoseon-ig-reels-bts-storyboard',
      'beautyofjoseon-kol-brief-creator',
      'beautyofjoseon-ig-reels-bts-script-creator',
      'beautyofjoseon-tiktok-skincare-script-creator',
      'beautyofjoseon-tiktok-filter-script-creator',
      'beautyofjoseon-tiktok-sunscreen-comparison-script-creator',
      'beautyofjoseon-ig-stories-sunscreen-script-creator',
    ],
  },

  // ── Brighty ──────────────────────────────────────────────────
  {
    id: 'brighty-20pct-peeling-solution',
    brand: 'Brighty',
    title: '20% Peeling Solution',
    subtitle: 'Instagram Stories — 5-set campaign activation',
    year: '2025',
    sampleIds: [
      'brighty-peeling-solution-product-knowledge',
      'brighty-peeling-solution-product-knowledge-creator',
      'brighty-stories-insight-1',
      'brighty-stories-insight-2',
      'brighty-stories-insight-3',
      'brighty-stories-insight-4',
      'brighty-stories-insight-5',
    ],
  },

  // ── CAZI Brand ───────────────────────────────────────────────
  {
    id: 'cazi-brand-lookbook',
    brand: 'CAZI Brand',
    title: 'Fashion Lookbook',
    subtitle: 'Campaign catalogue & visual direction',
    year: '2025',
    sampleIds: ['cazi-catalogue-moodboard', 'cazi-catalogue-wardrobe', 'cazi-catalogue-visual'],
  },

  // ── Ciara ────────────────────────────────────────────────────
  {
    id: 'ciara-stretch-mark-booster-cream',
    brand: 'Ciara',
    title: 'Stretch Mark Booster Cream',
    subtitle: 'Post-pregnancy storytelling — IG Reels + Stories',
    year: '2025',
    sampleIds: [
      'ciara-stretchmark-reels-script',
      'ciara-stretchmark-reels-script-direction',
      'ciara-stretchmark-reels-script-creator',
      'ciara-stretchmark-reels-script-creator-2',
      'ciara-stretchmark-ig-stories-insight-1',
      'ciara-stretchmark-ig-stories-insight-2',
      'ciara-stretchmark-ig-stories-insight-3',
    ],
  },

  // ── Ciara × dörskin ──────────────────────────────────────────
  {
    id: 'ciara-dorskin-dual-brand-stories',
    brand: 'Ciara × dörskin',
    title: 'Dual-Brand Stories Campaign',
    subtitle: 'Cross-brand IG Stories — 584 link clicks',
    year: '2025',
    sampleIds: ['ciara-dorskin-instagram-stories-insight'],
  },

  // ── Dew Me ───────────────────────────────────────────────────
  {
    id: 'dew-me-lip-glow',
    brand: 'Dew Me',
    title: 'Lip Glow',
    subtitle: 'Lip Glow Serum & Gentle Peeling — creator UGC',
    year: '2025',
    sampleIds: ['dew-me-lip-glow-ugc'],
  },

  // ── Disney Cruise Line ───────────────────────────────────────
  {
    id: 'disney-cruise-line-creator-activation',
    brand: 'Disney Cruise Line',
    title: 'Creator Campaign',
    subtitle: 'Riri & Rama creator tickets — talent management',
    year: '2024',
    sampleIds: [
      'disney-cruise-line-brief',
      'disney-cruise-line-riri-ticket',
      'disney-cruise-line-rama-ticket',
      'disney-cruise-line-data-collection',
    ],
  },

  // ── Dove ─────────────────────────────────────────────────────
  {
    id: 'dove-soap-school',
    brand: 'Dove',
    title: 'Soap School',
    subtitle: 'Astari Budi — confidence storytelling IG Reels',
    year: '2025',
    sampleIds: [
      'dove-soap-school-kol-brief',
      'dove-soap-school-brief',
      'dove-soap-school-wardrobe',
      'dove-soap-school-kol-brief-creator',
      'dove-soap-school-reels-script-creator',
      'dove-soap-school-insight-1',
      'dove-soap-school-insight-2',
    ],
  },
  {
    id: 'dove-deo-serum-jakarta-beauty',
    brand: 'Dove',
    title: 'Deo Serum — Jakarta x Beauty',
    subtitle: 'JCC Senayan event activation — IG Stories + Reels',
    year: '2025',
    sampleIds: [
      'dove-deo-serum-jxb-kol-brief',
      'dove-jxb-deo-serum-reels-script',
      'dove-jxb-deo-serum-igs-script',
      'dove-deo-serum-jxb-kol-brief-sourcing',
      'dove-deo-serum-jxb-kol-brief-direction',
      'dove-deo-serum-jxb-kol-brief-creator-strategy',
      'dove-jxb-deo-serum-reels-script-creator',
      'dove-jxb-deo-serum-igs-script-creator',
      'dove-jxb-deo-serum-reels-ugc',
      'dove-jxb-deo-serum-igs-ugc',
      'dove-deo-serum-jxb-ig-stories-insight',
    ],
  },

  // ── Eileen Grace ─────────────────────────────────────────────
  {
    id: 'eileen-grace-jelly-mask',
    brand: 'Eileen Grace',
    title: 'Jelly Mask — Multimask IG Story Activation',
    subtitle: 'Rose Jelly Mask & Deep Cleansing Black Jelly Mask',
    year: '2022',
    sampleIds: [
      'eileen-grace-jelly-mask-kol-brief',
      'eileen-grace-jelly-mask-ugc-1',
      'eileen-grace-jelly-mask-ugc-2',
      'eileen-grace-jelly-mask-ugc-3',
      'eileen-grace-jelly-mask-ugc-4',
    ],
  },
  {
    id: 'eileen-grace-ig-stories',
    brand: 'Eileen Grace',
    title: 'Instagram Stories Campaign',
    subtitle: 'Fashion brand — 4-set Stories, 424 sticker taps',
    year: '2022',
    sampleIds: ['eileen-grace-ig-stories-insight'],
  },

  // ── Embryolisse ──────────────────────────────────────────────
  {
    id: 'embryolisse-lait-creme-concentre',
    brand: 'Embryolisse',
    title: 'Lait-Crème Concentré',
    subtitle: 'Viral IG Stories hack — 2,014 link clicks',
    year: '2025',
    sampleIds: [
      'embryolisse-lait-creme-case-study',
      'storyline-embryolisse',
      'storyline-embryolisse-creator',
      'embryolisse-lait-creme-ugc-stories',
      'embryolisse-insight',
    ],
  },

  // ── Emelyne ──────────────────────────────────────────────────
  {
    id: 'emelyne-burgundy-sunscreen',
    brand: 'Emelyne',
    title: 'Burgundy 2-in-1 Sunscreen',
    subtitle: 'IG Reels + Stories — creator UGC activation',
    year: '2024',
    sampleIds: [
      'emelyne-november-briefing',
      'emelyne-company-profile',
      'emelyne-burgundy-sunscreen-reels-ugc',
      'emelyne-burgundy-sunscreen-stories-ugc-1',
      'emelyne-burgundy-sunscreen-stories-ugc-2',
      'emelyne-burgundy-sunscreen-stories-ugc-3',
      'emelyne-burgundy-sunscreen-stories-ugc-4',
    ],
  },

  // ── Energen ──────────────────────────────────────────────────
  {
    id: 'energen-1week-challenge',
    brand: 'Energen',
    title: '1 Week Challenge',
    subtitle: 'Working Mom KOL — IG Reels + TikTok',
    year: '2025',
    sampleIds: [
      'energen-1week-challenge-kol-brief',
      'energen-1week-challenge-reels-script',
      'energen-1week-challenge-reels-script-creator',
    ],
  },

  // ── Erha ─────────────────────────────────────────────────────
  {
    id: 'erha-active-light-sunscreen',
    brand: 'Erha',
    title: 'Perfect Shield Active Light Sunscreen',
    subtitle: '"Sweet Morning Surprise" — lifestyle IG Reels',
    year: '2025',
    sampleIds: [
      'erha-active-light-sunscreen-kol-brief',
      'erha-active-light-sunscreen-product-knowledge',
      'erha-active-light-sunscreen-reels-script',
      'erha-active-light-sunscreen-creator-outreach',
      'erha-active-light-sunscreen-reels-script-creator',
      'erha-active-light-sunscreen-ugc',
    ],
  },

  // ── Firstlab ─────────────────────────────────────────────────
  {
    id: 'firstlab-probiotic-skin-essence',
    brand: 'Firstlab',
    title: 'Probiotic Skin Essence Signature',
    subtitle: 'IG Reels KOL — 69.5K plays, 59.2% non-followers',
    year: '2023',
    sampleIds: [
      'firstlab-probiotic-skin-essence-kol-brief',
      'firstlab-product-knowledge',
      'firstlab-probiotic-skin-essence-brief-direction',
      'firstlab-product-knowledge-creator',
      'firstlab-reels-insight',
    ],
  },

  // ── G2G ──────────────────────────────────────────────────────
  {
    id: 'g2g-2in1-cushion-powder',
    brand: 'G2G',
    title: '2in1 Cushion Powder',
    subtitle: 'Creator content strategy — 6-shade product briefing',
    year: '2025',
    sampleIds: ['g2g-2in1-cushion-powder-product', 'g2g-2in1-cushion-powder-creator-strategy'],
  },

  // ── Garnier ──────────────────────────────────────────────────
  {
    id: 'garnier-ig-reels',
    brand: 'Garnier',
    title: 'Instagram Reels Campaign',
    subtitle: '57K plays — discovery-led creator content',
    year: '2024',
    sampleIds: ['garnier-reels-insight'],
  },

  // ── Grace and Glow ───────────────────────────────────────────
  {
    id: 'grace-and-glow-dry-shampoo',
    brand: 'Grace and Glow',
    title: 'Dry Shampoo',
    subtitle: 'Daisy Breeze + Velvet Breeze — Talkative UGC format',
    year: '2025',
    sampleIds: [
      'grace-and-glow-dry-shampoo-pk-brief',
      'grace-and-glow-dry-shampoo-talkative-script',
      'grace-and-glow-dry-shampoo-talkative-script-creator',
      'grace-and-glow-dry-shampoo-ugc',
    ],
  },

  // ── HHRR ─────────────────────────────────────────────────────
  {
    id: 'hhrr-twin-master-eyebrow',
    brand: 'HHRR',
    title: 'Twin Master Eyebrow',
    subtitle: '0.9mm precision pencil — 3-shade launch brief',
    year: '2023',
    sampleIds: ['hhrr-twin-master-eyebrow-brief', 'hhrr-twin-master-eyebrow-brief-sourcing'],
  },

  // ── Hansaplast ───────────────────────────────────────────────
  {
    id: 'hansaplast-fit-protect-challenge',
    brand: 'Hansaplast',
    title: 'Fit & Protect Challenge',
    subtitle: 'Live activation — 2-hour fitness live with Astari Riri',
    year: '2024',
    sampleIds: [
      'hansaplast-fit-protect-live-brief',
      'hansaplast-fit-protect-live-brief-direction',
      'hansaplast-live-wardrobe-sporty',
      'hansaplast-fit-protect-live-brief-creator',
      'hansaplast-fit-protect-live-ugc-1',
      'hansaplast-fit-protect-live-ugc-2',
      'hansaplast-fit-protect-live-ugc-3',
      'hansaplast-fit-protect-live-ugc-4',
      'hansaplast-fit-protect-live-ugc-5',
    ],
  },

  // ── Herbilogy ────────────────────────────────────────────────
  {
    id: 'herbilogy-skin-health-series',
    brand: 'Herbilogy',
    title: 'Skin Health Series',
    subtitle: 'Pomegranate Peel + Healthy Skin Capsule — wellness KOL',
    year: '2023',
    sampleIds: [
      'herbilogy-skin-health-series-brief-campaign',
      'herbilogy-skin-health-series-brief-pk',
      'herbilogy-skin-health-series-brief-creator',
      'herbilogy-skin-health-ig-stories-insight',
    ],
  },

  // ── Herborist ────────────────────────────────────────────────
  {
    id: 'herborist-teh-soeltan',
    brand: 'Herborist',
    title: 'Teh Soeltan Series',
    subtitle: 'Warisan Tradisi Soeltan — tea-heritage body care KOL PR',
    year: '2025',
    sampleIds: [
      'herborist-teh-soeltan-kol-brief',
      'herborist-teh-soeltan-kol-brief-sourcing',
      'herborist-teh-soeltan-kol-brief-direction',
      'herborist-teh-soeltan-kol-brief-creator',
      'herborist-teh-soeltan-kol-creator-script',
    ],
  },

  // ── HighEnd × MNC ────────────────────────────────────────────
  {
    id: 'highend-beauty-issue-2025',
    brand: 'HighEnd × MNC',
    title: 'Beauty Issue 2025',
    subtitle: 'HighEnd Magazine — influencer sourcing & styling direction',
    year: '2025',
    sampleIds: ['highend-beauty-issue-2025-brief', 'highend-beauty-issue-2025-dresscode'],
  },

  // ── Holigrels ────────────────────────────────────────────────
  {
    id: 'holigrels-sugar-princess',
    brand: 'Holigrels',
    title: 'Sugar Princess Extrait de Parfum',
    subtitle: 'EDP 30% — dramatic direct-sell IG Stories',
    year: '2026',
    sampleIds: [
      'holigrels-sugar-princess-endorsement-brief',
      'holigrels-sugar-princess-endorsement-brief-pk',
      'holigrels-sugar-princess-endorsement-brief-direction',
      'holigrels-sugar-princess-endorsement-brief-wardrobe',
      'holigrels-sugar-princess-storyline-creator',
    ],
  },

  // ── Jacquelle ────────────────────────────────────────────────
  {
    id: 'jacquelle-inside-out-2',
    brand: 'Jacquelle',
    title: 'Inside Out 2 Collab',
    subtitle: 'Cosplay Reels — 37K views, 58.4% non-follower discovery',
    year: '2024',
    sampleIds: ['jacquelle-reels-insight'],
  },
  {
    id: 'jacquelle-little-mermaid',
    brand: 'Jacquelle',
    title: 'The Little Mermaid Collab',
    subtitle: 'Instagram Stories — 141 sticker taps',
    year: '2025',
    sampleIds: ['jacquelle-instagram-stories-insight'],
  },

  // ── Judydoll ─────────────────────────────────────────────────
  {
    id: 'judydoll-iron-mascara',
    brand: 'Judydoll',
    title: 'Iron Mascara',
    subtitle: '"Lift Up Your Lashes" — 118K plays IG Reels',
    year: '2024',
    sampleIds: [
      'judydoll-iron-mascara-brief',
      'judydoll-iron-mascara-ugc',
      'judydoll-iron-mascara-insight-reels',
      'judydoll-iron-mascara-insight-story',
    ],
  },

  // ── Jumiso ───────────────────────────────────────────────────
  {
    id: 'jumiso-style-korean',
    brand: 'Jumiso',
    title: 'Multi-SKU KOL Brief',
    subtitle: 'Style Korean Indonesia — 8 SKU creator activation',
    year: '2025',
    sampleIds: ['jumiso-style-korean-product-knowledge-brief', 'jumiso-style-korean-product-knowledge-brief-wardrobe'],
  },

  // ── Kaila Beauté ─────────────────────────────────────────────
  {
    id: 'kaila-cushion-2in1',
    brand: 'Kaila Beauté',
    title: 'Cushion 2in1',
    subtitle: 'Full-day outing — before/after demo UGC brief',
    year: '2025',
    sampleIds: ['kaila-cushion-kol-brief', 'kaila-cushion-kol-brief-direction', 'kaila-cushion-kol-brief-visual'],
  },

  // ── Kinohimitsu ──────────────────────────────────────────────
  {
    id: 'kinohimitsu-14day-journey',
    brand: 'Kinohimitsu',
    title: '14-Day Journey',
    subtitle: "C-D Drink + Bird's Nest Collagen — honest review Reels",
    year: '2025',
    sampleIds: ['kinohimitsu-14day-journey-reels-script', 'kinohimitsu-14day-journey-reels-script-creator'],
  },

  // ── Lazada ───────────────────────────────────────────────────
  {
    id: 'lazada-keluarga-ada-aja',
    brand: 'Lazada',
    title: 'Keluarga Ada Aja ALAZan',
    subtitle: 'Branded sitcom integration — 271K plays, 67.9% non-followers',
    year: '2023',
    sampleIds: [
      'lazada-keluarga-ada-aja-alazan-brief',
      'lazada-keluarga-ada-aja-alazan-brief-direction',
      'lazada-keluarga-ada-aja-alazan-wardrobe',
      'lazada-keluarga-ada-aja-alazan-reels-storyboard',
      'lazada-keluarga-ada-aja-alazan-brief-creator-strategy',
      'lazada-keluarga-ada-aja-alazan-reels-script-creator',
      'lazada-keluarga-ada-aja-alazan-reels-insight',
    ],
  },

  // ── Lencir ───────────────────────────────────────────────────
  {
    id: 'lencir-prebiotic-drink',
    brand: 'Lencir',
    title: 'Prebiotic Drink',
    subtitle: 'KOL + 2nd Anniversary event — lifestyle IG Stories',
    year: '2025',
    sampleIds: [
      'lencir-prebiotic-kol-brief',
      'lencir-prebiotic-kol-brief-direction',
      'lencir-anniversary-event-invite-moodboard',
      'lencir-anniversary-event-invite-dresscode',
      'lencir-probiotic-ig-stories-script-creator',
    ],
  },

  // ── Lux ──────────────────────────────────────────────────────
  {
    id: 'lux-magical-orchid',
    brand: 'Lux',
    title: 'Magical Orchid',
    subtitle: '"Girly OOTD & The Unexpected Compliment" — IG Reels UGC',
    year: '2025',
    sampleIds: [
      'lux-magical-orchid-reels-script',
      'lux-magical-orchid-reels-script-creator',
      'lux-magical-orchid-ugc',
    ],
  },

  // ── Mediheal ─────────────────────────────────────────────────
  {
    id: 'mediheal-milk-brightening',
    brand: 'Mediheal',
    title: 'Milk Brightening Skincare',
    subtitle: 'Sociolla × Reels + IG Stories — barrier-first K-beauty KOL',
    year: '2023',
    sampleIds: [
      'mediheal-milk-brightening-pr-kit-brief',
      'mediheal-milk-brightening-kol-brief',
      'mediheal-milk-brightening-kol-brief-direction',
      'mediheal-milk-brightening-kol-brief-creator-strategy',
      'mediheal-milk-brightening-kol-brief-creator-script',
      'mediheal-milk-brightening-ig-stories-insight',
    ],
  },

  // ── Moist Diane ──────────────────────────────────────────────
  {
    id: 'moist-diane-extra-hair-fall-launch',
    brand: 'Moist Diane',
    title: 'Extra Hair Fall Control — Product Launch Event',
    subtitle: 'Atrium PIM I · 5 Nov 2022 · Event runner · ~137K IG Stories reach',
    year: '2022',
    sampleIds: [
      'moist-diane-extra-hair-fall-event-rundown',
      'moist-diane-extra-hair-fall-event-invitation',
      'moist-diane-extra-hair-fall-igs-insight',
    ],
  },

  // ── Luxcrime ─────────────────────────────────────────────────
  {
    id: 'luxcrime-shine-addict-lip-vinyl',
    brand: 'Luxcrime',
    title: 'Shine Addict Lip Vinyl',
    subtitle: 'Instagram KOL activation — transfer-proof lip vinyl launch',
    year: '2024',
    sampleIds: [
      'luxcrime-shine-addict-lip-vinyl-kol-brief',
      'luxcrime-shine-addict-lip-vinyl-ugc',
    ],
  },

  // ── Milux.co ─────────────────────────────────────────────────
  {
    id: 'milux-co-creator-collab',
    brand: 'Milux.co',
    title: 'Fashion Brand Creator Collaboration',
    subtitle: 'Indonesian fashion — creator sourcing & UGC',
    year: '2025',
    sampleIds: ['milux-co-creator-outreach', 'milux-co-ugc'],
  },

  // ── NUKKA ────────────────────────────────────────────────────
  {
    id: 'nukka-homewear',
    brand: 'NUKKA',
    title: 'Homewear Collection',
    subtitle: 'Fashion & lifestyle — creator UGC',
    year: '2025',
    sampleIds: ['nukka-homewear-ugc-reel-1', 'nukka-homewear-ugc-reel-2'],
  },

  // ── NVMEE ────────────────────────────────────────────────────
  {
    id: 'nvmee-libra-hair-styler',
    brand: 'NVMEE',
    title: 'Libra Hair Styler',
    subtitle: 'Endorsement — IG Stories KOL activation',
    year: '2025',
    sampleIds: ['nvmee-libra-hair-styler-brief', 'nvmee-libra-hair-styler-brief-direction', 'nvmee-instagram-stories-insight'],
  },
  {
    id: 'nvmee-new-campaign',
    brand: 'NVMEE',
    title: 'New Product Campaign',
    subtitle: 'KOL product activation — brief & performance insight',
    year: '2025',
    sampleIds: ['nvmee-new-campaign-brief', 'nvmee-new-campaign-insight'],
  },

  // ── Nuface ───────────────────────────────────────────────────
  {
    id: 'nuface-velvet-love-matte',
    brand: 'Nuface',
    title: 'Velvet Love Matte',
    subtitle: '"My First Love" — 6-shade lipstick IG Stories KOL',
    year: '2025',
    sampleIds: [
      'nuface-lip-velvet-kol-brief',
      'nuface-lip-velvet-kol-brief-pk',
      'nuface-lip-velvet-kol-brief-direction',
      'nuface-lip-velvet-kol-brief-wardrobe',
      'nuface-lip-velvet-kol-brief-creator',
      'nuface-lip-velvet-igs-script-creator',
      'nuface-lip-velvet-ig-stories-insight',
    ],
  },

  // ── Nutrilon Royal ───────────────────────────────────────────
  {
    id: 'nutrilon-royal-winners-squad-hongkong',
    brand: 'Nutrilon Royal',
    title: "Winner's Squad — Hong Kong Adventure",
    subtitle: 'Klik Indomaret stamp collection — Reels + Live Shopping',
    year: '2025',
    sampleIds: [
      'nutrilon-royal-winners-squad-hongkong-brief',
      'nutrilon-royal-wardrobe-blue-blazer-white',
      'nutrilon-royal-klik-indomaret-video-concept-direction',
      'nutrilon-royal-klik-indomaret-video-concept-storyboard',
      'nutrilon-royal-winners-squad-hongkong-brief-creator-strategy',
      'nutrilon-royal-klik-indomaret-video-concept-creator',
    ],
  },
  {
    id: 'nutrilon-royal-partipost-science-camp',
    brand: 'Nutrilon Royal',
    title: 'Partipost — Science Camp Singapore',
    subtitle: 'Royal Blue wardrobe direction brief',
    year: '2025',
    sampleIds: ['nutrilon-royal-partipost-science-camp-brief', 'nutrilon-royal-wardrobe-light-blue-cardigan'],
  },

  // ── Nuudo ────────────────────────────────────────────────────
  {
    id: 'nuudo-brand-profile-activation',
    brand: 'Nuudo',
    title: 'Brand Profile & Creator Brief',
    subtitle: 'Plant-based baby & kid skincare — creator onboarding',
    year: '2024',
    sampleIds: ['nuudo-brand-profile', 'nuudo-brand-profile-creator'],
  },

  // ── OWNSKIN ──────────────────────────────────────────────────
  {
    id: 'ownskin-gentle-antiperspirant',
    brand: 'OWNSKIN',
    title: 'GENTLE Active Guard Antiperspirant',
    subtitle: 'IG Stories — 562 link clicks creator activation',
    year: '2025',
    sampleIds: ['ownskin-gentle-product-knowledge', 'ownskin-gentle-product-knowledge-creator', 'ownskin-instagram-stories-insight'],
  },

  // ── Paxmoly ──────────────────────────────────────────────────
  {
    id: 'paxmoly-brightening-tone-up',
    brand: 'Paxmoly',
    title: 'Brightening Tone Up Cream',
    subtitle: 'KOL endorsement brief & creative direction',
    year: '2025',
    sampleIds: ['paxmoly-brightening-tone-up-cream-brief', 'paxmoly-brightening-tone-up-cream-brief-direction'],
  },

  // ── Pergikuliner ─────────────────────────────────────────────
  {
    id: 'pergikuliner-creator-activation',
    brand: 'Pergikuliner',
    title: 'Creator Campaign',
    subtitle: 'Culinary-lifestyle — creator sourcing & KOL brief',
    year: '2025',
    sampleIds: ['pergikuliner-kol-brief', 'pergikuliner-creator-research'],
  },

  // ── Pond's ───────────────────────────────────────────────────
  {
    id: 'ponds-guardian-shopee-live',
    brand: "Pond's",
    title: 'Guardian × Shopee Live',
    subtitle: '"Skin Regime & Skinvestment" — guest host activation',
    year: '2023',
    sampleIds: [
      'ponds-guardian-live-ig-stories-insight',
      'ponds-guardian-live-ig-stories-insight-engagement',
      'ponds-guardian-live-event-post',
    ],
  },
  {
    id: 'ponds-uv-miracle-sunscreen',
    brand: "Pond's",
    title: 'UV Miracle Sunscreen',
    subtitle: '"Feel It To Love It" — 160K views YouTube Shorts creator',
    year: '2025',
    sampleIds: [
      'ponds-uv-miracle-brief',
      'ponds-uv-miracle-brief-direction',
      'ponds-uv-miracle-reels-script-creator',
      'ponds-uv-serum-ugc-photo',
      'ponds-uv-miracle-youtube-shorts-insight',
    ],
  },

  // ── Pureco ───────────────────────────────────────────────────
  {
    id: 'pureco-daily-home-detergent',
    brand: 'Pureco',
    title: 'Daily Home Detergent',
    subtitle: '"Unexpected Product Discovery" — IG Story authentic review',
    year: '2024',
    sampleIds: [
      'pureco-daily-home-detergent-igs-script',
      'pureco-brand-profile',
      'pureco-daily-home-detergent-igs-script-direction',
      'pureco-brand-profile-creator',
      'pureco-daily-home-detergent-igs-script-creator',
    ],
  },

  // ── Rosé All Day ─────────────────────────────────────────────
  {
    id: 'roseallday-new-shades-concealer',
    brand: 'Rosé All Day',
    title: 'The Realest Lightweight Concealer',
    subtitle: '3 new shades launch — IG Stories KOL activation',
    year: '2024',
    sampleIds: [
      'roseallday-new-shades-concealer-brief',
      'roseallday-new-shades-concealer-brief-direction',
      'roseallday-poof-product-graphic',
      'roseallday-new-shades-concealer-brief-visual',
      'roseallday-instagram-stories-insight',
    ],
  },

  // ── Rovve ────────────────────────────────────────────────────
  {
    id: 'rovve-brightening-barrier-serum',
    brand: 'Rovve',
    title: 'Brightening Barrier Repair Moisture Serum',
    subtitle: '#BrightBeautifully — creator product knowledge',
    year: '2025',
    sampleIds: ['rovve-brightening-serum-product-knowledge', 'rovve-brightening-serum-product-knowledge-creator'],
  },

  // ── SH-RD ────────────────────────────────────────────────────
  {
    id: 'sh-rd-protein-cream',
    brand: 'SH-RD',
    title: 'Protein Cream',
    subtitle: 'Hair Vitamin & Heat Protectant — creator content brief',
    year: '2022',
    sampleIds: ['sh-rd-protein-cream-brief', 'sh-rd-protein-cream-brief-direction', 'sh-rd-protein-cream-ugc-1', 'sh-rd-protein-cream-ugc-2'],
  },

  // ── Safi ─────────────────────────────────────────────────────
  {
    id: 'safi-age-defy-3x-retinoids',
    brand: 'Safi',
    title: 'Age Defy 3x Advanced Retinoids',
    subtitle: 'Japan travel skincare — 729K views IG Reels',
    year: '2025',
    sampleIds: [
      'safi-age-defy-retinoid-kol-brief',
      'safi-age-defy-reels-script',
      'safi-age-defy-reels-script-direction',
      'safi-age-defy-retinoid-kol-brief-direction',
      'safi-age-defy-wardrobe-white-vest',
      'safi-age-defy-retinoid-kol-brief-wardrobe',
      'safi-age-defy-reels-script-creator',
      'safi-age-defy-retinoid-ugc',
      'safi-age-defy-reel-insight',
    ],
  },

  // ── Scarlett ─────────────────────────────────────────────────
  {
    id: 'scarlett-facial-wash',
    brand: 'Scarlett',
    title: 'Facial Wash',
    subtitle: '"Too Much Nggak Sih?" — GRWM comedic UGC Reels',
    year: '2025',
    sampleIds: ['scarlett-facial-wash-reels-script', 'scarlett-facial-wash-reels-script-creator', 'scarlett-facial-wash-ugc'],
  },

  // ── Sculpt Skin ──────────────────────────────────────────────
  {
    id: 'sculpt-skin-brightening-underarm',
    brand: 'Sculpt Skin',
    title: "She's Spotless — Brightening Underarm Cream",
    subtitle: '"Penemuan teraneh" IG Story — 1,894 link clicks',
    year: '2025',
    sampleIds: [
      'sculpt-skin-brightening-underarm-brief',
      'sculpt-skin-brightening-underarm-brief-sourcing',
      'sculpt-skin-brightening-underarm-igs-script-direction',
      'sculpt-skin-aries-waist-trainer-product',
      'sculpt-skin-brightening-underarm-igs-script-creator',
      'sculpt-skin-ig-stories-insight',
    ],
  },

  // ── Secondate × Xexymix ──────────────────────────────────────
  {
    id: 'secondate-xexymix-padel-event',
    brand: 'Secondate × Xexymix',
    title: 'Playdate Padel Event',
    subtitle: 'KOL catalogue & wardrobe direction for event activation',
    year: '2024',
    sampleIds: [
      'secondate-xexymix-padel-kol-catalogue',
      'secondate-xexymix-padel-kol-catalogue-moodboard',
      'secondate-xexymix-padel-kol-catalogue-wardrobe',
    ],
  },

  // ── Senus ────────────────────────────────────────────────────
  {
    id: 'senus-instacurl',
    brand: 'Senus',
    title: 'InstaCurl Automatic Styler',
    subtitle: '"SIAPA TUH YANG BILANG?!" confidence-flip creator UGC',
    year: '2025',
    sampleIds: [
      'senus-instacurl-brief',
      'senus-instacurl-storyline',
      'senus-instacurl-product-visual',
      'senus-instacurl-storyline-creator',
      'senus-instacurl-ugc-reel',
    ],
  },

  // ── Skintific ────────────────────────────────────────────────
  {
    id: 'skintific-pdrn-moisturizer',
    brand: 'Skintific',
    title: 'PDRN Moisturizer',
    subtitle: 'Clinic-alternative hook — "Takut Klinik" IG Reels',
    year: '2025',
    sampleIds: [
      'skintific-pdrn-moisturizer-jan-brief',
      'skintific-pdrn-product-knowledge',
      'skintific-pdrn-moisturizer-jan-brief-direction',
      'skintific-pdrn-moisturizer-case-study',
      'storyline-skintific-pdrn-moisturizer',
      'storyline-skintific-pdrn-moisturizer-creator',
      'skintific-pdrn-moisturizer-ugc-reel',
    ],
  },
  {
    id: 'skintific-aha-bha-pha-pads',
    brand: 'Skintific',
    title: 'AHA BHA PHA Exfoliating Pads',
    subtitle: '"WARNING⚠️ Jangan Jijiq" — gross-out curiosity hook',
    year: '2025',
    sampleIds: [
      'skintific-aha-bha-pha-pads-case-study',
      'storyline-skintific-aha-bha-pha-pads',
      'storyline-skintific-aha-bha-pha-pads-creator',
      'skintific-aha-bha-pha-pads-ugc-reel',
    ],
  },
  {
    id: 'skintific-peeling-solution',
    brand: 'Skintific',
    title: 'Peeling Solution',
    subtitle: '"Ga Seseram Itu" reaction stitch — objection-first hook',
    year: '2025',
    sampleIds: [
      'skintific-peeling-solution-brief',
      'skintific-peeling-solution-case-study',
      'skintific-alaska-clay-stick-proof',
      'storyline-skintific-peeling-solution',
      'storyline-skintific-peeling-solution-creator',
      'skintific-peeling-solution-ugc-reel',
    ],
  },

  // ── TRESemmé ─────────────────────────────────────────────────
  {
    id: 'tresemme-keratin-kit-jfw2026',
    brand: 'TRESemmé',
    title: 'Keratin Total Repair Kit × JFW 2026',
    subtitle: '"Recreate Pevita\'s runway hairstyle" — 206K views IG Reels',
    year: '2025',
    sampleIds: [
      'tresemme-keratin-kit-kol-brief',
      'tresemme-keratin-kit-kol-brief-direction',
      'tresemme-keratin-kit-wardrobe',
      'tresemme-keratin-kit-product-visual',
      'tresemme-keratin-kit-reels-storyboard',
      'tresemme-keratin-kit-kol-brief-creator-strategy',
      'tresemme-keratin-kit-reels-script-creator',
      'tresemme-keratin-kit-reels-insight',
    ],
  },

  // ── Teddie Clubs ─────────────────────────────────────────────
  {
    id: 'teddie-clubs-acne-patch-collab',
    brand: 'Teddie Clubs',
    title: 'Special Edition Acne Patch Collab',
    subtitle: 'Revenue share co-brand pitch — TikTok Shop + Shopee launch',
    year: '2025',
    sampleIds: [
      'teddie-clubs-acne-patch-collab-brief',
      'teddie-clubs-acne-patch-collab-negotiations',
      'teddie-clubs-acne-patch-collab-brief-direction',
    ],
  },

  // ── The Originote ────────────────────────────────────────────
  {
    id: 'the-originote-reels-ugc',
    brand: 'The Originote',
    title: 'IG Reels UGC Campaign',
    subtitle: '4-deliverable creator script — affordable skincare',
    year: '2025',
    sampleIds: [
      'the-originote-reels-script',
      'the-originote-reels-script-creator',
      'the-originote-ugc-1',
      'the-originote-ugc-2',
      'the-originote-ugc-3',
      'the-originote-ugc-4',
    ],
  },

  // ── Tomo Kenko ───────────────────────────────────────────────
  {
    id: 'tomo-kenko-cevita-launch',
    brand: 'Tomo Kenko',
    title: 'Cevita Launch Campaign',
    subtitle: 'Full offline + online launch strategy — event + KOL',
    year: '2025',
    sampleIds: [
      'cevita-tomo-kenko-launch-campaign-strategy',
      'cevita-tomo-kenko-launch-campaign-strategy-sourcing',
      'cevita-tomo-kenko-launch-campaign-brief-direction',
      'cevita-tomo-kenko-launch-campaign-storyboard',
      'cevita-tomo-kenko-launch-campaign-strategy-creator',
    ],
  },

  // ── Tulus ────────────────────────────────────────────────────
  {
    id: 'tulus-brand-activation',
    brand: 'Tulus',
    title: 'Brand Profile & Creator Brief',
    subtitle: 'Full-range 11-SKU briefing — Korean-formulated clean skincare',
    year: '2024',
    sampleIds: ['tulus-brand-profile-brief', 'tulus-brand-profile-sourcing'],
  },

  // ── Paddle Pop ───────────────────────────────────────────────
  {
    id: 'walls-paddlepop-jiggly-jelly',
    brand: 'Paddle Pop',
    title: 'Paddle Pop Jiggly Jelly',
    subtitle: 'Jumbo film × PR Kit launch — Riri & Rei Reels',
    year: '2025',
    sampleIds: [
      'walls-paddlepop-jiggly-jelly-kol-brief',
      'walls-paddlepop-jiggly-jelly-reels-script',
      'walls-paddlepop-jiggly-jelly-ugc',
      'walls-paddlepop-jiggly-jelly-brief-direction',
    ],
  },

  // ── Westcare ─────────────────────────────────────────────────
  {
    id: 'westcare-invisible-uv-protector',
    brand: 'Westcare',
    title: 'Invisible UV Protector SPF 45+++',
    subtitle: 'Campaign brief & creator direction',
    year: '2022',
    sampleIds: ['westcare-sunscreen-brief', 'westcare-sunscreen-brief-direction'],
  },

  // ── dr. Belle ────────────────────────────────────────────────
  {
    id: 'drbelle-wrinkle-expert',
    brand: 'dr. Belle',
    title: '#WrinkleExpert',
    subtitle: 'PicoSure Pro & Fotona 4D — 289K views viral treatment Reels',
    year: '2024',
    sampleIds: [
      'drbelle-wrinkle-expert-kol-brief',
      'drbelle-wrinkle-expert-kol-brief-direction',
      'drbelle-wrinkle-expert-kol-brief-wardrobe',
      'drbelle-wrinkle-expert-kol-brief-visual',
      'drbelle-picosure-ig-reels-script-direction',
      'drbelle-picosure-ig-reels-script-creator',
      'drbelle-reels-insight',
    ],
  },

  // ── dörskin ──────────────────────────────────────────────────
  {
    id: 'dorskin-matcha-glow-dream-mask',
    brand: 'dörskin',
    title: 'Matcha Glow Dream Mask',
    subtitle: 'Soft-sell IG Stories — 331 @dorskin_id sticker taps',
    year: '2022',
    sampleIds: [
      'dorskin-matcha-glow-ig-stories-brief',
      'dorskin-matcha-glow-product-knowledge',
      'dorskin-matcha-glow-product-knowledge-image',
      'dorskin-matcha-glow-ig-stories-brief-direction',
      'dorskin-matcha-glow-product-knowledge-creator',
      'dorskin-matcha-glow-ig-stories-creator-script',
      'dorskin-instagram-stories-insight',
    ],
  },

  // ── Bio-Oil (additional) ─────────────────────────────────────
  {
    id: 'bio-oil-dry-skin-gel',
    brand: 'Bio-Oil',
    title: 'Dry Skin Gel',
    subtitle: 'IG Reels — 158K views, 10.5M reach (paid amplified)',
    year: '2025',
    sampleIds: ['bio-oil-dry-skin-reels-insight'],
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
