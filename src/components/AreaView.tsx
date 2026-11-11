import { motion } from 'framer-motion'
import type { FolderData, SectionId } from '../data/sections'
import { SECTION_CONTENT } from '../data/sections'
import { getSamples, type Sample } from '../data/samples'
import PdfThumbnail from './PdfThumbnail'

interface Props {
  sectionId: SectionId
  areaIndex: number
  folder: FolderData
  onClose: () => void
}

function SampleCard({ sample, accentColor }: { sample: Sample; accentColor: string }) {
  const handleOpen = () => {
    if (sample.file) window.open(sample.file, '_blank', 'noopener')
    else if (sample.url) window.open(sample.url, '_blank', 'noopener')
  }

  const typeLabel: Record<string, string> = {
    pdf: 'PDF Document',
    image: 'Image',
    link: 'Link',
    video: 'Video',
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

  const previewEl = sample.type === 'pdf' && sample.file
    ? <PdfThumbnail file={sample.file} className="sample-card-preview" />
    : sample.type === 'image' && sample.file
    ? <img src={sample.file} alt={sample.title} className="sample-card-preview sample-card-preview--img" />
    : (
      <div className="sample-card-top" style={{ background: accentColor }}>
        <TypeIcon />
      </div>
    )

  return (
    <motion.button
      className="sample-card"
      onClick={handleOpen}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Preview — PDF first page, image, or fallback icon */}
      {previewEl}

      {/* Body */}
      <div className="sample-card-body">
        <div className="sample-card-brand">{sample.brand}</div>
        <h4 className="sample-card-title">{sample.title}</h4>
      </div>

      {/* Footer */}
      <div className="sample-card-footer">
        {sample.year && <span className="sample-card-year">{sample.year}</span>}
        <span className="sample-card-type">{typeLabel[sample.type] ?? sample.type}</span>
        <span className="sample-card-open" style={{ color: accentColor }}>View →</span>
      </div>
    </motion.button>
  )
}


export default function AreaView({ sectionId, areaIndex, folder, onClose }: Props) {
  const content = SECTION_CONTENT[sectionId]
  const area = content.areas[areaIndex]
  const areaNum = String(areaIndex + 1).padStart(2, '0')
  const samples = getSamples(sectionId, areaIndex)


  return (
    <motion.div
      className="area-overlay"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="area-overlay-header" style={{ background: folder.color, color: folder.textColor }}>
        <div className="area-overlay-inner">
          <div className="area-breadcrumb">
            <motion.button
              className="area-back"
              style={{ color: folder.textColor, borderColor: `${folder.textColor}30` }}
              onClick={onClose}
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H5m7-7-7 7 7 7" />
              </svg>
              {content.headline}
            </motion.button>
          </div>

          <div className="area-overlay-meta">
            <span className="area-overlay-num">{folder.number}.{areaNum}</span>
          </div>
          <h2 className="area-overlay-title">{area.title}</h2>
          <p className="area-overlay-desc">{area.body}</p>
        </div>
      </div>

      {/* Samples */}
      <div className="area-samples-body">
        <div className="area-samples-header">
          <h3 className="area-samples-label">Work Samples</h3>
          <span className="area-samples-count">
            {samples.length > 0 ? `${samples.length} sample${samples.length > 1 ? 's' : ''}` : 'No samples yet'}
          </span>
        </div>

        <div className="samples-grid">
          {/* Real samples */}
          {samples.map((sample, i) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <SampleCard sample={sample} accentColor={folder.color} />
            </motion.div>
          ))}

        </div>
      </div>
    </motion.div>
  )
}
