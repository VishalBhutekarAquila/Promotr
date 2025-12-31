import { Title, Box } from '@mantine/core';

const faqData = [
  {
    value: 'item-1',
    question: 'How fast can I onboard ambassadors?',
    answer: 'Most bookings confirm within 24 hrs for major cities.',
  },
  {
    value: 'item-2',
    question: 'Can Promotr support multi-city campaigns?',
    answer: 'Yes, our platform streamlines regional and national deployments.',
  },
  {
    value: 'item-3',
    question: 'How do you ensure ambassador quality?',
    answer: 'Background checks, training, and ongoing performance reviews keep standards high.',
  },
];

const FaqSection = () => {
  return (
    <Box
      component="section"
      className="relative w-full lg:h-[700px] bg-black overflow-hidden py-12 md:py-14 px-4 md:px-8 lg:px-[66px]"
    >
      <div className="hidden lg:block absolute top-[calc(50%-313px)] left-[calc(50%-305px)] w-[611px] h-[624px] rounded-[305.57px/311.87px] blur-[279.61px] bg-[#5a0400] rotate-[-90.45deg]" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <Title
          order={2}
          className="font-bold text-white text-[40px] md:text-[52px] lg:text-[64px] text-center tracking-[0] leading-[normal] mb-8 md:mb-14"
        >
          FAQs
        </Title>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:hidden flex-shrink-0 w-full flex justify-center mb-4">
            <img
              className="w-full max-w-[350px] md:max-w-[400px] h-auto object-contain"
              alt="FAQs illustration"
              src="/faqs-cuate-1.png"
            />
          </div>

          <div className="w-full lg:max-w-[520px] flex flex-col gap-4 md:gap-6">
            {faqData.map((faq) => (
              <div
                key={faq.value}
                className="bg-[#7a625e8a] rounded-[20.53px] border-[0.73px] border-solid border-[#faeecf6b] shadow-[3.67px_8.8px_2.93px_#00000066] px-4 md:px-6 py-4 md:py-5"
              >
                <h3 className="font-bold text-white text-base md:text-lg lg:text-xl tracking-[0] leading-[normal] mb-2">
                  {faq.question}
                </h3>
                <p className="font-normal text-white text-sm md:text-base lg:text-lg tracking-[0] leading-[1.5]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-shrink-0 w-auto justify-center">
            <img className="w-full max-w-[500px] h-auto object-contain" alt="FAQs illustration" src="/faqs-cuate-1.png" />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default FaqSection;
