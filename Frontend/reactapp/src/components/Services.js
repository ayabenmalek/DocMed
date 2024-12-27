import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = () => {
  const services = [
    {
      title: 'Medical Research',
      description: 'Access in-depth research on various medical topics to stay informed and up-to-date.',
      icon: 'fas fa-microscope', // Font Awesome icon class
    },
    {
      title: 'Read Articles',
      description: 'Explore articles written by professionals to gain insight into various health subjects.',
      icon: 'fas fa-file-medical-alt',
    },
    {
      title: 'Enroll in Courses',
      description: 'Join courses to expand your knowledge on medical and health-related fields.',
      icon: 'fas fa-book-open',
    },
    {
      title: 'Find Specialists',
      description: 'Search for experienced medical specialists across different fields and regions.',
      icon: 'fas fa-user-md',
    },
  
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="flex flex-row justify-center gap-8 max-w-80% mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-cblue bg-opacity-20 backdrop-blur-md shadow-lg p-6 rounded-lg w-64 text-center transform  transition-transform duration-300 "
          >
            <i className={`${service.icon} text-4xl text-cblue mb-4`}></i>
            <h3 className="text-xl font-semibold text-cblue mb-2">{service.title}</h3>
            <p className="text-cblack">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;