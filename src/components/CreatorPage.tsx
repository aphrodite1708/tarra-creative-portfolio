import { motion } from 'framer-motion'

interface Props {
  onClose: () => void
}

// Placeholder slots — user will drop real screenshot images here
const VIDEO_PLACEHOLDERS = [
  { label: 'Reel · 729K views', brand: 'Safi Age Defy', note: 'Screenshot coming soon' },
  { label: 'Reel · 271K plays', brand: 'Lazada × Keluarga Ada Aja', note: 'Screenshot coming soon' },
  { label: 'Story · 82K views', brand: 'Sculpt Skin', note: 'Screenshot coming soon' },
  { label: 'Reel · High-performing', brand: 'Skintific', note: 'Screenshot coming soon' },
  { label: 'Reel · High-performing', brand: 'Embryolisse', note: 'Screenshot coming soon' },
  { label: 'Reel · High-performing', brand: 'Beauty of Joseon', note: 'Screenshot coming soon' },
]

export default function CreatorPage({ onClose }: Props) {
  return (
    <motion.div
      className="page-overlay creator-page-overlay"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="page-header" style={{ background: '#7A5244', color: '#F7F1E9' }}>
        <div className="page-header-inner">
          <div className="page-header-meta">
            <span className="page-header-eyebrow">Portfolio</span>
          </div>
          <h2 className="page-header-title">Creator Work</h2>
          <p className="page-header-intro">
            Strategy, scripts, and content that connects with audiences —<br />
            UGC, influencer development, and high-performing content.
          </p>
          <motion.button
            className="section-close"
            style={{ color: '#F7F1E9', borderColor: 'rgba(247,241,233,0.25)' }}
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

      {/* Video screenshot grid */}
      <div className="creator-video-wall">
        <div className="creator-video-label">High-performing content</div>
        <p className="creator-video-note-top">
          Screenshots of published content with millions of views — coming soon.
        </p>
        <div className="creator-video-grid">
          {VIDEO_PLACEHOLDERS.map((item, i) => (
            <motion.div
              key={i}
              className="creator-video-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="creator-video-thumb">
                <div className="creator-video-thumb-inner">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
                    <polygon points="5,3 19,12 5,21" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </div>
              <div className="creator-video-info">
                <span className="creator-video-brand">{item.brand}</span>
                <span className="creator-video-stat">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="creator-stats">
        <div className="creator-stats-inner">
          <div className="creator-stat-item">
            <span className="creator-stat-num">1M+</span>
            <span className="creator-stat-label">Total content views managed</span>
          </div>
          <div className="creator-stat-item">
            <span className="creator-stat-num">50+</span>
            <span className="creator-stat-label">Creators developed & briefed</span>
          </div>
          <div className="creator-stat-item">
            <span className="creator-stat-num">3+</span>
            <span className="creator-stat-label">Years in creator strategy</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-strip" style={{ background: '#F7F1E9' }}>
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
    </motion.div>
  )
}
