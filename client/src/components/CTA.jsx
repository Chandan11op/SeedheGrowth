export default function CTA({ onOpenModal }) {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg-text">SG</div>

      <div className="cta-eyebrow reveal">Ready to Grow?</div>

      <h2 className="cta-title reveal">
        Ab shuru<br />
        <span style={{ color: 'var(--emerald)' }}>karte hain.</span>
      </h2>

      <div className="cta-gold-rule reveal" />

      <p className="cta-sub reveal">
        No commitments, no pressure. Just a straight conversation about your
        brand and where it can go.
      </p>

      <div className="hero-actions reveal" style={{ justifyContent: 'center' }}>
        <button
          className="btn-primary"
          onClick={onOpenModal}
          id="cta-book-call-btn"
        >
          Book a Free Call
        </button>
      </div>
    </section>
  )
}
