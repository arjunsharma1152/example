import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="direction-column">
      <div className="header">
        <Link to="/">
          <img
            id="awes-logo1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXPkS0A3dHiEnoy6TEfnAEzhTbFvIZNyCig&usqp=CAU"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </Link>
        <div>
          <span id="red">ARMY PUBLIC SCHOOL</span>
          <span id="blue"> BAREILLY CANTONMENT</span>
        </div>
        <img
          id="awes-logo2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXPkS0A3dHiEnoy6TEfnAEzhTbFvIZNyCig&usqp=CAU"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </div>
      <div id="hr-line" />
    </div>
  );
};

export default Header;
