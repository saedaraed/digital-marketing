import React, { useState, useEffect } from 'react';
import '../index.css';
import Navbar from './Navbar';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const Herosection = ({id}) => {

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const text = t('name');

  
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Animate only once
  });
  return (
    <div id={id} 
    ref={ref} className={`relative h-screen flex flex-col items-center justify-start  bg-white dark:bg-gradient-to-r from-[rgba(9,6,41)] to-[rgba(215,24,208)] ${isArabic ? 'arabic-font' : ''}  ${inView ? 'animate-slideUp' : 'opacity-0'} `} dir={isArabic ? 'rtl' : 'ltr'}>
      
      <Navbar />
      <div className="container flex flex-col md:flex-row flex-grow items-center justify-between w-full  px-4 md:px-8">


        <div className="relative w-full md:w-1/2 z-10 text-left text-white  text-left">

          <h1 className="text-[5px] md:text-[55px]  font-bold text-[45px]  text-pink-500">{t('welcome')}</h1>
          <h2 className="dark:text-white text-black  text-[35px] md:text-[55px] text-left font-bold">{t('name')}</h2>
          <h2 className="dark:text-white text-black  text-[20px] = md:text-[25px] mb-2 font-bold">{t('job')}</h2>

          <p className="text-lg md:text-xl mb-12 text-[25px] dark:text-white text-black">
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

        <div className="relative w-full md:w-1/2 ">
        <img src="/images/WhatsApp Image 2024-09-07 at 18.22.11.jpeg" alt="Profile Image" className="relative z-20 object-cover w-200 h-200 rounded-full shadow-lg" />
        </div>

      </div>
      {/* <section className="flex items-center justify-between h-screen  px-8">
      <div className="relative">
        <div className="absolute top-4 left-8 w-[500px] h-[450px] border-4 border-white-500"></div>
        <img
          src="/images/WhatsApp_Image_2024-09-07_at_18.15.20-removebg-preview.png"
          alt="Profile"
          className="relative w-[350px] h-[450px] object-cover top-5 "
        />
      </div>

      {/* Right Side (Text) */}
      {/* <div className="flex flex-col items-start justify-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Nothing is <br /> impossible
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          If you just work hard enough at it
        </p>
        <p className="text-lg italic text-gray-500 mt-8">James Martin</p>
      </div>
    </section> */}
    </div>
  );
};

export default Herosection;

