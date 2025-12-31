import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';

const testimonials = [
  {
    image: '/ellipse-14.png',
    quote:
      'Promotr crew and hosts managed both guest welcoming and logistics for our expo—highly professional, stress-free, and on top of every detail.',
    name: 'Priya Das, Mumbai',
  },
  {
    image: '/ellipse-14.png',
    quote: 'Last-minute changes? Promotr dashboard made reassignments simple and kept our event on track.',
    name: 'Vivek Soni, Delhi',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Box className="relative w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-semibold text-black text-3xl sm:text-5xl lg:text-7xl mb-12 sm:mb-24 text-center">
          Client Testimonials
        </h2>

        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            <img
              className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[275px] lg:h-[275px] object-cover rounded-full flex-shrink-0"
              alt="Client testimonial"
              src={testimonials[currentIndex].image}
            />
            <div className="flex-1">
              <p className="font-semibold text-black text-lg sm:text-2xl lg:text-3xl leading-relaxed mb-4 sm:mb-6 text-center sm:text-left">
                {testimonials[currentIndex].quote}
              </p>
              <p className="font-semibold text-black text-base sm:text-xl lg:text-2xl text-center sm:text-left">
                — {testimonials[currentIndex].name}
              </p>
              <div className="flex justify-center sm:justify-start gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#d96508] w-8' : 'bg-gray-300 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default TestimonialsSection;
