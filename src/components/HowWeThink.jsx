import { X, Check, XCircle, CheckCircle } from 'lucide-react'
import './HowWeThink.css'

const traditionalItems = [
  'Deliver a report and step away',
  'Focus on diagnosis over execution',
  'Apply generic frameworks',
  'Measure activity instead of outcomes',
]

const ourApproachItems = [
  'Build systems and implement them alongside your team',
  'Focus on execution, not just recommendations',
  'Design solutions based on your business context',
  'Measure outcomes and continuously improve',
]

function HowWeThink() {
  return (
    <section className="how-we-think animate-on-scroll">
      <div className="container">
        <span className="section-label section-label-center">How We Think</span>
        <div className="comparison-wrapper">
          <div className="comparison-card traditional">
            <h3 className="card-heading">
              <XCircle size={20} strokeWidth={1.5} />
              Traditional Approach
            </h3>
            <ul className="comparison-list">
              {traditionalItems.map((item, index) => (
                <li key={index}>
                  <span className="list-icon traditional-icon">
                    <X size={14} strokeWidth={2} />
                  </span>
                  <span className="list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="comparison-divider">
            <span className="divider-badge">vs</span>
          </div>

          <div className="comparison-card our-approach">
            <h3 className="card-heading">
              <CheckCircle size={20} strokeWidth={1.5} />
              Our Approach
            </h3>
            <ul className="comparison-list">
              {ourApproachItems.map((item, index) => (
                <li key={index}>
                  <span className="list-icon approach-icon">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeThink
