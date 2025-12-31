interface CarouselDotsProps {
  total: number
  current: number
  onDotClick: (index: number) => void
  activeColor?: string
  inactiveColor?: string
}

const CarouselDots = ({
  total,
  current,
  onDotClick,
  activeColor = '#ff6e1f',
  inactiveColor = '#9ca3af',
}: CarouselDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 rounded-full transition-all ${
            current === index ? 'w-6' : 'w-2'
          }`}
          style={{
            backgroundColor: current === index ? activeColor : inactiveColor,
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default CarouselDots
