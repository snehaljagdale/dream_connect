import React from 'react';
import { Card, Form } from 'react-bootstrap'
import LoginImage from '../assets/LoginImage.png'
import { Button } from 'react-bootstrap'
function SignIn() {

  return (
    <div>
      {/* LOGIN PAGE */}
      <Card style={{ transform: "scale(1)" }} className="bg-dark text-dark ">
        <Card.Img className="signInImage" src={LoginImage} alt="Card image"  style={{height:"100vh"}}/>
        <Card.ImgOverlay  >
          <Card className="pt-4 mt-5 signInCard" style={{ transform: "scale(1)" }} >
            <Card.Title>SIGN IN</Card.Title>
            <Form>
              <Form.Group className="m-4 " controlId="formBasicEmail">
                <Form.Label style={{ float: "left" }}>Email/Mobile Number</Form.Label>
                <Form.Control type="Email/text" placeholder="Enter Email/Mobile Number" />
              </Form.Group>
              <Form.Group className="m-4 " controlId="formBasicEmail">
                <Form.Label style={{ float: "left" }}>Password/OTP</Form.Label>
                <Form.Control type="text" placeholder="Enter Password/OTP" />
              </Form.Group>
              <Form.Group className="m-4 " controlId="formBasicCheckbox">
                <Form.Check style={{ float: "left" }} type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className="signInButton" variant="danger" size="lg" >
                SIGN IN
              </Button>
            </Form>
          </Card>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}
export default SignIn;