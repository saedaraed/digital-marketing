import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Certificates = ({id}) => {
  const [testimonials, setTestimonials] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 1;
  useEffect(() => {
    fetch('https://66a93a86613eced4eba4d9e7.mockapi.io/api/projects/testimonials')
      .then(response => response.json())
      .then((data) => {
        setTestimonials(data)
      })
      .catch((error) => console.error('Error fetching testimonials:', error))
  }, [])


  // Function to handle page change
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';


  console.log('testimonials', testimonials)
  return (
    <section id={id}
      className={`py-16 px-8 bg-white bg-opacity-8 ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    >
      <div className='container m-auto'>
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-xl font-bold mb-2">{t('certificates')}</h2>
        <h1 className="text-white text-3xl font-bold">
          {t('testimonialsQuote')}
        </h1>
      </div>

      {/* Certificates Content */}
   
      <div className="flex justify-center mt-8 gap-5 md:flex-nowrap flex-wrap">
        <div className='card rounded over-flow-hidden flex-grow w-1/2 dark:bg-custom-radial  p-5 shadow-xl shadow-pink-500/40'>
          <img src='/images/1676841483080.jpg' alt='' />
        </div>
        <div className='card rounded over-flow-hidden flex-grow w-1/2 dark:bg-custom-radial  p-5 shadow-xl shadow-pink-500/40'>
          <img src='/images/1676841483080.jpg' alt='' />
        </div>
     
      </div>
      <div className="flex justify-center mt-8 gap-5 w-100 md:flex-nowrap flex-wrap ">
        <div className='card rounded over-flow-hidden flex-grow md:w-1/3 dark:bg-custom-radial p-5 shadow-xl shadow-pink-500/40'>
          <img src='/images/1676841483080.jpg' alt='' />
        </div>
        <div className='card rounded over-flow-hidden flex-grow md:w-1/3  dark:bg-custom-radial p-5 shadow-xl shadow-pink-500/40'>
          <img src='/images/1676841483080.jpg' alt='' />
        </div>
        <div className='card rounded over-flow-hiddendark:bg-custom-radial flex-grow md:w-1/3  dark:bg-custom-radial  p-5 shadow-xl shadow-pink-500/40'>
          <img src='/images/1676841483080.jpg' alt='' />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Certificates;
