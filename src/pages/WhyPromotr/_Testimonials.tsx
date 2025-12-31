import bigstar from '../../assets/bigstar.svg'
import star1 from '../../assets/star-set1.svg'
import star2 from '../../assets/star-set2.svg'



interface MyProps{
    name:string;
    paragraph:string
    image:string
}

const Card = ({name,paragraph,image}:MyProps) =>{
    return(
        <>
        <div className="bg-white/20 p-2 mx-3 my-2 rounded-xl xl:w-70 xl:py-7 xl:px-3">
            <img src={image} alt="icon" className="w-40"/>
            <p className="text-white leading-5 xl:pt-5">{paragraph}</p>
            <h1 className="text-white text-md font-semibold ml-2 whitespace-pre xl:pt-9">{name}</h1>
            

        </div>
        </>
    );
}


const Testimonials = () =>{
    return(
        <>
        <div className="bg-radial from-[#5A0400] to-[#000000] px-3 pt-5">
            {/* Mobile View */}
            <div className="xl:hidden">
                <h1 className="text-[2rem] text-center font-bold text-white">Testimonials</h1>
                <Card image={star2} paragraph='"Aquila replaced our old agency with a faster, more reliable team—hiring,
                 onboarding, and event management all just clicks away."' name="                              — Sneha Kapoor, Delhi"></Card>
                <Card image={star1} paragraph='"The app made tracking staff and reporting so easy.
                 No more last-minute stress or missing crew!"' name="                         — Arjun Desai, Bengaluru"></Card>
                <Card image={star2} paragraph='"Promotr transformed our event staffing process completely.
                 Their verified manpower and seamless app made hiring quick and reliable." ' name="                           — Rahul Mehta, Mumbai"></Card>
                <img src={bigstar} alt="big star image"/>
            </div>
            {/* Desktop View */}
            <div className="hidden xl:block">
                <h1 className="text-[4rem] text-center font-bold text-white pt-5">Testimonials</h1>
                <div className="flex justify-center mt-10">
                    <Card image={star2} paragraph='"Aquila replaced our old agency with a faster, more reliable team—hiring,
                     onboarding, and event management all just clicks away."' name="                 — Sneha Kapoor, Delhi"></Card>
                    <Card image={star1} paragraph='"The app made tracking staff and reporting so easy.
                     No more last-minute stress or missing crew!"' name="             — Arjun Desai, Bengaluru"></Card>
                    <Card image={star2} paragraph='"Promotr transformed our event staffing process completely.
                     Their verified manpower and seamless app made hiring quick and reliable." ' name="              — Rahul Mehta, Mumbai"></Card>
                </div>
                <img src={bigstar} alt="big star image" className="w-120 mx-auto"/>
            </div>
        </div>
        </>
    );
}

export default Testimonials;