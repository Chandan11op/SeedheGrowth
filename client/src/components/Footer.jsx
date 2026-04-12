export default function Footer() {
  return (
    <footer>
      <div className="nav-logo">
        <div className="nav-wordmark">
          <span className="nav-seedhe">Seedhe</span>
          <span className="nav-growth">Growth</span>
        </div>
        <div className="nav-rule" />
      </div>

      <div className="footer-tagline">Seedhi Baat. Seedha Result.</div>

      <div className="footer-copy">
        © {new Date().getFullYear()} Seedhe Growth. All rights reserved.
      </div>
    </footer>
  )
}
