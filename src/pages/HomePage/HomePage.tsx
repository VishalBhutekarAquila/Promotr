// src/pages/HomePage.tsx
import Navigation from '../../components/layout/Navigation/Navigation'
import Footer from '../../components/layout/Footer/Footer'
import HeroSection from '../../components/sections/HeroSection/HeroSection'
import HowItWorksSection from '../../components/sections/HowItWorksSection/HowItWorksSection'
import ServicesSection from '../../components/sections/ServicesSection/ServicesSection'
// import ContactSection from '../components/sections/ContactSection';
import WhyChooseAquila from '../../components/sections/WhyChooseAquila/WhyChooseAquila'
import WhatOurClientsSay from '@components/sections/WhatOurClientsSay/WhatOurClientsSay'

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navigation />
      <main className="grow">
        <HeroSection />
        <HowItWorksSection />
        {/* <ContactSection /> */}
        <WhatOurClientsSay />
        <WhyChooseAquila />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
