// Seedhe Growth
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo">
            <div className="nav-wordmark">
              <span className="nav-seedhe">Seedhe</span>
              <span className="nav-growth">Growth</span>
            </div>
            <div className="nav-rule" />
          </div>
          <p className="footer-tagline">Seedhi Baat. Seedha Result.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:Seedhegrowth@gmail.com">Seedhegrowth@gmail.com</a></li>
              <li><a href="tel:+919175903084">+91 91759 03084</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#founders">Founders</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="https://www.instagram.com/seedhegrowth/" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
              <a href="https://www.linkedin.com/company/seedhegrowth/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} Seedhe Growth. All rights reserved.
        </div>
        <div className="footer-made-by">
          <span style={{ fontSize: '10px', color: 'var(--muted)' }}>CRAFTED BY SEEDHE GROWTH</span>
        </div>
      </div>
    </footer>
  )
}
