import { Mail, Phone } from 'lucide-react'
import './ConnectSection.css'

function ConnectSection() {
  return (
    <section className="connect-section animate-on-scroll">
      <div className="container">
        <div className="connect-content">
          <span className="section-label">Get in Touch</span>
          <h2 className="heading-lg section-title">Connect With Us</h2>
          <p className="connect-intro">
            You can reach out to us directly, or schedule a discussion based on your availability.
          </p>
          <div className="connect-cards">
            <div className="connect-card">
              <span className="connect-icon">
                <Mail size={22} strokeWidth={1.5} />
              </span>
              <div className="connect-info">
                <h3 className="connect-label">General & Business Inquiries</h3>
                <a href="mailto:info@adbco.in" className="connect-value">info@adbco.in</a>
              </div>
            </div>
            <div className="connect-card">
              <span className="connect-icon">
                <Phone size={22} strokeWidth={1.5} />
              </span>
              <div className="connect-info">
                <h3 className="connect-label">Phone</h3>
                <a href="tel:+910000000000" className="connect-value">+91 (000) 000 0000</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectSection
