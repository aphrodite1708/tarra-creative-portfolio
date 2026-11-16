import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FOLDERS, type SectionId } from '../data/sections'
import SectionView from './SectionView'
import AreaView from './AreaView'
import CaseStudyView from './CaseStudyView'
import BrandPage from './BrandPage'
import CreatorPage from './CreatorPage'

type Panel = 'brand' | 'creator'

export default function HomeArchive() {
  const [hovered, setHovered] = useState<Panel | null>(null)
  const [activePage, setActivePage] = useState<Panel | null>(null)

  // Deep-nav state (kept for use inside the overlays)
  const [active, setActive] = useState<SectionId | null>(null)
  const [activeArea, setActiveArea] = useState<{ sectionId: SectionId; areaIndex: number } | null>(null)
  const [activeCaseStudy, setActiveCaseStudy] = useState<{ id: string; sectionId: SectionId } | null>(null)

  const anyHovered = hovered !== null

  const panels: { id: Panel; label: string; sub: string; color: string; textColor: string }[] = [
    {
      id: 'brand',
      label: 'Brand',
      sub: 'Campaigns, strategy, partnerships, briefs & insights',
      color: '#162342',
      textColor: '#F7F1E9',
    },
    {
      id: 'creator',
      label: 'Creator',
      sub: 'Scripts, UGC, influencer development & published content',
      color: '#2D1B3D',
      textColor: '#F7F1E9',
    },
  ]

  return (
    <div className="archive-root">
      {/* Hero column */}
      <div className="hero-overlay">
        <div className="hero-eyebrow">Creative Strategist</div>
        <h1 className="hero-name">
          <span className="hero-name-first">Tarra</span>
          <span className="hero-name-last">Ananda</span>
        </h1>
        <p className="hero-quote">"Understanding people.<br />Developing ideas.<br />Creating work that connects."</p>
        <p className="hero-welcome">
          Welcome to my creative portfolio — a collection of brand campaigns, creator strategy, and content work.
        </p>

        <div className="hero-photo-wrap">
          <img src="/tarra.png" alt="Tarra Ananda" className="hero-photo" />
        </div>
      </div>

      {/* Two-panel strip */}
      <div className="panels-strip">
        {panels.map((panel) => {
          const isHovered = hovered === panel.id
          return (
            <motion.div
              key={panel.id}
              className="folder-panel two-panel"
              style={{
                backgroundColor: panel.color,
                color: panel.textColor,
                flex: isHovered ? 2 : (anyHovered ? 0.75 : 1),
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHovered(panel.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setActivePage(panel.id)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${panel.label} portfolio`}
              onKeyDown={(e) => e.key === 'Enter' && setActivePage(panel.id)}
            >
              {/* Subtle paper lines */}
              <div className="panel-tint" style={{
                background: `repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 32px)`,
                opacity: 1,
              }} />

              {/* Vertical label when collapsed */}
              <div className="panel-label">
                <span className="panel-label-text">{panel.label}</span>
              </div>

              {/* Peek — expands on hover */}
              <motion.div
                className="panel-peek two-panel-peek"
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 16 }}
                transition={{ duration: 0.3, delay: isHovered ? 0.08 : 0 }}
              >
                <div className="two-panel-label">{panel.label}</div>
                <div className="two-panel-sub">{panel.sub}</div>
                <div className="peek-open">Open →</div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom hint */}
      <div className="bottom-hint">
        <span>Hover to explore · Click to open</span>
      </div>

      {/* Brand page overlay */}
      <AnimatePresence>
        {activePage === 'brand' && (
          <BrandPage
            key="brand-page"
            onClose={() => setActivePage(null)}
          />
        )}
      </AnimatePresence>

      {/* Creator page overlay */}
      <AnimatePresence>
        {activePage === 'creator' && (
          <CreatorPage
            key="creator-page"
            onClose={() => setActivePage(null)}
          />
        )}
      </AnimatePresence>

      {/* Deep nav (kept for future use — not currently wired to new panels) */}
      <AnimatePresence>
        {active && (
          <SectionView
            key={active}
            sectionId={active}
            folder={FOLDERS.find(f => f.id === active)!}
            onClose={() => setActive(null)}
            onAreaClick={(i) => setActiveArea({ sectionId: active, areaIndex: i })}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeArea && (
          <AreaView
            key={`${activeArea.sectionId}-${activeArea.areaIndex}`}
            sectionId={activeArea.sectionId}
            areaIndex={activeArea.areaIndex}
            folder={FOLDERS.find(f => f.id === activeArea.sectionId)!}
            onClose={() => setActiveArea(null)}
            onCaseStudyOpen={(id) => setActiveCaseStudy({ id, sectionId: activeArea.sectionId })}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeCaseStudy && (
          <CaseStudyView
            key={activeCaseStudy.id}
            caseStudyId={activeCaseStudy.id}
            folder={FOLDERS.find(f => f.id === activeCaseStudy.sectionId)!}
            onClose={() => setActiveCaseStudy(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
