import { Mail } from 'lucide-react'
import './CareersSection.css'

function CareersSection() {
  return (
    <section className="careers-section animate-on-scroll">
      <div className="container">
        <div className="careers-content">
          <span className="section-label">Join Our Team</span>
          <h2 className="heading-lg section-title">Careers</h2>
          <p className="careers-text">
            At ADB Consulting, you work on real business challenges — not routine tasks. We are building a team that values ownership, execution, and continuous improvement.
          </p>
          <p className="careers-text">
            This is an environment built for individuals who want to grow through real work and responsibility. If you are looking to learn, take ownership, and grow in this environment, you can reach out to us.
          </p>
          <a href="mailto:info@adbco.in" className="careers-email">
            <Mail size={18} strokeWidth={1.5} />
            info@adbco.in
          </a>
        </div>
      </div>
    </section>
  )
}

export default CareersSection
