import { useState, useEffect } from "react";
import Navigation from '../../components/layout/Navigation/Navigation';

const GigsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [whyJoinSlide, setWhyJoinSlide] = useState(0);
  const [howItWorksSlide, setHowItWorksSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const slides = [
    {
      image:
        "/professional-catering-staff-for-exceptional-events--1--removebg-.png",
      title: "Event Staffing",
    },
    {
      image: "/medium-shot-people-working-as-team-removebg-preview-1.png",
      title: "Trade Show & Conference Staff",
    },
    {
      image: "/medium-shot-people-working-as-team-removebg-preview-2.png",
      title: "Promotional Models",
    },
    {
      image: "/portrait-smiley-man-holding-idea-light-removebg-preview-1.png",
      title: "Promoters & Brand Ambassadors",
    },
    {
      image:
        "/dj-juicy-bags-3-nominations-at-the-guinness-ghana-dj-awards--23-.png",
      title: "Influencers & DJs",
    },
    {
      image:
        "/bouncer-shirt--event-staff--security-guard-tee---us-cotton-remov.png",
      title: "Security & Bouncers",
    },
  ];

  const whyJoinSlides = [
    {
      image: "/join1.png",
      title: "Choose Your Gigs. Build Experience.",
    },
    {
      image: "/join2.png",
      title: "Get Noticed by Top Brands.",
    },
    {
      image: "/join3.png",
      title: "Grow Your Skills & Earning.",
    },
    {
      image: "/join4.png",
      title: "Reliable Payments. Transparent Process.",
    },
  ];

  const howItWorksSlides = [
    {
      number: "1",
      image: "/copilot-20251102-175838-1.png",
      title: "Create Your Profile:",
      description:
        "Highlight your strengths, past experience (if any), and areas of interest.",
    },
    {
      number: "2",
      image: "/untitled-1-2.png",
      title: "Browse & Apply:",
      description:
        "See upcoming events, brand activations, exhibitions, and more-updated daily.",
    },
    {
      number: "3",
      image: "/19197272-1.png",
      title: "Get Verified & Trained:",
      description:
        "Complete a quick verification and access online training to prep for success.",
    },
    {
      number: "4",
      image: "/19197238-1-8.png",
      title: "Work. Shine. Earn:",
      description:
        "Receive booking confirmations, participate in events, get paid fast-plus reviews after each event.",
    },
  ];

  const successStories = [
    {
      quote:
        "It's flexible and the team actually cares. They helped me find work even outside my city.",
      image: "/ucp9-a726-230516-removebg-preview-2.png",
      name: "Manish Tiwari, Lucknow",
    },
    {
      quote:
        "With Aquila, I got steady events and payments-plus learned how to present and network with top brands.",
      image: "/62424a3e-9cdc-422f-a2c8-5cce272934e2-removebg-preview-1.png",
      name: "Pooja Sharma, Mumbai",
    },
  ];

  const faqs = [
    {
      question: "How soon can I start?",
      answer:
        "Get verified within 24-48 hours and start applying for live jobs instantly.",
    },
    {
      question: "Is Aquila only for experienced professionals?",
      answer:
        "No! Whether you're fresher or experienced, our platform helps you build your event career.",
    },
    {
      question: "What if I need help?",
      answer:
        "Aquila's support team is available 24/7 to assist with onboarding, assignment issues, and payouts.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const whyJoinInterval = setInterval(() => {
      setWhyJoinSlide((prev) => (prev + 1) % whyJoinSlides.length);
    }, 5000);

    return () => clearInterval(whyJoinInterval);
  }, []);

  useEffect(() => {
    const howItWorksInterval = setInterval(() => {
      setHowItWorksSlide((prev) => (prev + 1) % howItWorksSlides.length);
    }, 5000);

    return () => clearInterval(howItWorksInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d0a0a] to-black font-['DIN_Condensed']">
      <Navigation />
      {/* Hero Section */}
      <section className="px-4 pt-8 pb-8">
        <div className="max-w-md mx-auto">
          {/* Main Heading */}
          <h1 className="text-[#ff6e1f] text-[2rem] font-bold leading-tight mb-8 font-['DIN_Condensed'] text-center">
            Find Event Gigs. Get Hired Fast.
          </h1>

          {/* App Store Buttons */}
          <div className="flex gap-3 mb-8">
            <img
              src="/image 208.svg"
              alt="Get it on Google Play"
              className="w-70 h-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="/image 209.svg"
              alt="Download on App Store"
              className="w-40 h-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Sliding Cards Container */}
          <div className="relative overflow-hidden mb-6">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center px-2"
                >
                  <div className="bg-[#5A0400] rounded-3xl p-6 h-[550px] flex flex-col w-full max-w-sm">
                    <h2 className="text-white text-2xl font-bold text-center mb-4 font-sans">
                      {slide.title}
                    </h2>
                    <div className="flex justify-center items-center flex-grow overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-[#ff6e1f] w-6" : "bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Share Requirements Button */}
          <div className="flex justify-center">
            <button
              className="bg-[#ffd700] text-black font-semibold text-lg px-12 py-3 rounded-full hover:bg-[#ffed4e] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Share Requirements
            </button>
          </div>
        </div>
      </section>

      {/* Browse and Apply Section */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Main Heading */}
          <h2 className="text-black text-[1.75rem] font-bold text-center leading-tight mb-6 font-['DIN_Condensed']">
            Browse, apply, and join top events-your next job is just a tap away.
          </h2>

          {/* Expandable Description */}
          <div className="text-black text-base text-center leading-relaxed mb-8 font-sans">
            <p>
              Be India's Next Event Pro. Ready to step into the spotlight? Sign up, get verified, and{" "}
              {!isTextExpanded && (
                <button
                  onClick={() => setIsTextExpanded(true)}
                  className="text-[#ff6e1f] font-semibold hover:text-[#ff8c4a] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  ...More
                </button>
              )}
              {isTextExpanded && (
                <span 
                  className="transition-opacity duration-500 ease-in-out"
                  style={{
                    animation: "fadeIn 0.5s ease-in-out"
                  }}
                >
                  start working with leading brands and world-class events—on your schedule.
                </span>
              )}
            </p>
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}</style>
          </div>

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <img
              src="/untitled-1-removebg-preview--6--1.png"
              alt="Event Talent"
              className="w-full max-w-sm h-auto"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">
            <button
              className="bg-[#ffd700] text-black font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#ffed4e] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Sign Up as Event Talent
            </button>
            <button
              className="bg-white text-black font-semibold text-lg px-8 py-3 rounded-full border-2 border-[#ff6e1f] hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Browse Event Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Promotr Section */}
      <section className="bg-gradient-to-b from-[#2d0a0a] to-black px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Section Title */}
          <h2 className="text-white text-[2rem] font-bold text-center mb-8 font-['DIN_Condensed']">
            Why Join <span className="text-[#ff6e1f]">Promotr</span>?
          </h2>

          {/* Sliding Cards Container */}
          <div className="relative overflow-hidden mb-6">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${whyJoinSlide * 100}%)` }}
            >
              {whyJoinSlides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center px-2"
                >
                  <div className="bg-[#5A0400] rounded-3xl p-6 h-[550px] flex flex-col w-full max-w-sm">
                    {/* Image Container */}
                    <div className="flex justify-center items-center flex-grow mb-4">
                      <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-2xl font-bold text-center mb-4 font-sans">
                      {slide.title}
                    </h3>

                    {/* Read More Button */}
                    <div className="flex justify-center">
                      <button
                        className="bg-[#ffd700] text-black font-semibold text-lg px-10 py-2.5 rounded-full hover:bg-[#ffed4e] transition-colors"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {whyJoinSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setWhyJoinSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    whyJoinSlide === index ? "bg-[#ff6e1f] w-6" : "bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Section Title */}
          <h2 className="text-black text-[2rem] font-bold text-center mb-8 font-['DIN_Condensed']">
            How It Works
          </h2>

          {/* Sliding Cards Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${howItWorksSlide * 100}%)` }}
            >
              {howItWorksSlides.map((slide, index) => (
                <div key={index} className="min-w-full px-2">
                  <div
                    className="bg-[#FFC5B5] rounded-3xl p-8"
                    style={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {/* Number Badge */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#ffd700] rounded-full w-16 h-16 flex items-center justify-center">
                        <span
                          className="text-black text-3xl font-bold"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {slide.number}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-black text-2xl font-bold text-center mb-4"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-black text-base text-center leading-relaxed mb-6"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {slide.description}
                    </p>

                    {/* Image Container */}
                    <div className="flex justify-center">
                      <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {howItWorksSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setHowItWorksSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    howItWorksSlide === index
                      ? "bg-[#ff6e1f] w-6"
                      : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Roles Are Available Section */}
      <section className="bg-gradient-to-b from-[#2d0a0a] to-black px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Section Title */}
          <h2 className="text-white text-[2rem] font-bold text-center mb-4 font-['DIN_Condensed']">
            What Roles Are Available?
          </h2>

          {/* Description */}
          <p
            className="text-white text-center text-base mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Whether you're starting out or a seasoned pro-Aquila matches you
            with the best-fit roles.
          </p>

          {/* Role Cards */}
          <div className="space-y-4 mb-8 max-w-sm mx-auto">
            {/* Card 1 - Event Staff & Crew */}
            <div className="bg-[#1D0808] border border-[#ff6e1f] rounded-2xl p-4 flex items-center gap-4">
              <img
                src="/professional-catering-staff-for-exceptional-events--1--removebg-.png"
                alt="Event Staff"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <h3
                className="text-[#ff6e1f] text-xl font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Event Staff & Crew
              </h3>
            </div>

            {/* Card 2 - Promoters & Brand Ambassadors */}
            <div className="bg-[#1D0808] border border-[#ff6e1f] rounded-2xl p-4 flex items-center gap-4">
              <img
                src="/portrait-smiley-man-holding-idea-light-removebg-preview-1.png"
                alt="Promoters"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <h3
                className="text-[#ff6e1f] text-xl font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Promoters & Brand Ambassadors
              </h3>
            </div>

            {/* Card 3 - Influencers & DJs */}
            <div className="bg-[#1D0808] border border-[#ff6e1f] rounded-2xl p-4 flex items-center gap-4">
              <img
                src="/dj-juicy-bags-3-nominations-at-the-guinness-ghana-dj-awards--23-.png"
                alt="Influencers & DJs"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <h3
                className="text-[#ff6e1f] text-xl font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Influencers & DJs
              </h3>
            </div>

            {/* Card 4 - Security & Bouncers */}
            <div className="bg-[#1D0808] border border-[#ff6e1f] rounded-2xl p-4 flex items-center gap-4">
              <img
                src="/bouncer-shirt--event-staff--security-guard-tee---us-cotton-remov.png"
                alt="Security"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <h3
                className="text-[#ff6e1f] text-xl font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Security & Bouncers
              </h3>
            </div>

            {/* Card 5 - Trade Show & Conference Teams */}
            <div className="bg-[#1D0808] border border-[#ff6e1f] rounded-2xl p-4 flex items-center gap-4">
              <img
                src="/medium-shot-people-working-as-team-removebg-preview-1.png"
                alt="Trade Show"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <h3
                className="text-[#ff6e1f] text-xl font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Trade Show & Conference Teams
              </h3>
            </div>

            {/* Card 6 - Promotional Models */}
            <div className="bg-[#1D0808] border border-[#ff6e1f] rounded-2xl p-4 flex items-center gap-4">
              <img
                src="/medium-shot-people-working-as-team-removebg-preview-2.png"
                alt="Promotional Models"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <h3
                className="text-[#ff6e1f] text-xl font-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Promotional Models
              </h3>
            </div>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center">
            <button
              className="bg-[#ffd700] text-black font-semibold text-lg px-12 py-3 rounded-full hover:bg-[#ffed4e] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Show more 
            </button>
          </div>
        </div>
      </section>

      {/* Talent Success Stories Section */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Section Title */}
          <h2 className="text-black text-[2rem] font-bold text-center mb-8 font-['DIN_Condensed']">
            Talent Success Stories
          </h2>

          {/* Two Cards Centered */}
          <div className="flex flex-col items-center space-y-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-[#FFC5B5] rounded-3xl p-6 w-full max-w-sm"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Quote Text */}
                <p
                  className="text-black text-base text-center leading-relaxed mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {story.quote}
                </p>

                {/* Profile Image Container */}
                <div className="flex justify-center mb-4">
                  <div
                    className="bg-white rounded-full w-32 h-32 flex items-center justify-center overflow-hidden"
                    style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
                  >
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Name */}
                <p
                  className="text-black text-base font-semibold text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  - {story.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-[#2d0a0a] to-black px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Section Title */}
          <h2 className="text-white text-[2rem] font-bold text-center mb-8 font-['DIN_Condensed']">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1D0808] border border-[#ff6e1f] rounded-2xl overflow-hidden"
              >
                {/* Question Button */}
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <h3
                    className="text-white text-lg font-semibold pr-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#ff6e1f] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p
                    className="px-6 pb-4 text-white text-base leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Take the Stage CTA Section */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Section Title */}
          <h2 className="text-black text-[2rem] font-bold text-center mb-8 font-['DIN_Condensed']">
            Ready to Take the Stage?
          </h2>

          {/* Team Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/image 139.png"
              alt="Promotr Team"
              className="w-full max-w-sm h-auto"
            />
          </div>

          {/* Description */}
          <div className="text-center mb-8">
            <p
              className="text-black leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: "400" }}
            >
              Transform your event staffing
              <br />
              Save time Ensure quality
              <br />
              Book India's best — the Promotr way.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">
            <button
              className="bg-[#ffd700] text-black font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#ffed4e] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Apply Now
            </button>
            <button
              className="bg-white text-black font-semibold text-lg px-8 py-3 rounded-full border-2 border-[#ff6e1f] hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See Open Roles
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Stay Connected */}
          <div className="text-center mb-8">
            <h2 className="text-white text-[2rem] font-bold mb-4 font-['DIN_Condensed']">
              Stay <span className="text-[#ff6e1f]">Connected</span>
            </h2>
            <p
              className="text-white text-base leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Stay updated with the latest opportunities, trends, and event
              insights. Join our community of event professionals and businesses
              today.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="#"
                className="text-white hover:text-[#ff6e1f] transition-colors"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ff6e1f] transition-colors"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ff6e1f] transition-colors"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ff6e1f] transition-colors"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2.12 2.93 2.93 0 001.71 1.54A78.36 78.36 0 0012 19.73a78.45 78.45 0 008.34-.3 2.87 2.87 0 001.46-.74c.9-.83 1-2.25 1.1-3.45a48.29 48.29 0 000-6.48zM9.75 14.85V8.66l5.92 3.11z" />
                </svg>
              </a>
            </div>

            {/* Email Subscription */}
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-[#2d0a0a] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[#ff6e1f]"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <button
                className="bg-[#ff6e1f] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#ff8c4a] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Removed duplicate Quick Links section from GigsPage */}
          {/* Fully removed leftover Quick Links list and markup from GigsPage */}

          {/* App Store Buttons */}
          <div className="flex gap-3 mb-8">
            <img
              src="/image 208.svg"
              alt="Get it on Google Play"
              className="w-48 h-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="/image 209.svg"
              alt="Download on App Store"
              className="w-40 h-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p
              className="text-white text-sm mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2025 Promotr Events & Marketing. All rights reserved.
            </p>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Built to empower events. Driven by people.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GigsPage;
