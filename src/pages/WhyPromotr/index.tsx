import WhyChoosePromotr from './_WhyChoosePromotr';
import WhoBenefits from './_WhoBenefits';
import Footer from './_Footer';
import UpgradeStaffing from './_UpgradeStaffing';
import WhyLeads from './_WhyLeads';
import Testimonials from './_Testimonials';
import Difference from './_Difference';
import Navigation from '../../components/layout/Navigation/Navigation';

const WhyPromotr = () => {
  return (
    <>
      <Navigation />
      {/* Why Choose Promotr */}
      <WhyChoosePromotr />
      {/* The Difference at a Glance */}
      <Difference />
      {/* Why Promotr Leads */}
      <WhyLeads />
      {/* Who Benefits */}
      <WhoBenefits />
      {/* Testimonials */}
      <Testimonials />
      {/* Ready to Upgrade Event Staffing */}
      <UpgradeStaffing />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default WhyPromotr;
