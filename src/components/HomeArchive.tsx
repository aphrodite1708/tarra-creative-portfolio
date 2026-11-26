import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FOLDERS, type SectionId } from '../data/sections'
import SectionView from './SectionView'
import AreaView from './AreaView'
import CaseStudyView from './CaseStudyView'
import BrandPage from './BrandPage'
import CreatorPage from './CreatorPage'

type Panel = 'brand' | 'creator'

// Brand logos scattered on the Brand folder face
const COLLAGE_LOGOS = [
  { brand: 'Disney Cruise Line', src: '/brands/disney-cruise-line.png', left: '5%',  top: '6%',  rotate: -6,  size: 92 },
  { brand: "L'Oréal",           src: '/brands/loreal.png',             left: '50%', top: '4%',  rotate: 5,   size: 100 },
  { brand: 'Maybelline',         src: '/brands/maybelline.png',         left: '22%', top: '20%', rotate: -3,  size: 104 },
  { brand: 'TIRTIR',             src: '/brands/tirtir.png',             left: '62%', top: '24%', rotate: 7,   size: 80 },
  { brand: 'Garnier',            src: '/brands/garnier.png',            left: '7%',  top: '38%', rotate: 4,   size: 90 },
  { brand: "Pond's",             src: '/brands/ponds.png',              left: '44%', top: '36%', rotate: -4,  size: 88 },
  { brand: 'Make Over',          src: '/brands/makeover logo.png',      left: '14%', top: '54%', rotate: 3,   size: 96 },
  { brand: 'Dove',               src: '/brands/dove.png',               left: '58%', top: '52%', rotate: -5,  size: 76 },
]

// Marquee logos — the featured brands strip on the landing page
const MARQUEE_BRANDS = [
  { brand: 'Disney Cruise Line', src: '/brands/disney-cruise-line.png' },
  { brand: "L'Oréal",           src: '/brands/loreal.png' },
  { brand: 'Garnier',           src: '/brands/garnier.png' },
  { brand: "Pond's",            src: '/brands/ponds.png' },
  { brand: 'Maybelline',        src: '/brands/maybelline.png' },
  { brand: 'Make Over',         src: '/brands/makeover logo.png' },
  { brand: 'Safi',              src: '/brands/safi.png' },
  { brand: 'Wardah',            src: '/brands/wardah.png' },
  { brand: 'Lazada',            src: '/brands/lazada.png' },
  { brand: 'Lux',               src: '/brands/lux.png' },
  { brand: 'Dove',              src: '/brands/dove.png' },
  { brand: 'Paddle Pop',        src: '/brands/paddle-pop.png' },
  { brand: 'Hansaplast',        src: '/brands/hansaplast.png' },
  { brand: 'Skintific',         src: '/brands/skintific.png' },
  { brand: 'Erha',              src: '/brands/erha.png' },
  { brand: 'Bio-Oil',           src: '/brands/bio-oil.png' },
  { brand: 'TIRTIR',            src: '/brands/tirtir.png' },
  { brand: 'Beauty of Joseon',  src: '/brands/beauty-of-joseon.png' },
  { brand: 'Spotify',           src: '/brands/spotify.png' },
  { brand: 'Sushiro',           src: '/brands/sushiro.png' },
]

function BinderClip() {
  return (
    <svg width="52" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left wire handle */}
      <path d="M18 23 L11 7 C9.5 3.5 11.5 1 14.5 1.5 C17.5 2 17.5 5.5 16.5 8.5 L20 23Z"
            fill="#B8B8B8" stroke="#999" strokeWidth="0.8"/>
      {/* Right wire handle */}
      <path d="M34 23 L41 7 C42.5 3.5 40.5 1 37.5 1.5 C34.5 2 34.5 5.5 35.5 8.5 L32 23Z"
            fill="#B8B8B8" stroke="#999" strokeWidth="0.8"/>
      {/* Body shadow */}
      <rect x="4" y="23" width="44" height="21" rx="3" fill="#818181"/>
      {/* Body main */}
      <rect x="4" y="23" width="44" height="19" rx="3" fill="#A8A8A8"/>
      {/* Body highlight */}
      <rect x="6" y="25" width="40" height="5" rx="1.5" fill="rgba(255,255,255,0.28)"/>
      {/* Teeth */}
      <line x1="10" y1="41" x2="12" y2="51" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="19" y1="41" x2="21" y2="51" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="28" y1="41" x2="30" y2="51" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="37" y1="41" x2="39" y2="51" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  )
}

