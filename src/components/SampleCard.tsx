import { useState } from 'react'
import { motion } from 'framer-motion'
import { BRAND_LOGOS } from '../data/brands'
import PdfThumbnail from './PdfThumbnail'
import type { Sample } from '../data/samples'

interface Props {
  sample: Sample
  accentColor: string
  onCaseStudyOpen?: (id: string) => void
}

export default function SampleCard({ sample, accentColor, onCaseStudyOpen }: Props) {
  const [logoFailed, setLogoFailed] = useState(false)
  const brandLogo = BRAND_LOGOS[sample.brand]

  const handleOpen = () => {
    if (sample.type === 'case-study' && sample.caseStudyId) {
      onCaseStudyOpen?.(sample.caseStudyId)
      return
    }
    if (sample.file) window.open(sample.file, '_blank', 'noopener')
    else if (sample.url) window.open(sample.url, '_blank', 'noopener')
  }

  const typeLabel: Record<string, string> = {
    pdf: 'PDF Document',
    image: 'Image',
    link: 'Link',
    video: 'Video',
    'case-study': 'Case Study',
  }

  const TypeIcon = () => {
    if (sample.type === 'pdf') return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
    if (sample.type === 'link') return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    )
  }

  const LogoCover = ({ children }: { children?: React.ReactNode }) => (
    <div className="sample-card-top sample-card-top--logo">
      {brandLogo && !logoFailed
        ? <img src={brandLogo} alt={sample.brand} className="sample-card-logo" onError={() => setLogoFailed(true)} />
        : children
      }
    </div>
  )

  const previewEl = sample.type === 'case-study'
    ? (
      <div className="sample-card-top sample-card-top--case-study" style={{ background: accentColor }}>
        {brandLogo && !logoFailed && (
          <img src={brandLogo} alt={sample.brand} className="sample-card-logo sample-card-logo--case-study" onError={() => setLogoFailed(true)} />
        )}
        {(!brandLogo || logoFailed) && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        )}
        <span className="case-study-badge">Case Study</span>
      </div>
    )
    : sample.type === 'image' && sample.file
    ? (
      <div className="sample-card-preview" style={{ position: 'relative' }}>
        <img src={sample.file} alt={sample.title} className="sample-card-preview sample-card-preview--img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        {brandLogo && !logoFailed && (
          <img src={brandLogo} alt={sample.brand} className="sample-card-logo-badge" onError={() => setLogoFailed(true)} />
        )}
      </div>
    )
    : sample.type === 'pdf' && sample.file
    ? (
      <div style={{ position: 'relative' }}>
        <PdfThumbnail file={sample.file} className="sample-card-preview" />
        {brandLogo && !logoFailed && (
          <img src={brandLogo} alt={sample.brand} className="sample-card-logo-badge" onError={() => setLogoFailed(true)} />
        )}
      </div>
    )
    : sample.thumbnail
    ? <img src={sample.thumbnail} alt={sample.title} className="sample-card-preview sample-card-preview--img" />
    : (
      <LogoCover>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.6 }}>
          <div style={{ background: accentColor, borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TypeIcon />
          </div>
        </div>
      </LogoCover>
    )

  return (
    <motion.button
      className="sample-card"
      onClick={handleOpen}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {previewEl}
      <div className="sample-card-body">
        <div className="sample-card-brand">{sample.brand}</div>
        <h4 className="sample-card-title">{sample.title}</h4>
      </div>
      <div className="sample-card-footer">
        {sample.year && <span className="sample-card-year">{sample.year}</span>}
        <span className="sample-card-type">{typeLabel[sample.type] ?? sample.type}</span>
        <span className="sample-card-open" style={{ color: accentColor }}>View →</span>
      </div>
    </motion.button>
  )
}
