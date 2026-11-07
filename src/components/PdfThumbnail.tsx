import { useEffect, useRef, useState } from 'react'

interface Props {
  file: string
  className?: string
}

export default function PdfThumbnail({ file, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [status, setStatus] = useState<'loading' | 'done' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        const pdfjsLib = await import('pdfjs-dist')
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).href

        const pdf = await pdfjsLib.getDocument({ url: file }).promise
        if (cancelled) return

        const page = await pdf.getPage(1)
        if (cancelled) return

        const canvas = canvasRef.current
        if (!canvas) return

        const viewport = page.getViewport({ scale: 1 })
        // Scale to fill the canvas container width (280px target)
        const scale = 280 / viewport.width
        const scaled = page.getViewport({ scale })

        canvas.width = scaled.width
        canvas.height = scaled.height

        await page.render({ canvas, viewport: scaled }).promise
        if (!cancelled) setStatus('done')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    render()
    return () => { cancelled = true }
  }, [file])

  if (status === 'error') {
    return (
      <div className={`pdf-thumb pdf-thumb--error ${className ?? ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`pdf-thumb ${status === 'loading' ? 'pdf-thumb--loading' : ''} ${className ?? ''}`}>
      <canvas ref={canvasRef} className="pdf-thumb-canvas" />
      {status === 'loading' && <div className="pdf-thumb-spinner" />}
    </div>
  )
}
