import image from '../../assets/select-cuate 1.svg';
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';
import { Button } from '@mantine/core';


const WhyChoosePromotr = () => {
  return (
    <>
      <div className='bg-radial from-[#5A0400] to-[#000000] pt-3'>
        
        {/* Mobile View */}
        <div className='p-5 lg:hidden'>
          <Title order={1} c='white'>
            Why Choose
            <br /> Promotr Over Agencies?
          </Title>
          <Text size='xl' c='white' mt={10}>
            Upgrade from Old Agencies—
            <br />
            Go Digital, Go Promotr
          </Text>
          <Button color='yellow' c='black' mr={10} mt={10} component="a" href="/business">
            Hire Manpower
          </Button>
          <Button variant='outline' color='yellow' c='white' px={25} mt={10} component="a" href="/m-gigs">
            Find Jobs
          </Button>
          <img src={image} alt='image' className='mt-2' />
        </div>
        {/* Desktop View */}
        <div className='hidden lg:block'>
          <div className='flex justify-center gap-10 mt-5'>
            <div className='mt-20'>
              <Title order={1} fw={650} lts={3} lh={1.10} size='3.5rem' c='white'>
                Why Choose Promotr <br /> Over Agencies?
              </Title>
              <Text size='1.80rem' c='white' mt={30}>
                Upgrade from Old Agencies—Go Digital, Go
                <br /> Promotr
              </Text>
              <Button color='yellow' c='black' size='compact-md' px={20} mr={10} mt={80} radius="md" component="a" href="/business">
                Hire Manpower
              </Button>
              <Button variant='outline' color='orange' c='white' size='compact-md' px={40} mt={80} radius="md" component="a" href="/m-gigs">
                Find Jobs
              </Button>
            </div>
            <img src={image} alt='image' className='mt-2 w-150' />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoosePromotr;
