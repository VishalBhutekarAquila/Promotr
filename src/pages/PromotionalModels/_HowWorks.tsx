import image from '../../assets/howworks-setps.svg'
import Title from '../../components/common/Title/Title'
import { Button } from '@mantine/core'
import image2 from '../../assets/howworks-steps2.svg'
import Text from '../../components/common/Text/Text'
import { Image } from '@mantine/core'
import howworks1 from '../../assets/howworks1.svg'
import howworks2 from '../../assets/howworks-2.svg'
import howworks3 from '../../assets/howworks-3.svg'
import howworks4 from '../../assets/howworks-4.svg'
import { useEffect, useRef } from "react";


interface MyProps{
  num:number;
  title:string;
  text:string;
  img:string;
}

const Card = ({num,title,text,img}:MyProps) => {
  return (
    <>
      <div className="md:hidden flex flex-col items-center w-[277px] px-[47.5px] py-2 bg-[#695315] rounded-[32px]">
        <div className="bg-[#FFFBF0] w-[64.04px] h-[64.04px] text-[29.56px] font-bold rounded-full flex items-center justify-center">
          {num}
        </div>
        <Title fz="21.57px" c="white">
          {title}
        </Title>
        <Text fz="13.48px" c="white" align="center">
          {text}
        </Text>
        <Image src={img} w="182px"/>
      </div>
    </>
  )
}

const cardsData = [
{num:1,title:"Share Your Brand Needs",text:"Share Your Brand Needs List campaign details, product focus, preferred look/skills, and event location.",img:howworks1},
{num:2,title:"Browse Talent Pool",text:"Review curated model profiles with photos, ratings, languages, and previous brand activations.",img:howworks2},
{num:3,title:"Confirm & Brief",text:"Fast digital bookings, pre-event brand training, and easy contract finalization.",img:howworks3},
{num:4,title:"Event Day Activation",text:"Real-time attendance tracking, live support, and instant post-event reporting.",img:howworks4}
];

const HowWorks = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const cards = Array.from(container.children) as HTMLElement[];
  if (cards.length === 0) return;

  const interval = setInterval(() => {
    indexRef.current = (indexRef.current + 1) % cards.length;

    const card = cards[indexRef.current];
    container.scrollTo({
      left: card.offsetLeft, // scroll exactly to this card
      behavior: "smooth",
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <div className="bg-radial from-[#5A0400] to-[#000000] pt-10 md:pt-20 pb-25">
        <Title c="white" fz={{ base: '39px', md: '64px' }} align="center" mb={80}>
          How Promotr Works
        </Title>
        <img src={image} alt="How it works" className="mx-auto hidden md:block" />
        {/* this section has the mobile scrollable section */}
        <div
      ref={containerRef}
      className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 px-4 no-scrollbar"
    >
      {cardsData.map((card) => (
        <div
          key={card.num}
          className="snap-center flex-shrink-0 w-[277px] flex justify-center"
        >
          <Card {...card} />
        </div>
      ))}
    </div>
{/* till here */}
        
        <Button c="black" size="compact-xl" radius="md" px={20} ml={400} visibleFrom="md">
          Book Promotional Models Now
        </Button>
        <Button
          c="black"
          color="rgba(232, 200, 85, 1)"
          size="compact-xl"
          radius="md"
          px={40}
          ml={20}
          visibleFrom="md"
        >
          Request a Demo
        </Button>
      </div>
    </>
  )
}

export default HowWorks
