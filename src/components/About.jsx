import React from 'react';
import Laptop from '../assets/woman_laptop.webp';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id="about">
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
      <h2 className='lg:hidden md:text-4xl sm:text-3xl text-theme-yellow mx-auto text-2xl font-bold py-2 text-center'>Stella Accounting <span className="text-theme-gray">подбає про ваші податки</span></h2>
        <img className='w-[500px] mx-auto my-4 rounded-lg' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <h2 className='hidden lg:block md:text-4xl sm:text-3xl text-theme-yellow text-2xl font-bold py-2'>Stella Accounting <span className="text-theme-gray">подбає про ваші податки</span></h2>
          <p class="lg:text-lg">
          Ми розуміємо...податки - це складно. Податковий кодекс постійно змінюється, електронний кабінет працює неідеально, а необхідність дзвонити в податкову викликає у вас стрес. 
          На щастя, ми любимо те, що ми робимо, і нам приносить радість допомогти вам впоратися з податками, нарахуванням заробітної плати та будь-якими іншими фінансовими питаннями.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
