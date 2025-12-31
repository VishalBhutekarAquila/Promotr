import React from 'react'
import Title from '@components/common/Title/Title'
import Text from '@components/common/Text/Text'
import CardCarousel from './CardCarousel'
import { Box } from '@mantine/core'

const WhatOurClientsSay = () => {
  return (
    <div className="h-screen w-full py-10 bg-[#FFFBF0] overflow-auto">
      <Title className="text-7xl! text-center!"> What Our Clients Say</Title>
      <Text
        ta="center"
        c="black"
        size="25px"
        mt={37}
        mb={8}
        fw={400}
        style={{
          textShadow: '0 1px 2px rgba(115, 115, 115, 0.5)',
        }}
        className="md:text-[35px]"
      >
        Real Experiences. Trusted Partnerships. Proven Results.
      </Text>
      <Box className="py-8!">
        <CardCarousel />
      </Box>
    </div>
  )
}

export default WhatOurClientsSay
