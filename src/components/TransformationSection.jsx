import './TransformationSection.css'

function TransformationSection() {
  return (
    <section className="transformation-section animate-on-scroll">
      <div className="container">
        <h2 className="heading-lg section-title">From Growth to Structured Scale</h2>
        <div className="transformation-grid">
          <div className="transformation-card growing">
            <span className="card-label">Growing & Evolving</span>
            <ul className="card-list">
              <li>Expanding operations</li>
              <li>Founder-driven execution</li>
              <li>Processes developing organically</li>
            </ul>
          </div>
          <div className="transformation-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <div className="transformation-card structured">
            <span className="card-label">Structured & Scalable</span>
            <ul className="card-list">
              <li>System-supported execution</li>
              <li>Defined and streamlined processes</li>
              <li>Clear financial insights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransformationSection
