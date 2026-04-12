const STEPS = [
  {
    num: 'Step 01',
    name: 'Baat Karo',
    desc: 'Free 30-min strategy call. We listen, we ask hard questions, we tell you exactly what we think — no fluff.',
  },
  {
    num: 'Step 02',
    name: 'Plan Banao',
    desc: 'A clear, honest roadmap tailored to your brand, budget and goals. No cookie-cutter decks.',
  },
  {
    num: 'Step 03',
    name: 'Kaam Shuru',
    desc: 'We execute with speed and precision. Every deliverable on time, every rupee tracked.',
  },
  {
    num: 'Step 04',
    name: 'Results Dekho',
    desc: 'Weekly updates, real numbers, honest reviews. Growth you can actually see.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="section-header reveal">
        <div>
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">
            Seedha <em>process</em>
          </h2>
        </div>
        <p className="section-desc">
          Four steps. No hidden stages, no surprise milestones.
        </p>
      </div>

      <div className="process-steps">
        {STEPS.map((s) => (
          <div className="process-step reveal" key={s.num}>
            <div className="step-dot" />
            <div className="step-num">{s.num}</div>
            <div className="step-name">{s.name}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
