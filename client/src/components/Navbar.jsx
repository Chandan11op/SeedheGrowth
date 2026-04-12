export default function Navbar({ onOpenModal, theme, onToggleTheme }) {
  return (
    <nav>
      <div className="nav-logo">
        <div className="nav-wordmark">
          <span className="nav-seedhe">Seedhe</span>
          <span className="nav-growth">Growth</span>
        </div>
        <div className="nav-rule" />
      </div>

      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#why">Why Us</a></li>
        <li><a href="#process">Process</a></li>
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
          <img src="/toggle.png" alt="Toggle theme" />
        </button>
      </div>
    </nav>
  )
}
