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
    <section id={id} className={`bg-custom-dark py-16 px-8 ${isArabic ? 'arabic-font' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>

      <div className="text-center mb-12">
        <h2 className="text-pink-500 text-xl font-bold mb-2">{t('projectTitle')}</h2>
        <h1 className="text-white text-3xl font-bold">
          {t('sneakPeek')}
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
            <h3 className="text-white text-xl font-bold mt-4">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

