import React from 'react';
import '../index.css';
import { FaThumbsUp, FaChartLine } from 'react-icons/fa'; // Import icons

const Services = () => {
  return (
    <section className="bg-custom-dark py-16 px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-xl font-bold mb-2">What The Special</h2>
        <h1 className="text-white text-3xl font-bold mb-4">
          Want to boost your business growth? <br />
          Solution is here
        </h1>
      </div>

      {/* Service Boxes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service Box 1 */}
        <div className="bg-darkBlue rounded-lg shadow-custom p-8 text-center hover:shadow-xl transition-shadow">
          <FaThumbsUp className="text-6xl text-white mb-4 mx-auto" /> {/* Replace with your icon */}
          <h3 className="text-white text-2xl font-bold mb-2">Social Media Marketing</h3>
          <p className="text-gray-400">
            Donec bibendum purus quis velit tempor, eleifend tempor quam facilisis.
          </p>
        </div>

        {/* Service Box 2 */}
        <div className="bg-darkBlue rounded-lg shadow-custom p-8 text-center hover:shadow-xl transition-shadow">
          <FaChartLine className="text-6xl text-white mb-4 mx-auto" />
          <h3 className="text-white text-2xl font-bold mb-2">Market Analysis</h3>
          <p className="text-gray-400">
            Donec bibendum purus quis velit tempor, eleifend tempor quam facilisis.
          </p>
        </div>

        {/* Service Box 3 */}
        <div className="bg-darkBlue rounded-lg shadow-custom p-8 text-center hover:shadow-xl transition-shadow">
          <FaChartLine className="text-6xl text-white mb-4 mx-auto" />
          <h3 className="text-white text-2xl font-bold mb-2">Market Analysis</h3>
          <p className="text-gray-400">
            Donec bibendum purus quis velit tempor, eleifend tempor quam facilisis.
          </p>
        </div>

        {/* Service Box 4 */}
        <div className="bg-darkBlue rounded-lg shadow-custom p-8 text-center hover:shadow-xl transition-shadow">
          <FaChartLine className="text-6xl text-white mb-4 mx-auto" />
          <h3 className="text-white text-2xl font-bold mb-2">Market Analysis</h3>
          <p className="text-gray-400">
            Donec bibendum purus quis velit tempor, eleifend tempor quam facilisis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
