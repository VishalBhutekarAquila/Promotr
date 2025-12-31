import React from 'react'
import { Box, getShadow, Image } from '@mantine/core'
import Text from '@components/common/Text/Text'
import image1 from '@assets/HostPage/WhyBrandChoosePromotr/Image1.svg'
import image2 from '@assets/HostPage/WhyBrandChoosePromotr/Image2.svg'
import image3 from '@assets/HostPage/WhyBrandChoosePromotr/Image3.svg'
import Title from '@components/common/Title/Title'
import { Button } from '@mantine/core'

const _WhyChoosePromotrHosts = () => {
  const benefits = [
    {
      title: 'Professional Front-of-House Teams',
      desc: 'Hire trained hosts and hostesses who welcome guests, manage reception, guide attendees, and keep your event experience smooth from the entrance onwards.​',
      icon: image1,
    },
    {
      title: 'Brand-Aligned Presentation',
      desc: 'Staff are briefed on your brand, event flow, and key information so they can answer questions confidently and represent you with the right tone and etiquette.​',
      icon: image2,
    },
    {
      title: 'Suitable for All Event Types',
      desc: 'From corporate conferences and trade shows to weddings, VIP dinners, launches, and private events, get the right hosting team for your format and audience.​',
      icon: image3,
    },
  ]

  const MobileCardData = [
    {
      text: 'Professional Front-of-House Teams',
      icon: image1,
    },
    {
      text: 'Brand-Aligned Presentation',
      icon: image2,
    },
    {
      text: 'Suitable for All Event Types',
      icon: image3,
    },
  ]
  return (
    <Box className="w-full min-h-max bg-[#FFFAEC] pt-18 pb-10 px-6">
      <Box className="max-w-7xl  mx-auto text-center">
        <Title className="md:text-6xl! text-4xl! tracking-tighter font-semibold! text-gray-900">
          Why brands choose Promotr Hosts & Hostesses
        </Title>
      </Box>

      <Box className="max-w-5xl mx-auto pt-10 space-y-6 hidden md:block">
        {benefits.map((item, index) => (
          <Box
            key={index}
            className="bg-white rounded-xl! shadow-md! border border-gray-200! px-6! pt-2 flex justify-between items-start gap-4 hover:shadow-xl! transition-all!"
          >
            <Box className="my-auto">
              <Text className="text-2xl! font-bold! tracking-tight text-gray-900!">
                {item.title}
              </Text>
              <Text className="text-gray-600! mt-1! text-md!">{item.desc}</Text>
            </Box>
            <Image src={item.icon} alt={item.title} className="w-auto! h-40! object-contain! " />
          </Box>
        ))}
      </Box>

      <Box className="block md:hidden px-2">
        {MobileCardData.map((item, index) => (
          <Box
            key={index}
            className="flex items-center justify-between w-full rounded-xl bg-white shadow-md px-4  my-6 gap-4"
          >
            <Text className="text-base! font-semibold! text-neutral-900! w-[65%] leading-tight!">
              {item.text}
            </Text>

            <Box className="w-20 h-20 flex items-center justify-center shrink-0 overflow-hidden">
              <Image src={item.icon} alt={item.text} className="w-full h-full object-contain" />
            </Box>
          </Box>
        ))}
      </Box>

      <Box className=" md:flex! justify-evenly items-center py-4  hidden ">
        <button className="bg-[#FFD400]! hover:bg-neutral-300!  text-black! text-lg! py-2! px-8! mt-8!  rounded-full! cursor-pointer! rounded-bl-none! shadow-md!">
          Hire Hosts & Hostesses
        </button>
        <button className="bg-[#D96508]! hover:bg-neutral-300!  text-black! text-lg! py-2! px-8! mt-8!  rounded-full! cursor-pointer! rounded-br-none! shadow-md!">
          Talk to Our Team
        </button>
      </Box>
    </Box>
  )
}

export default _WhyChoosePromotrHosts
