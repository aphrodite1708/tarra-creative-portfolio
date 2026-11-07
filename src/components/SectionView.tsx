import { motion } from 'framer-motion'
import type { FolderData, SectionId } from '../data/sections'
import { SECTION_CONTENT } from '../data/sections'

interface Props {
  sectionId: SectionId
  folder: FolderData
  onClose: () => void
}

export default function SectionView({ sectionId, folder, onClose }: Props) {
  const content = SECTION_CONTENT[sectionId]
  const isLight = folder.color === '#EDE1D2' || folder.color === '#D7AEB5' || folder.color === '#A99A8D'

  return (
    <motion.div
      className="section-overlay"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Section header — colored strip using folder's color */}
      <div
        className="section-header"
        style={{
          background: folder.color,
          color: folder.textColor,
        }}
      >
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

      {/* Section body */}
      <div className="section-body">
        {/* Areas grid */}
        <div className="section-areas">
          {content.areas.map((area, i) => (
            <motion.div
              key={area.title}
              className="area-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="area-number">0{i + 1}</div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-body">{area.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Work placeholder */}
        <motion.div
          className="work-placeholder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="work-placeholder-inner">
            <div
              className="work-label-tag"
              style={{ background: folder.color, color: folder.textColor }}
            >
              {folder.label}
            </div>
            <p className="work-placeholder-text">
              Portfolio work, case studies, and examples coming soon.<br />
              <span>Add your files to bring this section to life.</span>
            </p>
            <div className="work-placeholder-grid">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="work-placeholder-cell">
                  <div
                    className="cell-stripe"
                    style={{ background: folder.color, opacity: isLight ? 0.12 : 0.08 }}
                  />
                  <span className="cell-label">Work sample {n}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
