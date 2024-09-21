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
    <section  id={id}
    ref={ref} className={`bg-white dark:bg-custom-dark flex justify-center items-center py-16 px-8 font-hind opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out md:opacity-100 md:translate-y-0 ${isArabic ? 'arabic-font' : ''} ${inView ? 'animate-fadeIn' : 'opacity-0'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <div  className="bg-custom-dark dark:bg-white  max-w-6xl mx-auto flex flex-col md:flex-row items-center h-auto md:h-[704px]">
       
        <div className="px-4 sm:px-8 md:px-16 h-full w-full md:w-1/2 flex flex-col justify-center text-left py-8 md:py-0">
          <h2 className="text-pink-500 text-xl font-bold mb-7 border-b-4 border-gray-400 inline-block w-max">
          {t('aboutMe')}
          </h2>
          <h1 className={`" text-white dark:text-black  text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-relaxed" ${isArabic ? 'text-right' : 'text-left'}`}>
           {t('quote')}
          </h1>
          <p className={`" text-gray-700 dark:text-gray-700 mb-4 text-[18px] sm:text-[20px]" ${isArabic ? 'text-right' : 'text-left'}`}>
           {t('informationAboutMe')}
          </p>
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
