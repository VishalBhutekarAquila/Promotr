import Title from '../../components/common/Title/Title'
import Text from '../../components/common/Text/Text'
import image from '../../assets/model-image.svg'
import googleplay from '../../assets/googleplay.svg'
import applestore from '../../assets/appstore.svg'
import { Image } from '@mantine/core'
import { useState } from 'react'

const PromotionalModels = () => {
  const [clickedImage1, setClickedImage1] = useState(false)
  const [clickedImage2, setClickedImage2] = useState(false)

  // Handle the click event for Image 1
  const handleClickImage1 = () => {
    setClickedImage1(true)
    setTimeout(() => {
      setClickedImage1(false)
    }, 100) // Reset after pop effect
  }

  // Handle the click event for Image 2
  const handleClickImage2 = () => {
    setClickedImage2(true)
    setTimeout(() => {
      setClickedImage2(false)
    }, 100) // Reset after pop effect
  }
  return (
    <>
      <div className="pt-10 pl-5 pb-5 md:p-15 bg-radial from-[#5A0400] to-[#000000]">
        {/* Menu Section */}
        <nav className="mb-8 flex flex-wrap justify-center gap-4">
          <a href="#about" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">About</a>
          <a href="#whychoose" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">Why Choose</a>
          <a href="#howworks" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">How It Works</a>
          <a href="#perfectfor" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">Perfect For</a>
          <a href="#difference" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">Difference</a>
          <a href="#feedback" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">Feedback</a>
          <a href="#faqs" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">FAQs</a>
          <a href="#elevate" className="text-white bg-[#ff6e1f] px-4 py-2 rounded-full font-semibold hover:bg-[#ff8c4a] transition">Elevate Experience</a>
        </nav>
        <div className="flex flex-col md:flex-row items-center md:justify-center" id="about">
          <div className="md:mb-50 w-[400px] md:w-[800px] text-center md:text-left">
            <Title fz={{ base: '30px', md: '70px' }} c="white" lh={1}>
              <span className="text-orange-500">Promotr</span> Promotional Models
            </Title>
            <br />
            <Text visibleFrom="md" fz={{ base: '24px', md: '40px' }} lh={{ md: 1 }} c="white">
              Put Your Brand in the Spotlight. Hire Professional Promotional Models for
              <br /> Events & Activations.
            </Text>
          </div>
          <img src={image} alt="Model Image" className="h-[249px] md:h-[775.5px]" />
          <Image
            src={googleplay}
            alt="google-play-icon"
            w={'153px'}
            display="inline"
            pos="relative"
            right={70}
            top={10}
            onClick={handleClickImage1}
            hiddenFrom="md"
            className={`cursor-pointer 
            transition-transform duration-300 ease-in-out
            ${clickedImage1 ? 'scale-95' : 'scale-100'} 
            hover:scale-105`}
          />

          <Image
            src={applestore}
            alt="apple-store-button"
            w="120px"
            onClick={handleClickImage2}
            className={`cursor-pointer 
            transition-transform duration-300 ease-in-out
            ${clickedImage2 ? 'scale-95' : 'scale-100'} 
            hover:scale-105`}
            display="inline"
            pos="relative"
            bottom={40}
            left={75}
            hiddenFrom="md"
          />
        </div>
      </div>
    </>
  )
}

export default PromotionalModels
