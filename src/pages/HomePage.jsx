import HeroSection from '../components/HeroSection'
import ClientLogoStrip from '../components/ClientLogoStrip'
import TrustStrip from '../components/TrustStrip'
import StrategicHook from '../components/StrategicHook'
import TransformationSection from '../components/TransformationSection'
import CoreValueSection from '../components/CoreValueSection'
import ServicesSnapshot from '../components/ServicesSnapshot'
import FinalCTA from '../components/FinalCTA'

function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogoStrip />
      <TrustStrip />
      <StrategicHook />
      <TransformationSection />
      <CoreValueSection />
      <ServicesSnapshot />
      <FinalCTA />
    </>
  )
}

export default HomePage
