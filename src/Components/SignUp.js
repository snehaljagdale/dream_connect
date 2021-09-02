import React from 'react';
import { Form, Image, Card, Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import SignupImage from '../assets/SignupImage.jpg'
import { Link } from "react-router-dom";
function SignUp() {

  return (

    <div className="d-flex flex-row justify-content-center">
      {/* SIGN UP PAGE */}

      <Card style={{ transform: "scale(1)" }} className="bg-dark text-dark ">
        <Card.Img className="signUpImage" src={SignupImage} alt="Card image"  style={{height:"100vh",width:"100vw"}}/>
        <Card.ImgOverlay  >
          <Card className="pt-3 mt-4 signUpCard" style={{ transform: "scale(1)" }} >
         
          <Form className=" m-3 ">
            <Form.Text style={{ fontSize: "20px", fontWeight: 'bold' }}>
              SIGN UP
            </Form.Text>
            <Form.Group className="mb-2 " controlId="formBasicEmail">
              <Form.Label style={{ float: "left" }}>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-2 " controlId="formBasicEmail">
              <Form.Label style={{ float: "left" }}>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile Number" />
            </Form.Group>
            <Form.Group className="mb-2 " controlId="formBasicEmail">
              <Form.Label style={{ float: "left" }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label style={{ float: "left" }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check style={{ float: "left" }} type="checkbox" label="I accept the Terms of Use." />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check style={{ float: "left" }} type="checkbox" label="Sign up for email updates." />
            </Form.Group>
            <Button className="mt-3 signUpButton" variant="danger" size="lg" >
              CREATE ACCOUNT
            </Button>
            <Form.Text className="text-muted">
              Already have an account? <Link style={{ color: "#B2002D" }} to="/signIn">Log In</Link>
            </Form.Text>
          </Form>
          </Card>
        </Card.ImgOverlay>
      </Card>

    </div>


  )
}
export default SignUp;