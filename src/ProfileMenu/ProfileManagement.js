import React from 'react';

import Profile from '../Components/Profile';
import Meetings from '../Components/Meetings';
import ContactList from '../Components/ContactList';
import ProfileBar from './ProfileBar';


import { Col, Row, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function profileManagement() {

    return (
        <div className="d-flex" style={{position:"relative", top:"60px"}}>
            
           <Router>
           


            <ProfileBar />

            
                <Switch>
                <Route path="/Meetings">
                    <Meetings />
                </Route>
                <Route path="/ContactList">
                    <ContactList />
                </Route>
                 <Route path="/">
                    <Profile />
                </Route>

              

                </Switch>
          </Router>
      </div>
    )
}
export default profileManagement;