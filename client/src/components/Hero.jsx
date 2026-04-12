export default function Hero({ onOpenModal }) {
  return (
    <section className="hero">
      <div className="hero-bg-s">S</div>
      <div className="hero-bg-g">G</div>

      <div className="hero-eyebrow">India's Seedha Growth Agency</div>

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
        <a href="#services" className="btn-secondary" id="hero-see-work-link">
          See Our Work
        </a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}
