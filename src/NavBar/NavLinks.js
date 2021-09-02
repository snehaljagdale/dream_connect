import React from 'react';
import { motion } from 'framer-motion'



function NavLinks(props) {
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }
    return (

        
           
            <ul>
              
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.05 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/JoinMeeting">Join a Meeting</a>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.10 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/HostMeeting">Host a Meeting</a>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.20 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/SignIn">Sign in</a>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.30 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/SignUp">
                    <button type="button" class="btn btn-danger ">SIGN UP</button>
                    </a>
                </motion.li>
            </ul>

        

    );
}

export default NavLinks;