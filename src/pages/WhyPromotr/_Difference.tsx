import difference from '../../assets/difference.svg';
import { Button, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Difference = () => {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  return (
    <>
      <div className='bg-[#FFFBF0] pt-5 pb-20 xl:block'>
        <h1 className='text-[3rem] text-center font-bold text-black '>The Difference at a Glance</h1>
        <img src={difference} alt='differences' className='mt-7 mb-12 mx-auto  w-300 relative ' />
        <Flex direction={isMobile ? 'column' : 'row'} justify='center'>
          <Button color='orange' c='black' size='compact-xl' radius={10} mr={10} px={40}>
            Book Manpower Now
          </Button>

          <Button color='yellow' c='black' size='compact-xl' radius={10} px={45}>
            See Talent Profiles
          </Button>
        </Flex>
      </div>
    </>
  );
};
export default Difference;
