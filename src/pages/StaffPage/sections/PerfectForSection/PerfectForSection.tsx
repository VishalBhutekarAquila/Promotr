import { Box } from '@mantine/core';

const perfectForImages = [
  { src: '/image-155.png', alt: 'Corporate events & launches' },
  { src: '/image-156.png', alt: 'Weddings & private functions' },
  { src: '/image-157.png', alt: 'Trade shows expos & live exhibitions' },
  { src: '/image-158.png', alt: 'Brand activations & roadshows' },
  { src: '/image-159.png', alt: 'High-volume guest logistics & crowd management' },
];

const PerfectForSection = () => {
  return (
    <Box className="relative w-full bg-[#3d0f0a] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-white text-3xl sm:text-5xl lg:text-7xl mb-12 sm:mb-20 lg:mb-32 text-center">
          Perfect For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 items-start justify-items-center">
          {perfectForImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center max-w-[350px]">
              <div className="mb-6">
                <img
                  className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px] object-contain"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
              <p className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-center leading-tight">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default PerfectForSection;
