import { Eye, FileText, Shield, Layers, Target, BarChart3 } from 'lucide-react'
import './WhatYouGain.css'

const gains = [
  { icon: Eye, title: 'Clear, real-time financial visibility' },
  { icon: FileText, title: 'Structured and documented processes' },
  { icon: Shield, title: 'Stronger control and governance' },
  { icon: Layers, title: 'Scalable operational framework' },
  { icon: Target, title: 'Clear roles and accountability' },
  { icon: BarChart3, title: 'Data-driven decision-making' },
]

function WhatYouGain() {
  return (
    <section className="what-you-gain animate-on-scroll">
      <div className="container">
        <span className="section-label">The Result</span>
        <h2 className="heading-lg section-title">What You Gain</h2>
        <div className="gains-grid">
          {gains.map((gain, index) => {
            const IconComponent = gain.icon
            return (
              <div key={index} className="gain-card stagger-item">
                <span className="gain-icon">
                  <IconComponent size={22} strokeWidth={1.5} />
                </span>
                <h3 className="gain-title">{gain.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatYouGain
