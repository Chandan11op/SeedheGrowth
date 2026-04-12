import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const rafRef    = useRef(null)
  const pos       = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    if (!cursor || !ring) return

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }

    const animate = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      ring.style.left = p.rx + 'px'
      ring.style.top  = p.ry + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.style.width      = '16px'
      cursor.style.height     = '16px'
      cursor.style.background = '#00A86B'
      ring.style.width        = '50px'
      ring.style.height       = '50px'
    }

    const onLeave = () => {
      cursor.style.width      = '10px'
      cursor.style.height     = '10px'
      cursor.style.background = '#C9A84C'
      ring.style.width        = '36px'
      ring.style.height       = '36px'
    }

    // Use event delegation — attach once to document
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) onEnter()
    }
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) onLeave()
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout',  handleMouseOut)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout',  handleMouseOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div className="cursor"      ref={cursorRef} id="cursor" />
      <div className="cursor-ring" ref={ringRef}   id="cursorRing" />
    </>
  )
}
