import React, { useEffect, useState  } from 'react';
import { useTranslation } from 'react-i18next';

const Projects = ({id}) => {

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const [projects, setProjects] = useState([]);
   useEffect(() => {
    fetch('https://66a93a86613eced4eba4d9e7.mockapi.io/api/projects/projects')
      .then((response) => response.json()) 
      .then((data) => {
        setProjects(data); 
          console.log(data , 'projects')

      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <section id={id} className={` dark:bg-custom-radial  py-16 px-8 ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>

     
      <div className="text-center mb-12 flex justify-center items-center  mb-12 relative inline-block">
          <div className=' mt-4'>
            {/* <h2 className=" text-pink-500 text-xl font-bold text-[50px]">{t('aboutMe')}</h2> */}
            <svg  className="w-48 h-8 md:w-[100%] md:h-[100%]" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
            <path className='opacity-[20%] inline-block' d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#D718D0" fill="transparent" stroke-width="3" />
            </svg>      </div>


          <h1 className="absolute z-100 text-black dark:text-white opacity-[20%]  md:text-[65px] text-[40px] font-bold">
          {t('projectTitle')}
          </h1>
        </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="text-center">
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg object-cover w-full h-72"
            />
            <h3 className="text-black dark:text-white text-xl font-bold mt-4">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

