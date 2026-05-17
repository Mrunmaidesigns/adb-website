import './LeadershipSection.css'

function LeadershipSection() {
  return (
    <section className="leadership-section animate-on-scroll">
      <div className="container">
        <span className="section-label section-label-center">Leadership</span>
        <div className="leader-card">
          <div className="leader-info">
            <h3 className="leader-name">CA Aniruddha Bhide</h3>
            <span className="leader-title">Founder, ADB Group</span>
            <p className="leader-description">
              With over 10+ years of experience across finance, compliance, and business advisory, the focus has been on building practical, execution-driven systems that help businesses scale with clarity and control.
            </p>
          </div>
          <div className="leader-badge">
            <span className="badge-value">10+</span>
            <span className="badge-label">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection
