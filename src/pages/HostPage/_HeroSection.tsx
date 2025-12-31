import React from 'react'
import Navigation from '@components/layout/Navigation/Navigation'
import { Box, Button, Image } from '@mantine/core'
import Title from '@components/common/Title/Title'
import Text from '@components/common/Text/Text'
import host from '@assets/HostPage/HeroSection/Host.svg'
import AppStore from '@assets/HostPage/HeroSection/AppStore.svg'
import GooglePlay from '@assets/HostPage/HeroSection/GooglePlay.svg'

const _HeroSection = () => {
  return (
    <Box className="relative pt-44  min-h-screen w-full bg-black overflow-x-hidden!">
      <Navigation bgColor="bg-[#95F4F026]" />
      <Box className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Box
          className="w-full h-full blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at center, rgba(90, 4, 0, 0.9) 0%, rgba(90, 4, 0, 0.4) 40%, rgba(90, 4, 0, 0.1) 70%, rgba(0,0,0,1) 100%)',
          }}
        />
      </Box>
      {/* Desktop */}
      <Box className="relative z-10 hidden md:block">
        <Title className="text-center  text-7xl! text-white"> Promotr Hosts & Hostesses</Title>
        <Text className="text-center pt-4! text-neutral-300! text-3xl! tracking-tight">
          Create a warm, professional first <br /> impression for every guest at your event.​
        </Text>
        <Button className="bg-[#FFD400]! hover:bg-neutral-300! block! text-black! text-lg! py-2! px-8! mt-8! mx-auto! rounded-full! cursor-pointer! shadow-sm!">
          Share Requirement
        </Button>
        <Image className="h-120! pt-4! w-auto! mx-auto" src={host}></Image>
      </Box>
      {/* Mobile */}
      <Box className="relative z-10 block  md:hidden">
        <Title className="text-center  text-5xl! text-white"> Promotr Hosts & Hostesses</Title>
        <Box className=" flex w-screen items-center py-8 px-4">
          <Image src={GooglePlay} className="h-44 w-auto object-scale-down!"></Image>
          <Image src={AppStore} className="h-22 w-auto object-scale-down!"></Image>
        </Box>
        <Image className="h-64! pt-4! w-auto! mx-auto py-8" src={host}></Image>
        <Button className="bg-[#FFD400]! hover:bg-neutral-300! block! text-black! text-lg! py-2! px-8! mt-8! mx-auto!  rounded-full! cursor-pointer! shadow-sm!">
          Share Requirement
        </Button>
      </Box>
    </Box>
  )
}

export default _HeroSection
