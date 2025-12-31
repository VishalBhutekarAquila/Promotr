import { Box } from '@mantine/core'
import Text from '../Text/Text'
import React from 'react'

const ServiceCard = ({
  title,
  img,
  description,
}: {
  title: string
  img: any
  description: string
}) => {
  return (
    <Box
      className="       
        w-full!
        h-[700px]!
        bg-linear-to-b from-[#3b0d0f] to-[#290000]
        rounded-3xl 
        p-8
        pb-10
        text-center! 
        shadow-lg!
        flex!
        flex-col!
        overflow-hidden!
      "
    >
      <Text className="text-white! font-semibold! text-3xl! mb-6 min-h-20! flex! items-center! justify-center!">
        {title}
      </Text>

      <Box className="shrink-0! mb-6!">
        <img src={img} alt="" className="w-64! h-64! object-contain mx-auto" />
      </Box>

      <Text className="text-gray-200! text-lg! leading-relaxed! grow! mb-6!">{description}</Text>

      <button
        className="
          mt-auto
          bg-white 
          text-black 
          px-5 
          py-2 
          rounded-full 
          text-xl
          shadow 
          hover:bg-neutral-200 
          transition cursor-pointer!
        "
      >
        Know more →
      </button>
    </Box>
  )
}

export default ServiceCard
