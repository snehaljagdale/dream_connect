import React from 'react';
import classes from './Profile.module.css'
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';



function ProfileBar() {


  return (
    <nav className={classes.ProfileBar}>
     
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
}

export default ProfileBar;
