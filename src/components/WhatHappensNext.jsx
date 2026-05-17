import { Search, Target, Rocket } from 'lucide-react'
import './WhatHappensNext.css'

const steps = [
  { icon: Search, title: 'Understand', description: 'We understand your current business structure and operations' },
  { icon: Target, title: 'Identify', description: 'Identify key areas where systems and processes can be strengthened' },
  { icon: Rocket, title: 'Discuss', description: 'Discuss practical next steps aligned with your business goals' },
]

function WhatHappensNext() {
  return (
    <section className="what-happens-next animate-on-scroll">
      <div className="container">
        <span className="section-label">Next Steps</span>
        <h2 className="heading-lg section-title">What Happens Next</h2>
        <div className="next-steps-grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="next-step stagger-item">
                <span className="next-step-icon">
                  <IconComponent size={24} strokeWidth={1.5} />
                </span>
                <h3 className="next-step-title">{step.title}</h3>
                <p className="next-step-description">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatHappensNext
