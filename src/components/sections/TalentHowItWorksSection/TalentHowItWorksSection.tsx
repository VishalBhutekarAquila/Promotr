const steps = [
  {
    number: '1',
    title: 'Create Your Profile:',
    description: 'Highlight your strengths, past experience (if any), and areas of interest.',
    image: '/copilot-20251102-175838-1.png',
    imageAlt: 'Copilot',
  },
  {
    number: '2',
    title: 'Browse & Apply:',
    description: 'See upcoming events, brand activations, exhibitions, and more-updated daily.',
    image: '/untitled-1-2.png',
    imageAlt: 'Untitled',
  },
  {
    number: '3',
    title: 'Get Verified & Trained:',
    description: 'Complete a quick verification and access online training to prep for success.',
    image: '/19197272-1.png',
    imageAlt: 'Element',
  },
  {
    number: '4',
    title: 'Work. Shine. Earn:',
    description: 'Receive booking confirmations, participate in events, get paid fast-plus reviews after each event.',
    image: '/19197238-1-8.png',
    imageAlt: 'Element',
  },
];

const TalentHowItWorksSection = () => {
  return (
    <section className="relative w-full py-8 lg:py-12 overflow-hidden [background:radial-gradient(50%_50%_at_50%_23%,rgba(66,3,0,1)_26%,rgba(8,1,1,1)_84%)]">
      <div className="container mx-auto px-4">
        <h2 className="text-center [font-family:'D-DIN_Condensed-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-[70px] tracking-[0] leading-[normal] mb-8 lg:mb-12">
          How It Works
        </h2>

        <div className="hidden lg:block relative max-w-[1505px] mx-auto mb-12">
          <div className="absolute top-[47px] left-0 right-0 h-px bg-[#d9d9d9]" />

          <div className="relative flex justify-between items-start px-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="w-[85px] h-[85px] flex items-center justify-center bg-[#fbbc04] rounded-full">
                  <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#5a0400] text-[50px] tracking-[0] leading-[normal]">{step.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1900px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#3d1410] rounded-[10px] overflow-hidden border border-[#5a0400] shadow-lg"
            >
              <div className="flex flex-col items-center p-4 lg:p-6">
                <div className="lg:hidden w-[60px] h-[60px] flex items-center justify-center bg-[#fbbc04] rounded-full mb-4">
                  <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#5a0400] text-[36px] tracking-[0] leading-[normal]">{step.number}</span>
                </div>

                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#ff6f00] text-xl md:text-2xl lg:text-[32px] text-center tracking-[0] leading-tight mb-3 lg:mb-4">
                  {step.title}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-base lg:text-lg text-center tracking-[0] leading-relaxed mb-4 lg:mb-6">
                  {step.description}
                </p>

                <div className="w-full bg-white rounded-[10px] p-3 flex items-center justify-center">
                  <img className="w-full h-auto max-h-[180px] lg:max-h-[220px] object-contain" alt={step.imageAlt} src={step.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentHowItWorksSection;
