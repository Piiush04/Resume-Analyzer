import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/home.css';

const Navbar = () => {
    const location = useLocation();

    const myMenuFunction = () => {
        const menuBtn = document.getElementById("myNavMenu"); // fixed ID
        if (menuBtn.className === 'nav_menu') {
            menuBtn.className += ' responsive';
        } else {
            menuBtn.className = 'nav_menu';
        }
    };

    return (
        <nav id="header">            
            <div className="nav_menu" id="myNavMenu">
                <ul className="nav_menu_list">
                    <li className="nav_list">
                        <Link className="nav_link" to="/">Home</Link>
                        <div className={location.pathname === '/' ? 'circle' : ''}></div>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="/about">About</Link>
                        <div className={location.pathname === '/about' ? 'circle' : ''}></div>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="/jobSeeker">Job Seeker</Link>
                        <div className={location.pathname === '/jobSeeker' ? 'circle' : ''}></div>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="/recruiter">Recruiter</Link>
                        <div className={location.pathname === '/recruiter' ? 'circle' : ''}></div>
                    </li>
                </ul>
            </div>
            <div className="nav_menu_btn">
                <i className="uil uil-bars" onClick= {myMenuFunction}></i>
            </div>
        </nav>
    );
};

export default Navbar;
