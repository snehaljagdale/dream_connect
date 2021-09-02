import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

function EndCall() {

    return (
      <Jumbotron fluid className="mb-0 hostMeeting" style={{ height: "100vh", backgroundColor: "#F3E4E8" }}>
        <Container className="d-flex justify-content-center align-items-center">
      <div className=" Meetings m-5">
        <h4 className="text-left">Meetings has ended</h4>
       
      </div>
      </Container>
      </Jumbotron>
    )
}
export default EndCall;