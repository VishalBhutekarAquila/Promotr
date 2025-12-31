const HowItWorksSection = () => {
  return (
    <section className="bg-[#fffbf0] w-full relative overflow-x-hidden pb-10 md:pb-0 min-h-[1250px] md:min-h-[1150px]">
      <div className="relative w-full">
        {/* Title */}
        <h1
          className="absolute top-[40px] md:top-[88px] left-[50%] -translate-x-1/2 md:left-[calc(50%-167px)] md:translate-x-0 font-bold text-black text-[48px] md:text-[74px] leading-[37.5px] whitespace-nowrap z-10"
          style={{ fontFamily: "DIN Condensed, Helvetica, sans-serif" }}
        >
          How It Works
        </h1>

        {/* Subtitle */}
        <p className="absolute top-[90px] md:top-[153px] left-[20px] md:left-[calc(50%-519px)] w-[calc(100%-40px)] md:w-[1037px] font-medium text-black text-[18px] md:text-[24.2px] text-center leading-[26px] md:leading-[26.7px] z-10">
          Host your event smoothly in just 3 simple steps with Aquila — the smartest way to plan, staff, and manage your event workforce.
        </p>

        {/* Background Image - Desktop */}
        <img
          src="/6228667-removebg-preview-removebg-preview-1.png"
          alt="How it works illustration"
          className="hidden md:block absolute top-[219px] left-0 w-[540px] h-[645px] object-contain"
        />

        {/* Background Image - Mobile */}
        <img
          src="/6228667-removebg-preview-removebg-preview-1.png"
          alt="How it works illustration"
          className="block md:hidden absolute top-[200px] left-[50%] -translate-x-1/2 w-[220px] h-[260px] object-contain"
        />

        {/* Blur effect under image */}
        <div className="hidden md:block absolute top-[812px] left-[163px] w-[317px] h-[29px] bg-[#fffbf0] blur-[9.12px]" />

        {/* Connecting Lines */}
        <img src="/line-7.svg" alt="" className="hidden md:block absolute top-[341px] left-[466px] w-[309px] h-24" />
        <img src="/line-8.svg" alt="" className="hidden md:block absolute top-[603px] left-[480px] w-[325px] h-11" />
        <img src="/line-9.svg" alt="" className="hidden md:block absolute top-[731px] left-[476px] w-[319px] h-[221px]" />

        {/* Step 1 */}
        <div className="absolute top-[490px] md:top-[322px] left-[20px] md:left-[801px] right-[20px] md:right-auto w-auto md:w-[500px] z-10">
          <h2 className="text-[32px] md:text-3xl font-semibold text-black leading-tight mb-4 whitespace-normal md:whitespace-nowrap">
            1. Plan Your Event
          </h2>
          <p className="text-[18px] md:text-xl text-[#3a3a3a] leading-[1.6]">
            Share your event details — location, audience, and staffing needs. Aquila helps you map out the perfect plan for your occasion.
          </p>
        </div>

        {/* Step 2 */}
        <div className="absolute top-[730px] md:top-[576px] left-[20px] md:left-[847px] right-[20px] md:right-auto w-auto md:w-[500px] z-10">
          <h2 className="text-[32px] md:text-3xl font-semibold text-black leading-tight mb-4 whitespace-normal md:whitespace-nowrap">
            2. Build Your Team
          </h2>
          <p className="text-[18px] md:text-xl text-[#3a3a3a] leading-[1.6]">
            Browse and book verified professionals from promoters and models to influencers and crew — all from one trusted platform.
          </p>
        </div>

        {/* Step 3 */}
        <div className="absolute top-[970px] md:top-[841px] left-[20px] md:left-[817px] right-[20px] md:right-auto w-auto md:w-[500px] z-10">
          <h2 className="text-[32px] md:text-3xl font-semibold text-black leading-tight mb-4 whitespace-normal">
            3. Go Live & Track Performance
          </h2>
          <p className="text-[18px] md:text-xl text-[#3a3a3a] leading-[1.6]">
            Launch your event confidently and monitor performance, attendance, and engagement — all in real time from your personalized dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
