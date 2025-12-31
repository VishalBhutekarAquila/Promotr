import { useState, useEffect } from 'react'

// ==================== CONSTANTS ====================
const CIRCLE_CARDS_DATA = [
  { color: '#FFC5B5', title: 'Conferences,\nConventions\n& Industry\nSummits' },
  { color: '#FBD6A2', title: 'Seminars,\nAcademic Fairs,\nProduct\nShowcases' },
  { color: '#E7B3F7', title: 'Awards\nNights &\nGala Dinners' },
  { color: '#DAFF74', title: 'Expos and\nPublic\nExhibitions' },
  { color: '#ACC6FF', title: 'B2B & B2C\nTrade Shows' },
]

// ==================== HELPER FUNCTIONS ====================
const getArcPosition = (progress: number) => {
  const radius = 325
  const angle = Math.PI * progress
  const x = Math.cos(angle) * radius
  const y = -Math.abs(Math.sin(angle)) * radius * 0.85
  return { x, y }
}

// ==================== COMPONENTS ====================
const CircleCard = ({
  card,
  position,
  opacity,
  zIndex,
  scale = 1,
}: {
  card: { color: string; title: string }
  position: { x: number; y: number }
  opacity: number
  zIndex: number
  scale?: number
}) => (
  <div
    className="absolute rounded-full"
    style={{
      width: '250px',
      height: '250px',
      backgroundColor: card.color,
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`,
      opacity,
      zIndex,
      boxShadow: 'inset 0px -1px 8.8px 2px rgba(0,0,0,0.25), 0px 30px 45px 10px rgba(0,0,0,0.4)',
      transition: 'none',
    }}
  >
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <p className="font-['Inter'] font-semibold text-[#330d0b] text-[26px] text-center leading-tight whitespace-pre-line">
        {card.title}
      </p>
    </div>
  </div>
)

// ==================== MAIN COMPONENT ====================
const PerfectForAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('perfect-for-section')
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollRange = window.innerHeight * 3.5
      const progress = Math.max(0, Math.min(1, -rect.top / scrollRange))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const totalCards = 5
  const cardIndex = Math.floor(scrollProgress * (totalCards + 1))
  const transitionProgress = (scrollProgress * (totalCards + 1)) % 1

  const currentCard = CIRCLE_CARDS_DATA[Math.min(cardIndex, 4)]
  const prevCard = cardIndex > 0 ? CIRCLE_CARDS_DATA[cardIndex - 1] : null
  const nextCard = cardIndex < 4 ? CIRCLE_CARDS_DATA[cardIndex + 1] : null

  const currentPos = getArcPosition(transitionProgress)
  const prevPos = getArcPosition(1)
  const nextPos = getArcPosition(0)

  return (
    <section className="bg-white px-4 pt-16 pb-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black text-4xl font-bold text-center mb-12 font-['DIN_Condensed']">
          Perfect for
        </h2>

        <div id="perfect-for-section" className="relative bg-white" style={{ minHeight: '360vh' }}>
          <div className="sticky top-0 h-screen flex items-center justify-center bg-white overflow-hidden">
            <div className="relative w-full max-w-4xl aspect-square">
              {/* Semi-Circle Border */}
              <div
                className="absolute border-4 border-black"
                style={{
                  width: '700px',
                  height: '350px',
                  bottom: '50%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '700px 700px 0 0',
                  borderBottom: 'none',
                  opacity: 1,
                }}
              />

              {/* Previous Circle */}
              {prevCard && transitionProgress < 0.3 && (
                <CircleCard
                  card={prevCard}
                  position={prevPos}
                  opacity={1 - transitionProgress / 0.3}
                  zIndex={10}
                />
              )}

              {/* Current Circle */}
              <CircleCard card={currentCard} position={currentPos} opacity={1} zIndex={20} />

              {/* Next Circle */}
              {nextCard && transitionProgress > 0.6 && (
                <CircleCard
                  card={nextCard}
                  position={nextPos}
                  opacity={(transitionProgress - 0.6) / 0.4}
                  zIndex={15}
                  scale={0.8 + ((transitionProgress - 0.6) / 0.4) * 0.2}
                />
              )}

              {/* Person Image */}
              <img
                className="absolute object-contain"
                style={{
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '360px',
                  height: 'auto',
                  zIndex: 5,
                }}
                alt="Perfect For"
                src="/chatgpt-image-nov-14--2025--02-06-07-pm-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerfectForAnimation
