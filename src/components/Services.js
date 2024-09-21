import React from 'react';
import '../index.css';
import { FaThumbsUp, FaChartLine } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';

const Services = ({ id }) => {
  return (
    <section id={id} className="py-16 px-8">

      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-xl font-bold mb-2">What The Special</h2>
        <h1 className="text-black dark:text-white text-3xl font-bold mb-4">
          Want to boost your business growth? <br />
          Solution is here
        </h1>
      </div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-[#D718D0] dark:border-white border-opacity-50">
          <div className="relative flex items-center justify-center w-[120px] mx-auto h-[120px] rounded-full">
            <div className="absolute inset-0 bg-gray-500 rounded-full opacity-[20%]"></div>
            <FaShareAlt className="text-6xl text-[#D718D0] dark:text-white z-10" />
          </div>
          <h3 className="text-black dark:text-white text-xl font-bold mb-2 mt-5 ">Social Media Advertising Campaigns and Management Conference</h3>

        </div>

        <div className="bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-[#D718D0] dark:border-white border-opacity-50">
          <div className="relative flex items-center justify-center w-[120px] mx-auto h-[120px] rounded-full">
            <div className="absolute inset-0 bg-gray-500 rounded-full opacity-[20%]"></div>
            <FaRocket className="text-6xl text-[#D718D0] dark:text-white mb-4 mx-auto" />
          </div>

          <h3 className="text-black dark:text-white text-xl font-bold mb-2 mt-5">Helping startups and medium-sized enterprises improve their digital presence and increase their sales.</h3>

        </div>

        <div className="bg-darkBlue rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-[#D718D0] dark:border-white border-opacity-50">
          <div className="relative flex items-center justify-center w-[120px] mx-auto h-[120px] rounded-full">
            <div className="absolute inset-0 bg-gray-500 rounded-full opacity-[20%]"></div>
            <FaComments className="text-6xl text-[#D718D0] dark:text-white mb-4 mx-auto" />
          </div>
          <h3 className="text-black dark:text-white text-xl font-bold mb-2 mt-5">Marketing Consulting</h3>

        </div>
        <div className="md:col-span-1 md:col-start-2 hover:shadow-customlight dark:hover:shadow-customdark rounded-lg  p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-[#D718D0] dark:border-white border-opacity-50">
          <div className="relative flex items-center justify-center w-[120px] mx-auto h-[120px] rounded-full">
            <div className="absolute inset-0 bg-gray-500 rounded-full opacity-[20%]"></div>
            <FaClipboardList className="text-6xl text-[#D718D0] dark:text-white mb-4 mx-auto" />
          </div>
          <h3 className="text-black dark:text-white text-xl font-bold mb-2 mt-5">Marketing plans</h3>

        </div>
        <div className="md:col-span-1 rounded-lg hover:shadow-customlight dark:hover:shadow-customdark p-8 text-center transform transition-transform hover:-translate-y-10 border-[1px] border-[#D718D0] dark:border-white border-opacity-50">
        <div className="relative flex items-center justify-center w-[120px] mx-auto h-[120px] rounded-full">
            <div className="absolute inset-0 bg-gray-500 rounded-full opacity-[20%]"></div>
            <FaGoogle className="text-6xl text-[#D718D0] dark:text-white mb-4 mx-auto" />
          </div>
          <h3 className="text-black dark:text-white text-xl font-bold mb-2 mt-5">Launch and manage advertising campaigns on Google platform</h3>

        </div>
      </div>
    </section>
  );
};

export default Services;
