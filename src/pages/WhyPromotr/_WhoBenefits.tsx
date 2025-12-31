import image from '../../assets/benefits.svg'

const WhoBenefits = () =>{
    return(
        <>
        {/* Mobile Layout */}
        <div className="bg-[#FFFBF0] xl:hidden">
        <h1 className="font-bold text-[1.25rem] md:text-[2.25rem] xl:text-[3.25rem] text-center pt-5">Who Benefits?</h1>
        <img src={image} alt="benefits image" className="mt-2 pr-4 pl-2"/>
        </div>
        {/* Desktop Layout */}
        <div className='bg-[#FFFBF0] hidden xl:block'>
        <h1 className="font-bold text-[3.25rem] text-center pt-5">Who Benefits?</h1>
        <img src={image} alt="benefits image" className="mt-6 pr-4 pl-2 xl:pl-12 w-320 mx-auto relative right-10"/>
        </div>
        </>
    );
}

export default WhoBenefits;