import { TrendingUp, Briefcase, Settings, Shield, Search, Users } from 'lucide-react'
import './ServicesSnapshot.css'

const services = [
  { id: 1, title: 'Accounting & Financial Management', icon: TrendingUp },
  { id: 2, title: 'Strategic Finance (Virtual CFO)', icon: Briefcase },
  { id: 3, title: 'Business Systems & Process Consulting', icon: Settings },
  { id: 4, title: 'Compliance & Governance', icon: Shield },
  { id: 5, title: 'Internal Audit & Control Review', icon: Search },
  { id: 6, title: 'HR & People Advisory', icon: Users },
]

function ServicesSnapshot() {
  return (
    <section className="services-snapshot animate-on-scroll">
      <div className="container">
        <h2 className="heading-lg section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <a key={service.id} href="/services" className="service-card stagger-item">
                <span className="service-icon">
                  <IconComponent size={22} strokeWidth={1.5} />
                </span>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-card-footer">
                  <span className="service-link-text">Learn more</span>
                  <span className="service-arrow">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSnapshot
