import Connected from '../../components/sections/FooterSection/Connected';
import QuickLinks from '../../components/sections/FooterSection/links';


const Footer = () => {
  return (
    <>
      <div className='pt-5 md:pt-10 pb-7 text-white bg-radial from-[#420300] to-[#080101]'>
        <div className='flex flex-row md:gap-7 md:flex-row md:justify-center'>
          <QuickLinks></QuickLinks>
          <Connected></Connected>
        </div>
        <h4 className='text-center font-semibold text-[6.6px] md:text-lg md:mt-10'>© 2025 Promotr Events & Marketing. All rights reserved.</h4>
        <h6 className='text-center font-light italic text-[6.6px] md:text-lg'>Built to empower events. Driven by people.</h6>
      </div>
    </>
  );
};

export default Footer;
