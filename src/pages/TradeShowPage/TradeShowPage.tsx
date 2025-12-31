import { useState, useEffect } from 'react'
import PerfectForAnimation from './PerfectForAnimation'
import HeroSection from '../../components/sections/HeroSection/HeroSection'
import CarouselDots from '../../components/common/CarouselDots'
import SocialIcon from '../../components/common/SocialIcon'

// ==================== CONSTANTS ====================
const TRUSTED_STAFFING_DATA = [
  {
    title: 'Seasoned, Professional Teams',
    image: '/4901501 1.svg',
    description:
      'From registration and information desks to booth hosts, greeters, and VIP hospitality, every Promotr staffer is skilled in brand engagement, guest management, and corporate etiquette.',
  },
  {
    title: 'All Key Roles, One Platform',
    image: '/4901501 2.svg',
    description:
      'Hire registration desk executives, queue managers, session ushers, speaker assistants, exhibitor support, lead retrieval pros, helpdesk staff, hospitality teams, and more.',
  },
  {
    title: 'Pan-India, Ready to Deploy',
    image: '/4901501 3.svg',
    description:
      'Cover multiple halls, venues, or cities with a single, scalable team—trained for exhibitions, fairs, awards, academic meets, or corporate summits.',
  },
  {
    title: 'Real-Time Monitoring & Coordination',
    image: '/4901501 4.svg',
    description:
      'Track attendance, performance, and live status updates on your personalized dashboard.',
  },
  {
    title: 'Flexible Booking, Transparent Pricing',
    image: '/4901501 5.svg',
    description:
      'Staff by the hour, shift, or day. Get instant quotes, digital contracts, and clear costs- no agency surprises.',
  },
]

const WORKS_DATA = [
  {
    number: 1,
    title: 'List Your Requirements',
    description: 'Share shift details, venue layout, guest volume, and role specifics.',
    image: '/trade_work-1.svg',
  },
  {
    number: 2,
    title: 'Review Tailored Profiles',
    description: 'See biographies, experience, multilingual ability, and ratings for each staffer.',
    image: '/trade_work-3.svg',
  },
  {
    number: 3,
    title: 'Quick Confirm & Launch',
    description:
      'Lock your staff roster with one click, confirm last-minute needs, and manage schedules online.',
    image: '/trade_work-1.svg',
  },
  {
    number: 4,
    title: 'Manage & Optimize Live',
    description: 'Monitor tasks, view reports, and adjust staff assignments in real time.',
    image: '/trade_work-4.svg',
  },
]

const WHY_PROMOTR_DATA = [
  'Teams trained for corporate environments, brand protocols, and multi-lingual guest handling',
  'Fast response for urgent, large-scale, or multi-location requirements',
  'Transparent, digital-first workflow with 24/7 support',
  'One-stop staff sourcing, deployment, and support—from planning to debrief',
]

const FAQ_DATA = [
  {
    question: 'Can Promotr staff handle international and VIP guests?',
    answer: 'Yes - many staff are multilingual and trained in VIP, international, and high-profile',
  },
  {
    question: 'Can you support multi-hall or parallel sessions?',
    answer: 'Absolutely, and you can manage all staffing via one digital interface.',
  },
  {
    question: 'Do you handle last-minute or overflow staff?',
    answer: 'Promotr can mobilize backup teams within hours across major cities.',
  },
]

const TESTIMONIALS_DATA = [
  {
    name: 'Rahul Menon, Mumbai',
    image: '/ucp9-a726-230516-removebg-preview-2.png',
    text: "We ran three conferences in two cities in one week. Promotr's dashboard kept every detail on track.",
  },
  {
    name: 'Anika Mehra, Mumbai',
    image: '/62424a3e-9cdc-422f-a2c8-5cce272934e2-removebg-preview-1.png',
    text: 'Promotr provided our entire registration, front desk, and booth teams for a 2000+ delegate expo- seamless coordination,& attendee feedback was stellar.',
  },
]

