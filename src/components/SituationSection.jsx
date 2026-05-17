import { AlertCircle } from 'lucide-react'
import './SituationSection.css'

const situations = [
  'Profitability needs clearer visibility across products, services, or segments',
  'Cash flow requires more structured planning and tracking',
  'Operations grow beyond informal processes',
  'Processes exist but are not fully documented',
  'Compliance and reporting need tighter consistency',
  'Roles and responsibilities need clearer definition',
]

function SituationSection() {
  return (
    <section className="situation-section animate-on-scroll">
      <div className="container">
        <div className="situation-content">
          <span className="section-label">The Challenge</span>
          <h2 className="heading-lg section-title">As Your Business Evolves</h2>
          <p className="situation-intro">
            As businesses expand, certain areas naturally require stronger alignment and visibility:
          </p>
          <div className="situation-list">
            {situations.map((item, index) => (
              <div key={index} className="situation-item stagger-item">
                <span className="situation-icon">
                  <AlertCircle size={18} strokeWidth={1.5} />
                </span>
                <p className="situation-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SituationSection
