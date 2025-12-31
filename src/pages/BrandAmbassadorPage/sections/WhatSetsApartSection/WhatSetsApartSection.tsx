import { Box, Title } from '@mantine/core';

const featureTexts = [
  'Tech-driven talent sourcing and management',
  'Quality-vetted ambassadors curated for your brand',
  'Transparent processes with end-to-end support',
  'Flexible scaling and smart reporting tools',
];

const featuresDesktop = [
  {
    text: 'Tech-driven talent sourcing and management',
    cardClasses: 'top-[180px] left-[50px] w-[240px] h-[140px]',
    lineImage: '/line-9.svg',
    lineClasses: 'absolute top-[240px] left-[290px] w-[150px] h-[92px]',
  },
  {
    text: 'Quality-vetted ambassadors curated for your brand',
    cardClasses: 'top-[180px] right-[50px] w-[240px] h-[140px]',
    lineImage: '/line-10.svg',
    lineClasses: 'absolute top-[240px] right-[290px] w-[150px] h-[92px]',
  },
  {
    text: 'Transparent processes with end-to-end support',
    cardClasses: 'bottom-[180px] left-[50px] w-[240px] h-[140px]',
    lineImage: '/line-12.svg',
    lineClasses: 'absolute bottom-[240px] left-[290px] w-[150px] h-[82px]',
  },
  {
    text: 'Flexible scaling and smart reporting tools',
    cardClasses: 'bottom-[180px] right-[50px] w-[240px] h-[140px]',
    lineImage: '/line-11.svg',
    lineClasses: 'absolute bottom-[240px] right-[290px] w-[150px] h-[82px]',
  },
];

const WhatSetsApartSection = () => {
  return (
    <Box
      component="section"
      className="relative w-full lg:h-[907px] bg-black overflow-hidden py-12 md:py-16 lg:py-0 px-4 md:px-8"
    >
      <div className="hidden lg:block absolute top-[113px] left-[329px] w-[782px] h-[799px] bg-[#5a0400] rounded-[391.19px/399.25px] rotate-[-90.45deg] blur-[279.61px]" />

      <Title
        order={2}
        className="text-center lg:absolute lg:top-14 lg:left-[calc(50.00%_-_276px)] w-full lg:w-[551px] font-bold text-white text-[36px] md:text-[48px] lg:text-[64px] tracking-[0] leading-[normal] mb-8 lg:mb-0"
      >
        What Sets Promotr Apart
      </Title>

      <div className="lg:hidden flex flex-col gap-4 max-w-[500px] mx-auto">
        <img className="w-full max-w-[400px] mx-auto mb-4" alt="Think different bro" src="/think-different-bro-1.png" />
        {featureTexts.map((text, index) => (
          <div
            key={index}
            className="bg-[#7a625e8a] rounded-[20.53px] border-[0.73px] border-solid shadow-[3.67px_8.8px_2.93px_#00000066] border-[#faeecf6b] p-4"
          >
            <p className="font-normal text-white text-lg text-center">{text}</p>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <img
          className="absolute top-[261px] left-[397px] w-[646px] h-[646px] object-cover"
          alt="Think different bro"
          src="/think-different-bro-1.png"
        />

        {featuresDesktop.map((feature, index) => (
          <div key={index}>
            <img className={feature.lineClasses} alt="Line" src={feature.lineImage} />

            <div
              className={`${feature.cardClasses} bg-[#7a625e8a] rounded-[20px] shadow-[3.67px_8.8px_2.93px_#00000066] absolute flex items-center justify-center p-6`}
            >
              <p className="font-normal text-white text-xl tracking-[0] leading-[1.4] text-center">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default WhatSetsApartSection;
