import './ClientLogoStrip.css'

const placeholderLogos = [
  'Manufacturing Co',
  'TechVentures',
  'GlobalTrade Ltd',
  'ServicePro Inc',
  'BuildRight Corp',
  'InnovateLab',
  'ScaleUp Partners',
  'PrimeSolutions',
]

function ClientLogoStrip() {
  return (
    <section className="client-logo-strip animate-on-scroll">
      <div className="container">
        <div className="strip-header">
          <h2 className="heading-md">Working With Businesses That Are Scaling With Structure</h2>
          <p className="strip-subtext">
            We work with businesses across industries, supporting their journey toward structured and scalable growth.
          </p>
        </div>
      </div>

      <div className="logo-marquee">
        <div className="marquee-track">
          {[...placeholderLogos, ...placeholderLogos].map((logo, index) => (
            <div key={index} className="logo-item">
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="strip-footer">
          Across Manufacturing | Services | Trading | Emerging Businesses
        </p>
      </div>
    </section>
  )
}

export default ClientLogoStrip
