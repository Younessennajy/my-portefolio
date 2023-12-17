
import React, { useState } from 'react';
import './../style/About.css';
import { FaReact,FaHtml5,FaCss3, FaPhp, FaBootstrap, FaDatabase, FaLaravel } from 'react-icons/fa';
import imgd from './../images/IMG-20231126-WA0012.jpg-removebg-preview - Copie (2).png'

const Portfolio = () => {
  const [selectsection, setSelectedSection] = useState('skills');
  
  const Frontend =[
    {name:'html',icon:<FaHtml5 />},
    {name:'css',icon:<FaCss3 />},
    {name:'react',icon:<FaReact />},
    {name:'bootstrapp',icon:<FaBootstrap />},
  ];
  const Backend =[
    {name:'Php',icon:<FaPhp />},
    {name:'Laravel',icon:<FaLaravel />},
    {name:'database',icon:<FaDatabase />},
    
  ]
  const databases =[
    {name:'SQL'},
    {name:'MongoDB'},
  ]
  const skills =[
    {name : 'jira'},
    {name : 'UML'},
    {name : 'Apache'},
    {name : 'Docker '},
    {name : 'SonarQube'},
    {name : 'Office Skills '},
    {name : 'Git, GitHub, GitLab'},
    {name : 'Project Management Methodology'},
    
  ]
  return (
    <>
    <div className="portfolio">
        <div className="side1">
          <h4>Embarking on a&nbsp; <span>Full-Stack</span> Journey</h4>
            <p>A highly motivated front-end developer with a substantial background in responsive web design for e-commerce platforms. Demonstrates a track record of successfully creating interactive and user-centric web designs that are adaptable to varying scales and requirements.</p>
            <div className="stats">
              <div className='stat'>  
                <p>2+</p>
                <h5>YEARS OF EXPERIENCE</h5>
              </div>
              <div className='stat'>
                <p>5+</p>
                <h5>FINISHED PROJECTS</h5>
                  
              </div>
              <div className='stat'>
                <p>5+</p>
                <h5>BEST WEBSITE AWARD</h5>
              </div>
          </div>
        </div>
        <div className="side2">
          <nav className='nav'>
            <div onClick={()=>setSelectedSection('skills')} className={selectsection ==='skills'?'active':''}>Skills</div>
            <div onClick={()=>setSelectedSection('experience')} className={selectsection ==='experience'?'active':''}>Experience</div>
            <div onClick={()=>setSelectedSection('OtherSkills')} className={selectsection ==='OtherSkills'?'active':''}>Other skills</div>
          </nav>
            {selectsection ==='skills'?(<div className="skills">
                  <ul>
                    <caption>Frontend Development -</caption>
                    {Frontend.map((item)=>(
                              <li key={item.name}>{item.icon}</li>
                    ))}
                  </ul>
                  <ul>
                  <caption>Backend Development -  </caption>
                    {Backend.map((item)=>(
                              <li key={item.name}>{item.icon}</li>
                    ))}
                  </ul>
                  <ul>
                    <caption>Database Management -   </caption>
                    {databases.map((item,index)=>(
                              <li key={index}>{item.name}</li>
                    ))}
                  </ul>
            </div>):null}
            
            {selectsection ==='experience'?
            <div className='experience'>
              <h2>Not found</h2>
            </div>
              :null
              }
            {selectsection ==='OtherSkills'?
            <div className="OtherSkills">
            {skills.map((item,index)=>(
              <li key={index}>{item.name}</li>
            ))}
            </div>
              :null
              }
            
      </div>
    </div>
              <img src={imgd} alt='fv' className='myimg'/>

   </>
  );
}

export default Portfolio;
