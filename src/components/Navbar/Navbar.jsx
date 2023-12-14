import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import SubNav from "../SubNav/SubNav";
import { navbarItems } from "../../data/navbar-items";
import { useState } from "react";
import Menu from "../../assets/menu.svg";
import Cross from "../../assets/cross.svg";

const Navbar = () => {
  const location = useLocation();

  const [hamActive, setHamActive] = useState(false);

  return (
    <nav>
      <ul className="navbar">
        {navbarItems.map((item, index) => (
          <li
            key={index}
            className={location.pathname === item.to ? "active" : ""}
          >
            <Link to={item.to}>{item.name}</Link>
            <SubNav sublinks={item.sublinks} />
          </li>
        ))}
      </ul>

      <img
        src={hamActive ? Cross : Menu}
        alt="menu"
        className="hamburger"
        onClick={() => setHamActive((prev) => !prev)}
      />
      <div className={`mobile-navbar ${hamActive ? "active" : ""}`}>
        <h2>MENU</h2>
        <ul>
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.name}</Link>
              <SubNav sublinks={item.sublinks} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
