import { Box } from '@mantine/core';

const whatSetsApartItems = [
  {
    icon: '/mask-group.png',
    title: 'Tech-enabled coordination and support',
  },
  {
    icon: '/image-84.png',
    title: 'Dedicated account manager from booking to execution',
  },
  {
    icon: '/mask-group-1.png',
    title: 'Staff with customer service hospitality and logistical expertise',
  },
  {
    icon: '/mask-group-2.png',
    title: 'Flexible surge staffing for last-minute changes',
  },
];

const WhatSetsApartSection = () => {
  return (
    <Box className="relative w-full bg-[#fff9ec] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-semibold text-black text-3xl sm:text-5xl lg:text-7xl mb-12 sm:mb-24 text-center">
          What Sets Promotr Apart
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 lg:gap-32">
          {whatSetsApartItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className={`${
                  index === 1
                    ? 'w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px]'
                    : index === 0
                      ? 'w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]'
                      : 'w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px]'
                } object-cover mb-6 sm:mb-8`}
                alt={item.title}
                src={item.icon}
              />
              <p className="font-bold text-black text-xl sm:text-2xl lg:text-4xl text-center leading-tight max-w-md px-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default WhatSetsApartSection;
