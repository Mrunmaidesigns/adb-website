import './CoreValueSection.css'

const values = [
  'Improve financial visibility and reporting',
  'Bring consistency to operational workflows',
  'Reduce dependency on individuals',
  'Strengthen compliance and internal controls',
  'Enable scalable day-to-day execution',
]

function CoreValueSection() {
  return (
    <section className="core-value-section animate-on-scroll">
      <div className="container">
        <div className="core-value-grid">
          <div className="core-value-content">
            <h2 className="heading-lg">Where We Add Value</h2>
            <p className="core-value-intro">
              As businesses expand, certain areas need stronger alignment and consistency.
              We step in to strengthen the foundation behind your operations:
            </p>
          </div>
          <div className="core-value-list">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <span className="value-number">{String(index + 1).padStart(2, '0')}</span>
                <p className="value-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValueSection
