import react from "react";
import './Service.css';
import Basic from '../Collections/basic.svg';
import Plus from '../Collections/plus.svg';
import Pro from '../Collections/pro.svg';

const Service = () => {
  return ( 
    <div className="service">
      <img src={Basic} alt="" />
      <img src={Plus} alt="" />
      <img src={Pro} alt="" />

    </div>
   );
}
 
export default Service;