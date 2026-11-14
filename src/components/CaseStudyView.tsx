import { motion } from 'framer-motion'
import type { FolderData } from '../data/sections'
import { CASE_STUDIES, type CaseStudySample } from '../data/casestudies'
import PdfThumbnail from './PdfThumbnail'

interface Props {
  caseStudyId: string
  folder: FolderData
  onClose: () => void
}

function StageSampleCard({ sample, accentColor }: { sample: CaseStudySample; accentColor: string }) {
  const handleOpen = () => {
    if (sample.file) window.open(sample.file, '_blank', 'noopener')
    else if (sample.url) window.open(sample.url, '_blank', 'noopener')
  }

  const typeLabel: Record<string, string> = {
    pdf: 'PDF',
    image: 'Image',
    link: 'Link',
    video: 'Video',
  }

  const preview = sample.type === 'pdf' && sample.file
    ? <PdfThumbnail file={sample.file} className="cs-sample-preview" />
    : sample.type === 'image' && sample.file
    ? <img src={sample.file} alt={sample.title} className="cs-sample-preview" />
    : sample.thumbnail
    ? <img src={sample.thumbnail} alt={sample.title} className="cs-sample-preview" />
    : (
      <div className="cs-sample-preview--icon" style={{ background: accentColor }}>
        {sample.type === 'link' || sample.type === 'video' ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        )}
      </div>
    )

  return (
    <motion.button
      className="cs-sample-card"
      onClick={handleOpen}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {preview}
      <div className="cs-sample-body">
        <span className="cs-sample-label">{typeLabel[sample.type] ?? sample.type}</span>
        <span className="cs-sample-title">{sample.title}</span>
        <span className="cs-sample-open" style={{ color: accentColor }}>View →</span>
      </div>
    </motion.button>
  )
}

export default function CaseStudyView({ caseStudyId, folder, onClose }: Props) {
  const cs = CASE_STUDIES[caseStudyId]
  if (!cs) return null

  return (
    <motion.div
      className="case-study-overlay"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="case-study-header" style={{ background: folder.color, color: folder.textColor }}>
        <div className="case-study-header-inner">
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
            Back
          </motion.button>
          <div className="case-study-eyebrow">Case Study</div>
          <h2 className="case-study-title">
            {cs.brand}
            {cs.creator && <> <span className="case-study-x">×</span> {cs.creator}</>}
          </h2>
          <div className="case-study-subtitle">
            <span>{cs.campaign}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{cs.timeline}</span>
          </div>
          <div className="case-study-role">{cs.role}</div>
        </div>
      </div>

      {/* Body */}
      <div className="case-study-body">
        <div className="case-study-body-inner">
          {/* Challenge */}
          <div className="case-study-challenge">
            <div className="case-study-section-label">The Challenge</div>
            <p>{cs.challenge}</p>
          </div>

          {/* Stages */}
          <div className="case-study-stages">
            {cs.stages.map((stage, i) => (
              <motion.div
                key={stage.number}
                className="case-study-stage"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="case-study-stage-header">
                  <span className="case-study-stage-num" style={{ color: folder.color }}>{stage.number}</span>
                  <h3 className="case-study-stage-title">{stage.title}</h3>
                </div>
                <p className="case-study-stage-body">{stage.body}</p>
                {stage.samples && stage.samples.length > 0 && (
                  <div className="case-study-stage-samples">
                    {stage.samples.map((sample) => (
                      <StageSampleCard key={sample.id} sample={sample} accentColor={folder.color} />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
