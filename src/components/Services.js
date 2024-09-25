import React from 'react';
import '../index.css';
import { FaShareAlt } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';

const Services = ({id}) => {
  return (
    <section id={id} className="dark:bg-custom-radial  py-16 px-8">
    {/* Title Section */}
    <div className="text-center mb-12 flex justify-center items-center  mb-12 relative inline-block">
          <div className=' mt-4'>
            {/* <h2 className=" text-pink-500 text-xl font-bold text-[50px]">{t('aboutMe')}</h2> */}
            <svg width="100%" height="100%" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
              <path className='opacity-[20%] inline-block' d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#D718D0" fill="transparent" stroke-width="3" />
            </svg>      </div>


          <h1 className="absolute z-100 text-black dark:text-white opacity-[20%] text-[65px] font-bold">
            Services
          </h1>
        </div>
    {/* Service Boxes */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* First Row - 3 Columns */}
      <div className="bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-pink-500 dark:border-white dark:border-opacity-50 border-opacity-50">
        <div className='bg-gray-500 bg-opacity-50 w-[110px] h-[110px] mx-auto rounded-full flex justify-center items-center mb-[20px]'> 
        <FaShareAlt className="text-6xl text-pink-500 dark:text-white mb-4 mx-auto" />
        </div>
        <h3 className="text-black dark:text-white text-xl font-bold mb-2">Social Media Advertising Campaigns and Management Conference</h3>
      </div>

      <div className="bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-pink-500 dark:border-white dark:border-opacity-50 border-opacity-50">
      <div className='bg-gray-500 bg-opacity-50 w-[110px] h-[110px] mx-auto rounded-full flex justify-center items-center mb-[20px]'> 

        
        <FaRocket className="text-6xl text-pink-500 dark:text-white mb-4 mx-auto" />
        </div>

        <h3 className="text-black dark:text-white text-xl font-bold mb-2">Helping startups and medium-sized enterprises improve their digital presence and increase their sales.</h3>
      </div>

      <div className="bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-pink-500 dark:border-white dark:border-opacity-50 border-opacity-50">
      <div className='bg-gray-500 bg-opacity-50 w-[110px] h-[110px] mx-auto rounded-full flex justify-center items-center mb-[20px]'> 

        <FaComments className="text-6xl text-pink-500 dark:text-white mb-4 mx-auto" />
        </div>

        <h3 className="text-black dark:text-white text-xl font-bold mb-2">Marketing Consulting</h3>
      </div>

      {/* Second Row - 2 Columns Centered */}
      <div className="md:col-span-1 md:col-start-2 bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-pink-500 dark:border-white dark:border-opacity-50 border-opacity-50">
      <div className='bg-gray-500 bg-opacity-50 w-[110px] h-[110px] mx-auto rounded-full flex justify-center items-center mb-[20px]'> 

        <FaClipboardList className="text-6xl text-pink-500 dark:text-white mb-4 mx-auto" />
        </div>
        <h3 className="text-black dark:text-white text-xl font-bold mb-2">Marketing plans</h3>
      </div>

      <div className="md:col-span-1 bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-pink-500 dark:border-white dark:border-opacity-50 border-opacity-50">
      <div className='bg-gray-500 bg-opacity-50 w-[110px] h-[110px] mx-auto rounded-full flex justify-center items-center mb-[20px]'> 

        <FaGoogle className="text-6xl text-pink-500 dark:text-white mb-4 mx-auto" />
        </div>
        <h3 className="text-black dark:text-white text-xl font-bold mb-2">Launch and manage advertising campaigns on Google platform</h3>
      </div>
    </div>
  </section>
  );
};

export default Services;
