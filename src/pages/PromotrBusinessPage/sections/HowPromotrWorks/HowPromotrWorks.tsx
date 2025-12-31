import React from 'react'
import timeline from '../../../../assets/businesspage/HowPromotrWorks/timeline.svg'
import step1 from '../../../../assets/businesspage/HowPromotrWorks/step1.svg'
import step2 from '../../../../assets/businesspage/HowPromotrWorks/step2.svg'
import step3 from '../../../../assets/businesspage/HowPromotrWorks/step3.svg'
import step4 from '../../../../assets/businesspage/HowPromotrWorks/step4.svg'
const steps = [
  {
    number: '1',
    heading: 'Share Your Event Requirement',
    desc: 'Input location, dates, roles, and required skills via our easy online form.',
    image: step1, // replace with your actual image
  },
  {
    number: '2',
    heading: 'View & Select Talent',
    desc: 'Instantly shortlist from hundreds of skilled profiles - view ratings, past experience, and certifications.',
    image: step2,
  },
  {
    number: '3',
    heading: 'Confirm & Manage',
    desc: 'Lock in your team, manage schedules, and communicate all inside one dashboard.',
    image: step3,
  },
  {
    number: '4',
    heading: 'Monitor Results',
    desc: 'See attendance, engagement, and event feedback - track every detail in real time.',
    image: step4,
  },
]

const HowPromotrWorks = () => {
  return (
    <section className="w-full min-h-screen bg-[#FFFAEC] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl! tracking-tight md:text-4xl font-bold text-black">
          How Promotr Works
        </h2>
      </div>

      {/* Timeline SVG */}
      <div className="max-w-[960px] mx-auto mt-16">
        <img
          src={timeline} // <-- put your SVG timeline path here
          alt="Timeline"
          className="w-full"
        />
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 tracking-normal leading-tight!">
              {step.heading}
            </h3>
            <img src={step.image} alt={step.heading} className="w-64 h-64 object-contain mb-4" />

            <p className="text-neutral-800 text-lg mt-4 max-w-[220px] leading-tight">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowPromotrWorks
