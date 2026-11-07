import { motion } from 'framer-motion'
import type { FolderData, SectionId } from '../data/sections'
import { SECTION_CONTENT } from '../data/sections'

interface Props {
  sectionId: SectionId
  folder: FolderData
  onClose: () => void
  onAreaClick: (areaIndex: number) => void
}

export default function SectionView({ sectionId, folder, onClose, onAreaClick }: Props) {
  const content = SECTION_CONTENT[sectionId]

  return (
    <motion.div
      className="section-overlay"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Section header */}
      <div className="section-header" style={{ background: folder.color, color: folder.textColor }}>
        <div className="section-header-inner">
          <div className="section-meta">
            <span className="section-folder-num">{folder.number}</span>
            <span className="section-folder-label">{content.folderLabel}</span>
          </div>
          <h2 className="section-title">{content.headline}</h2>
          <p className="section-intro">{content.intro}</p>
          <motion.button
            className="section-close"
            style={{ color: folder.textColor, borderColor: `${folder.textColor}40` }}
            onClick={onClose}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            Back to Archive
          </motion.button>
        </div>
      </div>

      {/* Areas — each one opens its own sample page */}
      <div className="section-body">
        <div className="section-areas">
          {content.areas.map((area, i) => (
            <motion.button
              key={area.title}
              className="area-card area-card--clickable"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onAreaClick(i)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="area-number">0{i + 1}</div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-body">{area.body}</p>
              <div className="area-cta" style={{ color: folder.color }}>
                View samples →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
