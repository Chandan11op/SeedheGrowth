import { useState, useEffect, useCallback } from 'react'

import CustomCursor  from './components/CustomCursor'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Marquee       from './components/Marquee'
import Services      from './components/Services'
import TaglineBreak  from './components/TaglineBreak'
import WhyUs         from './components/WhyUs'
import Process       from './components/Process'
import CTA           from './components/CTA'
import Footer        from './components/Footer'
import LeadModal     from './components/LeadModal'
import SuccessPopup  from './components/SuccessPopup'

export default function App() {
  const [isModalOpen,   setIsModalOpen]   = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  /* ── Scroll-reveal observer ───────────────────────────── */
  const initReveal = useCallback(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
          }
        })
      },
      { threshold: 0.1 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cleanup = initReveal()
    return cleanup
  }, [initReveal])

  /* ── Lock body scroll when modal/popup is open ────────── */
  useEffect(() => {
    document.body.style.overflow = (isModalOpen || isSuccessOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isModalOpen, isSuccessOpen])

  /* ── Modal handlers ───────────────────────────────────── */
  const openModal  = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSuccess = () => {
    setIsModalOpen(false)
    setIsSuccessOpen(true)
  }

  const closeSuccess = () => {
    setIsSuccessOpen(false)
    // Re-run reveal for any elements that appeared while modal was blocking
    setTimeout(initReveal, 100)
  }

  return (
    <>
      <CustomCursor />

      <Navbar  onOpenModal={openModal} />
      <Hero    onOpenModal={openModal} />
      <Marquee />
      <Services />
      <TaglineBreak />
      <WhyUs />
      <Process />
      <CTA     onOpenModal={openModal} />
      <Footer />

      {isModalOpen   && <LeadModal   onClose={closeModal}   onSuccess={handleSuccess} />}
      {isSuccessOpen && <SuccessPopup onClose={closeSuccess} />}
    </>
  )
}
