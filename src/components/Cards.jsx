import React from 'react';
import calculator from '../assets/portrait business woman.webp'; 
import anotherImage from '../assets/accountant.webp'; 
import thirdImage from '../assets/officeppl.webp'; 

const Card = ({ image, title, price, features, bgColor }) => {
  return (
    <div className={`w-full shadow-xl ${bgColor} flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}>
      <img className='min-w-32 rounded-lg mx-auto mt-[-3rem]' src={image} alt={title} />
      <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
      <p className='text-center text-4xl font-bold'>{price}</p>
      <div className='text-center font-medium'>
        {features.map((feature, index) => (
          <p key={index} className='py-2 border-b mx-8 my-8'>{feature}</p>
        ))}
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      image: calculator,
      title: 'Single User',
      price: '$149',
      features: ['500 GB Storage', '1 Granted User', 'Send up to 2 GB'],
      bgColor: 'bg-white',
    },
    {
      image: anotherImage,
      title: 'Partnership',
      price: '$199',
      features: ['1 TB Storage', '3 Granted Users', 'Send up to 10 GB'],
      bgColor: 'bg-theme-blue',
    },
    {
      image: thirdImage,
      title: 'Group Account',
      price: '$299',
      features: ['2 TB Storage', '5 Granted Users', 'Send up to 20 GB'],
      bgColor: 'bg-white',
    }
  ];

  return (
    <div id="services" className='w-full py-[10rem] px-4 bg-white'>
      <h2 className='text-center md:text-4xl sm:text-3xl mb-12 text-2xl font-bold py-2'>
      Наші Послуги
      </h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

