import { Box, Title, Text } from '@mantine/core';

const features = [
  {
    title: 'Verified & Trained Professionals',
    description:
      'Each ambassador undergoes background verification and specialized training to represent your brand with authenticity and confidence.',
    image: '/mic-drop-cuate-1.png',
    cardTop: 'top-[37px]',
    cardLeft: 'left-[617px]',
    titleTop: 'top-[59px]',
    titleLeft: 'left-[203px]',
    textTop: 'top-[23px]',
    textLeft: 'left-[59px]',
    textWidth: 'w-[336px]',
    imageTop: 'top-3.5',
    imageLeft: 'left-[999px]',
    imageWidth: 'w-56',
    imageHeight: 'h-[206px]',
    decorativeImage: '/group-21.png',
    decorativeTop: 'top-[105px]',
    decorativeLeft: 'left-32',
    decorativeWidth: 'w-[476px]',
    decorativeHeight: 'h-[324px]',
  },
  {
    title: 'Pan-India Coverage',
    description: 'Deploy ambassadors seamlessly across metros and tier-2/3 cities for maximum campaign reach.',
    image: '/city-skyline-cuate-1.png',
    cardTop: 'top-[248px]',
    cardLeft: 'left-[775px]',
    titleTop: 'top-[297px]',
    titleLeft: 'left-[387px]',
    textTop: 'top-9',
    textLeft: 'left-[77px]',
    textWidth: 'w-[308px]',
    imageTop: 'top-[267px]',
    imageLeft: 'left-[1115px]',
    imageWidth: 'w-[280px]',
    imageHeight: 'h-[164px]',
    decorativeImage: '/group-22.png',
    decorativeTop: 'top-[323px]',
    decorativeLeft: 'left-[261px]',
    decorativeWidth: 'w-[500px]',
    decorativeHeight: 'h-[90px]',
  },
  {
    title: 'On-Demand Flexibility',
    description: 'Hire for short or long-term campaigns, events, or activations. Easily scale your team up or down.',
    image: '/team-work-cuate-1.png',
    cardTop: 'top-[464px]',
    cardLeft: 'left-[866px]',
    titleTop: 'top-[519px]',
    titleLeft: 'left-[546px]',
    textTop: 'top-[37px]',
    textLeft: 'left-[65px]',
    textWidth: 'w-[332px]',
    imageTop: 'top-[564px]',
    imageLeft: 'left-[1129px]',
    imageWidth: 'w-[217px]',
    imageHeight: 'h-[138px]',
    decorativeImage: '/group-28.png',
    decorativeTop: 'top-[588px]',
    decorativeLeft: 'left-32',
    decorativeWidth: 'w-[476px]',
    decorativeHeight: 'h-[468px]',
    lineImage: '/line-3.svg',
    lineTop: 'top-[543px]',
    lineLeft: 'left-[480px]',
    lineWidth: 'w-[373px]',
    lineHeight: 'h-[22px]',
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Track ambassador attendance, engagement metrics, and campaign impact live via our dashboard.',
    image: '/location-tracking-amico-1.png',
    cardTop: 'top-[729px]',
    cardLeft: 'left-[775px]',
    titleTop: 'top-[781px]',
    titleLeft: 'left-[398px]',
    textTop: 'top-9',
    textLeft: 'left-[43px]',
    textWidth: 'w-[340px]',
    imageTop: 'top-[725px]',
    imageLeft: 'left-[1132px]',
    imageWidth: 'w-[199px]',
    imageHeight: 'h-[199px]',
    imageClass: 'object-cover',
    decorativeImage: '/group-26.png',
    decorativeTop: 'top-[608px]',
    decorativeLeft: 'left-[261px]',
    decorativeWidth: 'w-[500px]',
    decorativeHeight: 'h-[219px]',
  },
  {
    title: 'Clear Pricing & Easy Contracts',
    description: 'Transparent rates, digital contracts, and no hidden costs for a worry-free experience.',
    image: '/accept-terms-pana-1.png',
    cardTop: 'top-[958px]',
    cardLeft: 'left-[617px]',
    titleTop: 'top-[1003px]',
    titleLeft: 'left-[190px]',
    textTop: 'top-[52px]',
    textLeft: 'left-[42px]',
    textWidth: 'w-[378px]',
    imageTop: 'top-[958px]',
    imageLeft: 'left-[1020px]',
    imageWidth: 'w-[210px]',
    imageHeight: 'h-[194px]',
  },
];

const WhyPromotrSection = () => {
  return (
    <Box
      component="section"
      className="relative w-full bg-[#fffbf0] py-12 md:py-16 lg:py-[37px] px-4 md:px-8 lg:px-[70px] overflow-hidden"
    >
      <h2 className="text-center lg:text-left lg:absolute lg:top-[465px] lg:left-[70px] w-full lg:w-[623px] font-bold text-black text-[40px] md:text-[52px] lg:text-[64px] tracking-[0] leading-[1.1] mb-8 lg:mb-0">
        Why Promotr Brand <br className="hidden lg:block" />
        Ambassadors?
      </h2>

      <div className="relative lg:h-[1200px] flex flex-col lg:block gap-8 lg:gap-0">
        {features.map((feature, index) => (
          <div key={index} className="relative lg:absolute lg:inset-0">
            {feature.decorativeImage && (
              <img
                className={`hidden lg:block absolute ${feature.decorativeTop} ${feature.decorativeLeft} ${feature.decorativeWidth} ${feature.decorativeHeight}`}
                alt="Decorative element"
                src={feature.decorativeImage}
              />
            )}

            <div className="lg:hidden bg-[#ffe3986b] border-[1.01px] border-solid border-[#faeecf6b] rounded-[20px] p-6 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <img className="w-[80px] h-[80px] object-contain flex-shrink-0" alt={feature.title} src={feature.image} />
                <Title order={3} className="font-semibold text-black text-xl leading-[1.3] flex-1">
                  {feature.title}
                </Title>
              </div>
              <Text className="font-normal text-black text-base leading-[1.5]">{feature.description}</Text>
            </div>

            <div className={`hidden lg:block absolute ${feature.cardTop} ${feature.cardLeft} w-[464px] h-[181px]`}>
              <div className="top-[-140px] left-[140px] w-[181px] h-[462px] rounded-[28.35px] border-[1.01px] border-solid shadow-[5.06px_12.15px_4.05px_#00000066] absolute bg-[#ffe3986b] border-[#faeecf6b] -rotate-90" />
              <div
                className={`absolute ${feature.textTop} ${feature.textLeft} ${feature.textWidth} font-normal text-black text-[22px] tracking-[0] leading-[normal]`}
              >
                {feature.description}
              </div>
            </div>

            <div
              className={`hidden lg:block absolute ${feature.titleTop} ${feature.titleLeft} font-semibold text-black text-2xl tracking-[0] leading-[normal]`}
            >
              {feature.title}
            </div>

            <img
              className={`hidden lg:block absolute ${feature.imageTop} ${feature.imageLeft} ${feature.imageWidth} ${feature.imageHeight} ${feature.imageClass || ''}`}
              alt={feature.title}
              src={feature.image}
            />

            {feature.lineImage && (
              <img
                className={`hidden lg:block absolute ${feature.lineTop} ${feature.lineLeft} ${feature.lineWidth} ${feature.lineHeight}`}
                alt="Line"
                src={feature.lineImage}
              />
            )}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default WhyPromotrSection;
