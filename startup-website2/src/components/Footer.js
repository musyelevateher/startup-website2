import React from 'react';
import './Footer.css'; 
import Book from '../Collections/book.svg';
import Instagram from '../Collections/insta(2).svg';
import Twitter from '../Collections/tweet.svg';
import PII from '../Collections/pi.svg';
import Social from '../Collections/soc.svg';
import Whats from '../Collections/whats.svg';
import Youtube from '../Collections/youtube.svg';
import All from '../Collections/ALL.png';


const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer-right">
          <img src={Book}alt="" />
<img src={Instagram} alt="" />
<img src={Twitter}alt="" />
<img src={PII}alt="" />
<img src={Social} alt="" />
<img src={Whats} alt="" />
<img src={Youtube}alt="" />
    </div>
      <div className="footer-left">
        <img src={All}alt="" />
        </div>
      
    </div>
    
  );
    
}
 
export default Footer;