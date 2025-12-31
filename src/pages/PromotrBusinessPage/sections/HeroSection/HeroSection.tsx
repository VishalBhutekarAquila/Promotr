import React from 'react'
import Title from '../../../../components/common/Title/Title'
import SlideScroll from './SlideScroll/slideScroll'

const HeroSection = () => {
  return (
    <div className="relative pt-60 pb-20 h-screen w-full bg-black  overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-full h-full blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at center , rgba(90, 4, 0, 0.9) 0%, rgba(90, 4, 0, 0.4) 40%, rgba(90, 4, 0, 0.1) 70%, rgba(0,0,0,1) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <Title className="text-white! text-7xl! font-extrabold!">
          Unlock India’s Best Event Workforce. Instantly.
        </Title>

        <h3 className="text-white! font-regular! mt-2! text-xl!">
          Book event manpower on demand. Skip the agency chase. Elevate your brand presence every
          time.
        </h3>

        <button className="bg-[#FFD400]! hover:bg-neutral-300! block text-black text-lg! py-2 px-8 mt-16 mx-auto rounded-full cursor-pointer">
          Share Requirement
        </button>

        <SlideScroll />
      </div>
    </div>
  )
}

export default HeroSection
