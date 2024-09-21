import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Icons

const Footer = () => {
  return (
    <footer className=" py-8 text-black dark:text-green">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        <div className="text-2xl font-bold"> <svg width="47" height="61" viewBox="0 0 47 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.495 20.3928L41.2815 37.9851C41.4118 38.0675 41.4967 38.2054 41.5117 38.3588L42.3157 46.5731C42.335 46.77 42.2363 46.9598 42.0641 47.0571L28.3983 54.7808C28.2439 54.8681 28.0548 54.867 27.9014 54.778L13.4901 46.4198C13.339 46.3321 13.2446 46.1721 13.2411 45.9974L13.0113 34.7322C13.0034 34.3435 13.4227 34.0949 13.7599 34.2883L16.6059 35.9203L19.9461 38.2284C20.0783 38.3197 20.1585 38.469 20.1618 38.6296L20.2361 42.2737C20.2476 42.8377 20.5745 43.3475 21.0822 43.5933L27.2561 46.5819C27.7108 46.802 28.2457 46.7785 28.6792 46.5194L32.325 44.3404C33.2523 43.7862 33.3073 42.463 32.4292 41.8336L13.0738 27.9623C12.9457 27.8705 12.8684 27.7237 12.8651 27.5661L12.7277 20.8254C12.7195 20.4269 13.1582 20.1795 13.495 20.3928Z" fill="white" stroke="white" />
          <path d="M28.0678 22.5305L14.344 13.1141V5L28.0678 13.1141L42.1924 5L41.5913 31.1454L34.0783 26.3371V18.5235L28.0678 22.5305Z" stroke="white" stroke-width="5" />
        </svg></div>

        <div className="flex space-x-6">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#experience" className="hover:text-pink-500">Experience</a>
          <a href="#testimonials" className="hover:text-pink-500">Testimonials</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>


        <div className="flex space-x-4">
          <a href="https://www.facebook.com/saedmgharee" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-pink-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/in/saedalmgharee/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-pink-500">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-pink-500">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>


      <div className="text-center mt-6 text-gray-400">
        Copyright © 2024 Saed Portfolio
      </div>
    </footer>
  );
};

export default Footer;
