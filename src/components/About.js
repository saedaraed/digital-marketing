import '../index.css';
import profileImage from '../assets/WhatsApp Image 2024-09-07 at 18.22.11.jpeg';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const About = ({ id }) => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section id={id}
      ref={ref} className={`bg-white dark:bg-custom-radial   flex justify-center items-center py-16 px-8 border-none  ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="bg-custom-dark dark:bg-white  max-w-6xl mx-auto flex flex-col md:flex-row items-center h-auto md:h-[704px]">

        <div className="px-4 sm:px-8 md:px-16 h-full w-full md:w-1/2 flex flex-col justify-center text-left py-8 md:py-0">
          {/* <h2 className="text-pink-500 text-xl font-bold mb-7 border-b-4 border-gray-400 inline-block w-max">
            {t('aboutMe')}
          </h2> */}
          <div className="text-center flex  items-center  mb-12 relative inline-block">
            <div className=' mt-4'>     
               {/* <h2 className=" text-pink-500 text-xl font-bold text-[50px]">{t('aboutMe')}</h2> */}
              <svg width="100%" height="100%" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                <path className='opacity-[20%]' d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#D718D0" fill="transparent" stroke-width="3" />
              </svg>      </div>


            <h1 className="absolute z-100 text-white dark:text-black opacity-[20%] dark:opacity-[20%] text-[65px] font-bold">
              {t('aboutMe')}
            </h1>
          </div>
          <h1 className={`" text-white dark:text-black  text-2xl sm:text-3xl font-bold mb-4 leading-relaxed" ${isArabic ? 'text-right md:text-3xl '   : 'text-left md:text-4xl '}`}>
            {t('quote')}
          </h1>
          <p className={`" text-gray-700 dark:text-gray-700 mb-8 text-[18px] sm:text-[20px]" ${isArabic ? 'text-right' : 'text-left'}`}>
            {t('informationAboutMe')}
          </p>
          <div>     <a
            href="/cv/Saed updated cv.pdf"
            download="Saed updated cv.pdf"
            className="bg-pink-500 text-white font-medium py-2 px-4 rounded-lg inline-block cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('downloadCv')}
          </a></div>

        </div>

        <div className="relative h-64 md:h-full w-full md:w-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className={`object-cover w-full h-full ${isArabic ? '.custom-clip-ar' : 'custom-clip'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
