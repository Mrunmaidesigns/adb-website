import './ValuesSection.css'

const values = [
  {
    id: 1,
    title: 'Ownership',
    description: 'We take responsibility for outcomes, not just deliverables.',
  },
  {
    id: 2,
    title: 'Execution',
    description: 'We focus on implementation, not just ideas.',
  },
  {
    id: 3,
    title: 'Clarity',
    description: 'We simplify complexity and focus on what matters.',
  },
  {
    id: 4,
    title: 'Growth',
    description: 'Continuous improvement for our clients and ourselves.',
  },
  {
    id: 5,
    title: 'Integrity',
    description: 'We do what we say and stand by it.',
  },
]

function ValuesSection() {
  return (
    <section className="values-section animate-on-scroll">
      <div className="container">
        <span className="section-label section-label-center">Our Values</span>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <span className="value-card-number">{String(value.id).padStart(2, '0')}</span>
              <h3 className="value-card-title">{value.title}</h3>
              <p className="value-card-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
