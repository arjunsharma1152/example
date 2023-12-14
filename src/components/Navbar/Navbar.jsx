import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import SubNav from '../SubNav/SubNav';
import React, { useState } from 'react';
import { navbarItems } from '../../data/navbar-items';

const Navbar = () => {

    const location = useLocation();

    return (
        <nav>
            <ul className='navbar'>
                {navbarItems.map((item, index) => (
                    <li key={index} className={location.pathname === item.to ? 'active' : ''}>
                        <Link to={item.to}>
                            {item.name}
                        </Link>
                        <SubNav sublinks={item.sublinks} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Navbar