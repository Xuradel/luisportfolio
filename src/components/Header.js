import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';

function script() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        })
    }

    document.querySelectorAll(".nav-link").forEach(n => n.
        addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }))
}

function navigationPC() {
    const handleClick = (anchor) => () => { 
        const id = `${anchor}-section`; 
        const element = document.getElementById(id); 
        if (element) { 
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start", 
          }); 
        } 
      }; 
    return (
        <header className="navbar">
            <h1 id="nav-title">Luis Escobar</h1>
            <nav>
                <ul>
                    <li><a href="#aboutMePage" onClick={handleClick("about")}>About</a></li>
                    <li><a href="#skillsPage" onClick={handleClick("skills")}>Skills</a></li>
                    <li><a href="#servicesPage" onClick={handleClick("services")}>Services</a></li>
                    <li><a href="#projectsPage" onClick={handleClick("projects")}>My Work</a></li>
                    <li><a href="#contactPage" onClick={handleClick("contact")}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
function navigationMobile() {
    const handleClick = (anchor) => () => { 
        const id = `${anchor}-section`; 
        const element = document.getElementById(id); 
        if (element) { 
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start", 
          }); 
        } 
      }; 
    return (
        <header className="navbar">
            <h1 id="nav-title-mobile">Luis Escobar</h1>
            <nav>
                <ul className='nav-menu'>
                    <li className='nav-item'><a href="#aboutMePage" className='nav-link' onClick={handleClick("about")}>About</a></li>
                    <li className='nav-item'><a href="#skillsPage" className='nav-link' onClick={handleClick("skills")}>Skills</a></li>
                    <li className='nav-item'><a href="#servicesPage" className='nav-link' onClick={handleClick("services")}>Services</a></li>
                    <li className='nav-item'><a href="#projectsPage" className='nav-link' onClick={handleClick("projects")}>My Work</a></li>
                    <li className='nav-item'><a href="#contactPage" className='nav-link' onClick={handleClick("contact")}>Contact</a></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}


const Header = () => {

    
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1080px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1080px)' })

    useEffect(() => {
        script()
    })

    return <div>
        {isDesktopOrLaptop && navigationPC()}
        {isTabletOrMobile && navigationMobile()}
    </div>
}


export default Header;