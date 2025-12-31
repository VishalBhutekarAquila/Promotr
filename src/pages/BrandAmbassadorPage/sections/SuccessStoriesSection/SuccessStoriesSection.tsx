import { Title, Box, Card, Text } from '@mantine/core';
import { Star } from 'lucide-react';

const testimonials = [
  {
    stars: 5,
    quote:
      '"Promotr gave us a professional, reliable ambassador team that connected deeply with our audience. Campaign results improved 30% with real-time reporting."',
    author: '— Radhika Sharma, Mumbai',
  },
  {
    stars: 4,
    quote: '"Their flexible booking and transparent process simplified our promotions across multiple cities effortlessly."',
    author: '— Aman Verma, Bengaluru',
  },
  {
    stars: 5,
    quote: 'Promotr transformed our event staffing process completely. Their verified manpower and seamless app made hiring quick and reliable.',
    author: '— Rahul Mehta, Mumbai',
  },
];

const SuccessStoriesSection = () => {
  return (
    <Box component="section" className="relative w-full bg-[#fffbf0] py-12 md:py-16 px-4 md:px-8">
      <div className="container mx-auto px-4 md:px-8">
        <Title
          order={2}
          className="text-center font-bold text-black text-[40px] md:text-[52px] lg:text-[64px] tracking-[0] leading-[normal] mb-12 md:mb-20"
        >
          Success Stories
        </Title>

        <div className="lg:hidden flex justify-center mb-8">
          <img
            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-cover"
            alt="Feedback bro"
            src="/feedback-bro--1--1.png"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-[1400px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#ffffff8a] rounded-[20.53px] border-[0.73px] border-[#faeecf6b] shadow-[3.67px_8.8px_2.93px_#00000066] h-auto"
              padding="lg"
            >
              <div className="p-5 md:p-6 flex flex-col h-full">
                <div className="flex gap-[6px] md:gap-[8px] mb-6 md:mb-8">
                  {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex-1 mb-6 md:mb-8">
                  <Text className="font-normal text-black text-[16px] md:text-[18px] lg:text-[21.4px] tracking-[0] leading-[1.5]">
                    {testimonial.quote}
                  </Text>
                </div>

                <div className="text-center">
                  <Text className="font-semibold text-black text-[16px] md:text-[18px] lg:text-[21.4px] tracking-[0] leading-[normal]">
                    {testimonial.author}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="hidden lg:flex justify-center">
          <img className="w-full max-w-[653px] h-auto object-cover" alt="Feedback bro" src="/feedback-bro--1--1.png" />
        </div>
      </div>
    </Box>
  );
};

export default SuccessStoriesSection;
