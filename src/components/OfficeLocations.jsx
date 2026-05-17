import { MapPin } from 'lucide-react'
import './OfficeLocations.css'

const offices = [
  {
    type: 'Registered Office',
    address: 'ADB Consulting LLP\n514, Siddharth Towers – A\nKothrud, Pune – 411038',
  },
  {
    type: 'Operations Office',
    address: '7, Megha Apartments\nKothrud, Pune – 411038',
  },
  {
    type: 'Branch Office',
    address: 'Nagpur\n(Details available on request)',
  },
]

function OfficeLocations() {
  return (
    <section className="office-locations animate-on-scroll">
      <div className="container">
        <span className="section-label">Our Offices</span>
        <h2 className="heading-lg section-title">Where to Find Us</h2>
        <div className="offices-grid">
          {offices.map((office, index) => (
            <div key={index} className="office-card stagger-item">
              <span className="office-icon">
                <MapPin size={20} strokeWidth={1.5} />
              </span>
              <h3 className="office-type">{office.type}</h3>
              <p className="office-address">{office.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficeLocations
