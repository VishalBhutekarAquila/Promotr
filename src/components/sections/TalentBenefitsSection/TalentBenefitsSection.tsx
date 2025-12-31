const benefitsData = [
  {
    title: 'Choose Your Gigs. Build Experience.',
    description: 'Find flexible, short-term, and ongoing event assignments-work the projects you like, when you want.',
  },
  {
    title: 'Get Noticed by Top Brands.',
    description: 'Join a pool trusted by global and Indian clients for events, launches, exhibitions, weddings, and more.',
  },
  {
    title: 'Grow Your Skills & Earning.',
    description: 'Access resources, on-the-job learning, and regular upskilling modules designed for event success.',
  },
  {
    title: 'Reliable Payments. Transparent Process.',
    description: 'No middlemen or miscommunication-get paid directly, on time, after every assignment.',
  },
  {
    title: 'A Supportive Community.',
    description: 'Real career coaching, 24/7 support for emergencies, and fair ratings for fair work.',
  },
];

const TalentBenefitsSection = () => {
  return (
    <section className="relative w-full bg-white py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 lg:mb-12 text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-normal">
          <span className="font-bold text-black">Why Join </span>
          <span className="font-bold text-[#ff6f00] lowercase">aquila</span>
          <span className="font-bold text-black">?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center max-w-7xl mx-auto">
          <div className="relative w-full max-w-[300px] lg:w-[450px] h-[300px] lg:h-[500px] flex items-center justify-center mx-auto lg:mx-0">
            <div className="hidden lg:block absolute inset-0 bg-white rounded-[575px/595px] shadow-[11px_-1px_12.3px_1px_#00000033] transform -translate-x-20 scale-90" />
            <img className="relative w-full h-full object-contain z-10" alt="Element removebg" src="/5363881-removebg-preview-1.png" />
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="bg-[#ffccb3] border-0 rounded-lg shadow-sm p-4 lg:p-5">
                <h3 className="font-bold text-[#5a0400] text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight mb-2">
                  {benefit.title}
                </h3>
                <p className="font-normal text-black text-sm md:text-base lg:text-base tracking-[0] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentBenefitsSection;
