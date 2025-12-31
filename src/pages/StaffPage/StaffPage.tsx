// import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Navigation from '../../components/layout/Navigation/Navigation';
import HeroSection from './sections/HeroSection/HeroSection';
import WhyChooseSection from './sections/WhyChooseSection/WhyChooseSection';
import HowItWorksSection from './sections/HowItWorksSection/HowItWorksSection';
import PerfectForSection from './sections/PerfectForSection/PerfectForSection';
import WhatSetsApartSection from './sections/WhatSetsApartSection/WhatSetsApartSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import FaqSection from './sections/FaqSection/FaqSection';

const StaffPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      {/* <Header /> */}
      <Navigation />
      <main className="grow">
        <HeroSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <PerfectForSection />
        <WhatSetsApartSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default StaffPage;
