import React from 'react';

const ContactMe = ({id}) => {
  return (
    <section id={id}
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url('/images/Group 5.png')` ,backgroundAttachment: 'fixed',
      }}
       
    >

      <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-[25px] sm:text-[25px] md:text-[25px] font-medium mb-6">
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
