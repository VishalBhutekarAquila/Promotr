// src/components/sections/HeroSection.tsx
import { Button } from '@mantine/core'; // Mantine button
import HeroImage from "../../../assets/hero-image.svg";



const HeroSection = () => {
  return (
    <section className='bg-gradient-to-b from-[#420300] to-[#080101] pt-40'>
      <h2 className='text-center font-bold text-4xl text-white'> Think Bigger. We do it all.</h2>
      <br/>
      <p className='text-center text-white text-xl'> Event Staffing, Brand Promoters, Trade Show Crew — All in One Place</p>
      <br/>
      {/* <Button color="yellow" radius="md" size="compact-lg">Hire Manpower</Button> 
      <Button className='px-20' color="orange" variant="outline" radius="md" size="compact-lg">Find Jobs</Button> */}
      <div className="flex justify-center mt-3">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-10 rounded-md mx-5">
        Hire Manpower
        </button>
        <button className="bg-transparent text-yellow-700 font-bold hover:bg-orange-300 py-1 px-15 border border-yellow-500 rounded-md mx-5">
        Find Jobs
        </button>
      </div>
      <br/>
      <img src={HeroImage} alt="Hero Image" className="mx-auto w-250 mt-3 mb-5"/>
      <br/>
    </section>
   
  );
};

export default HeroSection;
