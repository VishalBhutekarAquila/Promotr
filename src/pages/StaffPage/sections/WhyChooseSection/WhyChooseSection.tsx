import { Box, Card, Text } from '@mantine/core';

const whyChooseItems = [
  {
    image: '/image-150.png',
    title: 'Trained & Verified Teams',
    description:
      'Every host, crew member, and logistic staff is background-checked and upskilled to deliver flawless guest experiences and operational support.',
  },
  {
    image: '/image-142.png',
    title: 'Full Spectrum of Roles',
    description:
      'From front-of-house hosting and brand hospitality to logistics crews handling setup, guest flow, and operational backup—find all under one roof.',
  },
  {
    image: '/image-151.png',
    title: 'Scalable for Any Event',
    description:
      'Hire anywhere, any size. From intimate launches to mega expos, Promotr matches the right team with your requirements.',
  },
  {
    image: '/image-152.png',
    title: 'Real-Time Management',
    description: 'Track team check-ins, shifts, and live issue-resolution from our web dashboard.',
  },
  {
    image: '/image-153.png',
    title: 'Instant Booking & Transparent Pricing',
    description: 'Fast confirmations, simple contracts, visible rates—always know what you are paying for.',
  },
];

const WhyChooseSection = () => {
  return (
    <Box className="relative w-full bg-[#0a0000] py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-bold text-center mb-12 sm:mb-16 lg:mb-20"
          style={{ color: '#ffffff', fontSize: '56px' }}
        >
          Why Choose Promotr for Event Staffing?
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {whyChooseItems.map((item, index) => (
            <Card
              key={index}
              className="w-full bg-transparent"
              styles={{
                root: {
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'transparent',
                  borderRadius: '30px',
                },
              }}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between p-8 sm:p-10 lg:p-12 gap-6 lg:gap-8">
                <div className="flex-1">
                  <h3 className="font-bold mb-4 sm:mb-5" style={{ color: '#ffffff', fontSize: '40px' }}>
                    {item.title}
                  </h3>
                  <Text className="font-normal leading-relaxed" style={{ color: '#ffffff', fontSize: '32px' }}>
                    {item.description}
                  </Text>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                    style={{ width: '160px', height: '160px' }}
                    className="object-contain"
                    alt={item.title}
                    src={item.image}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default WhyChooseSection;
