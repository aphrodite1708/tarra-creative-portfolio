import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { BRAND_LOGOS } from '../data/brands'
import PdfThumbnail from './PdfThumbnail'
import type { Sample } from '../data/samples'

function getDriveFileId(url: string): string | null {
  const m = url.match(/\/file\/d\/([^/?#]+)/)
  return m ? m[1] : null
}

interface Props {
  sample: Sample
  accentColor: string
  onCaseStudyOpen?: (id: string) => void
}

export default function SampleCard({ sample, accentColor, onCaseStudyOpen }: Props) {
  const [logoFailed, setLogoFailed] = useState(false)
  const [thumbFailed, setThumbFailed] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const brandLogo = BRAND_LOGOS[sample.brand]

  const driveFileId = sample.type === 'link' && sample.url ? getDriveFileId(sample.url) : null
  const driveThumbnail = driveFileId ? `https://drive.google.com/thumbnail?id=${driveFileId}&sz=w400` : null
  const driveEmbed = driveFileId ? `https://drive.google.com/file/d/${driveFileId}/preview` : null

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
    link: 'Published UGC',
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

  // Link (UGC) cards — video thumbnail + in-site playback modal
  if (sample.type === 'link') {
    return (
      <>
        <motion.button
          className="sample-card sample-card--link"
          onClick={() => driveEmbed ? setVideoOpen(true) : handleOpen()}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="sample-card-link-top">
            {driveThumbnail && !thumbFailed ? (
              <>
                <img
                  src={driveThumbnail}
                  alt={sample.title}
                  className="sample-card-link-thumb"
                  onError={() => setThumbFailed(true)}
                />
                <div className="sample-card-link-play sample-card-link-play--over">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </>
            ) : (
              <>
                {brandLogo && !logoFailed && (
                  <img src={brandLogo} alt={sample.brand} className="sample-card-link-logo" onError={() => setLogoFailed(true)} />
                )}
                <div className="sample-card-link-play">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </>
            )}
          </div>
          <div className="sample-card-link-body">
            <div className="sample-card-link-meta">
              <span className="sample-card-link-badge">Published UGC</span>
              {sample.year && <span className="sample-card-year" style={{ opacity: 0.5 }}>{sample.year}</span>}
            </div>
            <h4 className="sample-card-title" style={{ fontSize: '0.9rem' }}>{sample.title}</h4>
            <span className="sample-card-link-cta">{driveEmbed ? 'Play video ▶' : 'Watch video →'}</span>
          </div>
        </motion.button>

        {videoOpen && driveEmbed && createPortal(
          <div className="video-modal-overlay" onClick={() => setVideoOpen(false)}>
            <div className="video-modal-box" onClick={e => e.stopPropagation()}>
              <button className="video-modal-close" onClick={() => setVideoOpen(false)} aria-label="Close video">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="video-modal-title">{sample.title}</div>
              <div className="video-modal-frame-wrap">
                <iframe
                  src={driveEmbed}
                  className="video-modal-iframe"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              <a href={sample.url} target="_blank" rel="noopener noreferrer" className="video-modal-external">
                Open in Google Drive →
              </a>
            </div>
          </div>,
          document.body
        )}
      </>
    )
  }

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
