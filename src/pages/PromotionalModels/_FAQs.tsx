import Title from '../../components/common/Title/Title'
import Text from '../../components/common/Text/Text'
import image from '../../assets/FAQs-rafiki 1.svg'
import iconimage from '../../assets/plus-icon.svg'
import { useState } from "react";
import downarrow from "../../assets/downarrow.svg"
import uparrow from "../../assets/uparrow.svg"

interface MyProps {
  title: string
  text: string
}

const Card = ({ title, text }: MyProps) => {
  const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility =() =>{
        setIsVisible(!isVisible);
    };
    
    return(
        <>
        <div className="relative bg-white/20 h-auto md:h-auto w-[333px] md:w-[701px] text-white rounded-md md:rounded-3xl p-2 md:p-5">
            <Title fz={{base:"11.4px",md:"24px"}} lh={1} display="inline">{title}</Title>
            {/* <div className="md:hidden">
                <Text fz={{base:"9.5px",md:"20px"}} lh={1.3}>{text}</Text>
            </div> */}
            <div className="">
                <img src={isVisible ? uparrow : downarrow} alt="down arrow icon" onClick={toggleVisibility} className={`relative left-75 bottom-3 md:bottom-6 md:left-160`} />
                { isVisible && <Text fz={{base:"9.5px",md:"20px"}}>{text}</Text>}
            </div>
            <div className="hidden md:inline">
              <img
                src={iconimage}
                alt="plus icon"
                onClick={toggleVisibility}
                className={`relative bottom-6 left-160`}
              />
              {isVisible && <Text size="20px">{text}</Text>}
            </div>
        </div>
      </>
    )
}

const FAQs = () => {
  return (
    <>
      <div className="bg-radial from-[#5A0400] to-[#000000] pb-10 pt-5 md:pt-15">
        <Title
          fz={{ base: '38.44px', md: '64px' }}
          mb={{ base: 15, md: 0 }}
          c="white"
          align="center"
        >
          FAQs
        </Title>

        <div className="flex justify-center gap-15">
          <div className="flex flex-col gap-5 justify-center">
            <Card
              title="Can I choose the look or skill profile for my campaign?"
              text="Yes—filter by experience, look, language, and soft skills."
            ></Card>
            <Card
              title="Do models get brand training before the event?"
              text="Every model receives in-app brand briefing before activation."
            ></Card>
            <Card
              title="Can you staff multiple locations at once?"
              text="Promotr covers pan-India with single dashboard control."
            ></Card>
          </div>
          <img src={image} alt="FAQ image" className="hidden md:block" />
        </div>
      </div>
    </>
  )
}

export default FAQs
