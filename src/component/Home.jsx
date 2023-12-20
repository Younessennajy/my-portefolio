import React, {  useState } from 'react'
import Social from './social';
import './../style/Home.css'
import pres_img from './../images/IMG-20231126-WA0012.jpg-removebg-preview.png';
import {FaDownload} from 'react-icons/fa';

function Home() {

const handleDownload = () => {
  const cvFileName = 'cv.pdf';
  const link = document.createElement('a');
  link.href = `${process.env.PUBLIC_URL}/${cvFileName}`;
  link.download = cvFileName;
  link.click();
};
  const [aff,setaff] =useState('');
  const [text] =useState('Greetings ! I\'m ENNAJY, a dedicated Full Stack Developer on a mission to craft immersive and innovative digital experiences. With a strong foundation in both front-end and back-end technologies, I bring a unique blend of creativity and technical prowess to every project.');
  const handleecrire =()=>{
    let i =-1;
    if(text.length>i){
        const intervalId = setInterval(function () {
          i = i + 1;
          setaff((pre)=>pre+text[i]);
            if (i === text.length-1) {
                clearInterval(intervalId);
            }
        }, 20); 
    }
  } 
  return (
    <div className="img_left" onLoad={handleecrire}>
      <div className="home_contenaire">
        <div className="description_home">
          <h2>Crafting Digital Excellence<br/><span>Full Stack Maestro</span></h2>
          <p>{aff}</p>
          <button id='cv-btn' onClick={handleDownload}><FaDownload/>  CV</button>

        </div>
        <div className="img">
          <img src={pres_img} alt="img2" />
        </div>
        <div className="social">
          <Social/>
        </div>
      </div>
    </div>
  )
}

export default Home