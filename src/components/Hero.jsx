import React from 'react';
import hero from '../assets/lapto-_smile.webp'



const Hero = () => {
  return (
    <div className='text-theme-gray mt-24' id="hero">
      <div className=' max-w-7xl w-full h-[90vh] mx-auto text-center grid gap-16 grid-cols-1 lg:grid-cols-2'>
        <div class="relative bg-theme-gray/80 lg:bg-transparent flex flex-col gap-8 h-full w-full items-center justify-center px-4">
        <img className='top-0 -z-10  absolute object-cover lg:hidden w-full h-full' src={hero} alt="/" />
          <h1 className='text-theme-yellow  xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold'>
          Довірте свої податки професіоналам
          </h1>
          <div className='flex justify-center items-center'>
            <p className='text-white lg:text-theme-gray text-xl md:text-2xl font-medium'>          
            Ми маємо 10-річний досвід ведення бухгалтерського обліку для приватних осіб та малого бізнесу
            </p>
          </div>
          <button className='bg-theme-yellow w-[200px] rounded-lg font-medium my-6 mx-auto py-3'>Зв'яжіться з нами</button>
        </div> 
        <div class="relative lg:block hidden mt-4 mx-auto">
          <img className='w-full relative z-10 rounded-lg shadow-lg' src={hero} alt="/" />
          <div class="absolute w-full aspect-[4/5] bg-theme-yellow top-4 shadow-lg left-6 rounded-lg"></div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
