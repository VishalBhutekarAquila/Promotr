import React from 'react'
import FaqSection from '../PromotrBusinessPage/sections/FAQ/FAQ'

const _Faq = () => {
  const faq = [
    {
      question: 'Are hosts/hostesses only for formal events?',
      answer:
        'No. They can be styled and briefed for both formal and informal setups—from high-end corporate events to casual launches and social functions.',
    },
    {
      question: 'Can I request specific languages or skills?',
      answer:
        'Yes. You can specify languages (English, Hindi, and regional), presentation level, and prior experience with certain event formats during your requirement.',
    },
    {
      question: 'Can the same team handle multiple days or venues?',
      answer:
        'Promotr can arrange multi-day and multi-venue hosting teams under a single campaign for consistency.',
    },
  ]
  return <FaqSection faqs={faq} />
}

export default _Faq
