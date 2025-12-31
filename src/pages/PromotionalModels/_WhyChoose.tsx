import image from '../../assets/select-pana 1.svg'
import Title from '../../components/common/Title/Title'
import Text from '../../components/common/Text/Text'
import { useState } from 'react'

interface MyProps {
  title: string
  text: string
}

const Card = ({ text, title }: MyProps) => {
  return (
    <>
      <div className="w-[357px] h-[270px] bg-[#FFE4986B] rounded-4xl p-5 shadow-[6px_10px_3px_rgba(0,0,0,0.3)]">
        <Title size="35px" lh={1.1}>
          {title}
        </Title>
        <Text size="25px">{text}</Text>
      </div>
    </>
  )
}

interface ModelProps {
  title: string
  text: string
  text2: string
}

const Card2 = ({ title, text, text2 }: ModelProps) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <>
      <div className="w-[116px] mb-2">
        <Title fz="13.8px" lh={1.1} mb={7}>
          {title}
        </Title>
        <Text fz="9.48px" lh={1.1} display="block">
          {text}
        </Text>
        {!showMore && (
          <a
            onClick={() => setShowMore(true)}
            className="text-[#F36E29] underline decoration-[#F36E29] active:text-black text-[7.06px] block"
          >
            MORE
          </a>
        )}
        {showMore && (
          <Text fz="9.48px" lh={1.1}>
            {text2}
          </Text>
        )}
      </div>
    </>
  )
}

const WhyChoose = () => {
  return (
    <>
      <div className="bg-[#FFFBF0] pt-5 md:pt-12 px-5 pb-2 md:pb-8">
        <Title
          fz={{ base: '38.44px', md: '64px' }}
          align={{ base: 'right', md: 'center' }}
          mb={{ base: 25, md: 80 }}
        >
          Why Choose Promotr Promotional Models?
        </Title>
        {/* {Desktop View} */}
        <div className="hidden md:block">
          <div className="flex justify-center">
            <div className="flex flex-col gap-5">
              <Card
                title="Handpicked,  Professional Talent"
                text="Select from India’s top promotional models—trained in hospitality, product presentation, and customer engagement."
              ></Card>
              <Card
                title="Versatility for Every Campaign"
                text="Book models for live events, exhibitions, expo stands, launch parties, shopping festivals, and luxury activations."
              ></Card>
              <Card
                title="Brand-Focused Representation"
                text="Every model understands and communicates your brand’s personality, from introductions to demonstrations."
              ></Card>
            </div>
            <img src={image} alt="Center image" className="w-[600px] h-[650px] mt-33" />
            <div className="flex flex-col gap-5 justify-center">
              <Card
                title="Seamless Coordination"
                text="Centralized digital booking, profile selection, scheduling, and end-to-end model management—no back-and-forth calls or emails."
              ></Card>
              <Card
                title="Instant Impact, Measurable Results"
                text="Get immediate attention, spark interest, and drive conversions at the point of contact. Track staff attendance, feedback, and guest interactions on your dashboard."
              ></Card>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 justify-center ml-8">
            <Card2
              title="Handpicked, Professional Talent"
              text="Select from India’s top promotional models"
              text2="—trained in hospitality, product presentation, and customer engagement."
            ></Card2>
            <Card2
              title="Versatility for Every Campaign"
              text="Book models for live events, exhibitions, expo stands,"
              text2="launch parties, shopping festivals, and luxury activations."
            ></Card2>
            <Card2
              title="Brand-Focused Representation"
              text="Every model understands and communicates your"
              text2="brand’s personality, from introductions to demonstrations."
            ></Card2>
            <Card2
              title="Seamless Coordination"
              text="Centralized digital booking, profile selection,"
              text2=" scheduling, and end-to-end model management—no back-and-forth calls or emails."
            ></Card2>
            <div className="col-span-2 flex justify-center">
              <Card2
                title="Instant Impact, Measurable Results"
                text="Get immediate attention, spark interest, and drive"
                text2="conversions at the point of contact. Track staff attendance, feedback, and guest interactions on your dashboard."
              ></Card2>
            </div>
          </div>
          <img src={image} alt="Center image" className="w-[271px] h-[271px] ml-5" />
        </div>
      </div>
    </>
  )
}

export default WhyChoose
