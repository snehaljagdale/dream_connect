import React from 'react';
import { Container,Card, Col, Row, Accordion, Button, Media } from 'react-bootstrap'
import Oval from '../assets/Oval.png'
function Profile() {

    return (

        <Container  fluid  >

            {/* Profile */}
          
           <div >
            <Row className="m-3">
                
                <Col lg={2} md={2} className="profileCol"><img width={100} height={100} className="mr-3" src={Oval} alt="Generic placeholder" /></Col>
                <Col md={6} className="text-left d-flex align-items-center" ><h3>Ray Manson</h3> </Col>
                <Col className="text-left d-flex align-items-center">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>






            {/* PERSONAL */}
            <Row className="m-3" style={{ backgroundColor: "#ECEAEA" }}>
                <Col className="profileCol">Personal</Col>
            </Row>
            <Row className="m-3">
                <Col className="profileCol">Phone </Col>
                <Col className="profileCol">Not set</Col>
                <Col className="profileCol" >
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Add Phone Number
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="profileCol">Langage </Col>
                <Col className="profileCol">English</Col>
                <Col className="profileCol" >
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="profileCol">Time Zone </Col>
                <Col className="profileCol">(GMT+5:30) India</Col>
                <Col className="profileCol">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="profileCol">Date Format</Col>
                <Col className="profileCol">mm/dd/yyyy     Example: 06/15/2021</Col>
                <Col className="profileCol">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>


            {/* MEETING */}
            <Row className="m-3" style={{ backgroundColor: "#ECEAEA" }}>
                <Col className="profileCol">Meeting</Col>
            </Row>
            <Row className="m-3">
                <Col lg={4} md={4} sm={3} className="profileCol">Personal Meeting ID</Col>
                <Col lg={4} md={4} sm={5} className="profileCol">*** *** *123   https://web.zoom.us/abdjfkfj234fkfho2sd4gyu7       </Col>
                <Col className="profileCol">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="profileCol">Host Key</Col>
                <Col className="profileCol">******     </Col>
                <Col className="profileCol">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>


            {/* SIGN IN */}
            <Row className="m-3" style={{ backgroundColor: "#ECEAEA" }}>
                <Col className="profileCol">Sign IN</Col>
            </Row>
            <Row className="m-3">
                <Col className="profileCol">Sign-In Email</Col>
                <Col className="profileCol">abc***@xyz.com      </Col>
                <Col className="profileCol">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>
            <Row className="m-3">
                <Col className="profileCol">Linked Accounts</Col>
                <Col className="profileCol">Google </Col>
                <Col className="profileCol">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Button} className="p-0 profileCol" variant="link" eventKey="0">
                            Edit
                        </Accordion.Toggle>
                        {/* <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse> */}
                    </Accordion>
                </Col>
            </Row>
            </div>
        </Container>

    )
}
export default Profile;