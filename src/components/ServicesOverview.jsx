import { TrendingUp, Briefcase, Settings, Shield, Search, Users } from 'lucide-react'
import './ServicesOverview.css'

const services = [
  { id: 1, title: 'Accounting & Financial Management', icon: TrendingUp },
  { id: 2, title: 'Strategic Finance (Virtual CFO)', icon: Briefcase },
  { id: 3, title: 'Business Systems & Process Consulting', icon: Settings },
  { id: 4, title: 'Compliance & Governance', icon: Shield },
  { id: 5, title: 'Internal Audit & Control Review', icon: Search },
  { id: 6, title: 'HR & People Advisory', icon: Users },
]

function ServicesOverview() {
  return (
    <section className="services-overview animate-on-scroll">
      <div className="container">
        <span className="section-label">Our Services</span>
        <h2 className="heading-lg section-title">Comprehensive Support Across Every Function</h2>
        <div className="overview-grid">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="overview-card stagger-item">
                <span className="overview-icon">
                  <IconComponent size={22} strokeWidth={1.5} />
                </span>
                <h3 className="overview-title">{service.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
