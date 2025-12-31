import { Container, Title, Accordion, Box } from '@mantine/core'

const FAQSection = () => {
  const faqs = [
    {
      question: 'Can I book combined influencer + DJ packages?',
      answer:
        'Yes, Promotr builds integrated entertainment and marketing solutions to fit any event.',
    },
    {
      question: 'How soon can you deliver talent?',
      answer: 'Most collaborations are confirmed and briefed within 48 hours for urban events.',
    },
    {
      question: 'Do you handle licensing and logistics?',
      answer: 'Promotr offers end-to-end, fully compliant booking and support.',
    },
  ]

  return (
    <Box bg="linear-gradient(180deg, #420300 0%, #080101 100%)" py={{ base: 40, md: 80 }}>
      <Container size="xl">
        <Title
          order={2}
          c="white"
          ta="center"
          mb={60}
          style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 700 }}
        >
          FAQs
        </Title>

        <Accordion
          variant="separated"
          styles={{
            item: {
              background: 'rgba(139, 69, 19, 0.3)',
              border: '2px solid rgba(255, 110, 31, 0.5)',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              '&[data-active]': {
                background: 'rgba(139, 69, 19, 0.5)',
              },
            },
            control: {
              color: 'white',
              fontSize: '1.8rem',
              fontWeight: 600,
              padding: '2rem 2.5rem',
              '&:hover': {
                background: 'rgba(255, 110, 31, 0.1)',
              },
            },
            content: {
              color: 'white',
              fontSize: '1.5rem',
              padding: '1.5rem 2.5rem',
              lineHeight: 1.6,
            },
            chevron: {
              color: '#ff6e1f',
              width: '2.5rem',
              height: '2.5rem',
              border: '2px solid #ff6e1f',
              borderRadius: '50%',
              '&[data-rotate]': {
                transform: 'rotate(45deg)',
              },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`faq-${index}`}>
              <Accordion.Control>{faq.question}</Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Box>
  )
}

export default FAQSection
