import React, { useState , useEffect } from 'react';
import '../index.css';
import Navbar from './Navbar';
import '../i18n';
import { useTranslation } from 'react-i18next';

const Herosection = () => {
  const [displayedText, setDisplayedText] = useState(''); // النص المعروض
  const [index, setIndex] = useState(0); // مؤشر النص
  const [isReversing, setIsReversing] = useState(false);

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const text =t('name');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isReversing) {
        // عرض النص حرفًا بحرف
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          // بعد الانتهاء من عرض النص، نبدأ في التراجع
          setIsReversing(true);
        }
      } else {
        // التراجع من آخر حرف إلى أول حرف
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          // بعد الانتهاء من التراجع، نبدأ الحركة من جديد
          setIsReversing(false);
        }
      }
    }, 150); // التأخير بين كل حركة

    return () => clearInterval(interval);
  }, [index, isReversing, text]);

  return (
    <div className={`relative h-screen flex flex-col items-center justify-start ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-grow items-center justify-center w-full">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[10px] fixed"
          style={{
            backgroundImage: `url('/images/WhatsApp Image 2024-09-07 at 18.22.11.jpeg')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(5, 3, 34, 0.82)',
          }}
        ></div>

        <div className="relative z-10 text-center text-white">
        {/* <h1 className="text-4xl font-bold text-white animate-fade-in">{displayedText}</h1> */}

          <h1 className="text-4xl font-bold mb-8 text-pink-500">{t('welcome')}</h1>
          <h2 className="text-white text-4xl text-[55px] text-center mb-6 font-bold flex items-center">{displayedText}</h2>
          <h2 className="text-white text-4xl text-[55px] mb-8 font-bold">{t('job')}</h2>

          <p className="text-xl mb-8 text-[25px]">
            {t('description')}
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/cv/Saed updated cv.pdf" 
              download="Saed updated cv.pdf"
              className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-[5px]"
            >
              {t('downloadCv')}
            </a>
            <a
              href="#contact"
              className="border border-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-[5px]"
            >
              {t('contactMe')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

