import React from 'react';
import classes from './Profile.module.css'
import ProfileLinks from './ProfileLinks';



function DesktopMenu() {
  return (
    
    <nav className={classes.DesktopMenu}>
         
       <ProfileLinks />
    </nav> 
  );
}

export default DesktopMenu;