import { Title, Box, Text, Button } from '@mantine/core';

const steps = [
  {
    number: '1',
    title: 'Post Your Campaign',
    description: 'Define goals, locations, dates, and ambassador requirements.',
    image: '/personal-goals-checklist-cuate-1.png',
    leftPosition: 'left-[63px]',
    badgeLeft: 'left-[148px]',
    lineLeft: 'left-[259px]',
    width: 'w-[265px]',
    imageWidth: 'w-[297px]',
    imageMargin: 'mr-[-32.00px]',
    descriptionHeight: 'h-[81px]',
    gap: 'gap-[18px]',
  },
  {
    number: '2',
    title: 'Receive Matched Profiles',
    description: 'Review carefully matched ambassadors with experience, ratings, and skills.',
    image: '/personal-goals-checklist-cuate-2.png',
    leftPosition: 'left-[385px]',
    badgeLeft: 'left-[484px]',
    lineLeft: 'left-[595px]',
    width: 'w-[295px]',
    imageWidth: 'w-[297px]',
    imageMargin: 'mr-[-2.00px]',
    descriptionHeight: 'h-[81px]',
    gap: 'gap-[18px]',
  },
  {
    number: '3',
    title: 'Confirm & Deploy',
    description: 'Fast booking confirmation followed by automated onboarding and attendance tracking.',
    image: '/personal-goals-checklist-cuate-3.png',
    leftPosition: 'left-[737px]',
    badgeLeft: 'left-[820px]',
    lineLeft: 'left-[931px]',
    width: 'w-[297px]',
    imageWidth: 'w-full',
    imageMargin: '',
    descriptionHeight: 'h-[108px]',
    gap: 'gap-2',
  },
  {
    number: '4',
    title: 'Track & Optimize',
    description: 'Access live data on engagement and ambassador performance throughout the campaign.',
    image: '/personal-goals-checklist-cuate-3-1.png',
    leftPosition: 'left-[1091px]',
    badgeLeft: 'left-[1156px]',
    lineLeft: null,
    width: 'w-[297px]',
    imageWidth: 'w-[297px]',
    imageMargin: '',
    descriptionHeight: 'h-[108px]',
    gap: 'gap-2',
  },
];

const HowItWorksSection = () => {
  return (
    <Box
      component="section"
      className="relative w-full lg:h-[1024px] bg-black py-12 md:py-16 lg:py-0 px-4 md:px-8"
    >
      <div className="hidden lg:block absolute top-[113px] left-[329px] w-[782px] h-[799px] bg-[#5a0400] rounded-[391.19px/399.25px] rotate-[-90.45deg] blur-[279.61px]" />

      <Title
        order={2}
        className="text-center lg:absolute lg:top-14 lg:left-[calc(50.00%_-_224px)] w-full lg:w-[448px] font-bold text-white text-[40px] md:text-[52px] lg:text-[64px] tracking-[0] leading-[normal] mb-8 lg:mb-0"
      >
        How Promotr Works
      </Title>

      <div className="lg:hidden flex flex-col gap-8 mt-8 max-w-[500px] mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="w-[70px] h-[70px] bg-[#fff1cb] rounded-full flex items-center justify-center">
              <Text className="font-bold text-black text-[36px]">{step.number}</Text>
            </div>
            <Title order={3} className="font-semibold text-white text-xl text-center">
              {step.title}
            </Title>
            <Text className="font-normal text-white text-base text-center leading-[1.5]" c="white">
              {step.description}
            </Text>
            <img className="w-[200px] h-[200px] object-cover" alt="Step illustration" src={step.image} />
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        {steps.map((step, index) => (
          <div key={index} className={`absolute top-[201px] ${step.badgeLeft} w-[95px] h-[95px]`}>
            <div className="absolute top-0 left-0 w-[95px] h-[95px] bg-[#fff1cb] rounded-[47.5px]" />
            <div className="absolute inset-0 flex items-center justify-center font-bold text-black text-[43.8px] tracking-[0] leading-[normal]">
              {step.number}
            </div>
          </div>
        ))}

        {steps
          .slice(0, 3)
          .map(
            (step, index) =>
              step.lineLeft && (
                <img
                  key={`line-${index}`}
                  className={`absolute top-[245px] ${step.lineLeft} w-[209px] h-1`}
                  alt="Line"
                  src="/line-4.svg"
                />
              )
          )}

        {steps.map((step, index) => (
          <div
            key={`content-${index}`}
            className={`flex flex-col ${step.width} items-start ${step.gap} absolute top-[344px] ${step.leftPosition}`}
          >
            <Title
              order={3}
              className="relative self-stretch mt-[-1.00px] font-semibold text-white text-2xl text-center tracking-[0] leading-[normal]"
            >
              {step.title}
            </Title>
            <Text
              c="white"
              className={`relative self-stretch ${step.descriptionHeight} font-normal text-white text-[24px] text-center tracking-[0] leading-[normal]`}
            >
              {step.description}
            </Text>
            <img
              className={`${step.imageWidth} ${step.imageMargin} relative h-[297px] object-cover`}
              alt="Step illustration"
              src={step.image}
            />
          </div>
        ))}
      </div>

      <Button className="flex flex-wrap w-full max-w-[337px] h-[55px] items-center justify-center gap-[7.56px_7.56px] mx-auto mt-8 lg:absolute lg:top-[870px] lg:left-[calc(50.00%_-_169px)] bg-[#fbbc04] rounded-[9.82px] hover:bg-[#fbbc04]/90">
        <span className="relative w-fit font-semibold text-black text-[20px] md:text-[24.2px] tracking-[0] leading-[normal] whitespace-nowrap">
          Hire Promoters Now
        </span>
      </Button>
    </Box>
  );
};

export default HowItWorksSection;
