import { motion } from 'framer-motion'
import type { FolderData, SectionId } from '../data/sections'
import { SECTION_CONTENT } from '../data/sections'
import { getSamples } from '../data/samples'
import SampleCard from './SampleCard'

interface Props {
  sectionId: SectionId
  areaIndex: number
  folder: FolderData
  onClose: () => void
  onCaseStudyOpen: (id: string) => void
}


export default function AreaView({ sectionId, areaIndex, folder, onClose, onCaseStudyOpen }: Props) {
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
              <SampleCard sample={sample} accentColor={folder.color} onCaseStudyOpen={onCaseStudyOpen} />
            </motion.div>
          ))}

        </div>
      </div>
    </motion.div>
  )
}
