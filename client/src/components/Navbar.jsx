export default function Navbar({ onOpenModal }) {
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

      <button className="nav-cta" onClick={onOpenModal} id="nav-cta-btn">
        Let's Talk
      </button>
    </nav>
  )
}
