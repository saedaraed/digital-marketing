import React, { useState, useEffect } from 'react';
import '../index.css';
import Navbar from './Navbar';
import '../i18n';
import { useTranslation } from 'react-i18next';

const Herosection = ({id}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const text = t('name');



  return (
    <div id={id} className={`relative h-screen flex flex-col items-center justify-start bg-white  dark:bg-custom-radial ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row flex-grow items-center justify-between w-full md:mt-[-100px] mt-0 px-4">
    <div
      className={`relative z-10 w-full md:w-1/2 text-white ${
        isArabic ? 'text-right' : 'text-left'
      }`}
    >
      <div className="relative overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6 animate-marqueeDown">
          {t('welcome')}
        </h1>
      </div>

      <h2 className="text-2xl md:text-5xl md:text-[55px] font-bold mb-3 dark:text-white text-black">
        {t('name')}
      </h2>

      <h2 className="text-lg md:text-2xl mb-7 tracking-[5px] md:tracking-[11px] dark:text-white text-black">
        {t('job')}
      </h2>

      <p
        className={`text-sm md:text-xl mb-12 dark:text-white opacity-90 text-black pr-0 ${
          isArabic
            ? 'md:pr-0 md:pl-24 pr-0 pl-0'
            : 'md:pr-24 md:pl-0 pr-0 pl-0'
        }`}
      >
        {t('description')}
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-start">
        <a
          href="/cv/Saed updated cv.pdf"
          download="Saed updated cv.pdf"
          className="bg-pink-500 text-white font-medium py-2 px-4 rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {t('downloadCv')}
        </a>
        <a
          href="#contact"
          className="border border-pink-500 text-black dark:text-white font-medium py-2 px-4 rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {t('contactMe')}
        </a>
      </div>
    </div>

    <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
      <div className="relative h-[250px] w-[250px] md:h-[400px] md:w-[400px] border border-grey-500 rounded-full flex justify-center items-center">
        <div className="absolute h-[150px] w-[150px] md:h-[250px] md:w-[250px] bg-gray-500 rounded-full animate-pulseGrow"></div>
        <div className="absolute h-[200px] w-[200px] md:h-[300px] md:w-[300px] bg-pink-500 rounded-full animate-pulseGrow delay-200"></div>
        <div className="absolute h-[250px] w-[250px] md:h-[400px] md:w-[400px] bg-gray-500 rounded-full animate-pulseGrow delay-400"></div>

        <div className="relative h-[200px] w-[200px] md:h-[350px] md:w-[350px] rounded-full bg-gradient-to-t from-[gray] to-[#e6c9e5] flex justify-center items-center">
          <img
            src="/images/WhatsApp_Image_2024-09-07_at_18.22.11-removebg-preview.png"
            alt="Profile Image"
            className="relative z-20 object-cover w-full h-full rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Herosection;