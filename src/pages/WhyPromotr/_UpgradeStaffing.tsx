import { Title } from '@mantine/core';
import { Text } from '@mantine/core';
import { Button } from '@mantine/core';
import image from '../../assets/upgrade-staff.svg';

const UpgradeStaffing = () => {
  return (
    <>
      <div className='bg-[#FFFBF0]'>
        {/* Mobile View */}
        <div className='p-5 lg:hidden'>
          <Title order={1} c='black'>
            Ready to Upgrade Event Staffing?
          </Title>
          <Text size='xl' c='black' mt={10}>
            Cut costs, save time, drive better events. Experience the modern way—choose Promotr.
          </Text>
          <Button color='orange' c='black' mr={10} mt={10}>
            Book Your Team Now
          </Button>
          <Button color='yellow' c='black' px={25} mt={10}>
            Talk to an Expert
          </Button>
          <img src={image} alt='image' className='mt-2' />
        </div>
        {/* Desktop View */}
        <div className='hidden lg:block'>
          <div className='flex justify-center gap-10'>
            <div className='mt-20 '>
              <Title order={1} style={{ lineHeight: 1.10 }} fw={650} size='3.5rem' c='black'>
                Ready to Upgrade
                <br /> Event Staffing?
              </Title>
              <Text size='1.80rem' c='black' mt={30}>
                Cut costs, save time, drive better events.
                <br /> Experience the modern way—choose
                <br /> Promotr.
              </Text>
              <br />
              <Button color='orange' c='black' size='compact-md' px={20} mr={10}>
                Book Your Team Now
              </Button>
              <Button color='yellow' c='black' size='compact-md' px={40}>
                Talk to an Expert
              </Button>
            </div>
            <img src={image} alt='image' className='mt-2 w-150' />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradeStaffing;
