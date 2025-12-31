import React from 'react'
import { Box } from '@mantine/core'
import HeroSection from './_HeroSection'
import WhyChoosePromotrHosts from './_WhyChoosePromotrHosts'
import WhatDoHostHandle from './_WhatDoHostHandle'
import HowPromotrWorks from '../PromotrBusinessPage/sections/HowPromotrWorks/HowPromotrWorks'
import FooterSection from '@components/sections/FooterSection/FooterSection'
import Faq from './_Faq'
import IdealUseCases from './_IdealUseCases'

const HostPage = () => {
  return (
    <Box className="flex flex-col min-h-screen w-screen overflow-hidden ">
      <HeroSection />
      <WhyChoosePromotrHosts />
      <WhatDoHostHandle />
      <HowPromotrWorks />
      <IdealUseCases />
      <Faq />
    </Box>
  )
}

export default HostPage
