import { Box, Text } from "@mantine/core";
import Slider from "react-slick";
import React from "react";
import BrandAmbassader from "../../../../assets/businesspage/ManpowerSolutions/BrandAmbassadors.svg";
import EventStaffing from "../../../../assets/businesspage/ManpowerSolutions/EventStaffing.svg";
import Influencers from "../../../../assets/businesspage/ManpowerSolutions/Influencers&DJ.svg";
import PromotionalModels from "../../../../assets/businesspage/ManpowerSolutions/PromotionalModels.svg";
import SecurityBouncers from "../../../../assets/businesspage/ManpowerSolutions/Security&Bouncers.svg";
import TradeConference from "../../../../assets/businesspage/ManpowerSolutions/Trade&Conference.svg";

const services = [
  {
    title: "Event Staffing (hosts, crew, logistics)",
    image: EventStaffing,
    description:
      "Professional teams that ensure smooth execution of events—from registration to guest handling. Promotr staff are trained to represent your brand with poise and precision.",
  },
  {
    title: "Brand Ambassadors & Promoters",
    image: BrandAmbassader,
    description:
      "Charismatic individuals who embody your brand’s personality. They engage audiences, build trust, and turn casual interactions into lasting brand impressions.",
  },
  {
    title: "Influencers & DJs",
    image: Influencers,
    description:
      "Promotr partners are handpicked to amplify your brand’s voice—boosting engagement, sparking emotional connection, and leaving lasting impressions.",
  },
  {
    title: "Trade Show & Conference Staff",
    image: TradeConference, // import your SVG
    description:
      "Skilled professionals who bring structure, warmth, and efficiency to your booth or event floor.",
  },
  {
    title: "Promotional Models",
    image: PromotionalModels, // import your SVG
    description:
      "Confident, engaging brand ambassadors who turn heads and spark conversations.",
  },
  {
    title: "Security & Bouncers",
    image: SecurityBouncers, // import your SVG
    description:
      "Trained teams who ensure safety, order, and discretion—from crowd control to VIP protection—with calm, professional authority.",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const ManpowerSolutions = () => {
  return (
    <Box>
      <div className="relative pt-20 pb-20 min-h-screen w-full bg-black overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-full h-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(90,4,0,0.9) 0%, rgba(90,4,0,0.4) 40%, rgba(90,4,0,0.1) 70%, rgba(0,0,0,1) 100%)",
            }}
          />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Event Manpower Solutions — All in One Place
          </h1>
        </div>

        {/* Slider */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div className="px-3 py-4">
                <div
                  className="bg-[#1c0d0d] rounded-2xl p-6 border border-white/10 shadow-lg 
                  flex flex-col min-h-[500px]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-48 h-48 mx-auto mb-6 object-contain"
                  />

                  <h3 className="text-white font-semibold text-xl sm:text-2xl text-center mb-4">
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-center text-base sm:text-lg leading-relaxed px-4 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex justify-center mt-6">
                    <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">
                      Know more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Box>
  );
};

export default ManpowerSolutions;
