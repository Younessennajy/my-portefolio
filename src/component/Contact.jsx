import React from 'react';
import './../style/Contact.css';

const Contact = () => {

  
  const handlesubmit=()=>{
    window.confirm('Kindly contact me at younessennajy30@gmail.com or 0649962806 :)')

  }
  return (
    <div className="contact">
      <h1>Let’s  <span className='connect'>connect.</span> </h1>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder='Name' required />
            <input type="email" id="email" name="email" placeholder='Email' required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" rows="4" placeholder='Message' required></textarea>
        </div>

        <button type="submit" >Let's talk</button>
      </form>
    </div>
  );
}

export default Contact;
