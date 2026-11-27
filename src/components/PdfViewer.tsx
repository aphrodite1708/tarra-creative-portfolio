import { useEffect, useRef, useState } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist'

interface Props {
  file: string
}

export default function PdfViewer({ file }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const pdfRef = useRef<PDFDocumentProxy | null>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const [status, setStatus] = useState<'loading' | 'done' | 'error'>('loading')
  const [numPages, setNumPages] = useState(0)
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    setPageNum(1)
    setNumPages(0)

    async function load() {
      try {
        const pdfjsLib = await import('pdfjs-dist')
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).href
        const pdf = await pdfjsLib.getDocument({ url: file }).promise
        if (cancelled) return
        pdfRef.current = pdf
        setNumPages(pdf.numPages)
        setStatus('done')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    load()
    return () => { cancelled = true }
  }, [file])

  useEffect(() => {
    if (numPages <= 1) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setPageNum(p => Math.min(numPages, p + 1))
      if (e.key === 'ArrowLeft') setPageNum(p => Math.max(1, p - 1))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [numPages])

  useEffect(() => {
    if (status !== 'done' || !pdfRef.current) return
    let cancelled = false

    async function renderPage() {
      const pdf = pdfRef.current
      if (!pdf) return
      const page = await pdf.getPage(pageNum)
      if (cancelled) return
      const canvas = canvasRef.current
      if (!canvas) return
      const containerWidth = wrapRef.current?.clientWidth ?? 800
      const base = page.getViewport({ scale: 1 })
      const scale = Math.min((containerWidth - 24) / base.width, 2.2)
      const viewport = page.getViewport({ scale })
      canvas.width = viewport.width
      canvas.height = viewport.height
      await page.render({ canvas, viewport }).promise
    }

    renderPage()
    return () => { cancelled = true }
  }, [status, pageNum])

  if (status === 'error') {
    return <div className="pdf-viewer-error">Couldn't load this document.</div>
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStartRef.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current
    touchStartRef.current = null
    if (!start || numPages <= 1) return
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.5) return
    if (dx < 0) setPageNum(p => Math.min(numPages, p + 1))
    else setPageNum(p => Math.max(1, p - 1))
  }

  return (
    <div className="pdf-viewer">
      <div
        className="pdf-viewer-canvas-wrap"
        ref={wrapRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <canvas
          ref={canvasRef}
          className="pdf-viewer-canvas"
          onContextMenu={e => e.preventDefault()}
        />
        {status === 'loading' && <div className="pdf-viewer-spinner" />}
      </div>
      {numPages > 1 && (
        <div className="pdf-viewer-nav">
          <button
            className="pdf-viewer-nav-btn"
            onClick={() => setPageNum(p => Math.max(1, p - 1))}
            disabled={pageNum <= 1}
            aria-label="Previous page"
          >
            ‹
          </button>
          <span className="pdf-viewer-nav-label">{pageNum} / {numPages}</span>
          <button
            className="pdf-viewer-nav-btn"
            onClick={() => setPageNum(p => Math.min(numPages, p + 1))}
            disabled={pageNum >= numPages}
            aria-label="Next page"
          >
            ›
          </button>
          <span className="pdf-viewer-nav-hint">Swipe or tap the arrows to browse pages</span>
        </div>
      )}
    </div>
  )
}
