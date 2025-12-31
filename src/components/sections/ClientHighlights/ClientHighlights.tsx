import { useState, useEffect } from 'react';
import { Container, Title, Card, Box, Text } from '@mantine/core';

const ClientHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      image: '/62424a3e-9cdc-422f-a2c8-5cce272934e2-removebg-preview-1.png',
      quote: "Promotr's influencer team made our campaign go viral. Real reach, not just numbers!",
      author: '-Anika Mehra, Mumbai'
    },
    {
      image: '/person.svg',
      quote: 'We booked a DJ last minute for a high-profile event-Promotr came through with incredible energy and minimal fuss.',
      author: '-Rohit Jain, Gurgaon'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <Box bg="white" py={{ base: 40, md: 80 }}>
      <Container size="xl">
        <Title order={2} ta="center" mb={60} style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 700 }}>
          Client Highlights
        </Title>
        
        <Box 
          style={{ maxWidth: '700px', margin: '0 auto' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card shadow="md" padding="xl" radius="lg" style={{ background: 'rgba(245, 212, 203, 0.8)', border: '2px solid #5a0400' }}>
            <Box style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <img 
                src={testimonials[currentIndex].image} 
                alt="Client" 
                style={{ width: '150px', height: '150px', objectFit: 'contain', flexShrink: 0 }} 
              />
              <Box style={{ flex: 1 }}>
                <Text size="3rem" c="#5a0400" style={{ lineHeight: 0.5, marginBottom: '0.5rem' }}>"</Text>
                <Text size="lg" c="#5a0400" mb="md" style={{ fontStyle: 'italic' }}>
                  {testimonials[currentIndex].quote}
                </Text>
                <Text size="3rem" c="#5a0400" ta="right" style={{ lineHeight: 0.5, marginBottom: '0.5rem' }}>"</Text>
                <Text fw={600} c="#5a0400" ta="right">{testimonials[currentIndex].author}</Text>
              </Box>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientHighlights;
