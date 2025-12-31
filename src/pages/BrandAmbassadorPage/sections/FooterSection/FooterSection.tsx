import { Box, TextInput, Button } from '@mantine/core';
import { ChevronRight } from 'lucide-react';

const quickLinks = [
  'About',
  'Event Staffing',
  'Brand Ambassadors & Promoters',
  'Influencers & DJs',
  'Trade Show & Conference Staffing',
  'Promotional Models',
  'Security & Bouncers',
];

const socialIcons = [
  { src: '/instagram.svg', alt: 'Instagram' },
  { src: '/twitter.svg', alt: 'Twitter' },
  { src: '/facebook.svg', alt: 'Facebook' },
  { src: '/youtube.svg', alt: 'Youtube' },
];

const FooterSection = () => {
  return (
    <Box
      component="section"
      className="relative w-full bg-black py-12 md:py-16 lg:py-[91px] px-4 md:px-8 lg:px-[79px]"
    >
      <div className="hidden lg:block absolute top-[calc(50%-372px)] left-[calc(50%-364px)] w-[730px] h-[745px] rounded-[365px/372.53px] blur-[291.67px] bg-[#5a0400] rotate-[-90.45deg]" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-[120px]">
          {/* Removed duplicate Quick Links section from BrandAmbassadorPage FooterSection */}
          </aside>

          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4 text-center lg:text-left">
              <h2 className="font-normal text-[40px] md:text-[52px] lg:text-6xl tracking-[0] leading-[1.2]">
                <span className="font-bold text-white">Stay </span>
                <span className="font-bold text-[#f36e29]">Connected</span>
              </h2>

              <p className="font-medium text-white text-[18px] md:text-[20px] lg:text-[24px] tracking-[0] leading-[1.4] max-w-[700px] mx-auto lg:mx-0">
                Stay updated with the latest opportunities, trends, and event insights. Join our community of event professionals and businesses today.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-[20px] md:gap-[25px]">
              {socialIcons.map((icon, index) => (
                <button key={index} className="hover:opacity-80 transition-opacity">
                  <img className="w-[28px] h-[28px] md:w-[33px] md:h-[33px]" alt={icon.alt} src={icon.src} />
                </button>
              ))}
            </div>

            <div className="relative w-full max-w-[663px] h-[60px] md:h-[68px] bg-[#7a625e8a] rounded-[23.33px] border-[0.83px] border-solid border-[#faeecf6b] shadow-[4.17px_10px_3.33px_#00000066] flex items-center mx-auto lg:mx-0">
              <TextInput
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-full"
                classNames={{
                  root: 'flex-1 h-full',
                  wrapper: 'h-full',
                  input:
                    '!bg-transparent border-0 text-base md:text-lg lg:text-xl text-white placeholder:text-[#c4c4c4] font-normal px-4 md:px-6 lg:px-8 h-full',
                }}
                styles={{
                  input: {
                    backgroundColor: 'transparent !important',
                    border: 'none',
                    outline: 'none',
                    '&:focus': {
                      outline: 'none',
                      backgroundColor: 'transparent !important',
                    },
                    '&::placeholder': {
                      color: '#c4c4c4',
                      opacity: 1,
                    },
                  },
                }}
              />
              <Button className="absolute right-0 h-[60px] md:h-[68px] w-[160px] md:w-[200px] lg:w-[223.01px] bg-[#f36e29] hover:bg-[#f36e29]/90 rounded-[23.33px] border-[0.83px] border-solid border-[#faeecf6b] shadow-[4.17px_10px_3.33px_#00000066] font-semibold text-white text-base md:text-lg lg:text-xl transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2 mt-12 md:mt-16 lg:mt-[80px]">
          <p className="font-bold text-white text-[16px] md:text-[18px] lg:text-[20px] tracking-[0] leading-[24px] md:leading-[28px]">
            © 2025 Promotr Events & Marketing. All rights reserved.
          </p>
          <p className="font-normal italic text-white text-[16px] md:text-[18px] lg:text-[20px] tracking-[0] leading-[24px] md:leading-[28px]">
            Built to empower events. Driven by people.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default FooterSection;
