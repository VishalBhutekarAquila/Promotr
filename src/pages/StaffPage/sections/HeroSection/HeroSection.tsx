import { Box, Button } from '@mantine/core';

const HeroSection = () => {
  return (
    <Box className="relative bg-gradient-to-b from-[#420300] to-[#080101] py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-bold text-white text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-12">
              Promotr Event Staffing
            </h1>

            <p className="max-w-3xl mx-auto lg:mx-0 font-normal text-white text-2xl sm:text-3xl lg:text-5xl leading-tight mt-12 sm:mt-20">
              Your Event, Done Right. Professional Hosts, Crew &amp; Logistics—On Demand.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                className="mt-12 sm:mt-20 rounded-[30px] font-semibold"
                styles={{
                  root: {
                    backgroundColor: '#FFD400',
                    color: '#000000',
                    width: '350px',
                    height: '70px',
                    fontSize: '32px',
                    '&:hover': {
                      backgroundColor: '#FFD400',
                      opacity: 0.9,
                    },
                  },
                }}
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src="/image-147.svg"
              alt="Event Staffing Illustration"
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeroSection;
