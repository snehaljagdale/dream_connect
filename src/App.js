import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ProfileManagement from './ProfileMenu/ProfileManagement';
import Homepage from './Components/Homepage';
import NavBar from './NavBar/NavBar';
import LeaveMeeting from './Components/LeaveMeeting';
import EndCall from './Components/EndCall';
import VideoApp from './VideoApp';
import { ContextProvider } from './videoComponents/SocketContext'
import './styles.css'

import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      {/* NAVBAR 1 */}
      <Router>
        <Navbar expand="lg" variant="dark" style={{ height: 40 + 'px' }}>
          <Nav className="mr-auto backColor firstNavbar d-flex flex-row ">
            <Nav.Link className="text-light mx-3" href="#demo">REQUEST DEMO</Nav.Link>
            {/* <NavDropdown title="RESOURCES" id="basic-nav-dropdown" className="text-light" >
            </NavDropdown> */}
            <Nav.Link  ><Link className="text-light" to="/profileManagement">SUPPORT</Link></Nav.Link>
          </Nav>
        </Navbar>

        {/* NAVBAR 2 */}


        <NavBar />




        <Switch>
          <Route path="/joinMeeting">
            {/* <JoinMeeting /> */}
            <ContextProvider>
              <VideoApp />
            </ContextProvider>
          </Route>
          <Route path="/hostMeeting">
            {/* <HostMeeting /> */}
            <ContextProvider>
              <VideoApp />
            </ContextProvider>
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/profileManagement">
            <ProfileManagement />
          </Route>
          <Route path="/leaveMeeting">
            <LeaveMeeting />
          </Route>
          <Route path="/endCall">
            <EndCall />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>

        </Switch>
      </Router>









    </div >
  );
}

export default App;
