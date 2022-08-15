import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarContent } from './NavbarContent';

import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-wrapper">
            <ul className="navbar-items">
            {NavbarContent.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                );
            })}
            </ul>
        </nav>
    );
};

export default Navbar;