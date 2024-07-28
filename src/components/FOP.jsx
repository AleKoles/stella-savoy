import React from 'react';
import { PiCoinsLight } from "react-icons/pi";
import Laptop from '../assets/office_plant.webp';

const FOP = () => {

  return (
    <div id="private" className='w-full bg-white py-8 lg:py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8'>
      <div className='relative hidden lg:block overflow-hidden rounded-lg' style={{ height: 'auto' }}>
          <img
            className='absolute bottom-0 rounded-lg left-0 object-cover w-full '
            src={Laptop}
            alt='Accountant'
          />
        </div>
        <div className='flex flex-col justify-center'>
        <h2 className='text-center lg:text-left col-span-full md:text-4xl sm:text-3xl text-theme-gray text-2xl font-bold py-2'>
          Для <span className="text-theme-yellow">приватних підприємців</span>
        </h2>
        <div className='my-4'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Базові послуги
            </h3>
            <ul className='pl-4'>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Відкриття та  закриття ФОП, внесення кведів.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0'  /> Реєстрація точки торгівлі 20 Опп, ПРРО, РРО.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Консультування та підготовка документів для отримання ліцензії, дозволів.
              </li>
            </ul>
          </div>
          <div className='my-4'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Облік та звітність
            </h3>
            <ul className='pl-4'>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Ведення обліку доходів і витрат.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0'  /> Підготовка та подання податкових декларацій.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Ведення обліку заробітної плати та соціальних внесків.
              </li>
            </ul>
          </div>
          <div className='my-4'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Консультаційні послуги
            </h3>
            <ul className='pl-4'>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className=' text-theme-yellow shrink-0' /> Консультації щодо оптимізації оподаткування.
              </li>
              <li className='flex items-center py-1 gap-2 lg:text-lg'>
                <PiCoinsLight className=' text-theme-yellow shrink-0' /> Консультації щодо вибору системи оподаткування.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Консультації з питань оформлення найму працівників.
              </li>
            </ul>
          </div>
          <div className='my-4'>
            <h3 className='text-lg font-semibold lg:text-xl'>
              Допомога з автоматизацією та налаштуванням обліку
            </h3>
            <ul className='pl-4'>
              <li className='flex gap-2 items-center py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Консультації та допомога з вибором бухгалтерського програмного забезпечення.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Підготовка до фінансових перевірок.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOP;


