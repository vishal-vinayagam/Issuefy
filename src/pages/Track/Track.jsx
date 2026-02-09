import './track.css'

const steps = [
  { title: 'Report submitted', detail: 'Received by civic desk' },
  { title: 'Inspection', detail: 'Field team assigned' },
  { title: 'Resolution', detail: 'Work order in progress' },
]

function Track() {
  return (
    <section className="page track">
      <div className="track__header">
        <h2 className="section-title">Timeline</h2>
        <span className="track__id">Issue #2048</span>
      </div>
      <div className="track__timeline">
        {steps.map((step, index) => (
          <div key={step.title} className="track__step">
            <div className="track__indicator">
              <div className="track__dot" />
              {index < steps.length - 1 && <div className="track__line" />}
            </div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Track
