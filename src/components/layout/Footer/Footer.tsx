// src/components/layout/Footer.tsx
import { Text } from "@mantine/core";
import QuickLink from "../../sections/FooterSection/FooterSection";
import FooterSection from "../../sections/FooterSection/FooterSection";

const Footer = () => {
  return (
    <footer /*className='bg-gray-800 text-white mt-12'*/>
      {/* <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <Text size='sm'>&copy; {new Date().getFullYear()} Aquila. All rights reserved.</Text>
          <div className='flex space-x-6'> */}
      {/* Social icons would go here</div>
        </div>
      </div> */}
      <FooterSection></FooterSection>
    </footer>
  );
};

export default Footer;
