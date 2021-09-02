import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';



function ProfileLinks(props) {
   
    const animateFrom = { opacity: 0, x: -100 }
    const animateTo = { opacity: 1, x: 0 }
    return (

        
           
            <ul className="List" style={{zIndex:"1"}}>
              
                
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.10 }}>
                    <h6 className="text-dark">PERSONAL</h6>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.10 }}
                    onClick={() => props.isMobileMenu && props.closeMobileMenuBar()}>
                    <Link className="mx-0 px-0 "
                    to="/">
                    Profile
                    </Link>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.10 }}
                    onClick={() => props.isMobileMenu && props.closeMobileMenuBar()}>
                   <Link to="/Meetings">
                    Meetings
                    </Link>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.10 }}
                    onClick={() => props.isMobileMenu && props.closeMobileMenuBar()}>
                    <Link to="/ContactList">
                    Contact List
                    </Link>
                </motion.li>
            </ul>

        

    );
}

export default ProfileLinks;