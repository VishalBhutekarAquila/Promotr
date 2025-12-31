import { Box } from '@mantine/core';

const BrandVisibilitySection = () => {
  return (
    <Box
      component="section"
      className="relative w-full bg-[#fffbf0] py-12 md:py-20 lg:py-[114px] px-4 md:px-8 lg:px-[79px]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col w-full lg:max-w-[691px] text-center lg:text-left order-2 lg:order-1">
          <h2 className="font-bold text-black text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] mb-6">
            Elevate Your Brand Visibility
          </h2>

          <p className="font-normal text-black text-[22px] md:text-[28px] lg:text-[32px] leading-[1.4] mb-8 md:mb-10">
            Engage your audience authentically with Promotr Brand Ambassadors.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-[#f66c1b] hover:bg-[#f66c1b]/90 text-black font-black text-[32px] h-[60px] px-10 rounded-[10px] w-full sm:w-auto transition-all whitespace-nowrap">
              Book Your Ambassadors Today
            </button>

            <button className="bg-[#fbbc04] hover:bg-[#fbbc04]/90 text-black font-black text-[32px] h-[60px] px-10 rounded-[10px] w-full sm:w-auto transition-all whitespace-nowrap">
              Talk to an Expert
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center order-1 lg:order-2">
          <img
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain scale-x-[-1]"
            alt="Influencer illustration"
            src="/influencer-cuate-1.png"
          />
        </div>
      </div>
    </Box>
  );
};

export default BrandVisibilitySection;
