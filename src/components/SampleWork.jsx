import './SampleWork.css'

const cases = [
  {
    industry: 'Manufacturing Business',
    challenge: 'Limited visibility into profitability across product lines',
    solution: 'Built cost accounting systems and real-time profitability tracking',
  },
  {
    industry: 'Tech Services Firm',
    challenge: 'Founder-driven operations with no structured processes',
    solution: 'Mapped workflows, documented SOPs, and implemented execution systems',
  },
  {
    industry: 'Retail Business',
    challenge: 'No consolidated view of cash flow across multiple entities',
    solution: 'Implemented consolidated reporting and cash flow tracking systems',
  },
  {
    industry: 'IT Services Business',
    challenge: 'Project-level profitability and resource tracking not clearly defined',
    solution: 'Built project-based MIS, resource tracking, and performance dashboards',
  },
  {
    industry: 'E-commerce Business',
    challenge: 'Lack of visibility across sales channels, margins, and working capital',
    solution: 'Designed channel-wise reporting, margin tracking, and cash flow systems',
  },
]

function SampleWork() {
  return (
    <section className="sample-work animate-on-scroll">
      <div className="container">
        <span className="section-label">Case Studies</span>
        <h2 className="heading-lg section-title">How This Looks in Practice</h2>
        <div className="cases-grid">
          {cases.map((item, index) => (
            <div key={index} className="case-card stagger-item">
              <h3 className="case-industry">{item.industry}</h3>
              <div className="case-challenge">
                <span className="case-label challenge-label">Challenge</span>
                <p className="case-text">{item.challenge}</p>
              </div>
              <div className="case-solution">
                <span className="case-label solution-label">Solution</span>
                <p className="case-text">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SampleWork
