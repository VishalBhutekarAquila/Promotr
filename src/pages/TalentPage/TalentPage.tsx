import TalentHeroSection from '../../components/sections/TalentHeroSection/TalentHeroSection';
import TalentJoinSection from '../../components/sections/TalentJoinSection/TalentJoinSection';
import TalentBenefitsSection from '../../components/sections/TalentBenefitsSection/TalentBenefitsSection';
import TalentHowItWorksSection from '../../components/sections/TalentHowItWorksSection/TalentHowItWorksSection';
import TalentRolesSection from '../../components/sections/TalentRolesSection/TalentRolesSection';
import TalentTestimonialSection from '../../components/sections/TalentTestimonialSection/TalentTestimonialSection';
import { TalentFAQSection, TalentCTASection } from '../../components/sections/TalentFAQSection/TalentFAQSection';

const TalentPage = () => {
  return (
    <div className="bg-white w-full">
      <TalentHeroSection />
      <TalentJoinSection />
      <TalentBenefitsSection />
      <TalentHowItWorksSection />
      <TalentRolesSection />
      <TalentTestimonialSection />
      <TalentFAQSection />
      <TalentCTASection />
    </div>
  );
};

export default TalentPage;
