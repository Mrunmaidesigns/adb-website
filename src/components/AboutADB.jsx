import './AboutADB.css'

function AboutADB() {
  return (
    <section className="about-adb animate-on-scroll">
      <div className="container">
        <div className="adb-grid">
          <div className="adb-content">
            <span className="section-label">About ADB</span>
            <h2 className="heading-lg">
              ADB Consulting LLP is part of the ADB Group, established in 2018 in Pune.
            </h2>
            <p className="adb-description">
              As the consulting arm of the group, we focus on building structured, scalable, and well-governed businesses through a combination of strategic thinking and hands-on implementation.
            </p>
          </div>
          <div className="adb-stats">
            <div className="adb-stat-item">
              <span className="stat-value">2018</span>
              <span className="stat-label">Year Established</span>
            </div>
            <div className="adb-stat-item">
              <span className="stat-value">Pune</span>
              <span className="stat-label">Headquarters</span>
            </div>
            <div className="adb-stat-item">
              <span className="stat-value">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutADB
