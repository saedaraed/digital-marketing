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
    <div id={id} className={`relative h-screen flex flex-col items-center justify-start  bg-white dark:bg-gradient-to-r from-[rgba(9,6,41)] to-[rgba(215,24,208)] ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      
      <Navbar />
      <div className="container flex flex-grow items-center justify-between w-full mt-[-100px] ">


        <div className="relative z-10 text-left text-white w-1/2 text-left">

          <h1 className="text-4xl font-bold text-[45px] mb-6 text-pink-500">{t('welcome')}</h1>
          <h2 className="dark:text-white text-black text-4xl text-[55px] text-left mb-2 font-bold">{t('name')}</h2>
          <h2 className="dark:text-white text-black text-4xl text-[25px] mb-2 font-bold">{t('job')}</h2>

          <p className="text-xl mb-12 text-[25px] dark:text-white text-black">
            {t('description')}
          </p>

          <div className="flex justify-left gap-4">
            <a
              href="/cv/Saed updated cv.pdf"
              download="Saed updated cv.pdf"
              className="bg-pink-500 text-white font-medium py-2 px-4 rounded-[5px]"
            >
              {t('downloadCv')}
            </a>
            <a
              href="#contact"
              className="border border-pink-500 text-black dark:text-white font-medium py-2 px-4 rounded-[5px]"
            >
              {t('contactMe')}
            </a>
          </div>
        </div>

        <div className="relative w-1/2 ">
        <img src="/images/WhatsApp Image 2024-09-07 at 18.22.11.jpeg" alt="Profile Image" className="relative z-20 object-cover w-200 h-200 rounded-full shadow-lg" />
        </div>

      </div>
 
    </div>
  );
};

export default Herosection;