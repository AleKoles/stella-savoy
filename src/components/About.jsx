import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id="about">
      <div className='max-w-[1240px] mx-auto'>      
        <div className='flex flex-col gap-8 justify-center'>
          <h2 className='text-center md:text-4xl sm:text-3xl text-theme-yellow text-2xl font-bold py-2'>Stella Accounting <span className="text-theme-gray">подбає про ваші податки</span></h2>
          <p className="lg:text-lg">
          Ми розуміємо...податки - це складно. Податковий кодекс постійно змінюється, електронний кабінет працює неідеально, а необхідність дзвонити в податкову викликає у вас стрес. 
          На щастя, ми любимо те, що ми робимо, і нам приносить радість допомогти вам впоратися з податками, нарахуванням заробітної плати та будь-якими іншими фінансовими питаннями.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
