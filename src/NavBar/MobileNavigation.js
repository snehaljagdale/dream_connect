import React from 'react';
import classes from './NavBar.module.css'
import NavLinks from './NavLinks';
import { List, X } from 'react-bootstrap-icons';
import { useState } from 'react'
import dd_logo from '../assets/dd_logo.jpg';
import { Image } from 'react-bootstrap'


function MobileNavigation() {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <List className={classes.Hamburger} size={45} color='#b2002d'
        onClick={() => setOpen(!open)}
    />
    const closeIcon = <X className={classes.Hamburger} size={45} color='#b2002d'
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);
    return (

        <nav className={classes.MobileNavigation}>
            <a href="/">
                <p className="d-flex DCLogo" style={{ width: "55px", height: "50px" }}>
                    <Image src={dd_logo} style={{ width: "55px" }} />
                    <p className="d-flex flex-column LogoText" >
                        <div style={{ width: "35px", height: "20px" }}>Dream</div>
                        <div style={{ width: "35px", height: "20px" }}>Connect</div>
                    </p>
                </p>
            </a>
                {open ? closeIcon : hamburgerIcon}
                {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>


    );
}

export default MobileNavigation;