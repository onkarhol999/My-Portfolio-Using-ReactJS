import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash, BsEnvelope } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
    const [navbarblur, setNavbarBlur] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setNavbarBlur(window.scrollY >= 20);
        };
        
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const showMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
        ham[0].classList.toggle("showNavbar");
    };

    const hideMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    };

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}> 
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>OH</h1>
            
            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>
                <li onClick={hideMenu}><Link to="/contact"><BsEnvelope /> Contact Me</Link></li>
                <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument /> Resume</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
