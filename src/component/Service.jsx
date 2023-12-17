import React, { useRef } from 'react';
import bullbo from './../images/bulb.png';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './../style/Service.css';
import { FaCloud, FaCode,FaArrowLeft, FaDatabase, FaReact, FaArrowRight } from 'react-icons/fa';

const Service = () => {
  const servicesData = [
    {
      logo :<FaReact />,
      title: 'React Expertise',
      description: 'I am a skilled React developer with a proven track record in constructing dynamic and responsive Single Page Applications (SPAs).',
      
    },
    {
      logo :<FaDatabase />,
      title: 'Database Design and Management',
      description: 'Designing and implementing efficient and scalable database solutions using technologies like MongoDB, MySQL, or PostgreSQL.',
    },
    {
      logo:<FaCloud />,
      title: 'Cloud Computing Services',
      description: 'As a seasoned cloud computing expert, I specialize in deploying and managing applications on leading cloud platforms such as AWS, Azure, and Google Cloud.',
    },
    {
      logo:<FaCode />,
      title: 'Deployment and DevOps',
      description: 'Setting up deployment pipelines and utilizing DevOps practices for continuous integration and delivery of web applications.',
    },
  ];
  const splideOptions = {
    type: 'loop',
    perPage: 2,
    arrows: false,
    pagination: {
      el: '.splide-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  };

  const splideRef = useRef();

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.go('-'); 
    }
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go('+'); // Go to the next slide
    }
  };

  return (
    <>
      <div className="service">
        <div className="firstside">
          <h1>My Services<span>.</span></h1>
          <p>A highly motivated full-stack developer with expertise in building robust and scalable web applications. Here are some of the services I offer:</p>
        </div>
        <button className='btn-slide' onClick={handlePrev} ><FaArrowLeft/></button>
        <div className="splide">
          <Splide options={splideOptions} ref={splideRef}>
            {servicesData.map((service, index) => (
              <SplideSlide key={index} className="service-item">
                <h2>{service.logo}</h2>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <button className='btn-slide' onClick={handleNext} ><FaArrowRight/></button>
      </div>
      <img src={bullbo} className='bullbo' alt='d'/>
    </>
  );
};

export default Service;
