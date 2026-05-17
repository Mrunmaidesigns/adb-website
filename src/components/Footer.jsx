import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import './Footer.css'

function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">ADB</span>
              <span className="logo-subtext">Consulting LLP</span>
            </div>
            <p className="footer-tagline">
              We don't just advise. We execute.
            </p>
            <p className="footer-description">
              Helping businesses move toward structured and scalable growth.
            </p>

            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <span className="newsletter-label">Stay updated</span>
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-submit">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {status === 'success' && (
                <p className="newsletter-success">Thank you for subscribing!</p>
              )}
            </form>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Quick links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/value">Where We Add Value</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Address</h4>
            <p className="contact-item">
              <MapPin size={16} />
              Pune, Maharashtra, India
            </p>
            <h4 className="footer-heading">Contact</h4>
            <a href="mailto:info@adbconsulting.com" className="contact-item">
              <Mail size={16} />
              info@adbconsulting.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            &copy; {new Date().getFullYear()} ADB Consulting LLP. All rights reserved.
          </p>
          <p className="footer-tagline-bottom">
            Innovate to Evolve
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
