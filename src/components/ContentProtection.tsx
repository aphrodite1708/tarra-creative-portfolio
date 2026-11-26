import { useEffect } from 'react'

/** Deters casual copying of confidential work: no right-click save, no drag-out,
 *  no browser print/save-page shortcuts. Cannot stop OS-level screenshots. */
export default function ContentProtection() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => e.preventDefault()
    const onDragStart = (e: DragEvent) => e.preventDefault()
    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey
      const key = e.key.toLowerCase()
      if (mod && (key === 'p' || key === 's')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('dragstart', onDragStart)
    window.addEventListener('keydown', onKeyDown, true)

    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('dragstart', onDragStart)
      window.removeEventListener('keydown', onKeyDown, true)
    }
  }, [])

  return null
}
