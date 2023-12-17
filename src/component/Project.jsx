import pro1 from '../images/Pro1.png';
import pro2 from './../images/bg-explosion.png';
import pro3 from './../images/bg-explosion.png';
import pro4 from './../images/bg-explosion.png';

import React from 'react';
import './../style/Project.css';

const Project = () => {
  const pro = [
    { img: pro1, alt: 'Project 1',url :'https://logiciel-de-caisse-pour-les-restaurant.vercel.app' },
    { img: pro2, alt: 'Project 2',url :'/pro2'  },
    { img: pro3, alt: 'Project 3' ,url :'/pro3' },
    { img: pro4, alt: 'Project 4' ,url :'/pro4' },
  ];

  return (
    <>
      <div className="contenaireProject">
        <div className="asideProject">
          <h2>My Work</h2>
          <p>A highly motivated full-stack developer with a strong foundation in both front-end and back-end technologies. Experienced in building responsive and dynamic web applications, particularly for e-commerce platforms.</p>
        </div>
        <div className="project">
          {pro.map((item, index) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
              <li>
                <img src={item.img} alt={item.alt} className='img_project' />
              </li>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
