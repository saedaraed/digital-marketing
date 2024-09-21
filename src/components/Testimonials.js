import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const[testimonials , setTestimonials] =useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 1;
  useEffect(()=>{
    fetch('https://66a93a86613eced4eba4d9e7.mockapi.io/api/projects/testimonials')
    .then(response => response.json())
    .then((data)=>{
      setTestimonials(data)
    })
.catch((error)=>console.error('Error fetching testimonials:', error))
  }, [])

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';


  console.log('testimonials' , testimonials)
  return (
    // <section
    //   className={`py-16 px-8 bg-white bg-opacity-8 ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}
    //   style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }} 
    // >
    //   <div className="text-center mb-12">
    //     <h2 className="text-pink-500 text-xl font-bold mb-2">{t('testimonials')}</h2>
    //     <h1 className="text-white text-3xl font-bold">
    //      {t('testimonialsQuote')}
    //     </h1>
    //   </div>

    //   <div className="max-w-4xl mx-auto text-center">
    //     {testimonials.length > 0 ? (
    //      testimonials
    //      .slice(currentPage * testimonialsPerPage, (currentPage + 1) * testimonialsPerPage)
    //      .map((testimonial) => (
    //         <div key={testimonial.id} className="mb-8">
    //           <p className="text-xl text-white italic mb-4">
    //             <span className="text-pink-500 text-2xl">“</span>
    //             {testimonial.content}
    //             <span className="text-pink-500 text-2xl">”</span>
    //           </p>
    //           <p className="text-white font-bold">{testimonial.name}</p>
    //           <p className="text-gray-400">{testimonial.job}</p>
    //         </div>
    //       ))
    //     ) : (
    //       <p className="text-white">Loading testimonials...</p>
    //     )}
    //   </div>

    //   {/* Pagination Dots */}
    //   <div className="flex justify-center mt-8 space-x-2">
    //     {Array.from({ length: totalPages }, (_, index) => (
    //       <span
    //         key={index}
    //         className={`h-4 w-4 rounded-full ${index === currentPage ? 'bg-pink-500' : 'bg-gray-400'}`}
    //         onClick={() => handlePageChange(index)}
    //         style={{ cursor: 'pointer' }}
    //       ></span>
    //     ))}
    //   </div>
    // </section>
    <div class="relative flex items-center justify-center h-screen bg-white">

<div className=" w-80 h-80  border-2 border-red-500 clip-path-hero" >


  <img src="/images/WhatsApp_Image_2024-09-07_at_18.15.20-removebg-preview.png" alt="Profile Image" className="relative z-20 object-cover w-80 h-80 rounded-full shadow-lg" />
  </div>
  <div class="text-left p-8 relative z-30">
    <h1 class="text-4xl font-bold text-gray-800">UI & UX Designer</h1>
    <p class="text-lg text-gray-600">I help build seamless digital experiences.</p>
  </div>
</div>

  );
};

export default Testimonials;
