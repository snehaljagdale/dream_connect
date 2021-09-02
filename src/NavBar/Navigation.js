import React from 'react';
import classes from './NavBar.module.css'
import NavLinks from './NavLinks';
import dd_logo from '../assets/dd_logo.jpg';
import { Image } from 'react-bootstrap'


function Navigation() {
  return (

    <nav className={classes.Navigation}>
      <a href="/">
        <p className="d-flex DCLogo" style={{ width: "60px", height: "50px" }}>
          <Image src={dd_logo} style={{ width: "55px" }} />
          <p className="d-flex flex-column LogoText" >
            <div style={{ width: "35px", height: "20px", color: "#b2002d" }}>Dream</div>
            <div style={{ width: "35px", height: "20px", color: "#b2002d" }}>Connect</div>
          </p>
        </p>
      </a>
      <NavLinks />
    </nav>
  );
}

export default Navigation;