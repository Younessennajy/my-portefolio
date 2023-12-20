import React from 'react';
import { Link } from 'react-router-dom';
import './../style/Navbar.css';

function Navbar() {
  return (
    <>
    <div className='container'>
      <div className="logo"><Link to="/" style={{color:"#fff",textDecoration: "none"}}><span className='name'>ENNAJY</span>youness<span className='point'>.</span></Link></div>
      <nav>
        
        <ul>
            <li><Link  to="/Contact"  activeClassName="active-link" >Contact</Link></li>
              <li><Link  to="/Project"  activeClassName="active-link">Project</Link></li>
                <li><Link  to="/Service"  activeClassName="active-link">Service</Link></li>
                  <li><Link  nk to="/About"  activeClassName="active-link">About</Link></li>
        
        </ul>
    </nav>

    </div>
    </>
  )
}

export default Navbar