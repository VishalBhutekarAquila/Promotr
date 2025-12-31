const TalentJoinSection = () => {
  return (
    <section className="relative w-full py-12 lg:py-[151px] [background:radial-gradient(50%_50%_at_50%_23%,rgba(66,3,0,1)_26%,rgba(8,1,1,1)_84%)]">
      <div className="container mx-auto px-4 lg:px-[53px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-8 lg:gap-[71px] max-w-[711px]">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-3xl md:text-[44px] lg:text-[55px] tracking-[0] leading-[normal]">
              Browse, apply, and join top events-your next job is just a tap away.
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffb77f] text-xl md:text-2xl lg:text-[35px] tracking-[0] leading-relaxed lg:leading-[52.2px] max-w-[647px]">
              Be India&apos;s Next Event Pro. Ready to step into the spotlight? Sign up, get verified, and start working with leading brands and world-class
              events—on your schedule.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img className="w-full max-w-[400px] lg:max-w-[836px] h-auto object-cover" alt="Untitled removebg" src="/untitled-1-removebg-preview--6--1.png" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 lg:gap-12 justify-center mt-12 lg:mt-[97px]">
          <button 
            className="w-full md:w-auto md:min-w-[400px] lg:w-[480px] bg-[#fbbc04] hover:bg-[#e5aa04] rounded-2xl text-black font-bold transition-colors"
            style={{ padding: '28px 48px', fontSize: '32px' }}
          >
            Sign Up as Event Talent
          </button>

          <button 
            className="w-full md:w-auto md:min-w-[400px] lg:w-[480px] bg-transparent hover:bg-[#ff6e1f]/10 rounded-2xl text-white font-bold transition-colors"
            style={{ padding: '28px 48px', fontSize: '32px', border: '3px solid #ff6e1f' }}
          >
            Browse Event Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalentJoinSection;
