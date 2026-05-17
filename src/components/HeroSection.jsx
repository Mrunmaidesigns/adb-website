import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="heading-xl">We Don't Just Advise. We Execute.</h1>
          <p className="hero-subtext">
            As businesses grow, complexity increases. We bring the structure, visibility, and control required to scale — while you stay focused on running the business.
          </p>
          <p className="hero-support">
            You run your business. We ensure it runs on structure.
          </p>
          <div className="hero-cta-group">
            <a href="/contact" className="btn btn-primary hero-cta">
              Book a Consultation
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/services" className="btn btn-outline hero-cta-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
