import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactMe = ({id}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <section id={id}
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex flex-col justify-center "
      style={{ backgroundImage: `url('/images/Group 5.png')` ,backgroundAttachment: 'fixed',
      }}
       
    >
      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-xl font-bold mb-2">Contact</h2>
        <h1 className="text-white text-3xl font-bold">
          Get in touch
        </h1>
      </div>

      <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-[25px] sm:text-[25px] md:text-[25px] font-medium mb-6 w-[70%] mx-auto">
          Let's make your next project a success! Reach out to me directly on WhatsApp or send me an email, and let's start the conversation today.
        </h1>
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
