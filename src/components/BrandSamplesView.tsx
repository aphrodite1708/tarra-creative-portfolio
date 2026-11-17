import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND_LOGOS } from '../data/brands'
import { getSamplesByBrand } from '../data/samples'
import { getBrandCampaigns, getCampaignSamples, WORKFLOW_STEPS } from '../data/brandCampaigns'
import type { BrandCampaign } from '../data/brandCampaigns'
import type { Sample } from '../data/samples'
import { FOLDERS } from '../data/sections'
import SampleCard from './SampleCard'
import CaseStudyView from './CaseStudyView'

interface Props {
  brandName: string
  onClose: () => void
}

function WorkflowStrip({ samples: _samples }: { samples: Sample[] }) {
  return (
    <div className="workflow-strip">
      {WORKFLOW_STEPS.map((step, i) => {
        return (
          <div key={step.id} className="workflow-step">
            {i > 0 && <div className="workflow-line" />}
            <div className="workflow-dot">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <circle cx="5" cy="5" r="3.5" />
              </svg>
            </div>
            <span className="workflow-label">{step.short}</span>
          </div>
        )
      })}
    </div>
  )
}

function CampaignSection({
  campaign,
  accentColor,
  onCaseStudyOpen,
}: {
  campaign: BrandCampaign
  accentColor: string
  onCaseStudyOpen: (id: string) => void
}) {
  const samples = getCampaignSamples(campaign)
  if (samples.length === 0) return null

  return (
    <div className="campaign-section">
      <div className="campaign-section-header">
        <div className="campaign-section-meta">
          <span className="campaign-section-year">{campaign.year}</span>
          {campaign.subtitle && (
            <span className="campaign-section-subtitle">{campaign.subtitle}</span>
          )}
        </div>
        <h3 className="campaign-section-title">{campaign.title}</h3>
        <WorkflowStrip samples={samples} />
      </div>

      <div className="samples-grid campaign-samples-grid">
        {samples.map((sample, i) => (
          <motion.div
            key={sample.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <SampleCard sample={sample} accentColor={accentColor} onCaseStudyOpen={onCaseStudyOpen} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function BrandSamplesView({ brandName, onClose }: Props) {
  const [logoFailed, setLogoFailed] = useState(false)
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null)

  const logo = BRAND_LOGOS[brandName]
  const accentColor = '#641F36'
  const caseStudyFolder = FOLDERS.find(f => f.id === 'campaigns')!

  // Defined campaigns for this brand
  const definedCampaigns = getBrandCampaigns(brandName)

  // Auto-group: samples not covered by any defined campaign
  const coveredIds = new Set(definedCampaigns.flatMap(c => c.sampleIds))
  const allSamples = getSamplesByBrand(brandName)
  const ungrouped = allSamples.filter(s => !coveredIds.has(s.id))

  const totalCount = allSamples.length

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
        <div className="area-overlay-header" style={{ background: '#DEC5C8', color: '#641F36' }}>
          <div className="area-overlay-inner">
            <div className="area-breadcrumb">
              <motion.button
                className="area-back"
                style={{ color: '#641F36', borderColor: 'rgba(100,31,54,0.25)' }}
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

            <div style={{ marginTop: 24, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 16 }}>
              {logo && !logoFailed ? (
                <img
                  src={logo}
                  alt={brandName}
                  onError={() => setLogoFailed(true)}
                  style={{ height: 40, maxWidth: 140, objectFit: 'contain', filter: 'brightness(0) saturate(0) opacity(0.7)' }}
                />
              ) : (
                <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em' }}>{brandName}</span>
              )}
            </div>

            <h2 className="area-overlay-title" style={{ marginTop: 6 }}>Campaign Work</h2>
            <p className="area-overlay-desc" style={{ marginTop: 4 }}>
              {definedCampaigns.length > 0
                ? `${definedCampaigns.length} campaign${definedCampaigns.length > 1 ? 's' : ''} · ${totalCount} file${totalCount !== 1 ? 's' : ''}`
                : `${totalCount} file${totalCount !== 1 ? 's' : ''}`}
            </p>
          </div>
        </div>

        {/* Campaign sections */}
        <div className="area-samples-body">
          {definedCampaigns.length === 0 && ungrouped.length === 0 && (
            <div style={{ padding: '48px 24px', textAlign: 'center', color: '#888', fontSize: 15 }}>
              No work samples registered for {brandName} yet.
            </div>
          )}

          {/* Defined campaigns */}
          {definedCampaigns.map(campaign => (
            <CampaignSection
              key={campaign.id}
              campaign={campaign}
              accentColor={accentColor}
              onCaseStudyOpen={setActiveCaseStudy}
            />
          ))}

          {/* Ungrouped samples */}
          {ungrouped.length > 0 && (
            <div className="campaign-section">
              <div className="campaign-section-header">
                <h3 className="campaign-section-title">Other Work</h3>
                <WorkflowStrip samples={ungrouped} />
              </div>
              <div className="samples-grid campaign-samples-grid">
                {ungrouped.map((sample, i) => (
                  <motion.div
                    key={sample.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <SampleCard sample={sample} accentColor={accentColor} onCaseStudyOpen={setActiveCaseStudy} />
                  </motion.div>
                ))}
              </div>
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
