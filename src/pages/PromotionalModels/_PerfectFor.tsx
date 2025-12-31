import Title from '../../components/common/Title/Title'
import Text from '../../components/common/Text/Text'
import image from '../../assets/puzzle.svg'
import product_lanuches from '../../assets/product_launches.svg'
import luxury_exhibitions from '../../assets/luxury_exhibitions.svg'
import expo_shows from '../../assets/expo_shows.svg'
import sampling_roadshows from '../../assets/sampling_roadshows.svg'
import { Image } from '@mantine/core'

const Card = ({ text }: { text: string }) => {
  return (
    <>
      <div className="bg-[#FFE4986B] rounded-full w-[171px] h-[39px]  md:w-[444px] md:h-[101px] p-8 shadow-[0px_10px_12px_rgba(0,0,0,0.3)]">
        <Text fz={{ base: '9.4px', md: '25px' }} lh={1.2}>
          {text}
        </Text>
      </div>
    </>
  )
}

const Card2 = ({text,image}:{text:string,image:string}) =>{
  return(
    <>
    <div className ="rounded-lg bg-white w-[159px] h-[192px] shadow-[3px_3px_10px_rgba(0,0,0,0.3)]">
      <Image
      src={image} h="139px" w="159px"
      className="rounded-t-lg!"
      />
      <Text fz="12.02px" align="center" pt={3}>{text}</Text>
    </div>
    </>
  )
}
const PerfectFor = () => {
  return (
    <>
      <div className="bg-[#FFFBF0] pt-10 md:pt-15 pb-15">
        <Title fz={{ base: '38.4px', md: '64px' }} size="64px" align="center">
          Perfect For
        </Title>
        <br />
        {/* {Desktop View} */}
        <div className="hidden md:block">
          <div className="flex justify-center">
            <div className="flex flex-col gap-100">
              <Card text="Product Launches & Brand Activations"></Card>
              <Card text="Sampling, Demos & Roadshows"></Card>
            </div>
            <img src={image} alt="centre image" className="w-[500px]" />
            <div className="flex flex-col gap-100">
              <Card text="Luxury and Lifestyle Exhibitions"></Card>
              <Card text="Expos & Trade Shows"></Card>
            </div>
          </div>
        </div>
        <div className="md:hidden grid grid-cols-2 gap-y-3 w-[340px] ml-5.5">
         <Card2 text="Product Launches & Brand Activations" image={product_lanuches}></Card2>
         <Card2 text="Luxury and Lifestyle Exhibitions" image={luxury_exhibitions}></Card2>
         <Card2 text="Sampling, Demos & Roadshows" image={sampling_roadshows}></Card2>
         <Card2 text="Expos & Trade Shows" image={expo_shows}></Card2>
        </div>
      </div>
    </>
  )
}

export default PerfectFor
