import React from 'react'
import { Box } from '@mantine/core'
import Text from '@components/common/Text/Text'
import CardScroll from './WhatDoHostHandle/CardScroll'

const _WhatDoHostHandle = () => {
  return (
    <Box className="relative min-h-screen w-full bg-black py-20 pb-32">
      <Box className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Box
          className="w-full h-full blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at center, rgba(90, 4, 0, 0.9) 0%, rgba(90, 4, 0, 0.4) 40%, rgba(90, 4, 0, 0.1) 70%, rgba(0,0,0,1) 100%)',
          }}
        />
      </Box>
      <Box className="relative z-10 w-full">
        <Text className="text-white! font-bold! tracking-tight text-5xl! text-center! mb-20!">
          What Do Hosts & Hostesses Handle?
        </Text>
        <Box className="max-w-7xl mx-auto">
          <CardScroll />
        </Box>
      </Box>
    </Box>
  )
}

export default _WhatDoHostHandle
