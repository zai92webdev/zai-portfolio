import React, { useState, useEffect } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';
import { Link } from "react-scroll";

function Navbar() {

    const [toggle, setToggle] = useState(false);
    const [show, handleShow] = useState(false);

    const handler = () => {
        setToggle(!toggle)
    }

        useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false)
            })
            return () => {
                window.removeEventListener('scroll')
            }
        }, [])


    return (
        <div className={`navbar ${show && 'navbar__black'}`} >
            <div className='navbar__container'>

            <div className='navbar__logo'>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-110} duration={500}
                        style={{textDecoration:'none',cursor:'pointer'}} className='navbar__logo__first'>MY PORTFOLIO </Link>
            </div>

            <div className='navbar__icon'>
                <IconButton onClick={handler} >
                    <MenuIcon />
                </IconButton>
            </div>
            <div className={!toggle ? "overlay" : "overlay overlay__active"}></div>

            <ul className={!toggle ? "navbar__link" : "navbar__link toggleActive"}>

                    <div className='navbar__iconCLose'>
                        <IconButton onClick={handler} style={{right:'0'}}>
                            <ClearIcon />
                        </IconButton>
                    </div>


                    <Link className='navbar__linkList' 
                        activeClass="active" to="home" spy={true} smooth={true} offset={-340} duration={500}
                    >
                        Home
                    </Link>
                    <Link className='navbar__linkList' 
                        activeClass="active" to="about" spy={true} smooth={true} offset={-340} duration={500}
                    >
                        About
                    </Link>
                    <Link className='navbar__linkList'
                        activeClass="active" to="mywork" spy={true} smooth={true} offset={-70} duration={500}
                    >
                        My Works
                    </Link>
                    <Link className='navbar__linkList'
                        activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}
                    >
                        Contact
                    </Link>
            </ul>
            </div>
            
        </div >
    )
}

export default Navbar
