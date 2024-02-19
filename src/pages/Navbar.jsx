import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
    const [navActive,setNavActive]=useState(false);

    const toggleNav=()=>{
        setNavActive(!navActive);
    };
    
    const closeMenu=()=>{
        setNavActive(false);
    };

    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth<=500){
                closeMenu();
            }
        };
        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize",handleResize);
        };
    }, []);


    useEffect(()=>{
        if(window.innerWidth<=1200){
            closeMenu();
        }
    }, []);
  return (
    <>
        <nav className={`navbar ${navActive ? "active" : ""}`}>
        <h4>sumit.dev</h4>
        <a className={`nav-hamburger ${navActive ? "active" : ''}`} onClick={toggleNav}>
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
        </a>

        <div className={`navbar-items ${navActive ? "active": ""}`}>
        <ul>
            <li>
            <Link
            onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
            Home
            </Link>

            <Link
            onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
            About
            </Link>

            <Link
            onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
            Skills
            </Link>
            <Link
            onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >

            Portfolio
            </Link>

            <Link
            onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
            Contact
            </Link>

            </li>
        </ul>

        </div>

        </nav>
    </>
  )
}

export default Navbar
