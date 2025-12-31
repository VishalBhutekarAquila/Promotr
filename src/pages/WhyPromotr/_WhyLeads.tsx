import verified from '../../assets/verified.svg';
import budgets from '../../assets/budgets.svg';
import paperwork from '../../assets/paperwork.svg';
import speed from '../../assets/speed.svg';
import control from '../../assets/control.svg';
import lighthouse from '../../assets/lighthouse.svg';


interface MyProps{
    title:string;
    paragraph:string
    image:string
}


const Card=({title,paragraph,image}:MyProps) =>{
    return(
        <>
        <div className="bg-white/20 p-2 mx-3 my-2 rounded-xl xl:my-1 xl:mx-1 xl:p-5 xl:w-75 ">
            <img src={image} alt="icon" className="inline w-5 xl:block xl:mb-2 "/>
            <h1 className="text-white text-lg inline font-semibold ml-2 xl:ml-0 xl:mb-2 xl:block">{title}</h1>
            <p className="text-white leading-5 xl:mb-4">{paragraph}</p>

        </div>
        </>
    );
}

const WhyLeads =() =>{
    return(
        <>
        <div className="bg-radial from-[#5A0400] to-[#000000] pt-10 ">
            {/* Mobile Layout */}
            <div className='xl:hidden'>
                <h1 className="text-white font-semibold text-2xl text-center">Why Promotr Leads</h1>
                <p className="text-white text-center text-[1rem]/6 mx-5 mb-5 leading-5">India’s Smartest Event Manpower Platform vs. Old-School Staffing Agencies</p>
                <Card image={verified} title="Verified quality" paragraph="Promotr’s network is skill-verified, background-checked, and reviewed every time."></Card>
                <Card image={control} title="Real-Time Control" paragraph="Track staff check-ins, update shifts, and monitor outcomes live for full managerial control."></Card>
                <Card image={paperwork} title="Zero Paperwork" paragraph="Digital contracts, payments, and ratings—no forms, no emails, no hassle."></Card>
                <Card image={speed} title="Speed When You Need It" paragraph="Hire event staff anywhere, anytime, with push notifications and instant confirmations."></Card>
                <Card image={budgets} title="Smarter Budgets" paragraph="Pay only for what you use, scale up/down on demand, know all costs up front."></Card>
                <img src={lighthouse} alt="lighthouse image"/>
            </div>
            {/* Desktop Layout */}
            <div className='relative hidden xl:block px-65 pb-97'>
                <h1 className="text-white font-bold text-5xl text-center">Why Promotr Leads</h1>
                <p className="text-white text-center text-3xl mt-3 mb-10 mx-5 leading-8">India’s Smartest Event Manpower Platform vs. Old-<br/>School Staffing Agencies</p>
                {/* <div className="grid grid-cols-3 place-items-center gap-2">
                    <Card image={verified} title="Verified quality" paragraph="Promotr’s network is skill-verified, background-checked, and reviewed every time."></Card>
                    <Card image={control} title="Real-Time Control" paragraph="Track staff check-ins, update shifts, and monitor outcomes live for full managerial control."></Card>
                    <Card image={paperwork} title="Zero Paperwork" paragraph="Digital contracts, payments, and ratings—no forms, no emails, no hassle."></Card>
                    <div className="col-span-3 flex gap-74">
                        <Card image={speed} title="Speed When You Need It" paragraph="Hire event staff anywhere, anytime, with push notifications and instant confirmations."></Card>
                        <Card image={budgets} title="Smarter Budgets" paragraph="Pay only for what you use, scale up/down on demand, know all costs up front."></Card>
                    </div>
                
                    
                </div> */}
                <div className="flex justify-center relative">
                    <div className='flex flex-col'>
                    <Card image={verified} title="Verified quality" paragraph="Promotr’s network is skill-verified, background-checked, and reviewed every time."></Card>
                    <Card image={speed} title="Speed When You Need It" paragraph="Hire event staff anywhere, anytime, with push notifications and instant confirmations."></Card>
                    </div>
                    
                    <div className="cols-span-1">
                    <Card image={control} title="Real-Time Control" paragraph="Track staff check-ins, update shifts, and monitor outcomes live for full managerial control."></Card>
                    </div>

                    <div className='flex flex-col'>
                    <Card image={paperwork} title="Zero Paperwork" paragraph="Digital contracts, payments, and ratings—no forms, no emails, no hassle."></Card>
                    <Card image={budgets} title="Smarter Budgets" paragraph="Pay only for what you use, scale up/down on demand, know all costs up front."></Card>
                    </div>

                     <img src={lighthouse} alt="lighthouse image" className="w-240 absolute top-7 "/>

                </div>
                
            </div>
        </div>
        </>
    );
}


export default WhyLeads;