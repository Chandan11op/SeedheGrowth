import { useState } from 'react'

export default function Navbar({ onOpenModal, theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav>
      <div className="nav-logo">
        <div className="nav-wordmark">
          <span className="nav-seedhe">Seedhe</span>
          <span className="nav-growth">Growth</span>
        </div>
        <div className="nav-rule" />
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
        <li><a href="#why" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a></li>
        <li><a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a></li>
        <li><a href="#founders" onClick={() => setIsMobileMenuOpen(false)}>Team</a></li>
      </ul>

      <div className="nav-right">
        <button className="nav-cta" onClick={onOpenModal} id="nav-cta-btn">
          Let's Talk
        </button>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          id="theme-toggle-btn"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme"
        >
          <div className="theme-toggle-slider">
            <img src="/toggle.png" alt="" />
          </div>
        </button>

        <button className="nav-mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '×' : '☰'}
        </button>
      </div>
    </nav>
  )
}
