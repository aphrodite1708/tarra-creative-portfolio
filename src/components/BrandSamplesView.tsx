import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND_LOGOS } from '../data/brands'
import { getSamplesByBrand } from '../data/samples'
import { FOLDERS } from '../data/sections'
import SampleCard from './SampleCard'
import CaseStudyView from './CaseStudyView'

interface Props {
  brandName: string
  onClose: () => void
}

export default function BrandSamplesView({ brandName, onClose }: Props) {
  const [logoFailed, setLogoFailed] = useState(false)
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null)

  const logo = BRAND_LOGOS[brandName]
  const samples = getSamplesByBrand(brandName)
  const accentColor = '#641F36'

  const handleCaseStudyOpen = (id: string) => setActiveCaseStudy(id)

  const caseStudyFolder = FOLDERS.find(f => f.id === 'campaigns')!

  return (
    <>
      <motion.div
        className="area-overlay"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="area-overlay-header" style={{ background: '#162342', color: '#F7F1E9' }}>
          <div className="area-overlay-inner">
            <div className="area-breadcrumb">
              <motion.button
                className="area-back"
                style={{ color: '#F7F1E9', borderColor: 'rgba(247,241,233,0.25)' }}
                onClick={onClose}
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M19 12H5m7-7-7 7 7 7" />
                </svg>
                All Brands
              </motion.button>
            </div>

            <div style={{ marginTop: 24, marginBottom: 8 }}>
              {logo && !logoFailed ? (
                <img
                  src={logo}
                  alt={brandName}
                  onError={() => setLogoFailed(true)}
                  style={{ height: 44, maxWidth: 160, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              ) : (
                <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#F7F1E9' }}>{brandName}</span>
              )}
            </div>

            <h2 className="area-overlay-title" style={{ marginTop: 8 }}>Work for {brandName}</h2>
            <p className="area-overlay-desc">
              {samples.length > 0
                ? `${samples.length} piece${samples.length > 1 ? 's' : ''} — briefs, scripts, insights, and published content.`
                : 'No samples registered yet.'}
            </p>
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

          {samples.length === 0 ? (
            <div style={{ padding: '48px 24px', textAlign: 'center', color: '#888', fontSize: 15 }}>
              No work samples registered for {brandName} yet.
            </div>
          ) : (
            <div className="samples-grid">
              {samples.map((sample, i) => (
                <motion.div
                  key={sample.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SampleCard
                    sample={sample}
                    accentColor={accentColor}
                    onCaseStudyOpen={handleCaseStudyOpen}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeCaseStudy && (
          <CaseStudyView
            key={activeCaseStudy}
            caseStudyId={activeCaseStudy}
            folder={caseStudyFolder}
            onClose={() => setActiveCaseStudy(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
