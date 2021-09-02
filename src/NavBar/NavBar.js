import React from 'react';
import classes from './NavBar.module.css'
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';



function NavBar() {


  return (
    <nav className={classes.NavBar}>
     
      <Navigation />
      <MobileNavigation />
    </nav>
  );
}

export default NavBar;
