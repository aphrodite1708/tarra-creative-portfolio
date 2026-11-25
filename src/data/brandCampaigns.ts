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
      'bio-oil-skincare-oil-natural-brief-alt',
      'bio-oil-skincare-oil-natural-ugc',
      'bio-oil-skincare-oil-natural-reels-insight',
      'bio-oil-skincare-oil-natural-stories-insight',
    ],
  },

  // ── BODimax ──────────────────────────────────────────────────
  {
    id: 'bodimax-campaign',
    brand: 'BODimax',
    title: 'BODimax — Brand Campaign',
    subtitle: 'IG Stories creator activation',
    year: '2024',
    sampleIds: [
      'bodimax-kol-brief',
      'bodimax-ugc-1',
    ],
  },

  // ── Iswhite ──────────────────────────────────────────────────
  {
    id: 'iswhite-body-mask-home-spa',
    brand: 'Iswhite',
    title: 'Iswhite — Body Mask "Home Spa Day at Home" Campaign',
    subtitle: '1x TikTok / Reels · Iswhite Body Mask · home spa routine · brighten, moisturize & even skin tone',
    year: '2025',
    sampleIds: [
      'iswhite-body-mask-storyline',
      'iswhite-body-mask-ugc-1',
    ],
  },

  // ── Asthin ───────────────────────────────────────────────────
  {
    id: 'asthin-force-tiktok-30-is-new-20',
    brand: 'Asthin',
    title: 'Asthin Force 12 — "30 is the New 20" TikTok Campaign',
    subtitle: '1x TikTok · Astaxanthin 12mg skin supplement · 248K views · 217.9K reach · 868 saves · @ashtinforce.id',
    year: '2025',
    sampleIds: [
      'asthin-force-kol-brief',
      'asthin-force-tiktok-storyline',
      'asthin-force-tiktok-insight',
      'asthin-force-tiktok-ugc-1',
    ],
  },

  // ── KIVA ─────────────────────────────────────────────────────
  {
    id: 'kiva-anniversary-reels',
    brand: 'KIVA',
    title: 'KIVA Beauty — 1st Anniversary "Disco Glam Look" Campaign',
    subtitle: '1x IG Reels · Stain Me Liptint + Intense Precision Jetliner · 30.4K plays · 20.2K reach · #K1VAANNIVERSARY',
    year: '2024',
    sampleIds: [
      'kiva-anniversary-kol-brief',
      'kiva-anniversary-reels-insight',
      'kiva-anniversary-ugc-1',
    ],
  },

  // ── BI·ES ────────────────────────────────────────────────────
  {
    id: 'bies-ig-stories-year-end-sale',
    brand: 'BI·ES',
    title: 'BI·ES — Year End Sale IG Stories Campaign',
    subtitle: 'European perfumery — Golden Woman + Blossom Garden Gift Set · Year End Sale up to 50% · December 2022',
    year: '2022',
    sampleIds: [
      'bies-ig-stories-kol-brief',
      'bies-product-knowledge',
      'bies-ig-stories-ugc-1',
      'bies-ig-stories-ugc-2',
      'bies-ig-stories-ugc-3',
    ],
  },

  // ── Skinmurch ────────────────────────────────────────────────
  {
    id: 'skinmurch-retinal-2-ig-stories',
    brand: 'Skinmurch',
    title: 'Skinmurch — MATC Retinal "No Editing At All" IG Stories Campaign',
    subtitle: 'IG Story Session · @astaririri · 38.9K views · 36K reach · 325 sticker taps · before-after husband skin result · "muka e bojo"',
    year: '2025',
    sampleIds: [
      'skinmurch-retinal-2-kol-brief',
      'skinmurch-matc-retinal-insight',
      'skinmurch-retinal-2-ugc-1',
      'skinmurch-matc-retinal-before-after',
    ],
  },

  {
    id: 'skinmurch-matc-boosting-retinal',
    brand: 'Skinmurch',
    title: 'Skinmurch — MATC Boosting Retinal Chroma Version Campaign',
    subtitle: 'Product brief & education · MATC Boosting Retinal Chroma · beginner retinal tips · sandwich technique · retinal layering guide',
    year: '2024',
    sampleIds: [
      'skinmurch-matc-retinal-brief',
      'skinmurch-matc-retinal-insight',
      'skinmurch-matc-retinal-ugc-1',
      'skinmurch-matc-retinal-ugc-2',
      'skinmurch-matc-retinal-ugc-3',
      'skinmurch-matc-retinal-before-after',
    ],
  },

  // ── Cultusia ─────────────────────────────────────────────────
  {
    id: 'cultusia-natural-color-hair-dye',
    brand: 'Cultusia',
    title: 'Cultusia — Natural Color Hair Dye Campaign',
    subtitle: 'KOL brief · Cultusia Natural Color with Olive Oil + Keratin · 6 shades · 30-min at-home hair coloring · "Unleash Your True Color"',
    year: '2024',
    sampleIds: [
      'cultusia-natural-color-kol-brief',
      'cultusia-natural-color-ugc-1',
    ],
  },

  // ── BIOAQUA ──────────────────────────────────────────────────
  {
    id: 'bioaqua-doraemon-sheetmask',
    brand: 'BIOAQUA',
    title: 'BIOAQUA × Doraemon — Limited Edition Sheet Mask',
    subtitle: 'Mega-Macro TikTok — PR unboxing + Super Brand Day #BIOAQUAxDoraemon',
    year: '2024',
    sampleIds: [
      'bioaqua-doraemon-kol-brief',
      'bioaqua-doraemon-pr-package-visual',
      'bioaqua-doraemon-sheetmask-ugc',
    ],
  },

  {
    id: 'bioaqua-nayeon-marsturizer',
    brand: 'BIOAQUA',
    title: 'Nayeon Skincare — 8x Ceramide Marsturizer',
    subtitle: 'Product knowledge · MARSturizer™ ingredient · skin barrier + hydration',
    year: '2023',
    sampleIds: [
      'bioaqua-marsturizer-prod-know',
      'bioaqua-marsturizer-ugc',
    ],
  },

  {
    id: 'bioaqua-retinol-6x-gentle-a',
    brand: 'BIOAQUA',
    title: 'BIOAQUA — 6X Gentle-A Retinal Serum TikTok Campaign',
    subtitle: 'TikTok Macro-Mega · Face yoga + retinol review · Slow-release encapsulation · Golden Formula · BIOAQUA Protection skin insurance · #BIOAQUA #RightSkincare #RealBeauty',
    year: '2024',
    sampleIds: [
      'bioaqua-retinol-6x-gentle-a-brief',
      'bioaqua-retinol-ugc-1',
      'bioaqua-retinol-ugc-2',
      'bioaqua-retinol-ugc-3',
    ],
  },

  // ── Make Over ────────────────────────────────────────────────
  {
    id: 'makeover-powerstay-glazed-lips',
    brand: 'Make Over',
    title: 'Make Over — Powerstay Glazed Lock Lip Pigment TikTok Campaign',
    subtitle: 'TikTok Mega · 24H Uncrackable challenge · 12 shades · 20K views · 2,081 likes · 15,216 viewers · 92% non-followers · 80% female audience · 92.6% Indonesia',
    year: '2023',
    sampleIds: [
      'makeover-glazed-lips-brief',
      'makeover-glazed-lips-insight',
      'makeover-glazed-lips-storyline',
      'makeover-glazed-lips-ugc-1',
    ],
  },

  // ── HaruHaru Wonder ──────────────────────────────────────────
  {
    id: 'haruharu-wonder-influencer-campaign',
    brand: 'HaruHaru Wonder',
    title: 'HaruHaru Wonder — Influencer Campaign',
    subtitle: 'KOL influencer brief · Black Rice skincare line · IG Stories / Reels activation',
    year: '2024',
    sampleIds: [
      'haruharu-wonder-influencer-brief',
      'haruharu-wonder-ugc-1',
    ],
  },

  // ── Pratista ─────────────────────────────────────────────────
  {
    id: 'pratista-hyalu-hydrating-toner',
    brand: 'Pratista',
    title: 'Pratista — Hyalu Hydrating Toner Campaign',
    subtitle: 'KOL campaign · Hyalu Hydrating Toner · IG Reels activation',
    year: '2025',
    sampleIds: [
      'pratista-hyalu-hydrating-toner-storyline',
      'pratista-hyalu-hydrating-toner-insight',
      'pratista-hyalu-hydrating-toner-ugc-1',
      'pratista-hyalu-hydrating-toner-ugc-2',
      'pratista-hyalu-hydrating-toner-ugc-3',
    ],
  },

  // ── Tokaed ───────────────────────────────────────────────────
  {
    id: 'tokaed-triangle-bra-pad',
    brand: 'Tokaed',
    title: 'Tokaed — Triangle Bra Pad Campaign',
    subtitle: 'KOL brief · Triangle Bra Pad · creator activation',
    year: '2025',
    sampleIds: [
      'tokaed-triangle-bra-pad-brief',
      'tokaed-triangle-bra-pad-ugc-1',
      'tokaed-triangle-bra-pad-ugc-2',
      'tokaed-triangle-bra-pad-ugc-3',
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

  // ── Collagena ─────────────────────────────────────────────────
  {
    id: 'collagena-shk-billboard-teaser',
    brand: 'Collagena',
    title: 'Susu Awet Muda — SHK Billboard Teaser',
    subtitle: '"K-drama enthusiast" GRWM × Song Hye Kyo billboard at Bundaran HI · 1.2M views',
    year: '2024',
    sampleIds: [
      'collagena-shk-billboard-teaser-brief',
      'collagena-shk-billboard-teaser-insight',
      'collagena-shk-billboard-teaser-igs-ugc',
    ],
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
      'eileen-grace-jelly-mask-insight',
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
    sampleIds: ['eileen-grace-ig-stories-brief', 'eileen-grace-ig-stories-insight', 'eileen-grace-fixed-script'],
  },

  // ── ElsheSkin ─────────────────────────────────────────────────
  {
    id: 'elsheskin-radiant-advance-serum',
    brand: 'ElsheSkin',
    title: 'Radiant Advance Serum — Brightening',
    subtitle: '2-set IG Stories · 43,791 total views · 478 link clicks · 18 brightening agents',
    year: '2024',
    sampleIds: [
      'elsheskin-radiant-advance-igs-brief',
      'elsheskin-radiant-advance-before-after',
      'elsheskin-radiant-advance-igs-ugc',
    ],
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
    subtitle: '"Morning Rush" Working Mom TikTok — 70,642 views · 90% non-followers',
    year: '2024',
    sampleIds: [
      'energen-1week-challenge-kol-brief',
      'energen-1week-challenge-reels-script',
      'energen-1week-challenge-reels-script-creator',
      'energen-1week-challenge-tiktok-ugc',
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
      'erha-active-light-sunscreen-ugc-2',
    ],
  },

  {
    id: 'erha-reels-storyline',
    brand: 'Erha',
    title: 'Erha — IG Reels Storyline',
    subtitle: 'IG Reels content storyline · creator script and scene breakdown for Erha skincare campaign',
    year: '2025',
    sampleIds: [
      'erha-reels-storyline-brief',
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
  {
    id: 'g2g-perfect-cover-glow-cushion',
    brand: 'G2G',
    title: 'Perfect Cover Glow Cushion',
    subtitle: '"Makeup Kaca" glowing finish · HIGH COVERAGE 1 swipe · NO CRACK NO CREASING · 6 shades · 99K · #SelingkuhKeCushionLain',
    year: '2025',
    sampleIds: [
      'g2g-pgc-kol-brief',
      'g2g-pgc-brief-visual',
    ],
  },

  // ── Garnier ──────────────────────────────────────────────────
  {
    id: 'garnier-bright-complete-3',
    brand: 'Garnier',
    title: 'Bright Complete Serum Cleanser — Re-Engaged KOLs',
    subtitle: 'KOL re-engagement — January push, #GarnierCleanserSecerahSerum, 1 tube = 1 botol serum',
    year: '2025',
    sampleIds: [
      'garnier-bright-complete-3-kol-brief',
      'garnier-bright-complete-3-storyline',
      'garnier-bright-complete-3-ugc-1',
    ],
  },
  {
    id: 'garnier-uv-cooling',
    brand: 'Garnier',
    title: 'Super UV Cooling Watergel Sunscreen — IG Reels',
    subtitle: 'KOL IG Reels — #AntiSunspiracy, SPF50+ PA++++, -2°C cooling reveal, winter outfit challenge concept, Ramadan context',
    year: '2025',
    sampleIds: [
      'garnier-uv-cooling-kol-brief',
      'garnier-uv-cooling-storyline',
      'garnier-uv-cooling-ugc-1',
    ],
  },
  {
    id: 'garnier-serum-cleanser-tiktok',
    brand: 'Garnier',
    title: 'Bright Complete Serum Cleanser — TikTok',
    subtitle: 'KOL TikTok — horror gimmick concept, midnight skincare plot twist, #GarnierCleanserSecerahSerum',
    year: '2025',
    sampleIds: [
      'garnier-serum-cleanser-kol-brief',
      'garnier-serum-cleanser-tiktok-storyline',
      'garnier-serum-cleanser-ugc-2',
    ],
  },
  {
    id: 'garnier-serum-cleanser',
    brand: 'Garnier',
    title: 'Bright Complete Serum Cleanser — IG Reels',
    subtitle: 'KOL Pre-Buzz IG Reels — #GarnierCleanserSecerahSerum, Vitamin C, 1 tube = 1 botol serum, Dec 2024 launch',
    year: '2024',
    sampleIds: [
      'garnier-serum-cleanser-prebuzz-brief-dec',
      'garnier-serum-cleanser-reels-storyline',
      'garnier-serum-cleanser-insight',
      'garnier-serum-cleanser-ugc-1',
    ],
  },
  {
    id: 'garnier-ig-reels',
    brand: 'Garnier',
    title: 'Instagram Reels Campaign',
    subtitle: '57K plays — discovery-led creator content',
    year: '2024',
    sampleIds: ['garnier-reels-insight'],
  },
  {
    id: 'garnier-skin-university-2024',
    brand: 'Garnier',
    title: 'Skin University by L\'Oréal — KOL Event',
    subtitle: 'Prep School dresscode · Green Classroom + Super UV Lounge · Jan 18, 2024, The Brickhall',
    year: '2024',
    sampleIds: [
      'garnier-skin-university-kol-brief',
      'garnier-skin-university-wardrobe',
      'garnier-skin-university-igs-ugc',
      'garnier-skin-university-reels-ugc',
    ],
  },

  // ── Grace and Glow ───────────────────────────────────────────
  {
    id: 'grace-and-glow-sun-body-serum',
    brand: 'Grace and Glow',
    title: 'Grace and Glow — Brightening Sun Body Serum IG Stories Campaign',
    subtitle: 'IG Story Session · @astaririri · SPF 30 PA+++ · Alpha Arbutin + Bearberry · natural tone-up · Rp 30K / 100ml',
    year: '2024',
    sampleIds: [
      'grace-and-glow-sun-body-serum-brief',
      'grace-and-glow-sun-body-serum-ugc-video',
      'grace-and-glow-sun-body-serum-ugc-stories',
    ],
  },

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
      'lazada-keluarga-ada-aja-alazan-ugc',
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
      'mediheal-milk-brightening-ugc-1',
      'mediheal-milk-brightening-ugc-2',
      'mediheal-milk-brightening-ugc-3',
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
    id: 'luxcrime-glass-tinted-lip-balm',
    brand: 'Luxcrime',
    title: 'Glass Tinted Lip Balm',
    subtitle: 'Multi-platform KOL — swatch-first soft-sell launch',
    year: '2024',
    sampleIds: [
      'luxcrime-glass-tinted-lip-balm-kol-brief',
    ],
  },
  {
    id: 'luxcrime-harley-quinn',
    brand: 'Luxcrime',
    title: 'Harley Quinn Limited Edition Collection',
    subtitle: 'Multi-platform KOL — DC collab launch, 3-product tutorial & FOMO angles',
    year: '2024',
    sampleIds: [
      'luxcrime-harley-quinn-kol-brief',
      'luxcrime-harley-quinn-ugc',
    ],
  },
  {
    id: 'luxcrime-hydralight-concealer',
    brand: 'Luxcrime',
    title: 'Instant Cover Hydralight Concealer',
    subtitle: 'Multi-platform KOL — Everyday Favorite & Dupe angles',
    year: '2024',
    sampleIds: [
      'luxcrime-hydralight-concealer-kol-brief',
      'luxcrime-hydralight-concealer-ugc',
    ],
  },
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

  // ── TIRTIR ───────────────────────────────────────────────────
  {
    id: 'tirtir-mask-fit-red-cushion',
    brand: 'TIRTIR',
    title: 'Mask Fit Red Cushion',
    subtitle: 'KOL IG Reels — poreless finish cushion, 17C–37N shade range, gifting activation',
    year: '2024',
    sampleIds: [
      'tirtir-mask-fit-red-cushion-brief',
      'tirtir-crystal-mesh-cushion-shade-chart',
      'tirtir-mask-fit-red-cushion-insight-1',
      'tirtir-mask-fit-red-cushion-insight-2',
      'tirtir-mask-fit-red-cushion-insight-3',
      'tirtir-mask-fit-red-cushion-ugc-1',
      'tirtir-mask-fit-red-cushion-ugc-2',
      'tirtir-lip-shade-feed-post',
    ],
  },

  // ── L'Oréal ──────────────────────────────────────────────────
  {
    id: 'loreal-le-matte-limited-shades-igs',
    brand: "L'Oréal",
    title: 'Infallible Matte Resistance — Limited Shades IG Stories',
    subtitle: 'KOL IG Stories — Shade 105 ombre, conversational review format, Shopee Super Brand Day, #OneBoldSwipe',
    year: '2024',
    sampleIds: [
      'loreal-le-matte-limited-shades-kol-brief',
      'loreal-le-matte-limited-shades-igs-storyline',
      'loreal-le-matte-limited-shades-igs-ugc',
    ],
  },
  {
    id: 'loreal-le-matte-limited-shades',
    brand: "L'Oréal",
    title: 'Infallible Matte Resistance — Limited Shades Ombre',
    subtitle: 'KOL IG Reels — Limited Shade 105 ombre technique, Shopee Super Brand Day, #OneBoldSwipe, Feb 2024',
    year: '2024',
    sampleIds: [
      'loreal-le-matte-limited-shades-kol-brief',
      'loreal-le-matte-limited-shades-storyline',
      'loreal-le-matte-limited-shades-ugc',
    ],
  },
  {
    id: 'loreal-le-matte-resistance',
    brand: "L'Oréal",
    title: 'Le Matte Resistance',
    subtitle: 'KOL IG Stories — 16H liquid lipstick, #ONEBOLDSWIPE, 8 shades, Shopee Payday activation',
    year: '2023',
    sampleIds: [
      'loreal-le-matte-resistance-open-brief',
      'loreal-le-matte-resistance-ugc',
    ],
  },
  {
    id: 'loreal-uv-serum',
    brand: "L'Oréal",
    title: 'UV Defender Sun-Repair Serum',
    subtitle: 'KOL IG Stories — 2-in-1 serum sunscreen launch, SPF50+ PA++++, Shopee activation',
    year: '2023',
    sampleIds: [
      'loreal-uv-serum-open-brief',
      'loreal-uv-serum-insight',
      'loreal-uv-serum-ugc',
    ],
  },

  // ── Maybelline ───────────────────────────────────────────────
  {
    id: 'maybelline-sunkisser',
    brand: 'Maybelline',
    title: 'Sunkisser Blush & Highlighter',
    subtitle: 'Creator UGC — sun-kissed glow activation',
    year: '2024',
    sampleIds: [
      'maybelline-sunkisser-ugc-1',
      'maybelline-sunkisser-ugc-2',
    ],
  },
  {
    id: 'maybelline-ssvi-sauce',
    brand: 'Maybelline',
    title: 'Superstay Vinyl Ink Sauce Edition',
    subtitle: 'TikTok KOL — mukbang torture-test concept, 5-shade limited edition',
    year: '2024',
    sampleIds: [
      'maybelline-music-2022-curation',
      'maybelline-ssvi-sauce-edit-proof',
      'maybelline-ssvi-sauce-ref-storyline',
      'maybelline-ssvi-sauce-shade-food-match',
      'maybelline-ssvi-sauce-storyline',
      'maybelline-ssvi-sauce-ugc',
    ],
  },

  // ── Trueve ───────────────────────────────────────────────────
  {
    id: 'trueve-niacinamax',
    brand: 'Trueve',
    title: 'Niacinamax™ Series',
    subtitle: 'KOL IG Stories — dark spot 3-product system launch, 27K+ views',
    year: '2024',
    sampleIds: [
      'trueve-niacinamax-kol-brief',
      'trueve-niacinamax-tiktok-storyline',
      'trueve-niacinamax-igs-insight',
      'trueve-niacinamax-ugc-1',
      'trueve-niacinamax-ugc-2',
      'trueve-niacinamax-ugc-3',
    ],
  },

  // ── Ariul ────────────────────────────────────────────────────
  {
    id: 'ariul-7days-mask-duo',
    brand: 'Ariul',
    title: '7Days Mask Duo',
    subtitle: 'KOL activation — Duo Power night care, Acne Care & Brightening variants',
    year: '2024',
    sampleIds: [
      'ariul-7days-mask-duo-kol-brief',
    ],
  },
  {
    id: 'ariul-7days-serum',
    brand: 'Ariul',
    title: '7Days Serum',
    subtitle: 'KOL activation — K-Dermatologist formulated, 3 variants',
    year: '2024',
    sampleIds: [
      'ariul-7days-serum-kol-brief',
    ],
  },

  // ── Azarine ──────────────────────────────────────────────────
  {
    id: 'azarine-barrier-moisturizer-series',
    brand: 'Azarine',
    title: 'Barrier Moisturizer Series — IG Story Review',
    subtitle: '"Pertolongan pertama kulit breakout" · 3 variants · MossCellTec™ No.1 · 31.8K reach · 764 link clicks · local pride · #InstantMoist',
    year: '2023',
    sampleIds: [
      'azarine-barrier-moisturizer-igs-brief',
      'azarine-barrier-moisturizer-insight',
      'azarine-barrier-moisturizer-ugc-1',
      'azarine-barrier-moisturizer-ugc-2',
      'azarine-barrier-moisturizer-ugc-3',
      'azarine-barrier-moisturizer-ugc-4',
    ],
  },
  {
    id: 'azarine-sun-care-igs',
    brand: 'Azarine',
    title: 'Sun Care Series — IG Story Review',
    subtitle: '"Masih Jadi Sunscreen Ternyaman Andalan Aku!" · Hydrasoothe Gel SPF45 + Ceraspray SPF50 · 26.9K reach · 136 link clicks · #JuaranyaSunscreen',
    year: '2022',
    sampleIds: [
      'azarine-sun-care-igs-brief',
      'azarine-sun-care-insight',
      'azarine-sun-care-ugc-1',
    ],
  },

  {
    id: 'azarine-twc-porefect-powder',
    brand: 'Azarine',
    title: "It's So Porefect Powder Foundation — TikTok Brand Day Launch",
    subtitle: '"Bedak anti dempul, porefect filter banget!" · 6 shades · Squalane + Ceramide · Instant Pore Blurring · 50% launch discount · August 2024',
    year: '2024',
    sampleIds: [
      'azarine-twc-igs-brief',
      'azarine-twc-ugc-1',
    ],
  },

  {
    id: 'azarine-shopee-super-brand-day',
    brand: 'Azarine',
    title: 'Shopee × Azarine Super Brand Day',
    subtitle: '"No. 1 Juaranya Sunscreen Di Indonesia" · Hydrasoothe Gel SPF45 + Ceraspray SPF50 · Dyson Airwrap giveaway · cashback up to 100K · 4-6 Desember · @shopee_id',
    year: '2023',
    sampleIds: [
      'azarine-shopee-sbd-brief',
      'azarine-shopee-sbd-ugc-1',
    ],
  },

  {
    id: 'azarine-hydrasoothe-size-upgrade',
    brand: 'Azarine',
    title: 'Hydrasoothe Sunscreen Gel — New Size Launch',
    subtitle: '"Juaranya Sunscreen Gel Terlegend" · 100ml + Extra 10ml FREE · 70x pemakaian · Rp115K · UVCAM Test · #SPFMaksimal · ft. Sandy Kristian (Clash of Champions)',
    year: '2024',
    sampleIds: [
      'azarine-hydrasoothe-upgrade-igs-brief',
      'azarine-hydrasoothe-upgrade-ugc-1',
    ],
  },

  {
    id: 'azarine-ceraspray-sunscreen',
    brand: 'Azarine',
    title: 'HydraCool Ceraspray Sunscreen SPF50',
    subtitle: '"No. 1 Sunscreen di Indonesia" · Re-apply Sat-set Anti Ribet · Fine Mist Nozzle · Cooling Sensation · Collagen Water + 7x Ceramide + CICA · Rp65K · ft. Lee Minho',
    year: '2024',
    sampleIds: [
      'azarine-ceraspray-igs-brief',
      'azarine-ceraspray-ugc-1',
      'azarine-ceraspray-ugc-2',
      'azarine-ceraspray-ugc-3',
      'azarine-ceraspray-ugc-4',
    ],
  },

  {
    id: 'azarine-lip-velvet-99',
    brand: 'Azarine',
    title: 'Velvety Lippie Cream — 9.9 Promo',
    subtitle: '"Affordable, ga lengket, super nyaman dipakai" · 8 shades · Hyaluronic Acid + Vit E + Niacinamide · 26.8K reach · 702 link clicks · 47 sticker taps',
    year: '2023',
    sampleIds: [
      'azarine-lip-velvet-igs-brief',
      'azarine-lip-velvet-insight',
      'azarine-lip-velvet-ugc-1',
      'azarine-lip-velvet-ugc-2',
      'azarine-lip-velvet-ugc-3',
      'azarine-lip-velvet-ugc-4',
      'azarine-lip-velvet-anniversary-ugc',
    ],
  },

  {
    id: 'azarine-red-velvet-lazada',
    brand: 'Azarine',
    title: 'Red Velvet × Lazada — Exclusive Makeup Collection',
    subtitle: '"Asli secantik itu" "Makeupnya Red Velvet" · Blush On + Bronzer + Highlighter + Eyeshadow + Brow-cara · 21.1K reach · 630 link clicks · "Unleash Your Facetive On!" · Lazada exclusive · bundle up to 50% off',
    year: '2023',
    sampleIds: [
      'azarine-red-velvet-igs-brief',
      'azarine-red-velvet-insight',
      'azarine-red-velvet-ugc-1',
      'azarine-red-velvet-ugc-2',
      'azarine-red-velvet-ugc-3',
    ],
  },

  {
    id: 'azarine-minions-lippiecable',
    brand: 'Azarine',
    title: 'Azarine × Minions — Lippiecable Balm Series',
    subtitle: '"Stay Lippicable, Bye Chapped Lips!" · Limited edition Minions packaging · 4 shades: Banana Jelly + Caramel Candy + Apple Toffee + Pinky Gummy · Shea Butter + Hyaluronic Acid + 3 Natural Oils · 8 jam Instant Moisturizing · UV Filter · Start from Rp50K · 01–05 Juli 2024',
    year: '2024',
    sampleIds: [
      'azarine-minions-igs-brief',
      'azarine-minions-ugc-1',
    ],
  },

  {
    id: 'azarine-beauty-glamfest',
    brand: 'Azarine',
    title: 'Azarine Beauty Glamfest — 11.11 Sale Campaign',
    subtitle: '"Azarine lagi adain Beauty Glamfest!" · Festival sale November · Discount up to 70% + free GWP · Buy 1 get 1 Lip Velvet Rp59K · Buy TWC free eyeliner Rp75K · Buy eyeshadow gratis liptint Rp65K · IGS Tap Link · 9–11 November 2024',
    year: '2024',
    sampleIds: [
      'azarine-glamfest-igs-brief',
      'azarine-glamfest-insight',
      'azarine-glamfest-ugc-1',
    ],
  },

  {
    id: 'azarine-glow-revolution',
    brand: 'Azarine',
    title: 'Azarine Glow Revolution Series — "The Secret of Glowing Skin"',
    subtitle: 'Full Vitamin C brightening line · Brightening Glow Cleanser + C|White Multi-Acids Toner + Brightening C-Glow Serum + Supreme Glow Moisturizer (NEW) + Hydramax-C Sunscreen Serum SPF50 PA++++ · Symradiance® 399 + Niacinamide + MossCellTec™ No.1 · Instant Hydration 72 hours · Blue Light Protection',
    year: '2024',
    sampleIds: [
      'azarine-glow-revolution-brief',
      'azarine-glow-revolution-pk',
      'azarine-glow-revolution-ugc-1',
    ],
  },

  {
    id: 'azarine-birthday-wish',
    brand: 'Azarine',
    title: 'Special Birthday Wish — Azarine Brand Owner',
    subtitle: 'Personal birthday video for Azarine brand owner · creator-to-brand relationship content · authentic bond beyond campaigns · shows depth of long-term brand partnership',
    year: '2024',
    sampleIds: [
      'azarine-birthday-wish-video',
    ],
  },

  {
    id: 'azarine-ceraspray-reels-ss',
    brand: 'Azarine',
    title: 'Azarine HydraCool Ceraspray — IG Reels + Story Campaign',
    subtitle: 'IG Reels + IG Story dual-format campaign · HydraCool Ceraspray Sunscreen SPF50 PA+++ · Re-apply Sat-set Anti Ribet · Collagen Water + 7× Ceramide + CICA',
    year: '2024',
    sampleIds: [
      'azarine-ceraspray-reels-ss-brief',
    ],
  },

  {
    id: 'azarine-tinted-lippie-cake',
    brand: 'Azarine',
    title: 'Azarine Tinted Lippie Cake — Campaign',
    subtitle: 'KOL campaign brief for Azarine Tinted Lippie Cake · tinted lip product with buildable colour · Azarine Makeup Series',
    year: '2024',
    sampleIds: [
      'azarine-tinted-lippie-cake-brief',
    ],
  },

  // ── Spotify ──────────────────────────────────────────────────
  {
    id: 'spotify-inispotifyaku',
    brand: 'Spotify',
    title: '#InisSpotifyAku — IG Stories',
    subtitle: 'KOL IG Stories — playlist sharing campaign, 55K views · 49K accounts reached · 13 sticker taps @spotifyid · #inispotifyaku',
    year: '2024',
    sampleIds: [
      'spotify-inispotifyaku-brief',
      'spotify-inispotifyaku-insight',
      'spotify-inispotifyaku-ugc-1',
      'spotify-inispotifyaku-ugc-2',
    ],
  },

  // ── Sushiro ──────────────────────────────────────────────────
  {
    id: 'sushiro-grand-menu',
    brand: 'Sushiro',
    title: 'Renewal Grand Menu',
    subtitle: 'KOL IG Reels — 30+ new menu items, "Discover Sushi The Sushiro Way", 177K views · 116K accounts reached',
    year: '2025',
    sampleIds: [
      'sushiro-grand-menu-brief',
      'sushiro-grand-menu-insight',
      'sushiro-grand-menu-ugc',
    ],
  },
  {
    id: 'sushiro-kani-matsuri',
    brand: 'Sushiro',
    title: 'Kani Matsuri — SUSHIRO Hack',
    subtitle: 'KOL IG Reels — seasonal snow crab menu, 106K views · 68K accounts reached',
    year: '2024',
    sampleIds: [
      'sushiro-kol-brief',
      'sushiro-kani-matsuri-insight',
      'sushiro-kani-matsuri-ugc',
    ],
  },
  {
    id: 'sushiro-dakko-merch',
    brand: 'Sushiro',
    title: 'Dakko Sushi Merchandise',
    subtitle: 'KOL IG Reels — collectible merch launch, Ebi Usagi & Ikura Panda characters, 79K+ views',
    year: '2024',
    sampleIds: [
      'sushiro-kol-brief',
      'sushiro-dakko-goods-poster',
      'sushiro-dakko-merch-insight',
      'sushiro-dakko-merch-ugc',
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

  // ── NPURE ────────────────────────────────────────────────────
  {
    id: 'npure-power-series-npd',
    brand: 'NPURE',
    title: 'Power Series NPD Launch — Primer + Powder',
    subtitle: '"Make Up for Healthy Skin" · 5x Power Cover · Skincare-Infused CICA + Salicylic Acid · 5 shades · #NPUREPOWERCOVER',
    year: '2025',
    sampleIds: [
      'npure-power-series-npd-brief',
      'npure-home-gym-product-visual',
      'npure-holiday-package-social',
      'npure-holiday-feed-post',
      'npure-social-media-feed-post',
      'npure-power-series-ugc-1',
      'npure-power-series-ugc-2',
      'npure-power-series-ugc-3',
    ],
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
    title: 'Pearl Brightening Tone Up Cream',
    subtitle: 'IG Stories endorsement — bare-face before/after, Niacinamide + pearl powder, 3 published UGC',
    year: '2025',
    sampleIds: [
      'paxmoly-brightening-tone-up-cream-brief',
      'paxmoly-brightening-tone-up-cream-brief-direction',
      'paxmoly-brightening-tone-up-igs-ugc-1',
      'paxmoly-brightening-tone-up-igs-ugc-2',
      'paxmoly-brightening-tone-up-igs-ugc-3',
    ],
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

  // ── Pepsodent ────────────────────────────────────────────────
  {
    id: 'pepsodent-sme-2023',
    brand: 'Pepsodent',
    title: 'Sensitive Mineral Expert — H2 2023 SAT',
    subtitle: '1x IG Reels on @alfamart (3.3M) · #100PersenYakinBebasNgilu · Unilever Studio',
    year: '2023',
    sampleIds: [
      'pepsodent-sme-kol-brief',
    ],
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
      'ponds-uv-miracle-brief-2',
      'ponds-uv-miracle-brief-direction',
      'ponds-uv-miracle-storyline',
      'ponds-uv-miracle-reels-script-creator',
      'ponds-uv-serum-ugc-photo',
      'ponds-uv-miracle-youtube-shorts-insight',
      'ponds-uv-miracle-shorts-insight-2',
      'ponds-uv-miracle-ugc-1',
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
      'pureco-daily-home-detergent-igs-ugc',
    ],
  },

  // ── Putih by Dentist ─────────────────────────────────────────
  {
    id: 'putih-by-dentist-sws',
    brand: 'Putih by Dentist',
    title: 'Signature Whitening Strips (SWS)',
    subtitle: 'Day 1 → Day 8 smile ruler transformation · PAP formula · #GigiPutihAntiRibet',
    year: '2024',
    sampleIds: [
      'putih-by-dentist-sws-prod-guide',
      'putih-by-dentist-sws-thumbnail',
      'putih-by-dentist-sws-ugc-1',
      'putih-by-dentist-sws-ugc-2',
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
      'sculpt-skin-brightening-underarm-ugc',
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

  // ── Sovia Jewelry ────────────────────────────────────────────
  {
    id: 'sovia-jewelry-fashion-ring',
    brand: 'Sovia Jewelry',
    title: 'Fashion Ring — Campaign Branding',
    subtitle: 'IG Stories GRWM · 105,084 views · soft-selling fashion jewelry UGC',
    year: '2024',
    sampleIds: [
      'sovia-jewelry-fashion-ring-brief',
      'sovia-jewelry-fashion-ring-igs-insight',
      'sovia-jewelry-ring-smart-sizer',
      'sovia-jewelry-fashion-ring-igs-ugc',
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
  {
    id: 'tresemme-keratin-smooth-festive',
    brand: 'TRESemmé',
    title: 'Keratin Smooth — Salon Pro Essentials (Festive)',
    subtitle: '"Unstoppable Salon Smooth Hair, No Appointment Needed" — Ramadan 2025',
    year: '2025',
    sampleIds: [
      'tresemme-keratin-smooth-festive-reels-script',
      'tresemme-keratin-smooth-festive-reels-script-creator',
      'tresemme-keratin-smooth-festive-ugc',
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

  // ── Wonderlux ────────────────────────────────────────────────
  {
    id: 'wonderlux-hair-serum',
    brand: 'Wonderlux',
    title: 'Drop Dead GROWGEOUS! Hair Serum & Scalp Serums',
    subtitle: '"Drop Dead GROWGEOUS!" · Densifying Hair Serum + Set the Oil Free! + Calm It Down! Scalp Serums · Organic Pea Sprout Extract · 86% stimulate hair growth in 8 weeks · 32K reach · 657 link clicks · 175 sticker taps · 100% vegan',
    year: '2023',
    sampleIds: [
      'wonderlux-hair-serum-brief',
      'wonderlux-hair-serum-ugc-1',
      'wonderlux-hair-serum-ugc-2',
      'wonderlux-hair-serum-ugc-3',
      'wonderlux-hair-serum-ugc-4',
    ],
  },

  {
    id: 'wonderlux-shampoo',
    brand: 'Wonderlux',
    title: 'Drop Dead GROWGEOUS! Hair Densifying Shampoo',
    subtitle: '"Baru tau mereka keluarin shampoonya!!" · 3X Formula · Vitaminized Peptide Complex · 68% meningkatkan kelebatan rambut · 0% SLS/SLES · Mild Surfactant · Dermatologist Tested · paired with GROWGEOUS! Serum · promo WONDXRIRI 50% off',
    year: '2024',
    sampleIds: [
      'wonderlux-shampoo-kol-brief',
      'wonderlux-shampoo-ugc-1',
      'wonderlux-shampoo-ugc-2',
      'wonderlux-shampoo-ugc-3',
    ],
  },

  {
    id: 'wonderlux-glambar-teaser',
    brand: 'Wonderlux',
    title: 'Barbie × Wonderlux — Glam Bar Pre-Launch Teaser',
    subtitle: '"In Collaboration with Barbie™" · Pre-launch teaser activation · full Barbie OOTD pink styling · announcing Extra Hold SPRAY SETTER! + HAIR MISTION! × Barbie · Mattel-approved collab · hairstyling experience sent to KOL homes with expert hairstylist',
    year: '2025',
    sampleIds: [
      'wonderlux-glambar-teaser-brief',
      'wonderlux-glambar-teaser-ugc-1',
    ],
  },

  {
    id: 'wonderlux-glambar-barbie',
    brand: 'Wonderlux',
    title: 'Barbie × Wonderlux — Glam Bar',
    subtitle: '"Feels Like Living in a Barbie World" · Extra Hold Spray Setter! + Hair Mistion! Enchanted Floral & Eternal Bloom · hairstyling experience · 12 jam++ hold · 3-in-1 UV/Polusi/Bakteri protection · 6 jam++ luxury fragrance · #BarbiexWonderlux',
    year: '2025',
    sampleIds: [
      'wonderlux-glambar-kol-brief',
      'wonderlux-glambar-ugc-1',
    ],
  },

  {
    id: 'wonderlux-campaign-2',
    brand: 'Wonderlux',
    title: 'Wonderlux — Campaign 2 KOL Brief',
    subtitle: 'Wonderlux Campaign 2 · KOL brief for the second campaign in the Wonderlux hair care series',
    year: '2024',
    sampleIds: [
      'wonderlux-campaign-2-brief',
      'wonderlux-campaign-2-insight',
    ],
  },

  {
    id: 'wonderlux-glass-hair',
    brand: 'Wonderlux',
    title: 'Wonderlux Glass Hair — Campaign',
    subtitle: 'Glass Hair styling campaign · ultra-smooth, high-shine glass hair finish · Wonderlux hair styling product line',
    year: '2025',
    sampleIds: [
      'wonderlux-glass-hair-brief',
    ],
  },

  {
    id: 'azarine-skinprotector-kids',
    brand: 'Azarine',
    title: 'Azarine SkinProtector Kids — Campaign',
    subtitle: 'KOL brief for Azarine SkinProtector Kids · skincare protection product line for children',
    year: '2024',
    sampleIds: [
      'skinprotector-kids-brief',
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

  // ── Yellow Fit Kitchen ───────────────────────────────────────
  {
    id: 'yellowfit-mega-weekend-special-month',
    brand: 'Yellow Fit Kitchen',
    title: 'Mega Weekend — September Special Month',
    subtitle: 'IG Stories gimmick — delivery unboxing + legendary menu comeback after 5 years',
    year: '2022',
    sampleIds: [
      'yellowfit-mega-weekend-igs-brief',
      'yellowfit-mega-weekend-special-menu',
      'yellowfit-mega-weekend-special-menu-campaigns',
      'yellowfit-mega-weekend-igs-ugc',
    ],
  },

  {
    id: 'yellowfit-indonesia-signature-special-month',
    brand: 'Yellow Fit Kitchen',
    title: 'Special Month Oktober — Indonesia Signature Menu',
    subtitle: 'IG Stories food review — 3-slide authentic tasting campaign, legendary menu comeback',
    year: '2023',
    sampleIds: [
      'yellowfit-indonesia-signature-igs-brief',
      'yellowfit-indonesia-signature-igs-ugc',
    ],
  },

  {
    id: 'yellowfit-npure-healthy-skin-package',
    brand: 'Yellow Fit Kitchen',
    title: "Yellow Fit Kitchen × N'Pure — Healthy Skin Package",
    subtitle: '"Collab of the year" — diet catering × skincare · December, free CICA Acne Clear Pad',
    year: '2023',
    sampleIds: [
      'yellowfit-npure-healthy-skin-brief',
      'yellowfit-npure-healthy-skin-igs-ugc',
    ],
  },

  // ── Bio-Oil (additional) ─────────────────────────────────────
  {
    id: 'bio-oil-dry-skin-gel',
    brand: 'Bio-Oil',
    title: 'Dry Skin Gel — Storytelling Campaign',
    subtitle: '"Two Friends, Two Skin Stories" · 158K views · 10.5M reach · oil-base gel pioneer · #BioOilDrySkinGel',
    year: '2025',
    sampleIds: [
      'bio-oil-dry-skin-reels-insight',
      'bio-oil-dry-skin-gel-reels-insight-2',
      'bio-oil-dry-skin-gel-stories-insight',
      'bio-oil-dry-skin-gel-kol-brief',
      'bio-oil-dry-skin-gel-storyline',
      'bio-oil-dry-skin-gel-ugc-1',
      'bio-oil-dry-skin-gel-ugc-2',
      'bio-oil-dry-skin-gel-ugc-3',
      'bio-oil-dry-skin-gel-ugc-4',
    ],
  },
  {
    id: 'bio-oil-body-lotion',
    brand: 'Bio-Oil',
    title: 'Body Lotion — Launch Campaign',
    subtitle: '"Husband Interviews Wife" Storytelling · post-pregnancy skin journey · daily body care · "My skin saviour!"',
    year: '2025',
    sampleIds: [
      'bio-oil-body-lotion-kol-brief',
      'bio-oil-body-lotion-insight',
      'bio-oil-body-lotion-insight-2',
      'bio-oil-body-lotion-storyline',
      'bio-oil-body-lotion-ugc-1',
      'bio-oil-body-lotion-ugc-2',
      'bio-oil-body-lotion-ugc-3',
      'bio-oil-body-lotion-ugc-4',
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
