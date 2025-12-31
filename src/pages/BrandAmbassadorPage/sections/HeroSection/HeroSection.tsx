import { Box } from '@mantine/core';

const HeroSection = () => {
  return (
    <Box
      component="section"
      className="relative w-full lg:h-[1024px] bg-black pt-32 md:pt-40 lg:pt-0 pb-12 md:pb-16 lg:pb-0 px-4 md:px-8 lg:px-0"
    >
      <div className="hidden lg:block absolute top-[113px] left-[329px] w-[782px] h-[799px] bg-[#5a0400] rounded-[391.19px/399.25px] rotate-[-90.45deg] blur-[279.61px]" />

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1440px] mx-auto lg:absolute lg:top-[388px] lg:left-[79px] gap-8 lg:gap-6 relative z-10">
        <div className="flex flex-col w-full lg:w-[691px] items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
          <h1 className="w-full lg:w-[670px] font-normal text-[36px] md:text-[50px] lg:text-[70px] tracking-[0] leading-[1.2] whitespace-nowrap">
            <span className="font-bold text-[#c4c4c4]">Promoters by </span>
            <span className="font-bold text-[#ff6e1f]">Promotr</span>
          </h1>

          <p className="w-full font-normal text-white text-[20px] md:text-[28px] lg:text-[40px] tracking-[0] leading-[1.4]">
            Your Brand's Voice in the Crowd. Professional Promoters for True Engagement.
          </p>
        </div>

        <img
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[692px] lg:h-[692px] object-cover lg:absolute lg:top-[-176px] lg:left-[641px] scale-x-[-1]"
          alt="Brand Ambassador"
          src="/select-cuate-1.png"
        />
      </div>
    </Box>
  );
};

export default HeroSection;
