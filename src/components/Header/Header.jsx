import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Header = () => {
    
  useEffect(()=> {
    Aos.init();
  },[]);
  
    return (
        <div className="header" data-aos="fade-down" data-aos-duration="1000">
            <Link to="/"><img className="awes-logo" src='src/assets/aws.png' data-aos="fade-right" data-aos-duration="1000"/></Link>
            <div className='direction-column'>
                <div><span id="red">ARMY PUBLIC SCHOOL</span> BAREILLY CANTONMENT</div>
                <div><img id="g20" src='src/assets/G20-logo.png' /></div>
            </div>
            <img className="awes-logo" src='src/assets/aws.png' data-aos="fade-left" data-aos-duration="1000" />
        </div>
    )
}

export default Header