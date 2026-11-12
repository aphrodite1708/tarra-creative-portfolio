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

      {/* Footer strip */}
      <div className="footer-strip">
        <div className="footer-identity">
          <span className="footer-name">Tarra Ananda</span>
          <span className="footer-sep">·</span>
          <span className="footer-role">Creative Strategist</span>
        </div>
        <div className="footer-links">
          <a
            href="https://wa.me/6281286302213"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="WhatsApp"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.874L.057 23.267a.75.75 0 0 0 .921.921l5.393-1.478A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.587-.5-5.084-1.372l-.365-.214-3.782 1.036 1.036-3.783-.214-.365A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="mailto:tarranandava@gmail.com"
            className="footer-link"
            aria-label="Email"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/tarra-ananda777/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
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
