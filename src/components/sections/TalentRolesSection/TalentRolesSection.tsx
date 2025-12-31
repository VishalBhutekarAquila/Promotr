const roles = [
  'Event Staff & Crew',
  'Trade Show & Conference Teams',
  'Promoters & Brand Ambassadors',
  'Promotional Models',
  'Influencers & DJs',
  'Security & Bouncers',
];

export const TalentRolesSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl tracking-[0] leading-tight mb-4">
          What Roles Are Available?
        </h2>

        <p className="text-center font-normal text-black text-base md:text-xl lg:text-2xl tracking-[0] leading-relaxed mb-12 md:mb-16">
          Whether you&apos;re starting out or a seasoned pro—Aquila matches you with the best-fit roles.
        </p>

        {/* Desktop Layout with positioned badges */}
        <div className="hidden lg:block relative max-w-6xl mx-auto h-[700px]">
          {/* Center Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px]">
            <img className="w-full h-full object-contain" alt="Roles visual" src="/chatgpt-image-nov-3--2025--02-11-14-pm-removebg-preview-1.png" />
          </div>

          {/* Role Badges - Positioned around the illustration */}
          {/* Top Left */}
          <div className="absolute top-16 left-16 bg-[#abc5fe] rounded-2xl px-8 py-4 shadow-lg">
            <span className="font-medium text-black text-xl">Event Staff & Crew</span>
          </div>

          {/* Top Right */}
          <div className="absolute top-16 right-16 bg-[#abc5fe] rounded-2xl px-8 py-4 shadow-lg">
            <span className="font-medium text-black text-xl">Trade Show & Conference Teams</span>
          </div>

          {/* Middle Left */}
          <div className="absolute top-[48%] -left-8 transform -translate-y-1/2 bg-[#abc5fe] rounded-2xl px-8 py-4 shadow-lg">
            <span className="font-medium text-black text-xl">Promoters & Brand Ambassadors</span>
          </div>

          {/* Middle Right */}
          <div className="absolute top-[48%] right-0 transform -translate-y-1/2 bg-[#abc5fe] rounded-2xl px-8 py-4 shadow-lg">
            <span className="font-medium text-black text-xl">Promotional Models</span>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-20 left-20 bg-[#abc5fe] rounded-2xl px-8 py-4 shadow-lg">
            <span className="font-medium text-black text-xl">Influencers & DJs</span>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-20 right-16 bg-[#abc5fe] rounded-2xl px-8 py-4 shadow-lg">
            <span className="font-medium text-black text-xl">Security & Bouncers</span>
          </div>
        </div>

        {/* Mobile Layout with grid */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {roles.map((role) => (
              <div key={role} className="bg-[#abc5fe] rounded-lg px-4 py-3 flex items-center justify-center text-center shadow-md">
                <span className="font-medium text-black text-base md:text-lg">{role}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain" alt="Roles visual" src="/chatgpt-image-nov-3--2025--02-11-14-pm-removebg-preview-1.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentRolesSection;
