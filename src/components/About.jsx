import React, { useRef, useEffect } from 'react';
import { PiHandshakeFill } from "react-icons/pi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { TbReportAnalytics } from "react-icons/tb";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current, 
      { x: -200, opacity: 0 },  
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.3, 
        ease: "sine.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          once: true,
        }
      }
    );
  }, []);


  return (
    <div className='w-full bg-white py-16 px-4' id="about">
      <div className='max-w-[1240px] mx-auto'>
     
      
        <div className='flex flex-col gap-8 justify-center'>
          <h2 className='text-center md:text-4xl sm:text-3xl text-theme-yellow text-2xl font-bold py-2'>Stella Accounting <span className="text-theme-gray">подбає про ваші податки</span></h2>
          <p class="lg:text-lg">
          Ми розуміємо...податки - це складно. Податковий кодекс постійно змінюється, електронний кабінет працює неідеально, а необхідність дзвонити в податкову викликає у вас стрес. 
          На щастя, ми любимо те, що ми робимо, і нам приносить радість допомогти вам впоратися з податками, нарахуванням заробітної плати та будь-якими іншими фінансовими питаннями.
          </p>
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between'>
          <div 
            ref={(el) => cardsRef.current[0] = el} 
            className="flex flex-col gap-2 items-center"
          > 
            <TbReportAnalytics size={45} className="text-theme-yellow"/>
            <p className="text-theme-gray text-lg uppercase font-medium text-center">Облік та звітність</p>
          </div>
          <div 
            ref={(el) => cardsRef.current[1] = el} 
            className="flex flex-col gap-2 items-center"
          >
            <PiHandshakeFill size={45} className="text-theme-yellow"/>
            <p className="text-theme-gray text-lg font-medium uppercase text-center">Консультаційні послуги</p>
          </div>
          <div 
            ref={(el) => cardsRef.current[2] = el} 
            className="flex flex-col gap-2 items-center"
          >
            <LiaBusinessTimeSolid size={45} className="text-theme-yellow"/>
            <p className="text-theme-gray text-lg uppercase font-medium text-center">Фінансове планування та бюджетування</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
