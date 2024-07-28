import React from 'react';
import { PiCoinsLight } from "react-icons/pi";
import Laptop from '../assets/officeppl.webp';

const Companies = () => {

  return (
    <div id="companies" className='w-full bg-white py-8 lg:py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
        <h2 className='text-center lg:text-left col-span-full md:text-4xl sm:text-3xl text-theme-gray text-2xl font-bold py-2'>
          Для <span className="text-theme-yellow">малих підприємств</span>
        </h2>
          <div className='my-4'>
            <h3 className='text-lg lg:text-xl font-semibold'>
            Фінансовий облік та звітність
            </h3>
            <ul className='pl-4'>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight  className='text-theme-yellow shrink-0' /> Ведення бухгалтерського та управлінського обліку.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0'  /> Підготовка фінансової звітності відповідно до стандартів.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Контроль за фінансовими потоками та аналіз доходів/витрат.
              </li>
            </ul>
          </div>
          <div className='my-4'>
            <h3 className='text-lg font-semibold lg:text-xl'>
            Податкове планування 
            </h3>
            <ul className='pl-4'>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className=' text-theme-yellow shrink-0' /> Розробка податкових стратегій для зниження податкових зобов'язань.
              </li>
              <li className='flex items-center py-1 gap-2 lg:text-lg'>
                <PiCoinsLight className=' text-theme-yellow shrink-0' /> Проведення перевірки точності облікових записів.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Підготовка та супровід під час податкових перевірок.
              </li>
            </ul>
          </div>
          <div className='my-4'>
            <h3 className='text-lg font-semibold lg:text-xl'>
            Фінансове планування та бюджетування
            </h3>
            <ul className='pl-4'>
              <li className='flex gap-2 items-center py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Розробка та контроль бюджету підприємства.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Аналіз фінансових показників для прийняття управлінських рішень.
              </li>
              <li className='flex items-center gap-2 py-1 lg:text-lg'>
                <PiCoinsLight className='text-theme-yellow shrink-0' /> Прогнозування грошових потоків та планування інвестицій.
              </li>
            </ul>
          </div>
        </div>  
        <div className='relative hidden lg:block overflow-hidden rounded-lg' style={{ height: 'auto' }}>
          <img
            className='absolute bottom-0 rounded-lg left-0 object-cover w-full '
            src={Laptop}
            alt='Accountant'
          />
        </div>      
      </div>
    </div>
  );
};

export default Companies;


