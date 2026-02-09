import './report.css'

function Report() {
  return (
    <section className="page report">
      <div className="report__hero">
        <h2 className="report__title">Create a new report</h2>
        <p className="report__subtitle">Submit verified issues with evidence and location.</p>
      </div>
      <div className="report__card">
        <div className="report__row">
          <span>Proof upload</span>
          <button type="button" className="report__button">Upload file</button>
        </div>
        <div className="report__row">
          <span>Location</span>
          <button type="button" className="report__button">Select area</button>
        </div>
        <div className="report__row">
          <span>Urgency</span>
          <div className="report__chips">
            <button type="button">Standard</button>
            <button type="button">Priority</button>
          </div>
        </div>
      </div>
      <button type="button" className="report__submit">Submit report</button>
    </section>
  )
}

export default Report
