import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap'

function LeaveMeeting() {

  return (
    <Jumbotron fluid className="mb-0 hostMeeting" style={{ height: "100vh", backgroundColor: "#F3E4E8" }}>
      <Container className="d-flex justify-content-center align-items-center">
        <div className=" Meetings m-5">
          <h4 className="text-left">You have left the meeting</h4>

        </div>
      </Container>
    </Jumbotron>
  )
}
export default LeaveMeeting;