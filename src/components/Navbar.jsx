import React, { useState } from 'react';
import star from '../assets/star.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex fixed top-0 z-50 bg-white/90 backdrop-blur-lg  w-full px-4'>
      <nav className="justify-between w-full flex items-center h-24 max-w-7xl mx-auto">  
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="flex gap-2 flex-row items-center cursor-pointer"><img src={star} alt="spiritstone logo" className="h-8 w-8"/> <span className='playfair w-full text-2xl font-semibold text-theme-gray cormorant flex items-center gap-1'>Stella Accounting </span></Link>
        <ul className='hidden md:flex items-center justify-end text-theme-gray2 gap-4 basis-1/3'>
          <li className='group relative hover:text-black duration-150 ease-in-out tracking-wide cursor-pointer whitespace-nowrap'><Link to="about" spy={true} smooth={true}  duration={500}>Про нас</Link><span className="absolute bottom-0 left-0 w-0 group-hover:w-full border-t-2 border-theme-yellow transition-all duration-150"></span></li>
          <li className='group relative hover:text-black duration-150 ease-in-out tracking-wide cursor-pointer whitespace-nowrap'><Link to="companies" spy={true} smooth={true} duration={500}>Для підприємств</Link><span className="absolute bottom-0 left-0 w-0 group-hover:w-full border-t-2 border-theme-yellow transition-all duration-150"></span></li>
          <li className='group relative hover:text-black duration-150 ease-in-out tracking-wide cursor-pointer whitespace-nowrap'><Link to="private" spy={true} smooth={true}  duration={500}>Для ФОП</Link><span className="absolute bottom-0 left-0 w-0 group-hover:w-full border-t-2 border-theme-yellow transition-all duration-150"></span></li>
          <li className='group relative hover:text-black duration-150 ease-in-out traking-wide cursor-pointer whitespace-nowrap'><Link to="contact" spy={true} smooth={true}  duration={500}>Контакти</Link><span className="absolute bottom-0 left-0 w-0 group-hover:w-full border-t-2 border-theme-yellow transition-all duration-150"></span></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden z-50'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-24 w-full h-64 bg-white/90 backdrop-blur-lg flex flex-col justify-center items-center text-xl gap-4 py-12 px-4 ease-in-out duration-500' : 'ease-in-out duration-500 fixed top-24  bg-white/80 backdrop-blur-lg flex flex-col justify-center items-center text-lg gap-4 py-12 px-4 left-[-100%]'}>
          <li className='group relative duration-150 ease-in-out tracking-wide cursor-pointer'><Link to="about" spy={true} smooth={true}  duration={500}>Про нас</Link></li>
          <li className='group relative duration-150 ease-in-out tracking-wide cursor-pointer'><Link to="companies" spy={true} smooth={true} duration={500}>Для підприємств</Link></li>
          <li className='group relative duration-150 ease-in-out tracking-wide cursor-pointer'><Link to="private" spy={true} smooth={true}  duration={500}>Для ФОП</Link></li>
          <li className='group relative duration-150 ease-in-out traking-wide cursor-pointer'><Link to="contact" spy={true} smooth={true}  duration={500}>Контакти</Link></li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Navbar;
