export default function Hero({ onOpenModal }) {
  return (
    <section className="hero">
      <div className="hero-bg-s" aria-hidden="true">S</div>
      <div className="hero-bg-g" aria-hidden="true">G</div>

      <div className="hero-content">
        <p className="hero-eyebrow">India's Seedha Growth Agency</p>

        <h1 className="hero-title">
          Seedhe<br />
          <span className="hero-title-green">Growth</span>
        </h1>

        <div className="hero-gold-rule" />

        <p className="hero-sub">
          No jugaad. No bakwaas. Just{' '}
          <span>strategy that works</span> and results that show — online,
          offline, everywhere your brand needs to be.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={onOpenModal} id="hero-start-growing-btn">
            Start Growing
          </button>
          <a href="#founders" className="btn-secondary" id="hero-see-work-link">
            Meet The Founders
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">

      </div>
    </section>
  )
}
// Seedhe Growth