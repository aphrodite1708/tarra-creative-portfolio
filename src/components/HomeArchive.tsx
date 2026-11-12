import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FOLDERS, type SectionId } from '../data/sections'
import SectionView from './SectionView'
import AreaView from './AreaView'

export default function HomeArchive() {
  const [hovered, setHovered] = useState<SectionId | null>(null)
  const [active, setActive] = useState<SectionId | null>(null)
  const [activeArea, setActiveArea] = useState<{ sectionId: SectionId; areaIndex: number } | null>(null)

  return (
    <div className="archive-root">
      {/* Hero column — top: text, bottom: photo */}
      <div className="hero-overlay" aria-hidden={active !== null}>
        <div className="hero-eyebrow">Creative Strategist</div>
        <h1 className="hero-name">
          <span className="hero-name-first">Tarra</span>
          <span className="hero-name-last">Ananda</span>
        </h1>
        <p className="hero-quote">"Understanding people.<br />Developing ideas.<br />Creating work that connects."</p>
        <p className="hero-welcome">
          Welcome to my creative archive — a collection of my work, from ideas and strategies to concepts and creative execution.
        </p>

        {/* Photo pushed to the bottom of the column */}
        <div className="hero-photo-wrap">
          <img src="/tarra.png" alt="Tarra Ananda" className="hero-photo" />
        </div>
      </div>

      {/* Folder panels strip */}
      <div className="panels-strip">
        {FOLDERS.map((folder, idx) => {
          const isHovered = hovered === folder.id
          const anyHovered = hovered !== null
          const isStoryBreak = idx === 3 // divider before creator story

          return (
            <>
              {isStoryBreak && (
                <div key="story-break" className="story-break">
                  <span className="story-break-label">Creator Work</span>
                </div>
              )}
            <motion.div
              key={folder.id}
              className="folder-panel"
              style={{
                backgroundColor: folder.color,
                color: folder.textColor,
                flex: isHovered ? 2.6 : (anyHovered ? 0.72 : 1),
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHovered(folder.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setActive(folder.id)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${folder.label}`}
              onKeyDown={(e) => e.key === 'Enter' && setActive(folder.id)}
            >
              {/* Background image with tint */}
              <div
                className="panel-image"
                style={{ backgroundImage: `url(${folder.image})` }}
              />
              <div
                className="panel-tint"
                style={{ background: folder.color, opacity: isHovered ? 0.55 : 0.72 }}
              />

              {/* Top tab (the folder notch) */}
              <div
                className="panel-tab"
                style={{
                  background: folder.tabBg,
                  color: folder.tabBg === '#302323' || folder.tabBg === '#641F36' ? '#F7F1E9' : folder.color,
                }}
              >
                <span className="tab-number">{folder.number}</span>
              </div>

              {/* Vertical label — reads bottom to top */}
              <div className="panel-label">
                <span className="panel-label-text">{folder.label}</span>
              </div>

              {/* Peek content — fades in on hover */}
              <motion.div
                className="panel-peek"
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
                transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
              >
                <div className="peek-number">{folder.number}</div>
                <div className="peek-label">{folder.label}</div>
                <div className="peek-tagline">{folder.tagline}</div>
                <div className="peek-open">Open folder →</div>
              </motion.div>
            </motion.div>
            </>
          )
        })}
      </div>

      {/* Bottom navigation hint */}
      <div className="bottom-hint">
        <span>Hover to explore · Click to open</span>
        <div className="bottom-dots">
          {FOLDERS.map((f) => (
            <button
              key={f.id}
              className={`dot ${active === f.id ? 'dot--active' : ''}`}
              onClick={() => setActive(f.id)}
              aria-label={f.label}
              style={{ background: active === f.id ? f.color : undefined }}
            />
          ))}
        </div>
      </div>

      {/* Section overlay */}
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

      {/* Area sample page — slides over the section */}
      <AnimatePresence>
        {activeArea && (
          <AreaView
            key={`${activeArea.sectionId}-${activeArea.areaIndex}`}
            sectionId={activeArea.sectionId}
            areaIndex={activeArea.areaIndex}
            folder={FOLDERS.find(f => f.id === activeArea.sectionId)!}
            onClose={() => setActiveArea(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
