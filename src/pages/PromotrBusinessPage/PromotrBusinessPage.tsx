import React from "react";
import Navigation from "../../components/layout/Navigation/Navigation";
import HeroSection from "./sections/HeroSection/HeroSection";
import WhyBrandChoosePromotr from "./sections/WhyBrandChoosePromotr/WhyBrandChoosePromotr";
import HowPromotrWorks from "./sections/HowPromotrWorks/HowPromotrWorks";
import ManpowerSolutions from "./sections/ManpowerSolutions/ManpowerSolutions";
import FooterSection from "../../components/sections/FooterSection/FooterSection";
import FaqSection from "./sections/FAQ/FAQ";
import CTA from "./sections/CTA/CTA";
import { Box } from "@mantine/core";

const PromotrBusinessPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-black ">
      <Navigation bgColor="bg-[#FFFFFF1A]" />
      <main className="grow">
        <HeroSection />
        <WhyBrandChoosePromotr />
        <HowPromotrWorks />
        <ManpowerSolutions />
        <FaqSection />
        <CTA />
      </main>
    </div>
  );
};

export default PromotrBusinessPage;
