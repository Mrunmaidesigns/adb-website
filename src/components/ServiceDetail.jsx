import { Check } from 'lucide-react'
import './ServiceDetail.css'

function ServiceDetail({ number, title, oneLine, whereHelps, bullets, outcome, howWeWork }) {
  return (
    <section className="service-detail animate-on-scroll">
      <div className="container">
        <div className="detail-header">
          <span className="detail-number">{number}</span>
          <div className="detail-header-text">
            <h2 className="heading-md detail-title">{title}</h2>
            <p className="detail-one-line">{oneLine}</p>
          </div>
        </div>

        <div className="detail-body">
          <div className="detail-section">
            <h3 className="detail-subtitle">Where This Helps</h3>
            <p className="detail-text">{whereHelps}</p>
          </div>

          <div className="detail-section">
            <h3 className="detail-subtitle">What We Do</h3>
            <ul className="detail-bullets">
              {bullets.map((bullet, index) => (
                <li key={index}>
                  <Check size={16} strokeWidth={2} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h3 className="detail-subtitle">Outcome</h3>
            <div className="outcome-box">
              <p className="outcome-text">{outcome}</p>
            </div>
          </div>

          <div className="detail-section">
            <h3 className="detail-subtitle">How We Work</h3>
            <p className="detail-text">{howWeWork}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
