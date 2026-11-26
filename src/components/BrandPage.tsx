import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND_LOGOS } from '../data/brands'
import BrandSamplesView from './BrandSamplesView'

// Size tiers — determines card/logo size
const TIER_1 = [
  'Disney Cruise Line', "L'Oréal", 'Garnier', "Pond's", 'Maybelline', 'Make Over',
  'Safi', 'Wardah', 'Lazada', 'Shopee', 'Lux', 'Dove', 'Paddle Pop', 'Hansaplast',
  'Skintific', 'Erha', 'Bio-Oil', 'TIRTIR', 'Beauty of Joseon', 'Spotify', 'Google', 'Sushiro',
]

const TIER_2 = [
  'Energen', 'Embryolisse', 'Nutrilon Royal', 'TRESemmé', "Natur-E", 'BLP Beauty',
  'Dew Me', 'Mediheal', 'Kinohimitsu', 'Jumiso',
  'Jacquelle', 'Herbilogy', 'Nuface', 'Firstlab', 'Judydoll', 'Emelyne',
  'MS Glow', 'Make Over', 'Flimty', 'Pratista',
]

// All other brands in BRAND_LOGOS → tier 3

interface Props {
  onClose: () => void
}

export default function BrandPage({ onClose }: Props) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const allBrandNames = Object.keys(BRAND_LOGOS)

  const tier2 = TIER_2.filter(n => allBrandNames.includes(n) && !TIER_1.includes(n))
  const tier3 = allBrandNames.filter(n => !TIER_1.includes(n) && !TIER_2.includes(n))

  // Also include tier-1 brands not yet in BRAND_LOGOS (placeholder text)
  const tier1WithMissing = TIER_1.map(n => n)

  return (
    <motion.div
      className="page-overlay brand-page-overlay"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="page-header" style={{ background: '#DEC5C8', color: '#641F36' }}>
        <div className="page-header-inner">
          <div className="page-header-meta">
            <span className="page-header-eyebrow">Portfolio</span>
          </div>
          <h2 className="page-header-title">Brand Work</h2>
          <p className="page-header-intro">
            Campaigns & creative work connecting brands with people —<br />
            strategy, influencer partnerships, briefs, scripts, and content.
          </p>
          <motion.button
            className="section-close"
            style={{ color: '#641F36', borderColor: 'rgba(100,31,54,0.25)' }}
            onClick={onClose}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            Back
          </motion.button>
        </div>
      </div>

      {/* Logo wall */}
      <div className="brand-logo-wall">

        {/* Instruction */}
        <div className="brand-logo-instruction">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Click on any brand logo to see my campaign work
        </div>

        {/* Tier 1 — flagship brands */}
        <div className="brand-logo-section">
          <span className="brand-logo-section-label">Featured brands</span>
          <div className="brand-logo-grid brand-logo-grid--t1">
            {tier1WithMissing.map((name, i) => (
              <motion.div
                key={name}
                className="brand-logo-card brand-logo-card--t1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                title={name}
                onClick={() => setSelectedBrand(name)}
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {BRAND_LOGOS[name] ? (
                  <LogoCardImg name={name} />
                ) : (
                  <span className="brand-logo-name brand-logo-name--large">{name}</span>
                )}
                <div className="brand-logo-hover-overlay">View work →</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2 — well-known brands */}
        <div className="brand-logo-section">
          <span className="brand-logo-section-label">Brand partnerships</span>
          <div className="brand-logo-grid brand-logo-grid--t2">
            {tier2.map((name, i) => (
              <motion.div
                key={name}
                className="brand-logo-card brand-logo-card--t2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.4 }}
                title={name}
                onClick={() => setSelectedBrand(name)}
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <LogoCardImg name={name} />
                <div className="brand-logo-hover-overlay">View work →</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 3 — all others */}
        {tier3.length > 0 && (
          <div className="brand-logo-section">
            <span className="brand-logo-section-label">And more</span>
            <div className="brand-logo-grid brand-logo-grid--t3">
              {tier3.map((name, i) => (
                <motion.div
                  key={name}
                  className="brand-logo-card brand-logo-card--t3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.02, duration: 0.35 }}
                  title={name}
                  onClick={() => setSelectedBrand(name)}
                  style={{ cursor: 'pointer' }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <LogoCardImg name={name} />
                  <div className="brand-logo-hover-overlay">View →</div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Results strip */}
      <div className="brand-results">
        <div className="brand-results-inner">
          <div className="brand-results-title">Selected results</div>
          <div className="brand-results-grid">
            <div className="brand-result-item">
              <span className="brand-result-num">729K</span>
              <span className="brand-result-label">Reel views — Safi Age Defy</span>
            </div>
            <div className="brand-result-item">
              <span className="brand-result-num">271K</span>
              <span className="brand-result-label">Reel plays — Lazada × Keluarga Ada Aja</span>
            </div>
            <div className="brand-result-item">
              <span className="brand-result-num">82K</span>
              <span className="brand-result-label">Story views — Sculpt Skin · 1,894 link clicks</span>
            </div>
            <div className="brand-result-item">
              <span className="brand-result-num">50+</span>
              <span className="brand-result-label">Brand campaigns managed end-to-end</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-strip">
        <div className="footer-identity">
          <span className="footer-name">Tarra Ananda</span>
          <span className="footer-sep">·</span>
          <span className="footer-role">Creative Strategist</span>
        </div>
        <div className="footer-links">
          <a href="https://wa.me/6281286302213" target="_blank" rel="noopener noreferrer" className="footer-link">
            WhatsApp
          </a>
          <a href="mailto:tarranandava@gmail.com" className="footer-link">Email</a>
          <a href="https://www.linkedin.com/in/tarra-ananda777/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Brand samples overlay */}
      <AnimatePresence>
        {selectedBrand && (
          <BrandSamplesView
            key={selectedBrand}
            brandName={selectedBrand}
            onClose={() => setSelectedBrand(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Logos whose ink is white/very pale — unreadable on the card's white background,
// so they get a dark backdrop chip instead.
const LIGHT_INK_LOGOS = new Set([
  'TIRTIR', 'G2G', 'HighEnd × MNC', 'OMG', 'Sovia Jewelry',
  'Grace and Glow', 'Kaila Beauté', 'The Originote',
])

function LogoCardImg({ name }: { name: string }) {
  const [failed, setFailed] = useState(false)
  const src = BRAND_LOGOS[name]
  if (!src || failed) return <span className="brand-logo-name">{name}</span>
  const img = <img src={src} alt={name} className="brand-logo-img" onError={() => setFailed(true)} />
  if (LIGHT_INK_LOGOS.has(name)) {
    return <div className="brand-logo-img-dark-chip">{img}</div>
  }
  return img
}
