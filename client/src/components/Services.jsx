const SERVICES = [
  {
    num: '01',
    name: 'Online Campaigns',
    desc: 'Performance-driven digital campaigns across Meta, Google, and beyond. Every rupee spent with intent, every result tracked to the last click.',
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none">
        <path d="M5 35L15 20L22 28L30 12L35 20" stroke="#00A86B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="35" cy="20" r="3" fill="#C9A84C" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Offline Campaigns',
    desc: "Hoardings, events, BTL activations. We take your brand from the screen to the street — seedha into your audience's world.",
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="8" width="30" height="24" rx="2" stroke="#00A86B" strokeWidth="1.5" />
        <path d="M13 20H27M13 14H20M13 26H24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Business Agents',
    desc: 'On-ground reps and digital agents that represent your brand with the same energy you\'d bring yourself. Seedha, no middleman nonsense.',
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="16" r="8" stroke="#00A86B" strokeWidth="1.5" />
        <path d="M6 36C6 29.4 12.3 24 20 24C27.7 24 34 29.4 34 36" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Brand Strategy',
    desc: 'We build brands that mean something — from positioning and identity to tone of voice and visual language. Asli strategy, not jugaad.',
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none">
        <polygon points="20,5 35,35 5,35" stroke="#00A86B" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="20" y1="5" x2="20" y2="35" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3,3" />
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Websites',
    desc: 'Fast, beautiful, conversion-focused websites that don\'t just look good — they work. Built to rank, built to convert, built to last.',
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="10" width="30" height="20" rx="2" stroke="#00A86B" strokeWidth="1.5" />
        <path d="M5 16H35" stroke="#C9A84C" strokeWidth="1" />
        <circle cx="10" cy="13" r="1.5" fill="#C9A84C" />
        <circle cx="15" cy="13" r="1.5" fill="#444" />
      </svg>
    ),
  },
  {
    num: '06',
    name: 'Influencer Marketing',
    desc: 'Creators who actually move the needle. We match your brand with the right voices — nano to mega — and manage the whole thing.',
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" stroke="#00A86B" strokeWidth="1.5" />
        <path d="M8 36C8 30 13.4 26 20 26C26.6 26 32 30 32 36" stroke="#00A86B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 10L35 8L33 13" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header reveal">
        <div>
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">
            Kaam jo <em>kaam aata hai</em>
          </h2>
        </div>
        <p className="section-desc">
          Six services. One focus. Make your brand impossible to ignore.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <div className="service-card reveal" key={s.num}>
            <div className="service-num">{s.num}</div>
            {s.icon}
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
// Seedhe Growth