// Removed invalid QUICK_LINKS and type definition code

// TrustedStaffingSection as a functional component
const TrustedStaffingSection = ({
  currentSlide,
  setCurrentSlide,
  expandedCard,
  setExpandedCard,
}: {
  currentSlide: number
  setCurrentSlide: (index: number) => void
  expandedCard: number | null
  setExpandedCard: (index: number | null) => void
}) => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentSlide < TRUSTED_STAFFING_DATA.length - 1) {
      setCurrentSlide(currentSlide + 1)
      setExpandedCard(null)
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
      setExpandedCard(null)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black text-3xl font-bold text-center mb-8 font-['DIN_Condensed']">
          Trusted Staffing for Trade Shows, Expos & Conferences
        </h2>

        <div className="mb-12">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {TRUSTED_STAFFING_DATA.map((card, index) => (
                <div key={index} className="min-w-full px-2">
                  <div
                    className="rounded-3xl p-6 shadow-lg flex flex-col"
                    style={{
                      backgroundColor: 'rgb(250, 225, 190)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                      minHeight: '500px',
                    }}
                  >
                    <div className="bg-white rounded-2xl p-6 mb-6 h-56 flex items-center justify-center">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    <h3 className="text-black text-2xl font-bold text-center mb-4 font-['Inter']">
                      {card.title}
                    </h3>

                    <div className="flex-grow">
                      {expandedCard === index && (
                        <p className="text-black text-center font-['Inter'] font-normal mb-4 text-[15px]">
                          {card.description}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center mt-auto">
                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="bg-[#ffd700] text-black font-semibold text-lg px-10 py-3 rounded-full hover:bg-[#ffed4e] transition-colors font-['Inter']"
                      >
                        {expandedCard === index ? 'Show Less' : 'Read More'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <CarouselDots
              total={TRUSTED_STAFFING_DATA.length}
              current={currentSlide}
              onDotClick={(index) => {
                setCurrentSlide(index)
                setExpandedCard(null)
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const HowPromotrWorksSection = ({
  worksSlide,
  setWorksSlide,
}: {
  worksSlide: number
  setWorksSlide: (index: number) => void
}) => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && worksSlide < WORKS_DATA.length - 1) {
      setWorksSlide(worksSlide + 1)
    }
    if (isRightSwipe && worksSlide > 0) {
      setWorksSlide(worksSlide - 1)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="bg-gradient-to-b from-[#2d0a0a] to-black px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-12 font-['DIN_Condensed']">
          How Promotr Works
        </h2>

        <div className="mb-12">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${worksSlide * 100}%)` }}
            >
              {WORKS_DATA.map((card, index) => (
                <div key={index} className="min-w-full px-2">
                  <div
                    className="bg-[#2d0a0a] border-2 rounded-3xl p-6 min-h-[550px] flex flex-col"
                    style={{ borderColor: '#FBBC04' }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-[#FBBC04] w-16 h-16 rounded-full flex items-center justify-center text-black text-3xl font-bold font-['Inter']">
                        {card.number}
                      </div>
                    </div>
                    <h3 className="text-[#FF6F00] text-2xl font-bold text-center mb-3 font-['Inter']">
                      {card.title}
                    </h3>
                    <p className="text-white text-center mb-4 font-['Inter'] font-normal text-[20px]">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-center flex-grow">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <CarouselDots
              total={WORKS_DATA.length}
              current={worksSlide}
              onDotClick={setWorksSlide}
              activeColor="#FBBC04"
            />
          </div>
        </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <button className="w-full max-w-md bg-[#FBBC04] text-black font-semibold text-xl px-8 py-4 rounded-lg hover:bg-[#ffd700] transition-colors font-['Inter']">
          Book Trade Show Staff Now
        </button>
        <button className="w-full max-w-md bg-transparent border-2 border-[#FBBC04] text-white font-semibold text-xl px-8 py-4 rounded-lg hover:bg-[#FBBC04] hover:text-black transition-colors font-['Inter']">
          Request a Free Consultation
        </button>
      </div>
    </div>
  </section>
  )
}

const WhyPromotrSection = () => (
  <section
    className="px-4 py-16"
    style={{ background: 'radial-gradient(circle, #420300 0%, #080101 100%)' }}
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-4xl font-bold text-center mb-12 font-['DIN_Condensed']">
        Why Promotr
      </h2>

      <div className="flex flex-col items-center gap-6">
        {WHY_PROMOTR_DATA.map((text, index) => (
          <div key={index} className="w-full max-w-[450px]">
            <div
              className="px-8 py-8"
              style={{
                border: '3px solid rgba(251, 188, 4, 0.71)',
                background: 'rgba(90, 4, 0, 0.64)',
              }}
            >
              <p className="text-white text-[20px] font-['Inter'] font-normal leading-relaxed text-center">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const TestimonialsSection = ({
  testimonialSlide,
  setTestimonialSlide,
}: {
  testimonialSlide: number
  setTestimonialSlide: (index: number) => void
}) => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && testimonialSlide < TESTIMONIALS_DATA.length - 1) {
      setTestimonialSlide(testimonialSlide + 1)
    }
    if (isRightSwipe && testimonialSlide > 0) {
      setTestimonialSlide(testimonialSlide - 1)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="bg-[#F5F5F5] px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black text-5xl font-bold text-center mb-12 font-['DIN_Condensed']">
          Testimonials
        </h2>

        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
          >
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <div key={index} className="min-w-full px-2">
                <div className="bg-gradient-to-b from-[#FFD4B8] to-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-b from-[#FFD4B8] to-[#FFE4D0] px-8 pt-8 pb-16">
                    <div className="flex justify-start mb-4">
                      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                        <path
                          d="M12 24C12 20.6863 14.6863 18 18 18V12C11.3726 12 6 17.3726 6 24V36H18V24H12ZM30 24C30 20.6863 32.6863 18 36 18V12C29.3726 12 24 17.3726 24 24V36H36V24H30Z"
                          fill="#000000"
                        />
                      </svg>
                    </div>

                    <p className="text-black text-left text-[17px] font-['Inter'] font-normal leading-relaxed">
                      {testimonial.text}
                    </p>

                    <div className="flex justify-end mt-2">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                        fill="none"
                        style={{ transform: 'rotate(180deg)' }}
                      >
                        <path
                          d="M12 24C12 20.6863 14.6863 18 18 18V12C11.3726 12 6 17.3726 6 24V36H18V24H12ZM30 24C30 20.6863 32.6863 18 36 18V12C29.3726 12 24 17.3726 24 24V36H36V24H30Z"
                          fill="#000000"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-white px-8 py-6 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-black text-lg font-bold font-['Inter']">
                        -{testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CarouselDots
            total={TESTIMONIALS_DATA.length}
            current={testimonialSlide}
            onDotClick={setTestimonialSlide}
            activeColor="#000000"
          />
        </div>
      </div>
    </section>
  )
}

const FAQSection = ({
  openFAQ,
  setOpenFAQ,
}: {
  openFAQ: number | null
  setOpenFAQ: (index: number | null) => void
}) => {
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section
      className="px-4 py-16"
      style={{
        background: 'radial-gradient(circle at center, #5A0400 0%, #1A0100 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-5xl font-bold text-center mb-12 font-['DIN_Condensed']">
          FAQs
        </h2>

        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border border-white rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white text-lg font-semibold font-['Inter'] pr-4">
                  {faq.question}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="flex-shrink-0"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                style={{
                  maxHeight: openFAQ === index ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div className="px-6 pb-5">
                  <p className="text-white text-base font-['Inter'] font-normal leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FinalCTASection = () => (
  <section className="bg-white px-4 py-16">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-black text-2xl sm:text-3xl font-black text-center mb-8 font-['DIN_Condensed'] leading-tight px-4">
        Deliver a premium delegate experience at every event. Book specialized conference and trade
        show staff with
      </h2>

      <div className="flex justify-center mb-8">
        <img
          src="/Group 563.svg"
          alt="Hire Skilled Professionals"
          className="w-full max-w-md h-auto"
        />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <button
          className="w-full max-w-md bg-[#FBBC04] text-black font-black text-xl px-8 py-4 hover:bg-[#ffd700] transition-colors font-['Inter']"
          style={{ borderRadius: '20px 20px 0px 20px' }}
        >
          Get Your Event Team Now
        </button>
        <button
          className="w-full max-w-md bg-transparent border-2 border-[#FF6F00] text-black font-black text-xl px-8 py-4 hover:bg-[#FF6F00] hover:text-white transition-colors font-['Inter']"
          style={{ borderRadius: '20px 20px 0px 20px' }}
        >
          Talk to an Event Staffing Specialist
        </button>
      </div>
    </div>
  </section>
)

const FooterSection = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    console.log('Subscribe email:', email)
    setEmail('')
  }

  // Use the same quickLinks as the global FooterSection
  const quickLinks = [
    { name: "About", href: "/why-promotr" },
    { name: "Event Staffing", href: "/staff" },
    { name: "Brand Ambassadors & Promoters", href: "/brand-ambassador" },
    { name: "Influencers & DJs", href: "/influencers" },
    { name: "Trade Show & Conference Staffing", href: "/m-trade_show" },
    { name: "Promotional Models", href: "/models" },
    { name: "Security & Bouncers", href: "/business" },
    { name: "Talent", href: "/talentpage" },
    { name: "Gigs", href: "/m-gigs" },
    { name: "Hosts", href: "/hosts" },
  ];

  return (
    <footer className="bg-black px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['DIN_Condensed']">
            <span className="text-white">Stay </span>
            <span className="text-[#FF6F00]">Connected</span>
          </h2>
          <p className="text-white text-base font-['Inter'] mb-8 max-w-3xl mx-auto">
            Stay updated with the latest opportunities, trends, and event insights. Join our
            community of event professionals and businesses today.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <SocialIcon href="#" icon="facebook" />
            <SocialIcon href="#" icon="twitter" />
            <SocialIcon href="#" icon="instagram" />
            <SocialIcon href="#" icon="youtube" />
          </div>

          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-l-full bg-[#2d0a0a] text-white placeholder-gray-400 focus:outline-none font-['Inter']"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-[#FF6F00] text-white font-bold rounded-r-full hover:bg-[#ff8c00] transition-colors font-['Inter']"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Removed duplicate Quick Links section from TradeShowPage footer */}

        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-white text-sm font-['Inter'] mb-2">
            © 2025 Promotr Events & Marketing. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-['Inter']">
            Built to empower events. Driven by people.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ==================== MAIN COMPONENT ====================
const TradeShowPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [worksSlide, setWorksSlide] = useState(0)
  const [testimonialSlide, setTestimonialSlide] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // Auto-advance trusted staffing carousel
  useEffect(() => {
    if (expandedCard === null) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % TRUSTED_STAFFING_DATA.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [expandedCard])

  // Auto-advance works carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setWorksSlide((prev) => (prev + 1) % WORKS_DATA.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Auto-advance testimonials carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % TESTIMONIALS_DATA.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d0a0a] to-black">
      <HeroSection />
      <TrustedStaffingSection
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        expandedCard={expandedCard}
        setExpandedCard={setExpandedCard}
      />
      <HowPromotrWorksSection worksSlide={worksSlide} setWorksSlide={setWorksSlide} />
      <PerfectForAnimation />
      <WhyPromotrSection />
      <TestimonialsSection
        testimonialSlide={testimonialSlide}
        setTestimonialSlide={setTestimonialSlide}
      />
      <FAQSection openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} />
      <FinalCTASection />
      <FooterSection />
    </div>
  )
}

export default TradeShowPage
