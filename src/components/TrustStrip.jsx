import './TrustStrip.css'

const stats = [
  { value: '50+', label: 'Businesses Supported' },
  { value: '₹2B+', label: 'Annual Revenue Managed' },
  { value: '100%', label: 'Execution-Focused Approach' },
]

function TrustStrip() {
  return (
    <section className="trust-strip animate-on-scroll">
      <div className="container">
        <div className="trust-grid">
          {stats.map((stat, index) => (
            <div key={index} className="trust-item">
              <span className="trust-value">{stat.value}</span>
              <span className="trust-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
