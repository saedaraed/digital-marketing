import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone ,FaEnvelope  } from 'react-icons/fa';

const ContactMe = ({ id }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <section id={id}
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex flex-col justify-center "
      style={{
        backgroundImage: `url('/images/Group 5.png')`, backgroundAttachment: 'fixed',
      }}

    >
      <div className="text-center mb-12 flex justify-center items-center  mb-12 relative inline-block">
          <div className=' mt-4'>
            {/* <h2 className=" text-pink-500 text-xl font-bold text-[50px]">{t('aboutMe')}</h2> */}
            <svg  className="w-48 h-8 md:w-[100%] md:h-[100%]" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
            <path className='opacity-[20%] inline-block' d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#D718D0" fill="transparent" stroke-width="3" />
            </svg>      </div>


          <h1 className="absolute z-100 text-white opacity-[20%]  md:text-[65px] text-[40px] font-bold">
           Contact
          </h1>
        </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-[25px] sm:text-[25px] md:text-[25px] font-medium mb-6 w-[70%] mx-auto">
          Let’s work together to elevate your brand! Contact me for a consultation        </h1>
        <div className='flex justify-center gap-8 mb-8'>
          <div className='flex items-center gap-4'>
            <div>
              <FaPhone size={30} className='text-pink-500 '/>
            </div>
            <div className='text-left'>
              <h5 className='text-xl font-bold'>Phone Number</h5>
              <p>+20 &nbsp;1154350248</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div>
              <FaEnvelope size={30} className='text-pink-500' />
            </div>
            <div className='text-left'>
              <h5 className='text-xl font-bold'>Email</h5>
              <p className='text-xl'>saedaraed98@gmail.com</p>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/970592191765"
          className="bg-pink-500 text-white font-medium py-2 px-4 rounded-[5px]"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
