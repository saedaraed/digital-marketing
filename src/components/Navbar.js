import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <nav className="bg-transparent text-white py-4 px-8 w-full z-50">

        <div className="flex items-center justify-between">
       
        <div className="mr-6">
          <button
            onClick={() => switchLanguage('en')}
            className={`py-2 px-4 rounded-l ${i18n.language === 'en' ? 'bg-pink-500' : 'bg-gray-600'}`}
          >
            English
          </button>
          <button
            onClick={() => switchLanguage('ar')}
            className={`py-2 px-4 rounded-r ${i18n.language === 'ar' ? 'bg-pink-500' : 'bg-gray-600'}`}
          >
            العربية
          </button>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#testimonials" className="hover:text-pink-500">Testimonials</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>

        {/* "Hire Me" Button */}
        <div className="hidden md:block">
          <a href="#hireme" className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-6 rounded-[5px] font-medium">
            Hire Me
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#home" className="block py-2 text-center hover:text-pink-500">Home</a>
          <a href="#about" className="block py-2 text-center hover:text-pink-500">About</a>
          <a href="#projects" className="block py-2 text-center hover:text-pink-500">Projects</a>
          <a href="#testimonials" className="block py-2 text-center hover:text-pink-500">Testimonials</a>
          <a href="#contact" className="block py-2 text-center hover:text-pink-500">Contact</a>
          <a href="#hireme" className="block py-2 text-center bg-pink-500 text-white rounded-full mt-4 font-bold">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
