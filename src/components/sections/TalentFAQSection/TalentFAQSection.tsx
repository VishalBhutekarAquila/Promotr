import { Accordion } from '@mantine/core';

const faqData = [
  {
    value: 'item-1',
    question: 'How soon can I start?',
    answer: 'Get verified within 24-48 hours and start applying for live jobs instantly.',
  },
  {
    value: 'item-2',
    question: 'Is Aquila only for experienced professionals?',
    answer: "No! Whether you're fresher or experienced, our platform helps you build your event career.",
  },
  {
    value: 'item-3',
    question: 'What if I need help?',
    answer: "Aquila's support team is available 24/7 to assist with onboarding, assignment issues, and payouts.",
  },
];

const TalentFAQSection = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white py-10 md:py-14 px-4">
      <h2 className="text-center [font-family:'D-DIN_Condensed-Bold',Helvetica] font-bold text-black text-3xl md:text-5xl lg:text-[70px] tracking-[0] leading-tight mb-8 md:mb-12">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl md:max-w-4xl lg:max-w-[1305px] space-y-6 md:space-y-8 lg:space-y-10"
        styles={{
          control: {
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        }}
      >
        {faqData.map((faq) => (
          <Accordion.Item key={faq.value} value={faq.value} className="bg-[#ffb189b2] rounded-[10px] border-none px-4 py-3 md:px-6 md:py-4">
            <Accordion.Control className="hover:bg-transparent">
              <div className="flex flex-col items-start gap-3 md:gap-4 text-left pr-2 md:pr-4">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-black text-xl md:text-2xl lg:text-[35px] tracking-[0] leading-normal">{faq.question}</h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base md:text-lg lg:text-2xl tracking-[0] leading-relaxed md:leading-normal pl-6 md:pl-[53px]">
                  {faq.answer}
                </p>
              </div>
            </Accordion.Control>
            <Accordion.Panel></Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

const TalentCTASection = () => {
  return (
    <section className="flex flex-col items-center py-10 lg:py-16 px-4 [background:radial-gradient(50%_50%_at_50%_23%,rgba(66,3,0,1)_26%,rgba(8,1,1,1)_84%)]">
      <h1 className="[font-family:'D-DIN_Condensed-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-[70px] tracking-[0] leading-[normal] text-center">
        Ready to Take the Stage?
      </h1>

      <div className="mt-3.5 [font-family:'Inter',Helvetica] text-3xl md:text-4xl lg:text-[50px] tracking-[0] leading-[normal] text-center">
        <span className="font-bold text-white">Join </span>
        <span className="[font-family:'Amazon_Ember-Regular',Helvetica] text-[#ff6f00]">Promotr</span>
      </div>

      <div className="mt-8 lg:mt-[60px] flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 lg:gap-12 justify-center w-full max-w-5xl">
        <button 
          className="w-full md:w-auto md:min-w-[380px] lg:w-[450px] bg-[#fbbc04] hover:bg-[#fbbc04]/90 rounded-2xl text-[#420300] [font-family:'Inter',Helvetica] font-bold"
          style={{ padding: '28px 48px', fontSize: '32px' }}
        >
          Apply Now
        </button>

        <button 
          className="w-full md:w-auto md:min-w-[380px] lg:w-[450px] rounded-2xl bg-transparent hover:bg-[#ff6e1f]/10 text-white [font-family:'Inter',Helvetica] font-bold"
          style={{ padding: '28px 48px', fontSize: '32px', border: '3px solid #ff6e1f' }}
        >
          See Open Roles
        </button>
      </div>
    </section>
  );
};

export { TalentFAQSection, TalentCTASection };
