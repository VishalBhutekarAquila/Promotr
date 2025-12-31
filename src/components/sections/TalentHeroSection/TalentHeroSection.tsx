import React from 'react';

const serviceCategories = [
  {
    image: '/professional-catering-staff-for-exceptional-events--1--removebg-.png',
    label: 'Event Staffing',
    imageClass: 'top-[19px] left-0 w-[178px] h-[214px] object-cover',
    boxClass: 'top-[55px] left-0',
    labelClass: 'top-[15px] left-[33px] w-[110px]',
  },
  {
    image: '/medium-shot-people-working-as-team-removebg-preview-1.png',
    label: 'Trade Show & Conference Staff',
    imageClass: 'top-7 left-[363px] w-[169px] h-[215px]',
    boxClass: 'top-[55px] left-[354px]',
    labelClass: 'top-px left-[374px] w-[148px] font-medium',
  },
  {
    image: '/medium-shot-people-working-as-team-removebg-preview-2.png',
    label: 'Promotional Models',
    imageClass: 'top-[184px] left-[184px] w-[180px] h-[230px]',
    boxClass: 'top-[236px] left-[177px]',
    labelClass: 'top-[178px] left-[226px] w-[97px]',
  },
  {
    image: '/portrait-smiley-man-holding-idea-light-removebg-preview-1.png',
    label: 'Promoters & Brand Ambassadors',
    imageClass: 'top-[215px] left-[557px] w-[139px] h-[199px]',
    boxClass: 'top-[236px] left-[532px]',
    labelClass: 'top-[166px] left-[541px] w-44',
  },
  {
    image: '/dj-juicy-bags-3-nominations-at-the-guinness-ghana-dj-awards--23-.png',
    label: 'Influencers & DJs',
    imageClass: 'top-[345px] left-[5px] w-[177px] h-[248px] object-cover',
    boxClass: 'top-[417px] left-0',
    labelClass: 'top-[376px] left-[18px] w-[141px] leading-[18.4px] whitespace-nowrap',
  },
  {
    image: '/bouncer-shirt--event-staff--security-guard-tee---us-cotton-remov.png',
    label: 'Security & Bouncers',
    imageClass: 'top-[382px] left-[369px] w-[142px] h-[212px] object-cover',
    boxClass: 'top-[418px] left-[354px]',
    labelClass: 'top-[368px] left-[362px] w-[164px]',
  },
];

export const TalentHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[954px] lg:h-[954px] pt-[140px] lg:pt-0 [background:radial-gradient(50%_50%_at_50%_23%,rgba(66,3,0,1)_26%,rgba(8,1,1,1)_84%)]">
      <div className="hidden lg:block absolute top-[221px] left-[659px] w-[729px] h-[597px]">
        {serviceCategories.map((category, index) => (
          <div key={index} className={`absolute ${category.boxClass} w-[179px] h-[179px] bg-[#5a040054] border border-solid border-[#ff6f00]`} />
        ))}

        {serviceCategories.map((category, index) => (
          <img key={`img-${index}`} className={`absolute ${category.imageClass}`} alt={category.label.replace('\n', ' ')} src={category.image} />
        ))}

        {serviceCategories.map((category, index) => (
          <div
            key={`label-${index}`}
            className={`absolute ${category.labelClass} [font-family:'Inter',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal]`}
          >
            {category.label.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < category.label.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <h1 className="hidden lg:block absolute top-[446px] right-[919px] w-[437px] [font-family:'D-DIN_Condensed-Bold',Helvetica] font-bold text-[#ff6f00] text-[80px] tracking-[0] leading-[normal]">
        Find Event Gigs. Get Hired Fast.
      </h1>

      <div className="lg:hidden container mx-auto px-4 py-12">
        <h1 className="[font-family:'D-DIN_Condensed-Bold',Helvetica] font-bold text-[#ff6f00] text-[48px] md:text-[64px] tracking-[0] leading-[normal] mb-8 text-center">
          Find Event Gigs. Get Hired Fast.
        </h1>
        <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto">
          {serviceCategories.slice(0, 6).map((category, index) => (
            <div key={index} className="relative aspect-square bg-[#5a040054] border border-solid border-[#ff6f00] rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover opacity-80" alt={category.label.replace('\n', ' ')} src={category.image} />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[normal] px-2">
                  {category.label.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < category.label.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentHeroSection;
