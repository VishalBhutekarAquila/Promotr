import Title from "../../components/common/Title/Title";
import Text from "../../components/common/Text/Text";
import image from "../../assets/Think different-bro 1.svg"
import { Image } from "@mantine/core";
import diff1 from "../../assets/difference_1.svg";
import diff2 from "../../assets/difference_2.svg";
import diff3 from "../../assets/difference_3.svg";
import diff4 from "../../assets/difference_4.svg";

const Box = ({text}:{text:string})=>{
    return(
        <>
        <div className=" bg-white/20 text-black md:text-white w-[278.38px] h-[132.21px] p-5 md:w-[340px] md:h-[161px] rounded-xl md:pl-10 md:pt-10 md:pr-7">
            <Text fz={{base:"19.71",md:"24px"}}>{text}</Text>
        </div>
        </>
    );
}

const Card = ({text,image}:{text:string,image:string})=>{
    return(
        <>
        <div className="flex gap-2 bg-[#330D0B] text-white w-[274px] h-[79.92px] rounded-lg p-2 items-center outline outline-2 outline-[#4d1d1b]">
        <Image src={image} w="69px" h="54px"/>
        <Text fz="15px" pos={"relative"} bottom={2} lh={1.1}>{text}</Text>
        </div>
        </>
    )
}

const Difference = () =>{
    return(
        <>
        <div className="relative bg-[#000000] md:bg-radial from-[#5A0400] to-[#000000] pt-5 md:pt-15 pb-20 md:pb-0">
            <Title fz={{base:"38.4px",md:"64px"}} c="white" align="center" mb={{base:30,md:100}}>Promotr Difference</Title>
            {/* Desktop View */}
           <div className="hidden md:flex justify-center ">
            <div className="flex flex-col gap-7 mt-10">
                <Box text="Models with real brand training and event experience"></Box>
                <Box text="Intelligent matching by skill, style, language, and project needs"></Box>
            </div>
            <img src={image} alt="central image"/>
            <div className="flex flex-col gap-7 mt-10">
                <Box text="Transparent pricing, quick changes, instant feedback"></Box>
                <Box text="On-demand replacements and round-the-clock event support"></Box>
            </div>
           </div>
           {/* Mobile View */}
           <div className="md:hidden flex flex-col gap-7 items-center">
            <Card image={diff1} text="On-demand replacements and round-the-clock event support"></Card>
            <Card image={diff2} text="Intelligent matching by skill, style, language, and project needs"></Card>
            <Card image={diff3} text="Transparent pricing, quick changes, instant feedback"></Card>
            <Card image={diff4} text="Models with real brand training and event experience"></Card>
           </div>
        </div>
        {/* Mobile View */}
        <img src={image} alt="central image" className="md:hidden mt-15 pb-25 opacity-25" />
        <div className="md:hidden grid gap-0 justify-center h-[400px] overflow-y-auto pb-8 absolute top-30 left-12">
          <div className="bg-[#FFAA79DB] sticky top-0 z-20 rounded-xl">
            <Box text="Models with real brand training and event experience"></Box>
          </div>
          <div className="bg-[#F1E4BDCF] sticky top-6 z-30 rounded-xl">
            <Box text="Intelligent matching by skill, style, language, and project needs"></Box>
          </div>
          <div className="bg-[#B464CFD9] sticky top-12 z-40 rounded-xl">
            <Box text="Transparent pricing, quick changes, instant feedback"></Box>
          </div>
          <div className="bg-[#7B6E66ED] sticky top-18 z-50 rounded-xl">
            <Box text="On-demand replacements and round-the-clock event support"></Box>
          </div>
        </div>
      </>
    )
}

export default Difference
