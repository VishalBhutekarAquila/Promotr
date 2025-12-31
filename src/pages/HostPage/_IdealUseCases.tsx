import React from 'react'
import img1 from '@assets/HostPage/IdealUseCase/img1.svg'
import img2 from '@assets/HostPage/IdealUseCase/img2.svg'
import img3 from '@assets/HostPage/IdealUseCase/img3.svg'
import img4 from '@assets/HostPage/IdealUseCase/img4.svg'
import { Box } from '@mantine/core'
import Text from '@components/common/Text/Text'

const _IdealUseCases = () => {
  const data = [
    {
      img: img1,
      title: 'Conferences, Seminars, and  Corporate Offsites',
    },
    {
      img: img2,
      title: 'Weddings, Engagements, and Private Celebrations',
    },
    {
      img: img3,
      title: 'Award Nights, Gala Dinners, and VIP Receptions',
    },
    {
      img: img4,
      title: 'Society, Club, and Community Events',
    },
  ]
  return (
    <Box className="h-screen w-full bg-[#FFFAEC] flex flex-col items-center justify-start px-6 py-2">
      <Text className="text-5xl!  font-bold! text-black! mb-10! pt-2! tracking-tight">
        Ideal Use Cases
      </Text>

      <Box className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full">
        {data.map((item, index) => (
          <Box key={index} className="flex flex-col items-center text-center">
            <img src={item.img} alt="img" className="w-64 h-64 object-contain" />
            <Text className="pt-4! text-xl! w-72!  text-black px-4">{item.title}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default _IdealUseCases
