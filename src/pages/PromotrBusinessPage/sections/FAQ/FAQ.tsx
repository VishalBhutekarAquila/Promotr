import { useState } from 'react'
import { Box, Card, Button } from '@mantine/core'

type faqItems = {
  question: string
  answer: string
}
type FaqSectionProps = {
  faqs: faqItems[]
}

const faqItems = [
  {
    question: 'Q: How quickly can I get staff for my event?',
    answer:
      'A: Most bookings are confirmed within 24 hours. For urgent needs, use the [Book Manpower Now] button for priority support.',
  },
  {
    question: 'Q: Where are Promotr professionals available?',
    answer: 'A: Aquila operates in all major Indian cities and select regional hubs.',
  },
  {
    question: 'Q: Is payment secure and transparent?',
    answer:
      'A: Yes, all payments are handled through our secure portal with clear invoicing and no hidden fees.',
  },
]

const FaqSection = ({ faqs }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Box className="relative w-full bg-[#290000] min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <img
            className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px]"
            src="/image-129.png"
            alt="FAQ icon"
          />

          <h2 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center sm:text-left">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6 mb-10">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="w-full bg-transparent"
              styles={{
                root: {
                  border: '1px solid #ff6f00',
                  backgroundColor: 'rgba(26,10,10,0.5)',
                  borderRadius: '14px',
                },
              }}
            >
              <div className="p-5 sm:p-4">
                <div className="flex items-start justify-between gap-4 sm:gap-8">
                  <div className="flex-1">
                    <h3 className="font-medium text-white text-lg sm:text-xl lg:text-2xl mb-2">
                      {item.question}
                    </h3>

                    {openIndex === index && (
                      <p className="font-medium text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed pt-1">
                        {item.answer}
                      </p>
                    )}
                  </div>

                  <Button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    styles={{
                      root: {
                        backgroundColor: '#ff6f00',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        padding: 0,
                        fontSize: '28px',
                        '&:hover': {
                          backgroundColor: '#ff6f00',
                          opacity: 0.9,
                        },
                      },
                    }}
                  >
                    {openIndex === index ? '−' : '+'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <img
            className="w-[170px]  sm:w-[190px]  lg:w-32 h-auto "
            src="/image-130.png"
            alt="FAQ decoration"
          />

          <Card
            className="w-full sm:w-[420px] lg:w-[520px] bg-transparent"
            styles={{
              root: {
                minHeight: '40px',
                backgroundColor: '#390a00',
                borderRadius: '20px',
                border: '1px solid #ff6f00',
              },
            }}
          >
            <div className="flex items-center justify-between px-6">
              <span className="font-medium text-white text-lg sm:text-xl lg:text-2xl">
                Question goes here
              </span>
              <span className="font-medium text-white text-3xl sm:text-4xl lg:text-5xl">+</span>
            </div>
          </Card>
        </div>
      </div>
    </Box>
  )
}

export default FaqSection
