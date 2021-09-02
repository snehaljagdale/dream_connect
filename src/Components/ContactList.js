import React from 'react';
import { Container, Col, Row, Image, Media, Dropdown, ButtonGroup } from 'react-bootstrap'
import Oval from '../assets/Oval.png'
function ContactList() {

  return (

    <Container className="m-3" fluid>
      <h5 className="text-left ml-5">Contact</h5> <hr />
      <Row>
        <Col className="contactCol">
          <Media className="d-flex align-items-center">
            <img
              width={64}
              height={64}
              className="mr-3"
              src={Oval}
              alt="Generic placeholder"
            />
            <Media.Body className="mx-5 mx-md-2  d-flex align-items-center ">
              <h5 pl-xs-0>Ray Manson</h5>
              <Dropdown as={ButtonGroup} style={{position:"absolute", right:"2rem"}}>
                <Dropdown.Toggle split variant="danger" id="dropdown-split-basic"/>

                <Dropdown.Menu>
                  <Dropdown.Item className="dropdownItem" href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item className="dropdownItem" href="#/action-2">Share</Dropdown.Item>
                  <Dropdown.Item className="dropdownItem" href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Media.Body>
          </Media>

        </Col>
        {/* <Col className="contactCol">Anne Marie</Col> */}
      </Row>
    </Container>

  )
}
export default ContactList;