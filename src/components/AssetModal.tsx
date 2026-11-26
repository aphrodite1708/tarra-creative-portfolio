import { createPortal } from 'react-dom'
import PdfViewer from './PdfViewer'

export function getDriveFileId(url: string): string | null {
  const m = url.match(/\/file\/d\/([^/?#]+)/)
  return m ? m[1] : null
}

export interface AssetModalAsset {
  title: string
  type: string
  file?: string
  url?: string
}

interface Props {
  asset: AssetModalAsset
  onClose: () => void
}

export default function AssetModal({ asset, onClose }: Props) {
  const { title, type, file, url } = asset
  const driveFileId = url ? getDriveFileId(url) : null
  const driveEmbed = driveFileId ? `https://drive.google.com/file/d/${driveFileId}/preview` : null
  const isVideoLike = (type === 'link' || type === 'video') && driveEmbed
  const isPdf = type === 'pdf' && !!file

  let boxModifier = 'doc'
  let body: React.ReactNode

  if (isVideoLike) {
    boxModifier = 'video'
    body = (
      <div className="asset-modal-frame-wrap asset-modal-frame-wrap--video">
        <iframe src={driveEmbed!} className="asset-modal-iframe" allow="autoplay" allowFullScreen />
      </div>
    )
  } else if (type === 'image' && file) {
    boxModifier = 'image'
    body = (
      <div className="asset-modal-frame-wrap asset-modal-frame-wrap--image">
        <img
          src={file}
          alt={title}
          className="asset-modal-image"
          onContextMenu={e => e.preventDefault()}
          draggable={false}
        />
      </div>
    )
  } else if (isPdf) {
    // Rendered to canvas — no native browser PDF toolbar (no download/print/save-as)
    boxModifier = 'doc'
    body = (
      <div className="asset-modal-frame-wrap asset-modal-frame-wrap--doc">
        <PdfViewer file={file!} />
      </div>
    )
  } else if (file || url) {
    // Any other document type the browser can render inline (e.g. plain text)
    boxModifier = 'doc'
    body = (
      <div className="asset-modal-frame-wrap asset-modal-frame-wrap--doc">
        <iframe src={file ?? url} className="asset-modal-iframe" title={title} />
      </div>
    )
  } else {
    body = <div className="asset-modal-empty">Preview unavailable.</div>
  }

  return createPortal(
    <div className="asset-modal-overlay" onClick={onClose}>
      <div className={`asset-modal-box asset-modal-box--${boxModifier}`} onClick={e => e.stopPropagation()}>
        <button className="asset-modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="asset-modal-title">{title}</div>
        {body}
      </div>
    </div>,
    document.body
  )
}
