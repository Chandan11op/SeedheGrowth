const ITEMS = [
  'Online Campaigns',
  'Brand Strategy',
  'Influencer Marketing',
  'Business Agents',
  'Website Design',
  'Offline Campaigns',
]

// Duplicate for seamless loop (translateX -50%)
const TRACK = [...ITEMS, ...ITEMS]

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {TRACK.map((item, i) => (
          <div className="marquee-item" key={i}>
            <div className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
