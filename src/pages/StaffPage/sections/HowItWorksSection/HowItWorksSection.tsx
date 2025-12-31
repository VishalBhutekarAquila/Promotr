import { Box, Button } from '@mantine/core';

const howItWorksSteps = [
  {
    number: '1',
    title: 'Post Your Event Details',
    description: 'Venue, date, team type, and required expertise—list your specifics.',
    image: '/image-132.png',
  },
  {
    number: '2',
    title: 'Review Matched Profiles',
    description: 'Browse curated hosts, crew, and logistics talent with experience summaries and ratings.',
    image: '/reviews-concept-landing-page-1.png',
  },
  {
    number: '3',
    title: 'Book & Deploy',
    description: 'Confirm in clicks, prep via digital briefs, and see your team activated live on site.',
    image: '/image-133.png',
  },
  {
    number: '4',
    title: 'Monitor & Report',
    description: 'Access attendance stats, guest feedback, and post-event insights, all in real time.',
    image: '/image-134.png',
  },
];

const HowItWorksSection = () => {
  return (
    <Box className="relative w-full bg-[#fff9ec] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-semibold text-black text-3xl sm:text-5xl lg:text-7xl mb-12 sm:mb-20 text-center">
          How Promotr Works
        </h2>

        <div className="hidden lg:block relative mb-16 sm:mb-20">
          <div className="absolute top-[50px] left-[12.5%] right-[12.5%] h-[4px] bg-[#d96508]" />
          <div className="grid grid-cols-4 gap-6 sm:gap-8 relative">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] bg-[#d96508] rounded-full flex items-center justify-center mb-6 relative z-10">
                  <span className="font-semibold text-white text-5xl">{step.number}</span>
                </div>
                <h3 className="font-bold text-black text-2xl text-center leading-tight px-2">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <img className="w-full h-[280px] object-cover rounded-lg mb-6" alt={step.title} src={step.image} />
              <p className="font-semibold text-black text-lg text-center leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-12 mb-12 sm:mb-16">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-[#d96508] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="font-semibold text-white text-3xl sm:text-5xl">{step.number}</span>
              </div>
              <h3 className="font-bold text-black text-xl sm:text-2xl text-center leading-tight px-2 mb-6">
                {step.title}
              </h3>
              <img
                className="w-full max-w-md h-[250px] sm:h-[280px] object-cover rounded-lg mb-4 sm:mb-6"
                alt={step.title}
                src={step.image}
              />
              <p className="font-semibold text-black text-base sm:text-lg text-center leading-relaxed px-4 max-w-md">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16">
          <Button
            styles={{
              root: {
                backgroundColor: '#FFD400',
                color: '#000000',
                width: '350px',
                height: '70px',
                fontSize: '28px',
                fontWeight: 600,
                borderRadius: '35px',
                '&:hover': { backgroundColor: '#FFD400', opacity: 0.9 },
              },
            }}
          >
            Hire Event Staffing Now
          </Button>
          <Button
            styles={{
              root: {
                backgroundColor: '#d96508',
                color: '#000000',
                width: '350px',
                height: '70px',
                fontSize: '28px',
                fontWeight: 600,
                borderRadius: '35px',
                '&:hover': { backgroundColor: '#d96508', opacity: 0.9 },
              },
            }}
          >
            Get a Quick Quote
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default HowItWorksSection;