function PaperClip({ color = '#B4A898' }: { color?: string }) {
  return (
    <svg width="20" height="54" viewBox="0 0 20 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2.5
           C5.5 2.5 2.5 5.5 2.5 9.5
           L2.5 42
           C2.5 48 6 52.5 10 52.5
           C14 52.5 17.5 48 17.5 42
           L17.5 13
           C17.5 9.5 15 7.5 11.5 7.5
           L9.5 7.5
           C7 7.5 6 9.5 6 11.5
           L6 42
           C6 44.5 7.5 46.5 10 46.5
           C12.5 46.5 14 44.5 14 42
           L14 15"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default function HomeArchive() {
  const [hovered, setHovered] = useState<Panel | null>(null)
  const [activePage, setActivePage] = useState<Panel | null>(null)

  // Deep-nav state (kept for use inside the overlays)
  const [active, setActive] = useState<SectionId | null>(null)
  const [activeArea, setActiveArea] = useState<{ sectionId: SectionId; areaIndex: number } | null>(null)
  const [activeCaseStudy, setActiveCaseStudy] = useState<{ id: string; sectionId: SectionId } | null>(null)

  const anyHovered = hovered !== null

  const panels: { id: Panel; label: string; sub: string; color: string; textColor: string; tintColor: string }[] = [
    {
      id: 'brand',
      label: 'Brand',
      sub: 'Campaigns · Strategy · Briefs · Insights',
      color: '#DEC5C8',
      textColor: '#641F36',
      tintColor: 'rgba(100,31,54,0.07)',
    },
    {
      id: 'creator',
      label: 'Creator',
      sub: 'Scripts · UGC · Influencer Dev · Content',
      color: '#7A5244',
      textColor: '#F7F1E9',
      tintColor: 'rgba(255,255,255,0.08)',
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
          <div className="polaroid-clip">
            <BinderClip />
          </div>
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
                background: `repeating-linear-gradient(to bottom, ${panel.tintColor} 0px, ${panel.tintColor} 1px, transparent 1px, transparent 28px)`,
                opacity: 1,
              }} />

              {/* Folder corner tab accent */}
              <div className={`folder-file-tab folder-file-tab--${panel.id}`} />

              {/* Paper clip at top */}
              <div className={`folder-paperclip folder-paperclip--${panel.id}`}>
                <PaperClip color={panel.id === 'brand' ? '#B09098' : 'rgba(255,255,255,0.45)'} />
              </div>

              {/* Brand logos scattered on folder face (Brand panel only) */}
              {panel.id === 'brand' && (
                <div className="folder-logo-collage">
                  {COLLAGE_LOGOS.map(logo => (
                    <img
                      key={logo.brand}
                      src={logo.src}
                      alt={logo.brand}
                      className="collage-logo"
                      style={{
                        left: logo.left,
                        top: logo.top,
                        transform: `rotate(${logo.rotate}deg)`,
                        width: logo.size,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Vertical handwritten tab label on folder edge */}
              <div className={`folder-side-tab folder-side-tab--${panel.id}`}>
                {panel.id === 'brand' ? 'Brand Work' : 'Creator Work'}
              </div>

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

      {/* Brand marquee strip */}
      <div className="home-marquee-wrap">
        <div className="home-marquee-label">Brands I've worked with</div>
        <div className="home-marquee">
          <div className="home-marquee-track">
            {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((b, i) => (
              <div key={i} className="home-marquee-item" title={b.brand}>
                <img src={b.src} alt={b.brand} className="home-marquee-logo" />
              </div>
            ))}
          </div>
        </div>
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
