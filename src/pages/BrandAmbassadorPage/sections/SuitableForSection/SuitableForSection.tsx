import { Title, Box, Text } from '@mantine/core';

const eventTypes = [
  'Retail & Mall Activations',
  'Product Launch Events',
  'Roadshows & Experiential Marketing',
  'Conferences & Corporate Events',
  'Festival & Seasonal Promotions',
];

const eventTypesDesktop = [
  {
    text: 'Retail & Mall Activations',
    position: 'top-[469px] left-[53px]',
    textPosition: 'top-[68px] left-[68px]',
    width: 'w-[150px]',
  },
  {
    text: 'Product Launch Events',
    position: 'top-[151px] left-[162px]',
    textPosition: 'top-[68px] left-[68px]',
    width: 'w-[170px]',
  },
  {
    text: 'Roadshows & Experiential Marketing',
    position: 'top-[151px] left-[577px]',
    textPosition: 'top-[53px] left-[58px]',
    width: 'w-[170px]',
  },
  {
    text: 'Conferences & Corporate Events',
    position: 'top-[151px] left-[992px]',
    textPosition: 'top-[53px] left-[58px]',
    width: 'w-[170px]',
  },
  {
    text: 'Festival & Seasonal Promotions',
    position: 'top-[469px] left-[1070px]',
    textPosition: 'top-[53px] left-[58px]',
    width: 'w-[170px]',
  },
];

const SuitableForSection = () => {
  return (
    <Box
      component="section"
      className="relative w-full lg:h-[1024px] bg-[#fffbf0] py-12 md:py-16 lg:py-0 px-4 md:px-8"
    >
      <Title
        order={2}
        className="text-center lg:absolute lg:top-[43px] lg:left-[calc(50.00%_-_146px)] w-full lg:w-[292px] font-bold text-black text-[40px] md:text-[52px] lg:text-[64px] tracking-[0] leading-[normal] whitespace-nowrap mb-8 lg:mb-0"
      >
        Suitable for ?
      </Title>

      <div className="lg:hidden flex flex-col gap-4 max-w-[500px] mx-auto">
        <img
          className="w-full max-w-[400px] mx-auto mb-4"
          alt="Fitting piece rafiki"
          src="/fitting-piece-rafiki-1.png"
        />
        {eventTypes.map((event, index) => (
          <div
            key={index}
            className="bg-[#ffe3986b] border-[1.23px] border-solid border-[#faeecf6b] rounded-[20px] p-4 shadow-lg"
          >
            <Text className="font-normal text-black text-lg text-center">{event}</Text>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <img
          className="absolute top-[248px] left-[calc(50.00%_-_395px)] w-[790px] h-[776px]"
          alt="Fitting piece rafiki"
          src="/fitting-piece-rafiki-1.png"
        />

        {eventTypesDesktop.map((event, index) => (
          <div key={index} className={`absolute ${event.position} w-[289px] h-[193px]`}>
            <div className="top-[-47px] left-[47px] w-[193px] h-[287px] rounded-[34.38px] border-[1.23px] border-solid shadow-[6.14px_14.73px_4.91px_#00000066] absolute bg-[#ffe3986b] border-[#faeecf6b] -rotate-90" />
            <div
              className={`absolute ${event.textPosition} ${event.width} font-normal text-black text-2xl tracking-[0] leading-[normal]`}
            >
              {event.text}
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default SuitableForSection;
