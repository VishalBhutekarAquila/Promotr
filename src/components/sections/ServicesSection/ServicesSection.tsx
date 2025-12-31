// src/components/sections/ServicesSection.tsx
import { Card, Text, Title, Badge, Group } from '@mantine/core';
import { Code, Cloud, Monitor } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: Code, title: 'Web Development', description: 'Cutting-edge frontend and backend solutions for your business.' },
    { icon: Cloud, title: 'Cloud Services', description: 'Scalable infrastructure and deployment on modern cloud platforms.' },
    { icon: Monitor, title: 'UI/UX Design', description: 'Intuitive and engaging designs that convert visitors into customers.' },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Title order={2} className='text-4xl font-extrabold text-gray-900 mb-4 text-center'>
          Our Services
        </Title>
        <Text className='text-xl text-gray-500 mb-12 text-center'>What we offer to help your business grow.</Text>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service) => (
            <Card key={service.title} shadow='sm' padding='lg' radius='md' withBorder className='hover:shadow-lg transition duration-300'>
              <Card.Section className='p-6 flex justify-center'>
                <service.icon size={48} className='text-indigo-600' />
              </Card.Section>

              <Group justify='apart' mt='md' mb='xs'>
                <Text fw={700}>{service.title}</Text>
                <Badge color='indigo'>Aquila</Badge>
              </Group>

              <Text size='sm' c='dimmed'>
                {service.description}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
