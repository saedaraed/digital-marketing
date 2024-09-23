import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  return (
    <nav className="bg-transparent text-white py-4  w-full z-50">

      <div className="flex items-center justify-between container m-auto ">
        {isDarkMode ? (<svg width="47" height="61" viewBox="0 0 47 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.495 20.3928L41.2815 37.9851C41.4118 38.0675 41.4967 38.2054 41.5117 38.3588L42.3157 46.5731C42.335 46.77 42.2363 46.9598 42.0641 47.0571L28.3983 54.7808C28.2439 54.8681 28.0548 54.867 27.9014 54.778L13.4901 46.4198C13.339 46.3321 13.2446 46.1721 13.2411 45.9974L13.0113 34.7322C13.0034 34.3435 13.4227 34.0949 13.7599 34.2883L16.6059 35.9203L19.9461 38.2284C20.0783 38.3197 20.1585 38.469 20.1618 38.6296L20.2361 42.2737C20.2476 42.8377 20.5745 43.3475 21.0822 43.5933L27.2561 46.5819C27.7108 46.802 28.2457 46.7785 28.6792 46.5194L32.325 44.3404C33.2523 43.7862 33.3073 42.463 32.4292 41.8336L13.0738 27.9623C12.9457 27.8705 12.8684 27.7237 12.8651 27.5661L12.7277 20.8254C12.7195 20.4269 13.1582 20.1795 13.495 20.3928Z" fill="white" stroke="white" />
          <path d="M28.0678 22.5305L14.344 13.1141V5L28.0678 13.1141L42.1924 5L41.5913 31.1454L34.0783 26.3371V18.5235L28.0678 22.5305Z" stroke="white" stroke-width="5" />
        </svg>) : (<svg width="47" height="61" viewBox="0 0 47 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.495 20.3928L41.2815 37.9851C41.4118 38.0675 41.4967 38.2054 41.5117 38.3588L42.3157 46.5731C42.335 46.77 42.2363 46.9598 42.0641 47.0571L28.3983 54.7808C28.2439 54.8681 28.0548 54.867 27.9014 54.778L13.4901 46.4198C13.339 46.3321 13.2446 46.1721 13.2411 45.9974L13.0113 34.7322C13.0034 34.3435 13.4227 34.0949 13.7599 34.2883L16.6059 35.9203L19.9461 38.2284C20.0783 38.3197 20.1585 38.469 20.1618 38.6296L20.2361 42.2737C20.2476 42.8377 20.5745 43.3475 21.0822 43.5933L27.2561 46.5819C27.7108 46.802 28.2457 46.7785 28.6792 46.5194L32.325 44.3404C33.2523 43.7862 33.3073 42.463 32.4292 41.8336L13.0738 27.9623C12.9457 27.8705 12.8684 27.7237 12.8651 27.5661L12.7277 20.8254C12.7195 20.4269 13.1582 20.1795 13.495 20.3928Z" fill="black" stroke="black" />
          <path d="M28.0678 22.5305L14.344 13.1141V5L28.0678 13.1141L42.1924 5L41.5913 31.1454L34.0783 26.3371V18.5235L28.0678 22.5305Z" stroke="#D718D0" stroke-width="5" />
        </svg>
        )}


        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-black dark:text-white hover:text-pink-500 ">Home</a>
          <a href="#about" className="text-black dark:text-white hover:text-pink-500">About</a>
          <a href="#services" className=" text-black dark:text-white hover:text-pink-500">Services</a>

          <a href="#projects" className=" text-black dark:text-white hover:text-pink-500">Projects</a>
          {/* <a href="#testimonials" className="text-black dark:text-white hover:text-pink-500">Testimonials</a> */}
          <a href="#contact" className="text-black dark:text-white hover:text-pink-500">Contact</a>
        </div>




        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-[10px]">

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="sr-only"
            />
            <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-pink-500 transition-all">
              <div
                className={`absolute top-[10px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform ${isDarkMode ? 'transform translate-x-5' : ''
                  }`}
              ></div>
            </div>
          </label>
          <div className='bg-red-500  rounded-full overflow-hidden'>   <button
            onClick={() => switchLanguage('en')}
            className={`py-2 px-4  ${i18n.language === 'en' ? 'bg-pink-500' : 'bg-gray-600'}`}
          >
            En
          </button>
            <button
              onClick={() => switchLanguage('ar')}
              className={`py-2 px-4   ${i18n.language === 'ar' ? 'bg-pink-500' : 'bg-gray-600'}`}
            >
              Ar
            </button>
          </div>

        </div>
      </div>


      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#home" className="block py-2 text-center hover:text-pink-500">Home</a>
          <a href="#about" className="block py-2 text-center hover:text-pink-500">About</a>
          <a href="#services" className="block py-2 text-center hover:text-pink-500">Services</a>
          <a href="#projects" className="block py-2 text-center hover:text-pink-500">Projects</a>

          {/* <a href="#testimonials" className="block py-2 text-center hover:text-pink-500">Testimonials</a> */}
          <a href="#contact" className="block py-2 text-center hover:text-pink-500">Contact</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
