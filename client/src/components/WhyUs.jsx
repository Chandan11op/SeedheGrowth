const STATS = [
  { num: '50', suffix: '+', label: 'Brands Grown' },
  { num: '3',  suffix: 'x', label: 'Avg. ROI' },
  { num: '100',suffix: '%', label: 'Seedha Approach' },
  { num: '0',  suffix: '',  label: 'Bakwaas Promised' },
]

const POINTS = [
  {
    num: '01',
    heading: 'No Lock-in Contracts',
    body: 'Month-to-month. We earn your trust every month or you leave. Simple as that.',
  },
  {
    num: '02',
    heading: 'Desi Market Experts',
    body: 'We understand Indian consumers, regional markets, and cultural nuances that global agencies miss.',
  },
  {
    num: '03',
    heading: 'Full-Service, One Team',
    body: 'Strategy, creative, execution — all under one roof. No vendor juggling, no communication gaps.',
  },
  {
    num: '04',
    heading: 'Transparent Reporting',
    body: 'Weekly dashboards, monthly reviews. You always know exactly where your money went and what it did.',
  },
  {
    num: '05',
    heading: 'Seedha Communication',
    body: 'No ghosting, no corporate speak. Direct answers, honest timelines, zero runaround.',
  },
]

export default function WhyUs() {
  return (
    <section className="why" id="why">
      {/* LEFT */}
      <div className="why-left">
        <div className="section-eyebrow reveal">Why Seedhe Growth</div>
        <h2 className="section-title reveal">
          Kyun hum?<br /><em>Kyunki results.</em>
        </h2>
        <p className="why-body reveal">
          Most agencies will give you{' '}
          <strong>fancy decks and vague promises.</strong> We give you a clear
          plan, honest timelines, and results you can actually see.
          <br /><br />
          We're not here to impress you with jargon. We're here to{' '}
          <strong>grow your brand</strong> — seedha, no drama.
        </p>
        <div className="stats-grid reveal">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">
                {s.num}<span>{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="why-right">
        {POINTS.map((p) => (
          <div className="why-point reveal" key={p.num}>
            <div className="why-point-num">{p.num}</div>
            <div className="why-point-content">
              <h4>{p.heading}</h4>
              <p>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
