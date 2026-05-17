import './OurApproach.css'

const steps = [
  { number: '01', title: 'Understand', description: 'We begin by understanding your business, operations, and goals.' },
  { number: '02', title: 'Identify Areas for Improvement', description: 'We assess where visibility, processes, or systems can be strengthened.' },
  { number: '03', title: 'Design Systems', description: 'We design practical solutions aligned with how your business operates.' },
  { number: '04', title: 'Implement', description: 'We work alongside your team to ensure effective execution.' },
  { number: '05', title: 'Monitor & Improve', description: 'We track outcomes and continuously refine systems as your business evolves.' },
]

function OurApproach() {
  return (
    <section className="our-approach animate-on-scroll">
      <div className="container">
        <span className="section-label">Our Process</span>
        <h2 className="heading-lg section-title">How We Work</h2>
        <div className="approach-timeline">
          {steps.map((step, index) => (
            <div key={index} className="approach-step stagger-item">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurApproach
