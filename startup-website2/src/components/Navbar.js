import React, { useState } from "react";
import './Navbar.css';
import Vector from '../Collections/rainbow.png';
import Burger from '../Collections/harmburger(2).svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return ( 
    <nav className='navbar'>
      <div className="logo-section">
        <img src={Vector} alt="Logo" className="vec" />
        <h1 className="begin">Start</h1>
      </div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#">HOME</a>
        <a href="#">PORTFOLIO</a>
        <a href="#">SERVICES</a>
        <a href="#">CONTACT</a>
      </div>
      <img 
        src={Burger} 
        alt="Menu" 
        className='bur hamburger' 
        onClick={() => setOpen(!open)} 
      />
    </nav>
  );
}

export default Navbar;