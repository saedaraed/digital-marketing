import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Icons

const Footer = () => {
  return (
    <footer className="bg-custom-dark py-8 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">SAED</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#experience" className="hover:text-pink-500">Experience</a>
          <a href="#testimonials" className="hover:text-pink-500">Testimonials</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/saedmgharee" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/in/saedalmgharee/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-gray-400">
        Copyright © 2024 Saed Portfolio
      </div>
    </footer>
  );
};

export default Footer;
