import { useState } from 'react';
import logo from '../../assets/logo/logo.svg';

const Links = ({ linkname }: { linkname: string }) => {
  return (
    <>
      <a href='#' className='text-white-400 hover:text-orange-500'>
        {linkname}
      </a>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
  }

  return (
    <>
      <div className='mx-10 mt-10 bg-white/20 rounded-full h-18'>
        {/* Mobile Design */}
        <div className='lg:hidden'>
          <div className='flex justify-between'>
            <img src={logo} alt='logo' className='w-25 ml-5 pt-5'></img>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#ff7300'
              className='w-10 mt-3.25 absolute right-15 top-14'
              onClick={ToggleMenu}
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M4 17H20M4 12H20M4 7H20' stroke='#ff7300' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>{' '}
              </g>
            </svg>
            {isOpen && (
              <div className='flex flex-col bg-black items-center gap-2 p-4 md:w-150 w-60 absolute top-31 md:right-21 right-17 rounded-lg text-white'>
                <Links linkname='For Jobs'></Links>
                <Links linkname='For Business'></Links>
                <Links linkname='Why Promotr'></Links>
                <Links linkname='Blogs'></Links>
                <button className='bg-orange-500 hover:bg-orange-600 rounded-full px-5 py-2'>Login/Signup</button>
              </div>
            )}
          </div>
        </div>
        {/* Desktop Design */}
        <div className='hidden lg:block'>
          <div className='flex justify-between'>
            <img src={logo} alt='logo' className='w-25 ml-5 pt-5'></img>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#ff7300'
              className='w-10 absolute right-15 top-14 md:hidden'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M4 17H20M4 12H20M4 7H20' stroke='#ff7300' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>{' '}
              </g>
            </svg>
            <div className='flex flex-row gap-10 mt-4 mr-5 items-center text-white '>
              <Links linkname='For Jobs'></Links>
              <Links linkname='For Business'></Links>
              <Links linkname='Why Promotr'></Links>
              <Links linkname='Blogs'></Links>
              <button className='bg-orange-500 hover:bg-orange-600 rounded-full px-5 py-2'>Login/Signup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
