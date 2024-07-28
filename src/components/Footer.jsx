import React from 'react';
import logo from '../assets/star.png'; 

import { Link } from 'react-scroll';
import { PiPhoneCallLight, PiTelegramLogoLight } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { GoMail } from "react-icons/go";
import ScrollToTop from 'react-scroll-up';
import { SlArrowUp } from "react-icons/sl";


const Footer = () => {
  return (
    <div id="contact" className="bg-theme-blue">
       
      <section className='w-full pb-8 bg-theme-gray1'>
      
        <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 ">
        <div className="flex flex-col gap-2">
          <Link to="hero" className="w-full mx-auto text-center md:text-start" spy={true} smooth={true} offset={50} duration={500}><div className='basis-1/3 cursor-pointer w-full text-3xl font-semibold playfair text-theme-gray flex items-center justify-center md:justify-start gap-1'><img src={logo} className="h-8 w-8" alt="spiritstone logo"/><span>Stella Savoy</span></div></Link>
          <p className="text-theme-gray text-center md:text-start lg:text-lg">Ваш особистий податковий консультант</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-theme-gray text-lg uppercase text-center">Зв'яжіться з нами</p>
          <ul className='flex gap-4 items-center justify-center text-theme-gray basis-1/3'>
          <li className='hover:text-theme-yellow duration-150 ease-in-out cursor-pointer'>
            <a href="https://t.me/stelusik" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <PiTelegramLogoLight size={30} />
            </a>
          </li>
          <li className='hover:text-theme-yellow duration-150 ease-in-out cursor-pointer'>
            <a href="mailto:stelusik1982@gmail.com" rel="noopener noreferrer" aria-label="Email">
              <GoMail size={28} />
            </a>
          </li>
          <li className='hover:text-theme-yellow duration-150 ease-in-out cursor-pointer'>
            <a href="tel:+380994620659" rel="noopener noreferrer" aria-label="Mobile Phone">
              <PiPhoneCallLight size={28} />
            </a>
          </li>
          <li className='hover:text-theme-yellow duration-150 ease-in-out cursor-pointer'>
            <a href="tel:+380733853119" rel="noopener noreferrer" aria-label="Mobile Phone">
              <IoIosPhonePortrait size={28} />
            </a>
          </li>
          </ul>
        </div>
       
        

        </div>
        <p className="cols-span-full w-full text-center text-theme-gray mt-8 text-sm">© 2024 Stella Savoy</p>
        <ScrollToTop showUnder={160}>
          <div className="text-theme-gray hover:text-theme-yellow duration-150 ease-in-out flex flex-col">
            <SlArrowUp className="-mt-4" size={27}/>
          </div>
        </ScrollToTop>
      </section>
    </div>
  );
};

export default Footer;
