import Title from '../../components/common/Title/Title'
import Text from '../../components/common/Text/Text'
import image from '../../assets/Feedback-bro (1) 1.svg'
import Star1 from '../../assets/star1.svg'
import Star2 from '../../assets/star2.svg'

interface MyProps {
  image: string
  name: string
  text: string
  margin: number
}

const Card = ({ image, name, text, margin }: MyProps) => {
  return (
    <>
      <div className="bg-white w-[176px] h-[162px] md:w-[398px] md:h-[381px] rounded-2xl px-5 py-5 md:py-15 shadow-[6px_10px_2px_rgba(0,0,0,0.3)]">
        <img src={image} alt="star rating image" className="w-[95px] md:w-[257px]" />
        <Text fz={{ base: '8.71px', md: '22px' }} my={{ base: 10, md: 30 }}>
          {text}
        </Text>
        <Title fz={{ base: '8.71px', md: '22px' }} align="right" mt={margin}>
          {name}
        </Title>
      </div>
    </>
  )
}

const Feedback = () => {
  return (
    <>
      <div className="bg-[#FFFBF0] pt-5 md:pt-15 pb-7">
        <Title fz={{ base: '38.4px', md: '64px' }} align="center" mb={{ base: 15, md: 80 }}>
          Client Feedback
        </Title>
        <div className="flex justify-center gap-7 mb-5 md:mb-15">
          <Card
            image={Star1}
            name="— Megha Joshi, Delhi"
            text='"Promotr made our launch day a success—the team of models
               attracted the right crowd and delivered our brand message perfectly."'
            margin={0}
          ></Card>
          <div className="hidden md:block">
            <Card
              image={Star2}
              name="— Rishi Nair, Mumbai"
              text='"We needed bilingual staff for a luxury expo—Promotr delivered elegant,
                    professional models who fit the brief exactly."'
              margin={62}
            ></Card>
          </div>
          <div className="md:hidden">
            <Card
              image={Star2}
              name="— Rishi Nair, Mumbai"
              text='"We needed bilingual staff for a luxury expo—Promotr delivered elegant,
                    professional models who fit the brief exactly."'
              margin={25}
            ></Card>
          </div>
        </div>
        <img src={image} alt="feedback page image" className="mx-auto" />
      </div>
    </>
  )
}

export default Feedback
