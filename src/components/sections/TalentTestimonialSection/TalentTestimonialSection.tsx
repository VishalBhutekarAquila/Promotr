const TalentTestimonialSection = () => {
  return (
    <section className="w-full py-12 md:py-16 [background:radial-gradient(50%_50%_at_50%_23%,rgba(66,3,0,1)_26%,rgba(8,1,1,1)_84%)]">
      <div className="container mx-auto px-4">
        <h2 className="text-center [font-family:'D-DIN_Condensed-Bold',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-[70px] tracking-[0] leading-tight mb-8 md:mb-12">
          Talent Success Stories
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#3d1410] border border-[#5a0400] rounded-[10px] shadow-lg p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-center">
              <img className="w-[180px] h-[280px] md:w-[200px] md:h-[300px] object-cover justify-self-center md:justify-self-start rounded-lg" alt="Talent image" src="/ucp9-a726-230516-removebg-preview-2.png" />

              <div>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#ff6f00] text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
                  It&apos;s flexible and the team actually cares. They helped me find work even outside my city.
                </p>
                <p className="[font-family:'Inter',Helvetica] font-medium text-white text-base md:text-lg lg:text-xl">- Manish Tiwari, Lucknow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentTestimonialSection;
