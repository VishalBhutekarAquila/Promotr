import image from '../../assets/ElevateExperience.svg'
import Title from '../../components/common/Title/Title'
import Text from '../../components/common/Text/Text'
import { Button } from '@mantine/core'

const ElevateExperience = () => {
  return (
    <>
      <div className="bg-[#FFFBF0] p-5 pb-18  md:p-10">
        <div className="hidden md:block">
          <div className="flex justify-center mx-auto">
            <div>
              <Title fz={{ base: '26.7px', md: '64px' }} mt={122} mb={50}>
                Elevate Your Brand Experience
              </Title>
              <Text fz={{ base: '13.4px', md: '32px' }} mb={70}>
                Book promotional models instantly with
                <br /> Promotr—the event professional’s choice.
              </Text>
              <Button
                c="black"
                size="25px"
                style={{ width: '350px', height: '50px' }}
                radius="md"
                px={10}
                mr={8}
              >
                Book Your Models Today
              </Button>
              <Button
                c="black"
                color="rgba(232, 200, 85, 1)"
                size="25px"
                style={{ height: '50px' }}
                radius="md"
              >
                Talk to a Brand Staffing Expert
              </Button>
            </div>
            <img src={image} alt="alternate image" className="" />
          </div>
        </div>
        {/* {Mobile View} */}
        <div className="md:hidden relative">
          <div>
            <Title fz={{ base: '26.7px', md: '64px' }} mt={0} mb={20}>
              Elevate Your Brand Experience
            </Title>
            <Text fz={{ base: '13.4px', md: '32px' }} mb={15}>
              Book promotional models instantly with
              <br /> Promotr—the event professional’s choice.
            </Text>
            <Button
              c="black"
              size="7.2px"
              style={{ width: '112px', height: '16.4px' }}
              radius="sm"
              px={10}
              display={'block'}
            >
              Book Your Models Today
            </Button>

            <Button
              c="black"
              color="rgba(232, 200, 85, 1)"
              size="7.2px"
              style={{ width: '119px', height: '16.4px' }}
              radius="sm"
            >
              Talk to a Brand Staffing Expert
            </Button>
          </div>
          <img
            src={image}
            alt="elevated experience image"
            className="w-[322px] h-[233px] absolute top-13 left-20"
          />
        </div>
      </div>
    </>
  )
}

export default ElevateExperience
