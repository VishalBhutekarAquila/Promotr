import HeroSection from './sections/HeroSection';
import WhyPromotrSection from './sections/WhyPromotrSection';
import HowItWorksSection from './sections/HowItWorksSection';
import SuitableForSection from './sections/SuitableForSection';
import WhatSetsApartSection from './sections/WhatSetsApartSection';
import SuccessStoriesSection from './sections/SuccessStoriesSection';
import FaqSection from './sections/FaqSection';
import BrandVisibilitySection from './sections/BrandVisibilitySection';
import FooterSection from './sections/FooterSection';

const BrandAmbassadorPage = () => {
  return (
    <div className="bg-black overflow-hidden w-full flex flex-col">
      <HeroSection />
      <WhyPromotrSection />
      <HowItWorksSection />
      <SuitableForSection />
      <WhatSetsApartSection />
      <SuccessStoriesSection />
      <FaqSection />
      <BrandVisibilitySection />
    </div>
  );
};

export default BrandAmbassadorPage;
