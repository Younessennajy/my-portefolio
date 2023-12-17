import React from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './../style/social.css';


function Social() {
  return (
    <div className="links"> 
      <ul>
        <li><a href="www.linkedin.com/in/youness-ennajy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://github.com/Younessennajy" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li><a href="mailto:younessennajy30@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a></li>
        <li><a href="https://www.instagram.com/ennajy_code/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        <li><a href="https://wa.me/0649962806" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
      </ul>
    </div>
  );
}

export default Social;

