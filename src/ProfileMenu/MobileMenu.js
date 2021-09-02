import React from 'react';
import classes from './Profile.module.css'
import ProfileLinks from './ProfileLinks';
import {List, X} from 'react-bootstrap-icons';
import {useState} from 'react'


function MobileMenu() {    
    const [menuopen,setMenuopen] = useState(false);

    const hamburgerIcon = <List className={classes.Hamburger} size={45} color='#b2002d'
    onClick={()=> setMenuopen(!menuopen)}
     />
    const closeIcon = <X className={classes.Hamburger} size={45} color='#b2002d'
    onClick={()=> setMenuopen(!menuopen)}
     />

     const closeMobileMenuBar = ()=> setMenuopen(false);
    return (

        <nav className={classes.MobileMenu}>
             
            {menuopen ? closeIcon : hamburgerIcon}
            {menuopen && <ProfileLinks isMobileMenu={true} closeMobileMenuBar={closeMobileMenuBar}/>}
        </nav>


    );
}

export default MobileMenu;